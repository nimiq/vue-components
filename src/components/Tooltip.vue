<template>
    <span class="tooltip"
        :class="[primaryPosition, {
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
     * The secondary position, which is optional, should be of the opposite type of the primary position (i.e., horizontal if primary is vertical, and vice versa).
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

            return (isValidPrimaryVertical && isValidSecondaryHorizontal) || (isValidPrimaryHorizontal && isValidSecondaryVertical);
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

    private primaryPosition: Tooltip.VerticalPosition | Tooltip.HorizontalPosition | null = null;
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
        this.tooltipToggled = true;
    }

    public hide(force: boolean = false) {
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

        // wait for updated position to be effective and rendered, then enable transitions
        await Vue.nextTick();
        await new Promise((resolve) => requestAnimationFrame(resolve));
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

        // Get the container and trigger bounding rectangles for position calculations
        const container = this.effectiveContainer;
        const triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
        const containerBoundingRect = container ? container.$el.getBoundingClientRect() : null;

        // Define a clamp function to keep a value within a specified range
        const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

        // Define a function to set the horizontal position of the tooltip
        const setHorizontalPosition = (primary: Tooltip.HorizontalPosition, secondary: Tooltip.VerticalPosition) => {
            // Set the left, right, and top properties based on the primary and secondary positions
            this.left = primary === Tooltip.HorizontalPosition.RIGHT ? this.$refs.tooltipTrigger.offsetWidth : null;
            this.right = primary === Tooltip.HorizontalPosition.LEFT ? this.$refs.tooltipTrigger.offsetWidth : null;

            // Calculate the clamping range for the top property
            const topClampMin = containerBoundingRect ? clamp(
                containerBoundingRect.top - triggerBoundingRect.top + this.getMargin(Tooltip.VerticalPosition.TOP),
                -this.height + 25,
                this.$refs.tooltipTrigger.offsetHeight - 25,
            ) : -this.height + 25;

            const topClampMax = containerBoundingRect ? clamp(
                containerBoundingRect.top - triggerBoundingRect.top + containerBoundingRect.height - this.height
                    - this.getMargin(Tooltip.VerticalPosition.BOTTOM),
                -this.height + 25,
                this.$refs.tooltipTrigger.offsetHeight - 25,
            ) : this.$refs.tooltipTrigger.offsetHeight - 25;

            // Set the top property based on the secondary position and clamping range
            this.top = secondary === Tooltip.VerticalPosition.TOP
                ? topClampMin
                : (secondary === Tooltip.VerticalPosition.BOTTOM
                    ? topClampMax
                    : clamp(
                        this.$refs.tooltipTrigger.offsetHeight / 2 - this.height / 2,
                        topClampMin,
                        topClampMax,
                    )
                );
            // Set the primary position for the tooltip
            this.primaryPosition = primary;
        };

        // Define a function to set the vertical position of the tooltip
        const setVerticalPosition = (primary: Tooltip.VerticalPosition, secondary: Tooltip.HorizontalPosition) => {
            // Set the top, left, and primary position properties based on the primary and secondary positions
            this.top = primary === Tooltip.VerticalPosition.BOTTOM
                ? this.$refs.tooltipTrigger.offsetHeight
                : -this.height;

            // Calculate the clamping range for the left property
            const leftClampMin = containerBoundingRect ? clamp(
                containerBoundingRect.left - triggerBoundingRect.left + this.getMargin(Tooltip.HorizontalPosition.LEFT),
                this.$refs.tooltipTrigger.offsetWidth / 2 - this.width + 25,
                this.$refs.tooltipTrigger.offsetWidth / 2 - 25,
            ) : this.$refs.tooltipTrigger.offsetWidth / 2 - this.width + 25;

            const leftClampMax = containerBoundingRect ? clamp(
                containerBoundingRect.left - triggerBoundingRect.left + containerBoundingRect.width - this.width
                    - this.getMargin(Tooltip.HorizontalPosition.RIGHT),
                this.$refs.tooltipTrigger.offsetWidth / 2 - this.width + 25,
                this.$refs.tooltipTrigger.offsetWidth / 2 - 25,
            ) : this.$refs.tooltipTrigger.offsetWidth / 2 - 25;

            // Set the left property based on the secondary position and clamping range
            this.left = secondary === Tooltip.HorizontalPosition.LEFT
                ? leftClampMin
                : (secondary === Tooltip.HorizontalPosition.RIGHT
                    ? leftClampMax
                    : clamp(
                        this.$refs.tooltipTrigger.offsetWidth / 2 - this.width / 2,
                        leftClampMin,
                        leftClampMax,
                    )
                );

            // Set the primary position for the tooltip
            this.primaryPosition = primary;
        };

        // If the container and containerBoundingRect are available, calculate bounds and fitting conditions
        if (container && containerBoundingRect) {
            // Calculate the difference between the trigger and container bounding rectangles
            const rectDiff = (dir: 'left' | 'right' | 'top' | 'bottom') =>
                triggerBoundingRect[dir] - containerBoundingRect[dir];

            // Calculate the bounds for each direction
            const leftBound = rectDiff('left') - this.getMargin(Tooltip.HorizontalPosition.LEFT);
            const rightBound = rectDiff('right') + this.getMargin(Tooltip.HorizontalPosition.RIGHT);
            const topBound = rectDiff('top') - this.getMargin(Tooltip.VerticalPosition.TOP);
            const bottomBound = rectDiff('bottom') + this.getMargin(Tooltip.VerticalPosition.BOTTOM);

            // Calculate the needed height and width for the tooltip, including an additional 16px margin
            const heightNeeded = this.height + 16;
            const widthNeeded = this.width + 16;

            // Determine if the tooltip fits in each direction
            const fitsTop = Math.abs(topBound) >= heightNeeded;
            const fitsBottom = Math.abs(bottomBound) >= heightNeeded;
            const fitsLeft = Math.abs(leftBound) >= widthNeeded;
            const fitsRight = Math.abs(rightBound) >= widthNeeded;

            // Set the tooltip position based on primary and secondary preferences
            if (isPrimaryVertical) {
                setVerticalPosition(
                    (!fitsTop && fitsBottom)
                        ? Tooltip.VerticalPosition.BOTTOM
                        : (fitsTop && !fitsBottom)
                            ? Tooltip.VerticalPosition.TOP
                            : preferredPrimaryPosition as Tooltip.VerticalPosition,
                    preferredSecondaryPosition as Tooltip.HorizontalPosition,
                );
            } else if (isPrimaryHorizontal) {
                setHorizontalPosition(
                    (!fitsLeft && fitsRight)
                        ? Tooltip.HorizontalPosition.RIGHT
                        : (fitsLeft && !fitsRight)
                            ? Tooltip.HorizontalPosition.LEFT
                            : preferredPrimaryPosition as Tooltip.HorizontalPosition,
                    preferredSecondaryPosition as Tooltip.VerticalPosition,
                );
            }
        } else {
            // If no container is provided, set the tooltip position based on primary and secondary preferences
            if (isPrimaryVertical) {
                setVerticalPosition(
                    preferredPrimaryPosition as Tooltip.VerticalPosition,
                    preferredSecondaryPosition as Tooltip.HorizontalPosition,
                );
            } else if (isPrimaryHorizontal) {
                setHorizontalPosition(
                    preferredPrimaryPosition as Tooltip.HorizontalPosition,
                    preferredSecondaryPosition as Tooltip.VerticalPosition,
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
        display: inline-block;
        position: relative;
        line-height: 1;
    }

    .trigger {
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

    .top .trigger::after {
        top: -2rem;
        background: var(--background, #250636); /* a color of the nimiq-blue-bg gradient in the lower area */
        transform: scaleY(-1);
    }

    .bottom .trigger::after {
        top: 100%;
        background: var(--background, #201e45); /* a color of the nimiq-blue-bg gradient in the upper area */
    }

    .left .trigger::after {
        top: 50%;
        left: -2.25rem;
        transform: translateY(-50%) rotate(90deg);
        background: var(--background, #250636); /* a color of the nimiq-blue-bg gradient in the lower area */
    }

    .right .trigger::after {
        top: 50%;
        left: 100%;
        transform: translateY(-50%) rotate(-90deg);
        background: var(--background, #201e45); /* a color of the nimiq-blue-bg gradient in the upper area */
    }

    .inverse-theme .trigger::after {
        background: var(--background, white);
    }

    .shown .trigger::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
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

    .top .tooltip-box {
        transform: translateY(-2rem);
    }

    .bottom .tooltip-box {
        transform: translateY(2rem);
    }

    .left .tooltip-box {
        transform: translateX(-2rem);
    }

    .right .tooltip-box {
        transform: translateX(2rem);
    }
</style>
