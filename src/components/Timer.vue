<template>
    <a class="timer" href="javascript:void(0)"
        @focus="detailsShown = true" @mouseenter="detailsShown = true"
        @blur="detailsShown = false" @mouseleave="!_isFocused() && (detailsShown = false)"
        :class="{ 'details-shown': detailsShown, 'little-time-left': _progress >= .75 }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <circle ref="time-circle" class="time-circle" cx="50%" cy="50%" :r="radius.currentValue"
                    :stroke-dasharray="`${_timeCircleInfo.length} ${_timeCircleInfo.gap}`"
                    :stroke-dashoffset="_timeCircleInfo.offset"
                    :stroke-width="_timeCircleInfo.strokeWidth"></circle>
            <circle class="filler-circle" cx="50%" cy="50%" :r="radius.currentValue"
                    :stroke-dasharray="`${_fillerCircleInfo.length} ${_fillerCircleInfo.gap}`"
                    :stroke-dashoffset="_fillerCircleInfo.offset"
                    :stroke-width="_fillerCircleInfo.strokeWidth"></circle>

            <transition name="transition-fade">
                <g v-if="!detailsShown" class="info-exclamation-icon">
                    <rect x="12" y="9" width="2" height="2" rx="1" />
                    <rect x="12" y="12.5" width="2" height="4.5" rx="1" />
                </g>
                <text v-else class="countdown" x="50%" y="50%">
                    {{ _timeLeft | _toSimplifiedTime(false) }}
                </text>
            </transition>
        </svg>
        <transition>
            <div v-if="detailsShown" class="tooltip">
                This offer expires in {{ _timeLeft | _toSimplifiedTime(true) }}.
            </div>
        </transition>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Tweenable } from '@nimiq/utils';

interface CircleInfo {
    length: number;
    lengthWithLineCaps: number;
    gap: number;
    offset: number;
    strokeWidth: number;
}

function _toSimplifiedTime(millis: number, includeUnit?: true): string;
function _toSimplifiedTime(millis: number, includeUnit: false): number;
function _toSimplifiedTime(millis: number, includeUnit: boolean = true): number | string {
    // find appropriate unit, starting with second
    let resultTime = millis / 1000;
    let resultUnit = 'second';
    const timeSteps = [
        { unit: 'minute', factor: 60 },
        { unit: 'hour', factor: 60 },
        { unit: 'day', factor: 24 },
    ];
    for (const { unit, factor } of timeSteps) {
        if (resultTime / factor < 1) {
            break;
        } else {
            resultTime /= factor;
            resultUnit = unit;
        }
    }

    resultTime = Math.round(resultTime);
    if (!includeUnit) {
        return resultTime;
    } else {
        return `${resultTime} ${resultUnit}${resultTime !== 1 ? 's' : ''}`;
    }
}

@Component({
    filters: { _toSimplifiedTime },
})
export default class Timer extends Vue {
    @Prop(Number)
    public startTime?: number;

    @Prop(Number)
    public endTime?: number;

    @Prop({
        type: Number,
        default: 2,
    })
    public strokeWidth!: number;

    public synchronize(referenceTime: number) {
        this.timeOffset = referenceTime - Date.now();
    }

    private timeOffset: number = 0;
    private sampledTime: number = 0;
    private detailsShown: boolean = false;
    // While the radius r of the circle and the values stroke-dasharray, stroke-dashoffset and stroke-width that depend
    // on the radius can be transitioned via css, the behavior on value update during an ongoing transition is not
    // consistent (e.g. time update while animating on user hover or quick hover and unhover). Therefore animate via JS.
    private radius: Tweenable = new Tweenable(8);
    private fullCircleLength: number = 0;
    private requestAnimationFrameId: number | null = null;

    private destroyed() {
        cancelAnimationFrame(this.requestAnimationFrameId);
    }

    private get _totalTime(): number {
        if (this.startTime === undefined || this.endTime === undefined) {
            return 0;
        } else {
            return Math.max(0, this.endTime - this.startTime);
        }
    }

    private get _timeLeft(): number {
        if (this.startTime === undefined || this.endTime === undefined) {
            return 0;
        } else {
            return Math.max(0, Math.min(this._totalTime, this.endTime - this.sampledTime));
        }
    }

    private get _progress(): number {
        if (this.startTime === undefined || this.endTime === undefined || this._totalTime === 0) {
            return 0;
        } else {
            return 1 - this._timeLeft / this._totalTime;
        }
    }

    private get _timeCircleInfo(): CircleInfo {
        // Have a max length to make it more recognizable that this is a timer by never rendering a full circle.
        // The rounded stroke ending rendered with radius strokeWidth/2 does not count towards the stroke length,
        // therefore to get the desired gap of 1.5 strokeWidths, we use 2.5 strokeWidths.
        const maxLength = this.fullCircleLength - 2.5 * this.strokeWidth;
        const length = Math.min(maxLength, (1 - this._progress) * this.fullCircleLength);
        const lengthWithLineCaps = length + this.strokeWidth; // add line caps with strokeWidth/2 radius
        const gap = this.fullCircleLength - length;
        // The path grows clockwise starting on the right side. Offset by 90 degrees and gap to let path start with gap
        // and end on top.
        const offset = this.fullCircleLength / 4 - gap;
        return { length, lengthWithLineCaps, gap, offset, strokeWidth: this.strokeWidth };
    }

    private get _fillerCircleInfo(): CircleInfo {
        // Filler circle should be rendered in the gap left by the time circle with a margin of strokeWidth. If there
        // is not enough space, compensate by reducing the filler circle stroke width.
        const availableSpace = this.fullCircleLength - this._timeCircleInfo.lengthWithLineCaps - 2 * this.strokeWidth;
        const lengthWithLineCaps = Math.max(0, availableSpace);
        const strokeWidth = Math.min(this.strokeWidth, lengthWithLineCaps);
        const length = Math.max(0, lengthWithLineCaps - strokeWidth); // subtract rounded line caps
        const gap = this.fullCircleLength - length;
        const offset = this.fullCircleLength / 4 // rotate by 90 degrees
            - this.strokeWidth / 2 // skip rounded line cap of time circle
            - this.strokeWidth // margin
            - strokeWidth / 2; // account for our own line cap
        return { length, lengthWithLineCaps, gap, offset, strokeWidth };
    }

    private get _updateInterval(): number {
        const baseSize = 26;
        const timerSize = (this.$el as HTMLAnchorElement).offsetWidth || baseSize;
        const scaleFactor = timerSize / baseSize;
        const circleLengthPixels = this.fullCircleLength * scaleFactor;
        const steps = circleLengthPixels * 3; // update every .33 pixel change for smooth transitions
        const minInterval = 1000 / 60; // up to 60 fps
        const maxInterval = this.detailsShown && this._timeLeft < 60000
            ? 500 // when counting down seconds update more regularly
            : Number.POSITIVE_INFINITY;
        return Math.max(minInterval, Math.min(maxInterval, this._totalTime / steps));
    }

    @Watch('detailsShown', { immediate: true })
    private _setRadius() {
        this.radius.tweenTo(this.detailsShown ? 12 : 8, 300);
        this._rerender();
    }

    @Watch('startTime', { immediate: true })
    @Watch('endTime', { immediate: true })
    @Watch('timeOffset', { immediate: true })
    private _rerender() {
        if (this.requestAnimationFrameId !== null) return;
        this.requestAnimationFrameId = requestAnimationFrame(() => {
            const sampledTime = Date.now() + this.timeOffset;

            // update values if necessary
            if (!this.sampledTime || sampledTime - this.sampledTime >= this._updateInterval
                || !this.radius.finished) { // animating radius
                this.sampledTime = sampledTime;
                this.fullCircleLength = 2 * Math.PI * this.radius.currentValue;
            }

            this.requestAnimationFrameId = null;
            if (this._timeLeft === 0 && this.radius.finished) return;
            this._rerender();
        });
    }

    private _isFocused(): boolean {
        return document.activeElement === this.$el;
    }
}
</script>

<style scoped>
    .timer {
        display: block;
        width: 3.25rem;
        position: relative;
        outline: none;
    }

    /* for setting height automatically depending on width */
    .timer::before {
        content: '';
        padding-top: 100%;
        display: block;
    }

    svg {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        fill: none;
        stroke-linecap: round;
    }

    circle {
        stroke: var(--nimiq-blue);
        transition: stroke .3s var(--nimiq-ease), opacity .3s var(--nimiq-ease);
    }

    .filler-circle {
        opacity: .2;
    }

    .time-circle {
        opacity: .3;
    }

    .details-shown .time-circle {
        stroke: var(--nimiq-light-blue);
        opacity: 1;
    }

    .little-time-left .time-circle {
        stroke: var(--nimiq-orange);
        opacity: 1;
    }

    .info-exclamation-icon {
        fill: var(--nimiq-blue);
        opacity: .4;
        transform-origin: center;
        transition: fill .3s var(--nimiq-ease), opacity .3s var(--nimiq-ease), transform .3s var(--nimiq-ease);
    }

    .little-time-left .info-exclamation-icon {
        fill: var(--nimiq-orange);
        opacity: 1;
        transform: rotate(180deg); /* turn info icon into an exclamation mark */
    }

    .countdown {
        font-size: 12px; /* relative to svg viewBox */
        font-weight: bold;
        text-anchor: middle;
        dominant-baseline: central;
        fill: var(--nimiq-light-blue);
        transition: fill .3s var(--nimiq-ease);
    }

    .little-time-left .countdown {
        fill: var(--nimiq-orange);
    }

    .transition-fade-enter-active,
    .transition-fade-leave-active {
        transition: opacity .3s var(--nimiq-ease);
    }

    .transition-fade-enter,
    .transition-fade-leave-to {
        opacity: 0 !important;
    }

    .tooltip {
        position: absolute;
        top: calc(100% + 1rem);
        right: calc(50% - 3rem);
        width: 17rem;
        height: 8rem;
        padding: 2rem 1.25rem .875rem 1.5rem;
        font-size: 1.75rem;
        line-height: 1.5;
        font-weight: 600;
        color: white;
        z-index: 1;
        pointer-events: none;
        background-image: url('data:image/svg+xml,<svg viewBox="0 0 136 63.9" xmlns="http://www.w3.org/2000/svg"><path d="M136 59.9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-47a4 4 0 0 1 4-4h99a4 4 0 0 0 3.2-1.7l4.6-6.6c.6-.8 1.8-.8 2.4 0l4.6 6.6a4 4 0 0 0 3.3 1.7H132a4 4 0 0 1 4 4z" fill="url(%23a)"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-190 0 0 -64.999 136 70.9)" gradientUnits="userSpaceOnUse"><stop stop-color="%23260133" offset="0"/><stop stop-color="%231F2348" offset="1"/></radialGradient></defs></svg>');
        transition: opacity .3s var(--nimiq-ease), transform .3s var(--nimiq-ease);
    }

    .tooltip.v-enter,
    .tooltip.v-leave-to {
        opacity: 0;
        transform: translateY(-.5rem);
    }
</style>
