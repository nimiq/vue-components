import { Vue } from 'vue-property-decorator';
declare class Tooltip extends Vue {
    /**
     * Container within which the tooltip should be positioned if possible.
     */
    container?: Vue | {
        $el: HTMLElement;
    };
    disabled?: boolean;
    noFocus?: boolean;
    /**
     * Preferred tooltip position as "[primary] [secondary]" or "[primary]".
     * The primary position can be either vertical or horizontal.
     * The secondary position, which is optional, should be of the opposite type of the primary position (i.e., horizontal if primary is vertical, and vice versa).
     * If only a single primary position is provided, the tooltip will be centered in the opposite direction.
     */
    preferredPosition: string;
    /**
     * Margin to maintain to container. If no container is set, this prop has no effect. For omitted values, the
     * container's padding is used as margin.
     */
    margin?: Partial<Record<Tooltip.VerticalPosition | Tooltip.HorizontalPosition, number>>;
    /**
     * Sets the tooltip's width to the container's width minus margin. If no container is set, this prop has no effect.
     */
    autoWidth: boolean;
    theme: Tooltip.Themes;
    /**
     * Background of the tooltip as a CSS value. Override the theme property.
     */
    background?: string;
    /**
     * Styles to apply on the tooltip box without the need to use deep css selectors.
     */
    styles?: Partial<CSSStyleDeclaration>;
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
    private tooltipToggled;
    private mousedOver;
    private mouseOverTimeout;
    private lastToggle;
    private height;
    private width;
    private maxWidth;
    private left;
    private right;
    private top;
    private positionCssClass;
    get isShown(): boolean;
    private get effectiveContainer();
    private get tooltipBoxStyles();
    private created;
    private mounted;
    private destroyed;
    show(): void;
    hide(force?: boolean): void;
    toggle(force?: boolean): void;
    update(newWatcherValue?: boolean): Promise<void>;
    private updatePosition;
    private setContainer;
    private getMargin;
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
