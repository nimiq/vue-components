<template>
    <Tooltip class="timer"
        v-bind="{
            preferredPosition: 'bottom right',
            theme: theme === constructor.Themes.INVERSE || theme  === constructor.Themes.WHITE ? 'inverse' : 'normal',
            ...tooltipProps,
            styles: {
                width: '18.25rem',
                pointerEvents: 'none',
                ...(tooltipProps ? tooltipProps.styles : undefined),
            },
        }"
        @show="detailsShown = true"
        @hide="detailsShown = false"
        :class="{
            'time-shown': detailsShown || alwaysShowTime,
            'little-time-left': _progress >= .75,
            'inverse-theme': theme === constructor.Themes.INVERSE,
            'white-theme': theme === constructor.Themes.WHITE,
        }"
    >
        <template #trigger>
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
                    <g v-if="!detailsShown && !alwaysShowTime" class="info-exclamation-icon">
                        <rect x="12" y="9" width="2" height="2" rx="1" />
                        <rect x="12" y="12.5" width="2" height="4.5" rx="1" />
                    </g>
                    <text v-else class="countdown" x="50%" y="50%">
                        {{ _timeLeft | _toSimplifiedTime(false, maxUnit) }}
                    </text>
                </transition>
            </svg>
        </template>
        <template #default>
            <I18n path="This offer expires in {timer}.">
                <template #timer>{{ _timeLeft | _toSimplifiedTime(true, maxUnit) }}</template>
            </I18n>
        </template>
    </Tooltip>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import { Tweenable } from '@nimiq/utils';
import Tooltip from './Tooltip.vue';
import I18nMixin from '../i18n/I18nMixin';
import I18n from '../i18n/I18n.vue';

interface CircleInfo {
    length: number;
    lengthWithLineCaps: number;
    gap: number;
    offset: number;
    strokeWidth: number;
}

const TIME_STEPS = [
    { unit: 'minute', factor: 60 },
    { unit: 'hour', factor: 60 },
    { unit: 'day', factor: 24 },
];

function _toSimplifiedTime(millis: number, includeUnit?: true, maxUnit?: string): string;
function _toSimplifiedTime(millis: number, includeUnit: false, maxUnit?: string): number;
function _toSimplifiedTime(millis: number, includeUnit: boolean = true, maxUnit?: string): number | string {
    // find appropriate unit, starting with second
    let resultTime = millis / 1000;
    let resultUnit = 'second';
    for (const { unit, factor } of TIME_STEPS) {
        if (resultTime / factor < 1 || resultUnit === maxUnit) break;
        resultTime /= factor;
        resultUnit = unit;
    }

    resultTime = Math.floor(resultTime);
    if (!includeUnit) {
        return resultTime;
    } else {
        const i18nTime = {
            get second() { return I18nMixin.$t('Timer', 'second'); },
            get seconds() { return I18nMixin.$t('Timer', 'seconds'); },
            get minute() { return I18nMixin.$t('Timer', 'minute'); },
            get minutes() { return I18nMixin.$t('Timer', 'minutes'); },
            get hour() { return I18nMixin.$t('Timer', 'hour'); },
            get hours() { return I18nMixin.$t('Timer', 'hours'); },
            get day() { return I18nMixin.$t('Timer', 'day'); },
            get days() { return I18nMixin.$t('Timer', 'days'); },
        };

        resultUnit = i18nTime[`${resultUnit}${resultTime !== 1 ? 's' : ''}`];
        return `${resultTime} ${resultUnit}`;
    }
}

@Component({
    name: 'Timer',
    filters: { _toSimplifiedTime },
    components: { Tooltip, I18n },
})
class Timer extends Mixins(I18nMixin) {
    private static readonly REM_FACTOR = 8; // size of 1rem
    private static readonly BASE_SIZE = 3.25 * Timer.REM_FACTOR;
    private static readonly BASE_RADIUS = Timer.REM_FACTOR;
    private static readonly RADIUS_GROWTH_FACTOR = 1.5;

    @Prop(Number)
    public startTime?: number;

    @Prop(Number)
    public endTime?: number;

    @Prop({
        type: Boolean,
        default: true,
    })
    public alwaysShowTime!: boolean;

    @Prop({
        type: String,
        default: 'normal',
        validator: (value: any) => Object.values(Timer.Themes).includes(value),
    })
    public theme!: string;

    @Prop({
        type: Number,
        default: 2,
    })
    public strokeWidth!: number;

    @Prop(Object) public tooltipProps?: object;

    @Prop({
        type: String,
        required: false,
        validator: (value: any) => [undefined, 'second', 'minute', 'hour', 'day'].includes(value),
    })
    public maxUnit?: string;

    public synchronize(referenceTime: number) {
        this.timeOffset = referenceTime - Date.now();
    }

    private timeOffset: number = 0;
    private sampledTime: number = 0;
    private detailsShown: boolean = false;
    // While the radius r of the circle and the values stroke-dasharray, stroke-dashoffset and stroke-width that depend
    // on the radius can be transitioned via css, the behavior on value update during an ongoing transition is not
    // consistent (e.g. time update while animating on user hover or quick hover and unhover). Therefore animate via JS.
    private radius: Tweenable = new Tweenable(this.detailsShown || this.alwaysShowTime
        ? Timer.BASE_RADIUS * Timer.RADIUS_GROWTH_FACTOR
        : Timer.BASE_RADIUS);
    private fullCircleLength: number = 2 * Math.PI * this.radius.currentValue;
    private timeoutId: number | null = null;
    private updateTimeoutId: number | null = null;
    private requestAnimationFrameId: number | null = null;
    private size: number = Timer.BASE_SIZE;

    private mounted() {
        requestAnimationFrame(() => this.size = (this.$el as HTMLElement).offsetWidth); // in rAF to avoid forced reflow
        this._onResize = this._onResize.bind(this);
        window.addEventListener('resize', this._onResize);
    }

    private destroyed() {
        clearTimeout(this.timeoutId);
        clearTimeout(this.updateTimeoutId);
        cancelAnimationFrame(this.requestAnimationFrameId);
        window.removeEventListener('resize', this._onResize);
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

    private _calculateUpdateInterval(): number {
        // Not a getter / computed prop to avoid unnecessary updates when not needed.
        const scaleFactor = this.size / Timer.BASE_SIZE;
        const circleLengthPixels = this.fullCircleLength * scaleFactor;
        const steps = circleLengthPixels * 3; // update every .33 pixel change for smooth transitions
        const minInterval = 1000 / 60; // up to 60 fps
        // Constrain interval such that we don't skip time steps in the countdown for the respective time unit.
        const timeLeft = this._timeLeft;
        const totalTime = this._totalTime;
        const updatesPerTimeStep = 2; // multiple updates per time step to avoid skipping a step by a delayed interval
        let timeStep = 1000; // starting with seconds
        let maxInterval = timeStep / updatesPerTimeStep;
        for (const { factor } of TIME_STEPS) {
            const nextTimeStep = timeStep * factor;
            const nextMaxInterval = nextTimeStep / updatesPerTimeStep;
            const nextInterval = Math.min(nextMaxInterval, Math.max(minInterval, totalTime / steps));
            if ((timeLeft - nextInterval) / nextTimeStep < 1) {
                // If the time left after nextInterval can't be expressed in nextTimeStep as a value >=1, stop. We check
                // for the time after the next interval to avoid jumping for example from 70s (displayed as 1 minute)
                // directly to 50s if the interval is 20s. Note that the behavior here resembles the one in
                // _toSimplifiedTime.
                if (timeLeft / nextTimeStep > 1) {
                    // If the value before the interval is still >1 in the next time unit still allow a larger jump than
                    // at the smaller time unit but set the maxInterval such that we jump no further than where the
                    // switch to the smaller unit happens, for example jump from 70s to 60s if the interval is 20s.
                    maxInterval = timeLeft - nextTimeStep;
                }
                break;
            }
            timeStep = nextTimeStep;
            maxInterval = nextMaxInterval;
        }

        return Math.min(maxInterval, Math.max(minInterval, this._totalTime / steps));
    }

    @Watch('detailsShown', { immediate: true })
    @Watch('alwaysShowTime')
    private _setRadius() {
        this.radius.tweenTo(this.detailsShown || this.alwaysShowTime
            ? Timer.RADIUS_GROWTH_FACTOR * Timer.BASE_RADIUS
            : Timer.BASE_RADIUS, 300);
        this._rerender();
    }

    @Watch('startTime', { immediate: true })
    @Watch('endTime')
    @Watch('timeOffset')
    private _setTimer() {
        this.sampledTime = Date.now() + this.timeOffset;
        clearTimeout(this.timeoutId);
        if (this.startTime && this.endTime) {
            this.timeoutId = window.setTimeout(() => this.$emit(Timer.Events.END, this.endTime),
                this.endTime - this.sampledTime);
            this._rerender();
        }
    }

    private _rerender() {
        this.sampledTime = Date.now() + this.timeOffset;
        this.fullCircleLength = 2 * Math.PI * this.radius.currentValue;

        if (this._timeLeft === 0 && this.radius.finished) return;

        clearTimeout(this.updateTimeoutId);
        cancelAnimationFrame(this.requestAnimationFrameId);

        if (!this.radius.finished) {
            // animate radius with high frame rate
            this.requestAnimationFrameId = requestAnimationFrame(() => this._rerender());
        } else {
            // update with low frame rate
            this.updateTimeoutId = window.setTimeout(() => this._rerender(), this._calculateUpdateInterval());
        }
    }

    private _onResize() {
        this.size = (this.$el as HTMLElement).offsetWidth;
    }
}

namespace Timer { // tslint:disable-line no-namespace
    export enum Events {
        END = 'end',
    }

    export enum Themes {
        NORMAL = 'normal',
        INVERSE = 'inverse',
        WHITE = 'white',
    }
}

export default Timer;
</script>

<style scoped>
    .timer {
        width: 3.25rem;
        position: relative;
    }

    /* for setting height automatically depending on width */
    .timer::before {
        content: '';
        padding-top: 100%;
        display: block;
    }

    .tooltip >>> .trigger,
    svg {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: none;
        stroke-linecap: round;
    }

    circle {
        stroke: var(--nimiq-blue);
        transition: stroke .3s var(--nimiq-ease), opacity .3s var(--nimiq-ease);
    }

    .inverse-theme circle,
    .white-theme circle {
        stroke: white;
    }

    .filler-circle {
        opacity: .2;
    }

    .time-circle {
        opacity: .3;
    }

    .time-shown .time-circle {
        stroke: var(--nimiq-light-blue);
        opacity: 1;
    }

    .inverse-theme.time-shown:not(.little-time-left) .time-circle {
        stroke: var(--nimiq-light-blue-on-dark, var(--nimiq-light-blue));
    }

    .white-theme.time-shown:not(.little-time-left) .time-circle {
        stroke: rgba(255, 255, 255, 0.4);
    }

    /* .inverse-theme.time-shown .filler-circle,
    .white-theme.time-shown .filler-circle {
        opacity: 0;
    } */

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

    .inverse-theme .info-exclamation-icon,
    .white-theme .info-exclamation-icon {
        fill: white;
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

    .inverse-theme .countdown {
        fill: var(--nimiq-light-blue-on-dark, var(--nimiq-light-blue));
    }

    .white-theme .countdown {
        fill: rgba(255, 255, 255, 0.6);
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
</style>
