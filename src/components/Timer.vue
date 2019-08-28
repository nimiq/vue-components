<template>
    <a class="timer" href="javascript:void(0)"
        @focus="detailsShown = true" @mouseenter="detailsShown = true"
        @blur="detailsShown = false" @mouseleave="!_isFocused() && (detailsShown = false)"
        :class="{ 'details-shown': detailsShown, 'little-time-left': _progress >= .75 }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <circle class="time-circle" cx="50%" cy="50%" :r="_radius"
                    :stroke-dasharray="`${_timeCircleInfo.length} ${_timeCircleInfo.gap}`"
                    :stroke-dashoffset="_timeCircleInfo.offset"
                    :stroke-width="_timeCircleInfo.strokeWidth"></circle>
            <circle class="filler-circle" cx="50%" cy="50%" :r="_radius"
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
    private timerInterval: number | null = null;
    private detailsShown: boolean = false;

    private destroyed() {
        clearInterval(this.timerInterval);
    }

    private get _timeLeft(): number {
        if (this.startTime === undefined || this.endTime === undefined) {
            return 0;
        } else {
            return Math.max(0, Math.min(this.endTime - this.startTime, this.endTime - this.sampledTime));
        }
    }

    private get _progress(): number {
        const totalTime = this.endTime - this.startTime;
        if (this.startTime === undefined || this.endTime === undefined || totalTime === 0) {
            return 0;
        } else {
            return 1 - this._timeLeft / totalTime;
        }
    }

    private get _radius(): number {
        return this.detailsShown ? 12 : 8;
    }

    private get _fullCircleLength(): number {
        return 2 * Math.PI * this._radius * 0.9936; // the calculated circumference differs slightly from the generated
        // path's length returned by the browser by getTotalLength. Therefore we apply a correction factor.
    }

    private get _timeCircleInfo(): CircleInfo {
        // Have a max length to make it more recognizable that this is a timer by never rendering a full circle.
        // The rounded stroke ending rendered with radius strokeWidth/2 does not count towards the stroke length,
        // therefore to get the desired gap of 1.5 strokeWidths, we use 2.5 strokeWidths.
        const maxLength = this._fullCircleLength - 2.5 * this.strokeWidth;
        const length = Math.min(maxLength, (1 - this._progress) * this._fullCircleLength);
        const lengthWithLineCaps = length + this.strokeWidth; // add line caps with strokeWidth/2 radius
        const gap = this._fullCircleLength - length;
        // The path grows clockwise starting on the right side. Offset by 90 degrees and gap to let path start with gap
        // and end on top.
        const offset = this._fullCircleLength / 4 - gap;
        return { length, lengthWithLineCaps, gap, offset, strokeWidth: this.strokeWidth };
    }

    private get _fillerCircleInfo(): CircleInfo {
        // Filler circle should be rendered in the gap left by the time circle with a margin of strokeWidth. If there
        // is not enough space, compensate by reducing the filler circle stroke width.
        const availableSpace = this._fullCircleLength - this._timeCircleInfo.lengthWithLineCaps - 2 * this.strokeWidth;
        const lengthWithLineCaps = Math.max(0, availableSpace);
        const strokeWidth = Math.min(this.strokeWidth, lengthWithLineCaps);
        const length = Math.max(0, lengthWithLineCaps - strokeWidth); // subtract rounded line caps
        const gap = this._fullCircleLength - length;
        const offset = this._fullCircleLength / 4 // rotate by 90 degrees
            - this.strokeWidth / 2 // skip rounded line cap of time circle
            - this.strokeWidth // margin
            - strokeWidth / 2; // account for our own line cap
        return { length, lengthWithLineCaps, gap, offset, strokeWidth };
    }

    @Watch('startTime', { immediate: true })
    @Watch('endTime', { immediate: true })
    @Watch('timeOffset', { immediate: true })
    private _startTimer() {
        if (this.timerInterval !== null) return;
        this.timerInterval = window.setInterval(() => {
            this.sampledTime = Date.now() + this.timeOffset;
            if (this._timeLeft === 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        }, 300);
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
        transition: r .3s linear, stroke-dasharray .3s linear, stroke-dashoffset .3s linear, stroke-width .3s linear,
            stroke .3s var(--nimiq-ease), opacity .3s var(--nimiq-ease);
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
