<template>
    <div class="qr-scanner nq-blue-bg">
        <video ref="video" muted autoplay playsinline width="600" height="600"></video>
        <div ref="overlay" class="overlay" :class="{ inactive: cameraAccessFailed }">
            <slot>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 238">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"/>
                </svg>
            </slot>
        </div>
        <button class="nq-button-s inverse cancel-button" @click="_cancel">{{ $t('Cancel') }}</button>

        <transition name="fade">
            <div v-if="cameraAccessFailed" class="camera-access-failed">
                <div v-if="!hasCamera" class="camera-access-failed-warning">
                    {{ $t('Your device does not have an accessible camera.') }}
                </div>
                <div v-else>
                    <div class="camera-access-failed-warning">
                        {{ $t('Unblock the camera for this website to scan QR codes.') }}
                    </div>
                    <div v-if="isMobileOrTablet">
                        <div v-if="browser === 'chrome'">
                            <I18n path="Click on {icon} and go to\nSettings > Site Settings > Camera" tag="div"
                                class="access-denied-instructions">
                                <template #icon>
                                    <span class="browser-menu-icon"></span>
                                </template>
                            </I18n>
                            <div class="browser-menu-arrow"></div>
                        </div>
                        <div v-else class="access-denied-instructions">
                            <!-- Mobile safari and mobile firefox ask on every camera request -->
                            {{ $t('Grant camera access when asked.') }}
                        </div>
                    </div>
                    <div v-else class="access-denied-instructions">
                        <I18n v-if="browser === 'safari'"
                            path="Click on {safari} and go to\nSettings for this Website > Camera" tag="div">
                            <template #safari>
                                <b>Safari</b>
                            </template>
                        </I18n>
                        <I18n v-else path="Click on {icon} in the URL bar." tag="div">
                            <template #icon>
                                <span v-if="browser === 'chrome'" class="camera-icon-chrome"></span>
                                <span v-else-if="browser === 'firefox'" class="camera-icon-firefox"></span>
                                <span v-else>{{ $t('the camera icon') }}</span>
                            </template>
                        </I18n>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
// TODO could use IntersectionObserver api to start scanner when visible

import { Component, Mixins, Prop } from 'vue-property-decorator';
import QrScannerLib from 'qr-scanner';
import { BrowserDetection } from '@nimiq/utils';
import I18nMixin from '../i18n/I18nMixin';
import I18n from '../i18n/I18n.vue';

@Component({
    name: 'QrScanner',
    components: { I18n },
})
class QrScanner extends Mixins(I18nMixin) {
    @Prop({ type: Number, default: 7000 }) public reportFrequency!: number;
    @Prop(Function) public validate?: (scanResult: string) => boolean;

    private cameraAccessFailed: boolean = false;
    private hasCamera: boolean = true;
    private isMobileOrTablet: boolean = BrowserDetection.isMobile();
    private browser: BrowserDetection.Browser = BrowserDetection.detectBrowser();
    private _scanner!: QrScannerLib;
    private _lastResult?: string;
    private _lastResultTime: number = 0;
    private _cameraRetryTimer?: number;

    private async mounted() {
        // Use file-loader to copy the worker to dist and set the path to where the file is located. Instead of a normal
        // import use a dynamic import at creation time of a QrScanner to give apps the opportunity to adapt the base
        // path via setAssetPublicPath before the path is being determined. Using webpackMode: 'eager' to avoid creating
        // an additional chunk and to let the import resolve immediately.
        ({ default: QrScannerLib.WORKER_PATH } = await import(
            /* webpackMode: 'eager' */
            '!!file-loader?name=[name].[hash:8].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js'));

        this.repositionOverlay = this.repositionOverlay.bind(this);
        const $video = this.$refs.video as HTMLVideoElement;
        this._scanner = new QrScannerLib($video, (result) => this._onResult(result));
        $video.addEventListener('canplay', () => $video.classList.add('ready'));
        window.addEventListener('resize', this.repositionOverlay);

        QrScannerLib.hasCamera().then((hasCamera) => this.hasCamera = hasCamera);

        if (this._isVisible()) {
            this.start();
            this.repositionOverlay();
        }
    }

    private destroyed() {
        this.stop();
        this._scanner.destroy();
        window.removeEventListener('resize', this.repositionOverlay);
    }

    public async start() {
        try {
            await this._scanner.start();
            this.cameraAccessFailed = false;
            if (this._cameraRetryTimer) {
                window.clearInterval(this._cameraRetryTimer);
                this._cameraRetryTimer = null;
            }
        } catch (e) {
            this.cameraAccessFailed = true;
            this.$emit(QrScanner.Events.ERROR, e);
            if (!this._cameraRetryTimer) {
                this._cameraRetryTimer = window.setInterval(() => this.start(), 3000);
            }
        }
        return !this.cameraAccessFailed;
    }

    public stop() {
        this._scanner.stop();
        if (this._cameraRetryTimer) {
            window.clearInterval(this._cameraRetryTimer);
            this._cameraRetryTimer = null;
        }
    }

    public setGrayscaleWeights(red, green, blue) {
        this._scanner.setGrayscaleWeights(red, green, blue);
    }

    public setInversionMode(inversionMode: QrScannerLib.InversionMode) {
        this._scanner.setInversionMode(inversionMode);
    }

    public repositionOverlay() {
        requestAnimationFrame(() => {
            const scannerHeight = (this.$el as HTMLElement).offsetHeight;
            const scannerWidth = (this.$el as HTMLElement).offsetWidth;
            const smallerDimension = Math.min(scannerHeight, scannerWidth);
            if (smallerDimension === 0) return; // component not visible or destroyed
            const overlaySize = Math.ceil(2 / 3 * smallerDimension);
            // not always the accurate size of the sourceRect for QR detection in QrScannerLib (e.g. if video is
            // landscape and screen portrait) but looks nicer in the UI.
            const $qrOverlay = this.$refs.overlay as HTMLElement;
            $qrOverlay.style.width = overlaySize + 'px';
            $qrOverlay.style.height = overlaySize + 'px';
            $qrOverlay.style.top = ((scannerHeight - overlaySize) / 2) + 'px';
            $qrOverlay.style.left = ((scannerWidth - overlaySize) / 2) + 'px';
        });
    }

    private _isVisible() {
        return (this.$el as HTMLElement).offsetWidth > 0;
    }

    private _cancel() {
        this.$emit(QrScanner.Events.CANCEL);
    }

    private _onResult(result) {
        if ((result === this._lastResult && Date.now() - this._lastResultTime < this.reportFrequency)
            || (this.validate && !this.validate(result))) return;
        this._lastResult = result;
        this._lastResultTime = Date.now();
        this.$emit(QrScanner.Events.RESULT, result);
    }
}

namespace QrScanner { // tslint:disable-line no-namespace
    export const enum Events {
        RESULT = 'result',
        CANCEL = 'cancel',
        ERROR = 'error',
    }
}

export default QrScanner;
</script>

<style scoped>
    .qr-scanner {
        position: relative;
        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transition: .7s;
    }

    .fade-leave,
    .fade-enter-to {
        opacity: 1;
        transition: .7s;
    }

    video {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        display: block;
        opacity: 0;
        transition: opacity .3s;
    }

    video.ready {
        opacity: 1;
    }

    .overlay {
        position: absolute;
    }

    .overlay:not(.inactive) {
        animation: overlay-animation 400ms infinite alternate ease-in-out;
    }

    @keyframes overlay-animation {
        from {
            transform: scale(.98);
        }
        to {
            transform: scale(1.01);
        }
    }

    .overlay svg {
        width: 100%;
        height: 100%;
        stroke: var(--nimiq-gold);
    }

    .overlay.inactive svg {
        stroke: rgba(255, 255, 255, .4);
    }

    .cancel-button {
        background: white;
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        color: var(--nimiq-blue);
    }

    .cancel-button:hover,
    .cancel-button:focus,
    .cancel-button:active {
        background: #EFF0F2; /* Indigo 7% */
    }

    .camera-access-failed {
        color: white;
        text-align: center;
        font-size: 2rem;
    }

    .camera-access-failed-warning {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30rem;
        max-width: 80%;
        font-weight: bold;
    }

    .access-denied-instructions {
        opacity: .7;
        position: absolute;
        left: 50%;
        bottom: 9rem;
        width: calc(100% - 4rem);
        transform: translateX(-50%);
        line-height: 1.7;
        white-space: pre-line;
    }

    .browser-menu-icon,
    .camera-icon-chrome,
    .camera-icon-firefox {
        display: inline-block;
        background-repeat: no-repeat;
        margin: 0 .2em;
        position: relative;
        top: .2em;
    }

    .browser-menu-icon {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 3 15"><circle cx="1.5" cy="1.5" r="1.5"/><circle cx="1.5" cy="7.5" r="1.5"/><circle cx="1.5" cy="13.5" r="1.5"/></svg>');
        height: 1em;
        width: calc(1em * (3 / 15));
    }

    .camera-icon-chrome {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12"><path fill="%23FF5C48" fill-rule="evenodd" d="M7.8 5h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.9.8H7.8c-.4 0-.8-.4-.8-.9V5.8c0-.4.4-.8.8-.8zm4.04 4.85c.2-.2.2-.5 0-.7l-.64-.65.65-.65c.2-.2.2-.5 0-.7a.5.5 0 0 0-.7 0l-.66.64-.63-.64a.5.5 0 0 0-.71 0c-.2.2-.2.5 0 .7l.64.65-.64.65c-.2.2-.2.5 0 .7a.48.48 0 0 0 .7 0l.64-.64.65.64a.48.48 0 0 0 .7 0z" clip-rule="evenodd"/><path fill="white" d="M6 5.8C6 4.8 6.8 4 7.8 4H12V.5L9.5 3V.5C9.5.2 9.3 0 9 0H.5C.2 0 0 .2 0 .5v7c0 .3.2.5.5.5H6V5.8z"/></svg>');
        height: .8em;
        width: calc(.8em * (14 / 12));
    }

    .camera-icon-firefox {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 14 14"><path d="M13.5.3c-.4-.4-.9-.4-1.3 0L9.7 2.8c-.1-.5-.5-.9-1-.9H1c-.6 0-1 .4-1 1v7.7c0 .5.4.9.9 1l-.6.6c-.4.4-.4.9 0 1.3l.6.3c.2 0 .5-.1.6-.3l12-12a1 1 0 0 0 0-1.2zM13.7 11.6V3.5l-4 4.1 4 4zM8.7 11.6c.6 0 1-.4 1-1v-3l-4 4h3z"/></svg>');
        height: .9em;
        width: .9em;
    }

    .browser-menu-arrow {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 23"><path stroke="%230CA6FE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V3M2 9l7-7 7 7"/></svg>');
        animation: arrow-bounce 400ms infinite alternate ease-in-out;
        position: fixed;
        top: 3rem;
        right: 2.2rem;
        width: 2rem;
        height: calc(2rem / (18 / 23)); /* calculate from aspect ratio and width */
    }

    @keyframes arrow-bounce {
        to {
            transform: translateY(-1rem);
        }
    }
</style>
