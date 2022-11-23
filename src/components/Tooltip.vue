<template>
    <span class="tooltip"
        :class="[verticalPosition, {
            shown: isShown,
            'transition-position': transitionPosition,
            'inverse-theme': theme === constructor.Themes.INVERSE,
        }]"
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
     * Preferred tooltip position as "[vertical] [horizontal]" or "[vertical]".
     */
    @Prop({
        type: String,
        default: 'top right',
        validator: (value: unknown) => {
            if (typeof value !== 'string') return false;
            const [vertical, horizontal] = value.split(' ');
            return Object.values(Tooltip.VerticalPosition).includes(vertical as Tooltip.VerticalPosition)
                && (!horizontal || Object.values(Tooltip.HorizontalPosition)
                    .includes(horizontal as Tooltip.HorizontalPosition));
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

    private verticalPosition: Tooltip.VerticalPosition | null = null;
    private tooltipToggled: boolean = false;
    private transitionPosition: boolean = false; // do not transition on show but on position updates while shown
    private mousedOver: boolean = false;
    private mouseOverTimeout: number;
    private lastToggle: number = -1;

    private height: number = 0;
    private width: number = 0;
    private maxWidth: number = 0;
    private left: number = 0;
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
            left: this.left + 'px',
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
            this.transitionPosition = false; // when shown next time, render immediately at correct position
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
        this.transitionPosition = true;
    }

    @Watch('preferredPosition')
    private updatePosition() {
        if (!this.isShown) return;
        // Note that in his method we do not need to use requestAnimationFrame to avoid reflows, as the method is
        // already called as a scroll event listener or manually in update after a reflow.
        // tslint:disable-next-line:prefer-const
        let [preferredVerticalPosition, preferredHorizontalPosition] = this.preferredPosition.split(' ');
        preferredHorizontalPosition = preferredHorizontalPosition || Tooltip.HorizontalPosition.RIGHT;
        this.left = preferredHorizontalPosition === Tooltip.HorizontalPosition.RIGHT
            ? Math.round(this.$refs.tooltipTrigger.offsetWidth / 2 - 25) // offset by 25px according to designs
            : Math.round(this.$refs.tooltipTrigger.offsetWidth / 2 - this.width + 25);

        const container = this.effectiveContainer;
        if (container) {
            if (!container.$el) {
                // We don't wait here for the container to get mounted, as we expect it to already be mounted when this
                // private method is called and to do measurements immediately in the scroll event listener
                console.warn('Tooltip container does not seem to be mounted yet.');
                return;
            }
            // position tooltip such that it best fits container element
            const triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
            const containerBoundingRect = container.$el.getBoundingClientRect();
            const topMargin = this.getMargin(Tooltip.VerticalPosition.TOP);
            const bottomMargin = this.getMargin(Tooltip.VerticalPosition.BOTTOM);
            const spaceNeeded = this.height + 16; // 16 for arrow, assuming same height on mobile for simplicity
            const fitsTop = triggerBoundingRect.top - containerBoundingRect.top - topMargin >= spaceNeeded;
            const fitsBottom = containerBoundingRect.bottom - triggerBoundingRect.bottom - bottomMargin >= spaceNeeded;
            if ((preferredVerticalPosition === Tooltip.VerticalPosition.TOP && (fitsTop || !fitsBottom))
                || (preferredVerticalPosition === Tooltip.VerticalPosition.BOTTOM) && (fitsTop && !fitsBottom)) {
                this.verticalPosition = Tooltip.VerticalPosition.TOP;
            } else {
                this.verticalPosition = Tooltip.VerticalPosition.BOTTOM;
            }

            // constrain horizontal position
            const leftMargin = this.getMargin(Tooltip.HorizontalPosition.LEFT);
            const rightMargin = this.getMargin(Tooltip.HorizontalPosition.RIGHT);
            // left and right bound of container, expressed in trigger's coordinate system
            const leftBound = containerBoundingRect.left + leftMargin - triggerBoundingRect.left;
            const rightBound = containerBoundingRect.right - rightMargin - triggerBoundingRect.left;
            this.left = Math.max(
                leftBound,
                Math.min(
                    rightBound - this.width,
                    this.left,
                ),
            );
        } else {
            this.verticalPosition = preferredVerticalPosition as Tooltip.VerticalPosition;
        }

        this.top = this.verticalPosition === Tooltip.VerticalPosition.BOTTOM
            ? this.$refs.tooltipTrigger.offsetHeight
            : -this.height;
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
        if ((position === Tooltip.VerticalPosition.TOP || position === Tooltip.VerticalPosition.BOTTOM)
            && containerEl.scrollHeight !== containerEl.offsetHeight) {
            // If container is scrollable, the padding scrolls with the content. Therefore we consider the whole
            // offsetHeight as valid area for the tooltip and return a margin of 0.
            return 0;
        }
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

    .transition-position .trigger::after {
        transition: top .2s var(--nimiq-ease), left .2s var(--nimiq-ease), transform .2s var(--nimiq-ease),
            opacity .3s var(--nimiq-ease), .3s visibility;
    }

    .top .trigger::after {
        top: -2rem;
        background: #250636; /* a color of the nimiq-blue-bg gradient in the lower area */
        transform: scaleY(-1);
    }

    .bottom .trigger::after {
        top: 100%;
        background: #201e45; /* a color of the nimiq-blue-bg gradient in the upper area */
    }

    .inverse-theme .trigger::after {
        background: white;
    }

    .shown .trigger::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
        position: absolute;
        color: white;
        background: var(--nimiq-blue-bg);
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

    .transition-position .tooltip-box {
        transition: opacity .3s var(--nimiq-ease), transform .2s var(--nimiq-ease), top .2s var(--nimiq-ease);
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
</style>
