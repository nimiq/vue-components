<template>
    <div class="qr-scanner">
        <transition name="fade">
            <div v-if="state === 'intro'" class="intro">
                <div class="scanner-illustration"></div>
                <slot name="intro-header">
                    <h1 class="nq-h1">QR Code Scanner</h1>
                    <h2 class="nq-h2">Use your camera to scan a QR code</h2>
                </slot>
                <button @click="_enableScanner" class="nq-button">Enable Camera</button>
                <a @click="_cancel" class="nq-link">Cancel</a>
                <a href="javascript:void(0)" class="nq-icon cancel-circle" @click="_cancel"></a>
            </div>
        </transition>
        <transition name="fade">
            <div v-show="state === 'scanner'" class="scanner">
                <video ref="video" muted autoplay playsinline width="600" height="600"></video>
                <div ref="overlay" class="overlay">
                    <slot name="overlay"></slot>
                </div>
                <div v-if="accessDenied" class="access-denied">
                    Failed to access camera stream.
                </div>
                <a href="javascript:void(0)" class="nq-icon cancel-circle" @click="_cancel"></a>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
// TODO could use IntersectionObserver api to start scanner when visible
// TODO detect whether device has a camera with enumerateMediaDevices and whether permission was granted (check labels)

import { Component, Prop, Vue } from 'vue-property-decorator';
import QrScannerLib from 'qr-scanner';

// Declare qr worker as asset using file-loader which copies the file to dist and binds the path to QrScannerWorker
import QrScannerWorker from '!!file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScannerLib.WORKER_PATH = QrScannerWorker;

@Component
class QrScanner extends Vue {
    public static get enabled() {
        return !!localStorage[QrScanner.STORAGE_KEY_SCANNER_ENABLED];
    }

    public static set enabled(enabled) {
        if (enabled) {
            localStorage[QrScanner.STORAGE_KEY_SCANNER_ENABLED] = true;
        } else {
            delete localStorage[QrScanner.STORAGE_KEY_SCANNER_ENABLED];
        }
    }

    @Prop({ type: Number, default: 7000 }) public reportFrequency!: number;
    @Prop(Function) public validate?: (scanResult: string) => boolean;

    private state: QrScanner.State = 'intro' as QrScanner.State.INTRO;
    private accessDenied: boolean = false;
    private _scanner!: QrScannerLib;
    private _lastResult?: string;
    private _lastResultTime: number = 0;

    private created() {
        if (QrScanner.enabled) {
            this.state = QrScanner.State.SCANNER;
        }
    }

    private mounted() {
        this.repositionOverlay = this.repositionOverlay.bind(this);
        const $video = this.$refs.video as HTMLVideoElement;
        this._scanner = new QrScannerLib($video, (result) => this._onResult(result));
        $video.addEventListener('canplay', () => $video.classList.add('ready'));
        window.addEventListener('resize', this.repositionOverlay);

        if (QrScanner.enabled && this._isVisible()) {
            this.start();
            this.repositionOverlay();
        }
    }

    private destroyed() {
        this._scanner.destroy();
        window.removeEventListener('resize', this.repositionOverlay);
    }

    public async start() {
        if (!QrScanner.enabled) return; // user should enable scanner on intro page first
        try {
            await this._scanner.start();
            this.accessDenied = false;
            return true;
        } catch (e) {
            QrScanner.enabled = false;
            this.accessDenied = true;
            this.$emit(QrScanner.Events.ERROR, e);
            return false;
        }
    }

    public stop() {
        this._scanner.stop();
    }

    public setGrayscaleWeights(red, green, blue) {
        this._scanner.setGrayscaleWeights(red, green, blue);
    }

    public setInversionMode(inversionMode: QrScannerLib.InversionMode) {
        this._scanner.setInversionMode(inversionMode);
    }

    public repositionOverlay() {
        requestAnimationFrame(() => {
            if (this.state !== QrScanner.State.SCANNER) return;
            const scannerHeight = this.$el.offsetHeight;
            const scannerWidth = this.$el.offsetWidth;
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
        return this.$el.offsetWidth > 0;
    }

    private async _enableScanner() {
        QrScanner.enabled = true;
        await this.start();
        this.state = QrScanner.State.SCANNER;
        this.repositionOverlay();
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

    export const enum State {
        INTRO = 'intro',
        SCANNER = 'scanner',
    }

    export const STORAGE_KEY_SCANNER_ENABLED = 'qr-scanner-enabled';
}

export default QrScanner;
</script>

<style scoped>
    .qr-scanner {
        position: relative;
        overflow: hidden;
    }

    .qr-scanner > * {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: calc(2 * var(--nimiq-size, 8px));
    }

    .intro .nq-h1 {
        margin-bottom: 0;
    }

    .scanner-illustration {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="416" height="552"><g fill="none" fill-rule="nonzero"><path fill="%23D1AA8F" d="M110 551.2s52-196.3 55.8-206.1a492.8 492.8 0 0 1 19.6-43.9C235.4 284 261 200 261 200l-98.6-74.3-96.6 426.2 44.2-.6zm149.9-297.9s5.3 14.4 19 15.2c1 0 4 .4 4-.6.8-12.3-3.6-42.3-3.6-42.3l-23.3 3.8 3.9 24z"/><path fill="%23F1F1F2" d="M282.8 268.6l-7.7-6.3c-.4-8.3.3-12.5 4.8-12.7 2 0 3.7 19.5 2.9 19"/><path fill="%23E4BA9B" d="M265.7 226.6s11.2 8.7 24 5.2c1-.3 3.7-1.5 3.3-2.4-4.8-11.5-11.4-36.3-12.4-37.3-6.6-6-35.6-2.5-35.6-2.5l20.7 37z"/><path fill="%23F1F1F2" d="M293 228.6l-10.8-5c-2.8-9.6-3.5-14.9 1.4-16 2.1-.5 9.8 20.3 9.4 21"/><path fill="%23E4BA9B" d="M277.8 179.3c5.3.4 13.1 1.6 20.8-7.8.6-.8 2-3 1.2-3.5-9.7-6-29-21.1-29-21.1l-16.7-1.3L243 164s25.2 14.4 34.8 15.2"/><path fill="%23F1F1F2" d="M300 168.5c-1.4.9-8.8-3.9-8.8-3.9-8.6-6.3-12.7-10.4-10.7-10 .3 0 19.7 13.7 19.5 13.9"/><path fill="%23D1AA8F" d="M275 70.5c-10.6-9.6-22.6 6.6-34.4 20.8a64.3 64.3 0 0 0-5.6 13.3l19 17s34-39.3 21-51.1"/><path fill="%23231F20" d="M169.3 249.3c-8.7 0-15.8-7-15.8-15.5V16.5c0-8.6 7.1-15.5 15.8-15.5H253c8.7 0 15.8 7 15.8 15.5v217.3c0 5.7-3.2 10.8-8 13.4a16 16 0 0 1-7.8 2h-83.6z"/><path fill="white" d="M159 215.6h103v-181H159"/><path fill="white" d="M230.3 143.3h2V141h-2v2.2zm-11.4-31.8h15.8V95.7h-15.8v15.7zm-31.7 0h15.7V95.7h-15.7v15.8zm0 31.8h15.7v-15.8h-15.7v15.8zm27.1-40.7l2.2-.2v-2.3h-2.2V98h2.2v-2.1H212v4.3h2.2v2.5l-2.2-.1v2.3h2.2v2.2H212v2.3h-2.4v2.2h-2.2v-6.8h2.2v-9h-2.2V98h-2.2v4.5l2.2.1v2.2h-2.3v9h-4.4v2.4h4.3v2.1h-6.8v-2.2h-2.2V114H194v4.4h-2.3V114H187v4.4h4.5v2.4h4.5v2.2h-9v2.3h9v-2.3h2.1l.2 2.3h6.8v4.5h2.2v4.6h-2.2v2.2h4.4v2.4h-4.4v4.4h4.5v-2.2h2.4v2.2h4.4l.1-2.3h4.4V139h-4.5v-2.4h-2.3v-4.4h4.6v2.2h2.3v2.3l2.4-.2v7h2.1v-4.5h4.6v-2.3h2.2v2.2h2.2v-6.7h-2.2v2.2h-4.6v2.1h-4.3l-.2-2.1h2.2v-4.6h-2v-2.2h2V123h2.3v-2.2h2.4v4.5h-2.3v4.5h4.4v-2.1l2.3-.2v-2.1l-2.2-.1v-4.5h2.2v-4.5l-2.3-.1v-2.2H228l-.1 2.3h-2.2v-2.3h-6.8v4.5h-4.5v2.4H212v2.2h-2.4v-4.7h2.3v-4.5h4.5v-9h-2.3v-2.2h.1zm-36.3 50h66v-66h-66v66z"/><path fill="black" d="M191.6 118.3h2.3v-4.4h2.2v2.2h2.2v2.2h6.8V116h-4.3v-2.3h4.4v-9h2.3v6.7h2.2v-2.2h2.4v2.2h2.1v-2.2h-2.1V107h2.1v-2.2h2.3v9H212v4.5h-2.4v-2.1h-2.1v-2.3h-2.2v2.2h2.2l-.1 2.2-2.1.1c-.3 2.6-.4 2.4 2 2.2v-2.3h2.4v4.6h2.4v2.2h2.2V123h2.2v2.3h-2.3v2.3h-2.1v2.1h4.5v-2h2.2v4.5h-4.6v4.4H212v4.6h-2.3v2.2h-4.5V139h4.4v-2.3h-4.4v-2.3h2.2v-4.5l-2.2-.1v-4.5h-6.8l-.2-2.4h4.6v-2h-4.4l-.2 2h-2.1v.1-2.2h-4.5v-2.4z"/><path fill="black" d="M189.4 141h11.2v-11.3h-11.2V141zm-2.2 2.3h15.7v-15.8h-15.7v15.8zm2.2-34h11.2V98h-11.2v11.3zm-2.2 2.2h15.7V95.7h-15.7v15.8zm34-2.2h11.2V98h-11.2v11.3zm-2.3 2.1h15.8V95.7h-15.8v15.8zm6.7 11.5v4.5h-2.1v2.2h2v4.6h-2.1l.1 2.2-2.4.1v-2.2h-2.2V132h2.1v-6.8H219v-2.3h2.2v2.2h2.3V123h2.2z"/><path fill="black" d="M225.6 116.1h2.2l.1-2.2h4.5v2.1l2.2.1v4.6h-2.2v-2.3h-2.2v2.3H228v2.2h-2.3v-6.8zm-2 20.3h4.3v-2.2h4.5v-2.1h2.3v6.7h-2.2v-2.3h-2.3v2.3h-4.5v4.5h-2.2v-7z"/><path fill="black" d="M232.4 120.7v4.4l2.2.1v2.2l-2.2.1v-2.2h-2.1v2.1l2 .1v2.1H228v-4.4h2.3v-4.5h2.2zm-24.9-16v-2.1l-2.2-.1V98h2.2v-2.3h2.2v9h-2.2zm6.8 31.7h2.2v2.4h4.5v2.2h-4.4v2.2H212V141h4.4v-2.2h-2.2v-2.4zM196 122.8v2.3h-9V123h9zm-4.5-4.6h-4.5V114h4.5v4.4zm27.3.1V114h6.7v2.2H221v2.2h-2.2zm-4.6-18.2H212v-4.4h4.4V98h-2.2v2.2zm0 20.6v-2.4h4.6v2.4h-4.7zm0-20.6h2.2v2.3l-2.2.2v-2.5zm16 43.1h2v-2.1h-2v2.1z"/><path fill="black" d="M212.1 122.9v-2.2h2.2v2.2h-2.2zm2.2-20.3v2.2H212v-2.3l2.3.1z"/><path fill="white" d="M214.3 122.9v-2.2h4.6v-2.4h2.1V116h4.7v6.8h-2.2v2.2H221v-2.2h-2.2v2.2h2.1v6.8l-2.1.1v-4.5h-2.3v2h-4.4v-2h2.1v-2.3h2.3v-2.3h-2.3zm0 13.5v2.4h2.2v2.2h-4.4v-4.5h2.2zm-16-13.6l.1-2h4.5v2h-4.7zm9.1-4.6v2.3c-2.4.3-2.3.4-2-2.1l2-.2z"/><path fill="white" d="M212 122.9h2.3v2.2h-2.2v-2.2zm-2.3-4.6h-2.3l.1-2.2h2.2v2.2zM207.5 116.1h-2.2v-2.2h2.2v2.2zm4.6-6.8h2.2v2.1H212v-2.1zm-20.4 29.5h6.6V132h-6.7v6.7zm-2.2 2.2h11.2v-11.3h-11.3V141zm2.2-34h6.6v-6.8h-6.6v6.7zm-2.2 2.2h11.2V98h-11.2v11.2zm34-2.3h6.7v-6.7h-6.7v6.7zm-2.3 2.4h11.2V98h-11.2v11.3zm11.3 11.4h-2.2v-2.3h2.2v2.3zm0 6.8l-2.2-.1v-2.2h2.1v2.3z"/><path fill="black" d="M191.6 138.8h6.7V132h-6.7m0-25.2h6.7v-6.7h-6.7m31.9 6.7h6.6v-6.7h-6.6"/><path fill="%239EF553" d="M178.6 86.6h-.6v18h2.5V89H197v-2.4h-18.4zm65.4 1.2v16.8h-2.5V89H225v-2.5h19v1.2zm-66 63.6v-16.8h2.5V150H197v2.5h-19v-1.2zm64.8 1.2h1.2v-18h-2.5V150H225v2.5h17.8z"/><path fill="%23333" d="M222 231.6a11 11 0 1 1-22 0 11 11 0 0 1 22 0"/><path fill="%23E4BA9B" d="M144.7 96.6s11.8 4 16.3 12.4c2.1 4 7.8 13.5 3.3 41.6-1.6 9.6-10.3 34.3-10.8 37.1-1 4.7.1 8 .1 8s6.6 11.3 14.9 29.9c5.6 12.6 7.8 42.3 2.2 59.7-1 2.9-14.3 21.6-20.2 37-17 43.8-69.2 229.3-69.2 229.3L0 551s67.5-168.6 82.8-204.6c19-44.6 21.5-66.4 22.2-78.5 1-17.8 4.4-56.6 5.6-61.7 1.6-6.7 6.5-12.6 9-17.6 19-37.6 21.3-61.8 21.3-61.8l3.8-30.2z"/><path fill="%23F1F1F2" d="M144.8 96.7s.2-.4.4.2c.6 1.6 1.9 6.6 1.8 14.4-.2 19.1-6 16.1-6 16.1l3.8-30.7z"/></g></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        animation: from-bottom 1500ms;
        top: calc(19 * var(--nimiq-size, 8px));
        bottom: calc(-8 * var(--nimiq-size, 8px));
        width: 100%;
    }

    @keyframes from-bottom {
        from {
            transform: translateY(20%);
        }
    }

    .intro .nq-button {
        margin-top: auto;
    }

    .intro .nq-button,
    .intro .nq-link {
        animation: fade .7s 1s backwards;
        z-index: 1;
        cursor: pointer;
        text-decoration: none;
    }

    .scanner {
        background: #333;
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
        border-radius: calc(1.25 * var(--nimiq-size, 8px));
        box-shadow: 0 0 0 50vmax rgba(0,0,0,0.7);
        overflow: hidden;
    }

    .cancel-circle {
        width: calc(3 * var(--nimiq-size, 8px));
        height: calc(3 * var(--nimiq-size, 8px));
        background-size: 135%;
        position: absolute;
        top: calc(2 * var(--nimiq-size, 8px));
        right: calc(2 * var(--nimiq-size, 8px));
        opacity: 0.2;
        transition: opacity .3s ease, transform .45s ease;
    }

    .scanner .cancel-circle {
        filter: brightness(100);
        opacity: .3;
    }

    .cancel-circle::after {
        /* enlarged click area */
        content: '';
        display: block;
        position: absolute;
        top: calc(-1.5 * var(--nimiq-size, 8px));
        right: calc(-1.5 * var(--nimiq-size, 8px));
        bottom: calc(-1.5 * var(--nimiq-size, 8px));
        left: calc(-1.5 * var(--nimiq-size, 8px));
    }

    .cancel-circle:focus,
    .cancel-circle:hover {
        opacity: .4;
        transform: scale(1.06);
    }

    .cancel-circle:focus {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: .7;
        outline: none;
    }

    .access-denied {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 18.75rem;
    }
</style>