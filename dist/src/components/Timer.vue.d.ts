import I18nMixin from '../i18n/I18nMixin';
declare const Timer_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
declare class Timer extends Timer_base {
    private static readonly REM_FACTOR;
    private static readonly BASE_SIZE;
    private static readonly BASE_RADIUS;
    private static readonly RADIUS_GROWTH_FACTOR;
    startTime?: number;
    endTime?: number;
    alwaysShowTime: boolean;
    theme: string;
    strokeWidth: number;
    tooltipProps?: object;
    maxUnit?: string;
    synchronize(referenceTime: number): void;
    private timeOffset;
    private sampledTime;
    private detailsShown;
    private radius;
    private fullCircleLength;
    private timeoutId;
    private updateTimeoutId;
    private requestAnimationFrameId;
    private size;
    private mounted;
    private destroyed;
    private get _totalTime();
    private get _timeLeft();
    private get _progress();
    private get _timeCircleInfo();
    private get _fillerCircleInfo();
    private _calculateUpdateInterval;
    private _setRadius;
    private _setTimer;
    private _rerender;
    private _onResize;
}
declare namespace Timer {
    enum Events {
        END = "end"
    }
    enum Themes {
        NORMAL = "normal",
        INVERSE = "inverse",
        WHITE = "white"
    }
}
export default Timer;
