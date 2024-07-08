<template>
    <span class="tooltip"
        :class="[positionCssClass, {
            shown: isShown,
            'inverse-theme': theme === constructor.Themes.INVERSE,
        }]"
        :style="background && `--background: ${background}`"
        @mouseenter="mouseOver(true)"
        @mouseleave="mouseOver(false)"
    >
        <a href="javascript:void(0);"
            ref="tooltipTrigger"
            @focus.stop="show()"
            @blur.stop="hide()"
            @click="onClick()"
            :tabindex="disabled || noFocus ? -1 : 0"
            class="trigger"
        >
            <slot v-if="!$slots.icon" name="trigger">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
            <!-- Note: usage of the `icon` slot is deprecated. Use `trigger` instead. -->
            <slot v-if="$slots.icon && !$slots.trigger" name="icon"></slot>
        </a>
        <transition name="transition-fade">
            <div ref="tooltipBox"
                v-if="isShown"
                class="tooltip-box"
                :style="tooltipBoxStyles">
                <slot></slot>
            </div>
        </transition>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AlertTriangleIcon } from './Icons';

@Component({ components: { AlertTriangleIcon }})
class Tooltip extends Vue {
    /**
     * Container within which the tooltip should be positioned if possible.
     */
    @Prop(Object) public container?: Vue | {$el: HTMLElement};
    @Prop(Boolean) public disabled?: boolean;
    @Prop(Boolean) public noFocus?: boolean;

    /**
     * Preferred tooltip position as "[primary] [secondary]" or "[primary]".
     * The primary position can be either vertical or horizontal.
     * The secondary position, which is optional, should be of the opposite type of the primary position (i.e.,
     * horizontal if primary is vertical, and vice versa).
     * If only a single primary position is provided, the tooltip will be centered in the opposite direction.
     */
    @Prop({
        type: String,
        default: 'top right',
        validator: (value: unknown) => {
            if (typeof value !== 'string') return false;
            const [primaryPosition, secondaryPosition] = value.split(' ');

            const isValidPrimaryVertical = Object.values(Tooltip.VerticalPosition)
                .includes(primaryPosition as Tooltip.VerticalPosition);
            const isValidPrimaryHorizontal = Object.values(Tooltip.HorizontalPosition)
                .includes(primaryPosition as Tooltip.HorizontalPosition);

            const isValidSecondaryHorizontal = !secondaryPosition || Object.values(Tooltip.HorizontalPosition)
                .includes(secondaryPosition as Tooltip.HorizontalPosition);
            const isValidSecondaryVertical = !secondaryPosition || Object.values(Tooltip.VerticalPosition)
                .includes(secondaryPosition as Tooltip.VerticalPosition);

            return (isValidPrimaryVertical && isValidSecondaryHorizontal)
                || (isValidPrimaryHorizontal && isValidSecondaryVertical);
        },
    }) public preferredPosition!: string;

    /**
     * Margin to maintain to container. If no container is set, this prop has no effect. For omitted values, the
     * container's padding is used as margin.
     */
    @Prop({
        type: Object,
        validator: (value: unknown) => typeof value === 'object'
            && Object.entries(value).every(([position, margin]) => typeof margin === 'number'
                && (Object.values(Tooltip.VerticalPosition).includes(position as Tooltip.VerticalPosition)
                    || Object.values(Tooltip.HorizontalPosition).includes(position as Tooltip.HorizontalPosition))),
    }) public margin?: Partial<Record<Tooltip.VerticalPosition | Tooltip.HorizontalPosition, number>>;

    /**
     * Sets the tooltip's width to the container's width minus margin. If no container is set, this prop has no effect.
     */
    @Prop({
        type: Boolean,
        default: false,
    }) public autoWidth!: boolean;

    @Prop({
        type: String,
        default: 'normal' as Tooltip.Themes.NORMAL,
        validator: (value: any) => Object.values(Tooltip.Themes).includes(value),
    })
    public theme!: Tooltip.Themes;

    /**
     * Background of the tooltip as a CSS value. Override the theme property.
     */
    @Prop(String) public background?: string;

    /**
     * Styles to apply on the tooltip box without the need to use deep css selectors.
     */
    @Prop(Object) public styles?: Partial<CSSStyleDeclaration>;

    /** @deprecated */
    @Prop(Object) public reference?: Vue | {$el: HTMLElement};

    // Typing of $refs and $el, in order to not having to cast it everywhere.
    public $refs!: {
        tooltipTrigger: HTMLAnchorElement,
    } & ({} | {
        // tooltipBox is optional but can not be types as such with a ? as 'undefined' is not assignable to type
        // 'Element | Element[] | Vue | Vue[]'
        tooltipBox: HTMLDivElement,
    });
    public $el: HTMLElement;

    private tooltipToggled: boolean = false;
    private mousedOver: boolean = false;
    private mouseOverTimeout: number;
    private lastToggle: number = -1;

    private height: number = 0;
    private width: number = 0;
    private maxWidth: number = 0;
    private left: number = 0;
    private right: number = 0;
    private top: number = 0;
    private positionCssClass: string = '';

    public get isShown() {
        return (this.tooltipToggled || this.mousedOver) && !this.disabled;
    }

    private get effectiveContainer(): Vue | {$el: HTMLElement} | undefined {
        if (this.reference) {
            console.warn('Tooltip: Prop `reference` is deprecated and support will be removed in the future.'
                + ' Use prop `container` instead.');
        }
        return this.container || this.reference;
    }

    private get tooltipBoxStyles() {
        // note that we let the browser calculate height automatically
        return {
            ...this.styles,
            top: this.top + 'px',
            left: this.left ? this.left + 'px' : undefined,
            right: this.right ? this.right + 'px' : undefined,
            width: this.effectiveContainer && this.autoWidth ? this.width + 'px' : (this.styles || {}).width,
            maxWidth: this.effectiveContainer ? this.maxWidth + 'px' : (this.styles || {}).maxWidth,
        };
    }

    private created() {
        this.updatePosition = this.updatePosition.bind(this);
    }

    private mounted() {
        if ('icon' in this.$slots) {
            console.warn('Tooltip: Slot `icon` is deprecated and support will be removed in the future.'
                + ' Use slot `trigger` instead.');
        }
        // Manually trigger an update instead of using immediate watchers to avoid unnecessary initial double updates
        this.setContainer(this.effectiveContainer);
    }

    private destroyed() {
        if (this.effectiveContainer && this.effectiveContainer.$el) {
            this.effectiveContainer.$el.removeEventListener('scroll', this.updatePosition);
        }
    }

    public show() {
        if (this.disabled) return;
        this.tooltipToggled = true;
    }

    public hide(force: boolean = false) {
        if (this.disabled) return;
        this.tooltipToggled = false;
        this.$refs.tooltipTrigger.blur();
        if (!force) return;
        this.mousedOver = false;
    }

    public toggle(force: boolean = false) {
        if (this.tooltipToggled || this.mousedOver) {
            this.hide(force);
        } else {
            this.show();
        }
    }

    @Watch('isShown')
    public async update(newWatcherValue?: boolean) {
        // updates dimensions and repositions tooltip
        if (!this.isShown) {
            if (newWatcherValue === false) {
                this.lastToggle = Date.now();
                this.$emit('hide');
            }
            return; // no need to update as tooltip not visible
        } else if (newWatcherValue === true) {
            this.lastToggle = Date.now();
            this.$emit('show');
        }
        if (!this.$el) {
            // wait until we're mounted
            await new Promise((resolve) => this.$once('hook:mounted', resolve));
        }

        const container = this.effectiveContainer;
        if (container) {
            if (!container.$el && container instanceof Vue) {
                // wait until container is mounted if it's a Vue instance
                await new Promise((resolve) => (container as Vue).$once('hook:mounted', resolve));
                if (container !== this.effectiveContainer) return; // container changed; update was called again
            }

            await new Promise((resolve) => requestAnimationFrame(() => {
                // avoid potential forced layouting / reflow by taking measurements within a requestAnimationFrame
                // (see https://gist.github.com/paulirish/5d52fb081b3570c81e3a#appendix)
                const leftMargin = this.getMargin(Tooltip.HorizontalPosition.LEFT);
                const rightMargin = this.getMargin(Tooltip.HorizontalPosition.RIGHT);

                this.maxWidth = (container.$el as HTMLElement).offsetWidth - leftMargin - rightMargin;
                if (this.autoWidth) this.width = this.maxWidth;
                resolve();
            }));
        }

        // make sure that tooltipBox is created, then update measurements
        await Vue.nextTick();
        if (!this.isShown || !('tooltipBox' in this.$refs && this.$refs.tooltipBox)) return; // not visible anymore?
        // here we need the quick reflow to avoid that the visible tooltip gets rendered at the wrong position,
        // potentially causing scroll bars
        this.height = this.$refs.tooltipBox.offsetHeight;
        this.width = this.$refs.tooltipBox.offsetWidth;

        this.updatePosition();
    }

    @Watch('preferredPosition')
    private updatePosition() {
        // If the tooltip is not shown or the tooltipBox reference is missing, exit the function early
        if (!this.isShown || !('tooltipBox' in this.$refs && this.$refs.tooltipBox)) return;

        // Destructure the preferred position into primary and secondary positions
        const [preferredPrimaryPosition, preferredSecondaryPosition] = this.preferredPosition.split(' ');

        // Determine if the primary position is vertical or horizontal
        const isPrimaryVertical = Object.values(Tooltip.VerticalPosition).includes(preferredPrimaryPosition as any);
        const isPrimaryHorizontal = Object.values(Tooltip.HorizontalPosition).includes(preferredPrimaryPosition as any);

        // Get the container and trigger bounding rectangles for position calculations.
        // Note that in his method we do not need to use requestAnimationFrame to avoid reflows, as the method is
        // already called as a scroll event listener or manually in update after a reflow.
        const container = this.effectiveContainer;
        const triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
        const containerBoundingRect = container && container.$el ? container.$el.getBoundingClientRect() : null;
        const containerMargins = {
            [Tooltip.VerticalPosition.TOP]: this.getMargin(Tooltip.VerticalPosition.TOP),
            [Tooltip.HorizontalPosition.RIGHT]: this.getMargin(Tooltip.HorizontalPosition.RIGHT),
            [Tooltip.VerticalPosition.BOTTOM]: this.getMargin(Tooltip.VerticalPosition.BOTTOM),
            [Tooltip.HorizontalPosition.LEFT]: this.getMargin(Tooltip.HorizontalPosition.LEFT),
        };

        // Define a clamp function to keep a value within a specified range
        const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

        // Function for positioning the tooltip if the primary position is a horizontal position.
        const setPositionForPrimaryHorizontal = (
            primary: Tooltip.HorizontalPosition,
            secondary?: Tooltip.VerticalPosition, // can be undefined in which the box is centered vertically
        ) => {
            // Set the left, right, and top properties based on the primary and secondary positions
            this.left = primary === Tooltip.HorizontalPosition.RIGHT ? triggerBoundingRect.width : null;
            this.right = primary === Tooltip.HorizontalPosition.LEFT ? triggerBoundingRect.width : null;

            const topMostTopPosition = -this.height + triggerBoundingRect.height / 2 + 25;
            const bottomMostTopPosition = triggerBoundingRect.height / 2 - 25;

            // Calculate the clamping range for the top property
            const clampedTopMostTopPosition = containerBoundingRect ? clamp(
                topMostTopPosition,
                containerBoundingRect.top + containerMargins[Tooltip.VerticalPosition.TOP]
                    - triggerBoundingRect.top, // expressed in trigger's coordinate system
                bottomMostTopPosition,
            ) : topMostTopPosition;

            const clampedBottomMostTopPosition = containerBoundingRect ? clamp(
                bottomMostTopPosition,
                topMostTopPosition,
                containerBoundingRect.top + containerBoundingRect.height
                    - containerMargins[Tooltip.VerticalPosition.BOTTOM]
                    - this.height
                    - triggerBoundingRect.top, // expressed in trigger's coordinate system
            ) : bottomMostTopPosition;

            // Set the top property based on the secondary position and clamping range
            this.top = secondary === Tooltip.VerticalPosition.TOP
                ? clampedTopMostTopPosition
                : (secondary === Tooltip.VerticalPosition.BOTTOM
                    ? clampedBottomMostTopPosition
                    : clamp(
                        triggerBoundingRect.height / 2 - this.height / 2,
                        clampedTopMostTopPosition,
                        clampedBottomMostTopPosition,
                    )
                );

            this.positionCssClass = `position-${primary}-${secondary || 'center'}`;
        };

        // Function for positioning the tooltip if the primary position is a vertical position.
        const setPositionForPrimaryVertical = (
            primary: Tooltip.VerticalPosition,
            secondary?: Tooltip.HorizontalPosition, // can be undefined in which the box is centered horizontally
        ) => {
            // Set the top, left, and primary position properties based on the primary and secondary positions
            this.top = primary === Tooltip.VerticalPosition.BOTTOM ? triggerBoundingRect.height : -this.height;

            const leftMostLeftPosition = triggerBoundingRect.width / 2 - this.width + 25;
            const rightMostLeftPosition = triggerBoundingRect.width / 2 - 25;

            // Calculate the clamping range for the left property
            const clampedLeftMostLeftPosition = containerBoundingRect ? clamp(
                leftMostLeftPosition,
                containerBoundingRect.left + containerMargins[Tooltip.HorizontalPosition.LEFT]
                    - triggerBoundingRect.left, // expressed in trigger's coordinate system
                rightMostLeftPosition,
            ) : leftMostLeftPosition;

            const clampedRightMostLeftPosition = containerBoundingRect ? clamp(
                rightMostLeftPosition,
                leftMostLeftPosition,
                containerBoundingRect.left + containerBoundingRect.width
                    - containerMargins[Tooltip.HorizontalPosition.RIGHT]
                    - this.width
                    - triggerBoundingRect.left, // expressed in trigger's coordinate system
            ) : rightMostLeftPosition;

            // Set the left property based on the secondary position and clamping range
            this.left = secondary === Tooltip.HorizontalPosition.LEFT
                ? clampedLeftMostLeftPosition
                : (secondary === Tooltip.HorizontalPosition.RIGHT
                    ? clampedRightMostLeftPosition
                    : clamp(
                        triggerBoundingRect.width / 2 - this.width / 2,
                        clampedLeftMostLeftPosition,
                        clampedRightMostLeftPosition,
                    )
                );

            this.positionCssClass = `position-${primary}-${secondary || 'center'}`;
        };

        // If the container and containerBoundingRect are available, calculate bounds and fitting conditions
        if (container && containerBoundingRect) {
            // Calculate the difference between the trigger and container bounding rectangles
            const calculateAvailableSpace = (dir: 'left' | 'right' | 'top' | 'bottom') =>
                Math.abs(triggerBoundingRect[dir] - containerBoundingRect[dir]
                    + (dir === 'left' || dir === 'top' ? -1 : 1) * containerMargins[dir]);

            // Set the tooltip position based on primary and secondary preferences
            if (isPrimaryVertical) {
                const heightNeeded = this.height + /* for the arrow */ 16;
                const fitsTop = calculateAvailableSpace(Tooltip.VerticalPosition.TOP) >= heightNeeded;
                const fitsBottom = calculateAvailableSpace(Tooltip.VerticalPosition.BOTTOM) >= heightNeeded;
                setPositionForPrimaryVertical(
                    (!fitsTop && fitsBottom)
                        ? Tooltip.VerticalPosition.BOTTOM
                        : (fitsTop && !fitsBottom)
                            ? Tooltip.VerticalPosition.TOP
                            : preferredPrimaryPosition as Tooltip.VerticalPosition,
                    preferredSecondaryPosition as Tooltip.HorizontalPosition | undefined,
                );
            } else if (isPrimaryHorizontal) {
                const widthNeeded = this.width + /* for the arrow */ 16;
                const fitsLeft = calculateAvailableSpace(Tooltip.HorizontalPosition.LEFT) >= widthNeeded;
                const fitsRight = calculateAvailableSpace(Tooltip.HorizontalPosition.RIGHT) >= widthNeeded;
                setPositionForPrimaryHorizontal(
                    (!fitsLeft && fitsRight)
                        ? Tooltip.HorizontalPosition.RIGHT
                        : (fitsLeft && !fitsRight)
                            ? Tooltip.HorizontalPosition.LEFT
                            : preferredPrimaryPosition as Tooltip.HorizontalPosition,
                    preferredSecondaryPosition as Tooltip.VerticalPosition | undefined,
                );
            }
        } else {
            // If no container is provided, set the tooltip position based on primary and secondary preferences
            if (isPrimaryVertical) {
                setPositionForPrimaryVertical(
                    preferredPrimaryPosition as Tooltip.VerticalPosition,
                    preferredSecondaryPosition as Tooltip.HorizontalPosition | undefined,
                );
            } else if (isPrimaryHorizontal) {
                setPositionForPrimaryHorizontal(
                    preferredPrimaryPosition as Tooltip.HorizontalPosition,
                    preferredSecondaryPosition as Tooltip.VerticalPosition | undefined,
                );
            }
        }
    }

    @Watch('effectiveContainer')
    private async setContainer(newContainer: Vue | {$el: HTMLElement}, oldContainer?: Vue | {$el: HTMLElement}) {
        if (oldContainer && oldContainer.$el) {
            oldContainer.$el.removeEventListener('scroll', this.updatePosition);
        }

        if (newContainer) {
            if (!newContainer.$el && newContainer instanceof Vue) {
                // wait until container is mounted if it's a Vue instance
                await new Promise((resolve) => (newContainer as Vue).$once('hook:mounted', resolve));
                if (newContainer !== this.effectiveContainer) return; // container changed
            }
            // In case the container is scrollable add a listener
            await new Promise((resolve) => requestAnimationFrame(()  => {
                if (newContainer.$el.scrollHeight !== (newContainer.$el as HTMLElement).offsetHeight) {
                    newContainer.$el.addEventListener('scroll', this.updatePosition);
                }
                resolve();
            }));
        }

        await this.update();
    }

    private getMargin(position: Tooltip.VerticalPosition | Tooltip.HorizontalPosition) {
        if (this.margin && this.margin[position] !== undefined) return this.margin[position];
        const containerEl = this.effectiveContainer && this.effectiveContainer.$el
            ? this.effectiveContainer.$el as HTMLElement
            : null;
        if (!containerEl) return 0;
        return parseInt(window.getComputedStyle(containerEl, null).getPropertyValue(`padding-${position}`), 10);
    }

    private mouseOver(mouseOverTooltip: boolean) {
        if (!mouseOverTooltip) { // mouseleave
            this.mouseOverTimeout = window.setTimeout(
                () => this.mousedOver = false,
                100,
            );
        } else { // mouseenter
            window.clearTimeout(this.mouseOverTimeout);
            this.mousedOver = true;
        }
    }

    private onClick() {
        if (Date.now() - this.lastToggle < 200) return; // just toggled by mouseover or focus
        this.toggle(/* force */ true);
        this.$emit('click');
    }
}

namespace Tooltip {
    export enum VerticalPosition {
        TOP = 'top',
        BOTTOM = 'bottom',
    }

    export enum HorizontalPosition {
        LEFT = 'left',
        RIGHT = 'right',
    }

    export enum Themes {
        NORMAL = 'normal',
        INVERSE = 'inverse',
    }
}

export default Tooltip;
</script>

<style scoped>
    .tooltip {
        /* contain: layout style; */
        display: inline-block;
        position: relative;
        line-height: 1;
    }

    .trigger {
        /* contain: layout style; */
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        text-decoration: none;
        outline: none;
        cursor: default;
        color: inherit;
    }

    .trigger >>> svg:first-child:last-child,
    .trigger >>> img:first-child:last-child {
        display: block;
    }

    .trigger::after {
        opacity: 0;
        content: '';
        display: block;
        position: absolute;
        width: 2.25rem;
        height: 2rem;
        left: calc(50% - 1.125rem);
        mask-image: url('data:image/svg+xml,<svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.12c-.47 0-.93.2-1.23.64L3.2 14.29A4 4 0 0 1 0 16h18a4 4 0 0 1-3.2-1.7l-4.57-6.54c-.3-.43-.76-.64-1.23-.64z" fill="white"/></svg>');
        transition: opacity .3s var(--nimiq-ease), .3s visibility;
        transition-delay: 16ms; /* delay one animation frame for better sync with tooltipBox */
        visibility: hidden;
        z-index: 1000; /* move above tooltip-box's box-shadow */
    }

    [class*='position-top'] .trigger::after {
        top: -2rem;
        transform: scaleY(-1);
    }
    [class*='position-bottom'] .trigger::after {
        top: 100%;
    }
    [class*='position-left'] .trigger::after {
        top: 50%;
        left: -2.25rem;
        transform: translateY(-50%) rotate(90deg);
    }
    [class*='position-right'] .trigger::after {
        top: 50%;
        left: 100%;
        transform: translateY(-50%) rotate(-90deg);
    }

    /* Set the arrow color. For the tooltip box's default nimiq-blue-bg background, which is a gradient, set the arrow
    color depending on the position to a color from the area of nimiq-blue-bg where the arrow touches it. The gradient
    is a radial gradient which expands from the bottom right of the box which is resembled by the styles below. Note
    that because we're interested in the color at the touch point, the positions here are effectively reverted, e.g. the
    arrow is at the bottom right if the tooltip is top left positioned. */
    .position-top-left .trigger::after,
    .position-left-top .trigger::after {
        background: var(--background, #250737);
    }
    .position-top-center .trigger::after,
    .position-left-center .trigger::after {
        background: var(--background, #23123e);
    }
    .position-top-right .trigger::after,
    .position-left-bottom .trigger::after {
        background: var(--background, #211e45);
    }
    /* At the top and left edge of the tooltip box, the gradient is already fully faded away. */
    [class*='position-bottom'] .trigger::after,
    [class*='position-right'] .trigger::after {
        background: var(--background, var(--nimiq-blue));
    }

    .inverse-theme .trigger::after {
        background: var(--background, white);
    }

    .shown .trigger::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
        contain: layout paint style;
        position: absolute;
        color: white;
        background: var(--background, var(--nimiq-blue-bg));
        padding: 1.5rem;
        border-radius: .5rem;
        font-size: 1.75rem;
        line-height: 1.5;
        font-weight: 600;
        transition: opacity .3s var(--nimiq-ease);
        box-shadow: 0 1.125rem 2.275rem rgba(0, 0, 0, 0.11);
        z-index: 999;
    }

    .inverse-theme .tooltip-box {
        color: var(--nimiq-blue);
        background: white;
    }

    .tooltip-box.transition-fade-enter,
    .tooltip-box.transition-fade-leave-to {
        opacity: 0;
    }

    [class*='position-top'] .tooltip-box {
        transform: translateY(-2rem);
    }

    [class*='position-bottom'] .tooltip-box {
        transform: translateY(2rem);
    }

    [class*='position-left'] .tooltip-box {
        transform: translateX(-2rem);
    }

    [class*='position-right'] .tooltip-box {
        transform: translateX(2rem);
    }
</style>
