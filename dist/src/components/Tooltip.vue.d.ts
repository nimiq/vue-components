import { Vue } from 'vue-property-decorator';
declare class Tooltip extends Vue {
    container?: Vue | {
        $el: HTMLElement;
    };
    disabled?: boolean;
    preferredPosition: string;
    autoWidth: boolean;
    theme: Tooltip.Themes;
    /** @deprecated */
    reference?: Vue | {
        $el: HTMLElement;
    };
    $refs: {
        tooltipTrigger: HTMLAnchorElement;
    } & ({} | {
        tooltipBox: HTMLDivElement;
    });
    $el: HTMLElement;
    private verticalPosition;
    private tooltipToggled;
    private transitionPosition;
    private mousedOver;
    private mouseOverTimeout;
    private lastToggle;
    private height;
    private width;
    private maxWidth;
    private left;
    private top;
    get isShown(): boolean;
    private get effectiveContainer();
    private get styles();
    private created;
    private mounted;
    private destroyed;
    show(): void;
    hide(force?: boolean): void;
    toggle(force?: boolean): void;
    update(newWatcherValue?: boolean): Promise<void>;
    private updatePosition;
    private setContainer;
    private mouseOver;
    private onClick;
}
declare namespace Tooltip {
    enum VerticalPosition {
        TOP = "top",
        BOTTOM = "bottom"
    }
    enum HorizontalPosition {
        LEFT = "left",
        RIGHT = "right"
    }
    enum Themes {
        NORMAL = "normal",
        INVERSE = "inverse"
    }
}
export default Tooltip;
