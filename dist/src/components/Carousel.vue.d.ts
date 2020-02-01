import { Vue } from 'vue-property-decorator';
export default class Carousel extends Vue {
    entries: string[];
    selected?: string;
    entryMargin: number;
    animationDuration: number;
    hideBackgroundEntries: boolean;
    disabled: boolean;
    $refs: {
        [ref: string]: HTMLElement[];
    };
    private effectiveSelected;
    private radius;
    private rotations;
    private requestAnimationFrameId;
    private readonly _hasDummyPosition;
    private readonly _totalPositionCount;
    private mounted;
    private destroyed;
    private _onEntriesChange;
    private _updateSelection;
    private _updateDimensions;
    private _updateRotations;
    /**
     * @param entry
     * @param currentRotation - Rotation in radians
     * @private
     */
    private _calculateTargetRotation;
    private _rerender;
    private _calculateRotationInClosestDirection;
    private _shouldHide;
    private _onKeydown;
}
