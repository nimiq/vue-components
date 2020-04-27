import { Vue } from 'vue-property-decorator';
declare class Timer extends Vue {
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
    synchronize(referenceTime: number): void;
    private timeOffset;
    private sampledTime;
    private detailsShown;
    private radius;
    private fullCircleLength;
    private timeoutId;
    private updateIntervalId;
    private requestAnimationFrameId;
    private size;
    private mounted;
    private destroyed;
    private get _totalTime();
    private get _timeLeft();
    private get _progress();
    private get _timeCircleInfo();
    private get _fillerCircleInfo();
    private get _updateInterval();
    private _setRadius;
    private _setTimer;
    private _setupUpdateInterval;
    private _animateRadius;
    private _rerender;
    private _onResize;
}
declare namespace Timer {
    enum Events {
        END = "end"
    }
    enum Themes {
        NORMAL = "normal",
        INVERSE = "inverse"
    }
}
export default Timer;
