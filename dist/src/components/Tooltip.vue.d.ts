import { Vue } from 'vue-property-decorator';
export default class Tooltip extends Vue {
    reference?: {
        $el: HTMLElement;
    };
    $refs: {
        tooltipBox: HTMLDivElement;
        tooltipIcon: HTMLAnchorElement;
    };
    $el: HTMLElement;
    private tooltipPosition;
    private tooltipToggled;
    private mousedOver;
    private mouseOverTimeout;
    private iconHeight;
    private height;
    private width;
    private left;
    private top;
    private mounted;
    private readonly styles;
    update(): void;
    private setReference;
    private onClickOutsideTooltip;
    private toggleTooltip;
}
