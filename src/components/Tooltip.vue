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
            :tabindex="disabled ? -1 : 0"
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
                :style="styles">
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
    @Prop(Object) public container?: Vue | {$el: HTMLElement};
    @Prop(Boolean) public disabled?: boolean;

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

    @Prop({
        type: Boolean,
        default: false,
    }) public autoWidth!: boolean; // only relevant when using a container

    @Prop({
        type: String,
        default: 'normal' as Tooltip.Themes.NORMAL,
        validator: (value: any) => Object.values(Tooltip.Themes).includes(value),
    })
    public theme!: Tooltip.Themes;

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

    private get styles() {
        // note that we let the browser calculate height automatically
        return {
            top: this.top + 'px',
            left: this.left + 'px',
            width: this.effectiveContainer && this.autoWidth ? this.width + 'px' : undefined,
            maxWidth: this.effectiveContainer ? this.maxWidth + 'px' : undefined,
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
                const containerLeftPad = parseInt(
                    window.getComputedStyle(container.$el, null).getPropertyValue('padding-left'), 10);

                const containerRightPad = parseInt(
                    window.getComputedStyle(container.$el, null).getPropertyValue('padding-right'), 10);

                this.maxWidth = (container.$el as HTMLElement).offsetWidth - containerLeftPad - containerRightPad;
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

        if (this.effectiveContainer) {
            if (!this.effectiveContainer.$el) {
                // We don't wait here for the container to get mounted, as we expect it to already be mounted when this
                // private method is called and to do measurements immediately in the scroll event listener
                console.warn('Tooltip container does not seem to be mounted yet.');
                return;
            }
            // position tooltip such that it best fits container element
            const triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
            const containerBoundingRect = this.effectiveContainer.$el.getBoundingClientRect();
            const requiredSpace = this.height + 16; // 16 for arrow, assuming same height on mobile for simplicity
            const fitsTop = triggerBoundingRect.top - containerBoundingRect.top >= requiredSpace;
            const fitsBottom = containerBoundingRect.bottom - triggerBoundingRect.bottom >= requiredSpace;
            if ((preferredVerticalPosition === Tooltip.VerticalPosition.TOP && (fitsTop || !fitsBottom))
                || (preferredVerticalPosition === Tooltip.VerticalPosition.BOTTOM) && (fitsTop && !fitsBottom)) {
                this.verticalPosition = Tooltip.VerticalPosition.TOP;
            } else {
                this.verticalPosition = Tooltip.VerticalPosition.BOTTOM;
            }

            // constrain horizontal position
            const containerLeftPad = parseInt(
                window.getComputedStyle(this.effectiveContainer.$el, null).getPropertyValue('padding-left'), 10);
            const containerRightPad = parseInt(
                window.getComputedStyle(this.effectiveContainer.$el, null).getPropertyValue('padding-right'), 10);
            // left and right bound of container, expressed in trigger's coordinate system
            const leftBound = containerBoundingRect.left + containerLeftPad - triggerBoundingRect.left;
            const rightBound = containerBoundingRect.right - containerRightPad - triggerBoundingRect.left;
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
        display: block;
        text-decoration: none;
        outline: none;
        cursor: default;
    }

    .trigger >>> svg {
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
        background: var(--nimiq-blue-bg-darkened);
        mask-image: url('data:image/svg+xml,<svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.12c-.47 0-.93.2-1.23.64L3.2 14.29A4 4 0 0 1 0 16h18a4 4 0 0 1-3.2-1.7l-4.57-6.54c-.3-.43-.76-.64-1.23-.64z" fill="white"/></svg>');
        transition: opacity .3s ease, .3s visibility;
        transition-delay: 16ms; /* delay one animation frame for better sync with tooltipBox */
        visibility: hidden;
        pointer-events: visible;
        z-index: 1000; /* move above tooltip-box's box-shadow */
    }

    .inverse-theme .trigger::after {
        background: white;
    }

    .transition-position .trigger::after {
        transition: top .2s ease, left .2s ease, transform .2s ease, opacity .3s ease, .3s visibility;
    }

    .top .trigger::after {
        top: -2rem;
        transform: scaleY(-1);
    }

    .bottom .trigger::after {
        top: 100%;
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
        transition: opacity .3s ease;
        box-shadow: 0 1.125rem 2.275rem rgba(0, 0, 0, 0.11);
        z-index: 999;
    }

    .inverse-theme .tooltip-box {
        color: var(--nimiq-blue);
        background: white;
    }

    .transition-position .tooltip-box {
        transition: opacity .3s ease, transform .2s ease, top .2s ease;
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
