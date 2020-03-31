<template>
    <span class="tooltip"
        :class="[tooltipPosition, {
            disabled,
            shown: isShown,
            'transition-position': transitionPosition,
            'inverse-theme': theme === constructor.Themes.INVERSE,
        }]"
        @mouseenter="mouseOver(true)"
        @mouseleave="mouseOver(false)"
    >
        <a href="javascript:void(0);"
            ref="tooltipTrigger"
            @focus.stop="show"
            @blur.stop="hide"
            :tabindex="disabled ? -1 : false">
            <slot name="trigger">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
        </a>
        <transition>
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
    @Prop(Object) public reference?: Vue | {$el: HTMLElement};
    @Prop(Boolean) public disabled?: boolean;

    @Prop({
        type: String,
        default: 'bottom' as Tooltip.Position.BOTTOM,
        validator: (value: any) => Object.values(Tooltip.Position).includes(value),
    }) public preferredPosition!: Tooltip.Position;

    @Prop({
        type: Boolean,
        default: false,
    }) public autoWidth!: boolean; // only relevant when using a reference

    @Prop({
        type: String,
        default: 'normal' as Tooltip.Themes.NORMAL,
        validator: (value: any) => Object.values(Tooltip.Themes).includes(value),
    })
    public theme!: Tooltip.Themes;

    // Typing of $refs and $el, in order to not having to cast it everywhere.
    public $refs!: {
        tooltipBox?: HTMLDivElement,
        tooltipTrigger: HTMLAnchorElement,
    };
    public $el: HTMLElement;

    private tooltipPosition: Tooltip.Position | null = null;
    private tooltipToggled: boolean = false;
    private transitionPosition: boolean = false; // do not transition on show but on position updates while shown
    private mousedOver: boolean = false;
    private mouseOverTimeout: number;

    private height: number = 0;
    private width: number = 0;
    private maxWidth: number = 0;
    private left: number = 0;
    private top: number = 0;

    public get isShown() {
        return (this.tooltipToggled || this.mousedOver) && !this.disabled;
    }

    private get styles() {
        // note that we let the browser calculate height automatically
        return {
            top: this.top + 'px',
            left: this.left + 'px',
            width: this.reference && this.autoWidth ? this.width + 'px' : undefined,
            maxWidth: this.reference ? this.maxWidth + 'px' : undefined,
        };
    }

    private created() {
        this.updatePosition = this.updatePosition.bind(this);
    }

    private mounted() {
        // Manually trigger an update instead of using immediate watchers to avoid unnecessary initial double updates
        this.setReference(this.reference);
    }

    private destroyed() {
        if (this.reference && this.reference.$el) {
            this.reference.$el.removeEventListener('scroll', this.updatePosition);
        }
    }

    public show() {
        this.tooltipToggled = true;
    }

    public hide() {
        this.tooltipToggled = false;
        this.$refs.tooltipTrigger.blur();
    }

    public toggle() {
        if (this.tooltipToggled) {
            this.hide();
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
                this.$emit('hide');
            }
            return; // no need to update as tooltip not visible
        } else if (newWatcherValue === true) {
            this.$emit('show');
        }
        if (!this.$el) {
            // wait until we're mounted
            await new Promise((resolve) => this.$once('hook:mounted', resolve));
        }

        const reference = this.reference;
        if (reference) {
            if (!reference.$el && reference instanceof Vue) {
                // wait until reference is mounted if it's a Vue instance
                await new Promise((resolve) => (reference as Vue).$once('hook:mounted', resolve));
                if (reference !== this.reference) return; // reference changed; update was also called for new reference
            }

            await new Promise((resolve) => requestAnimationFrame(() => {
                // avoid potential forced layouting / reflow by taking measurements within a requestAnimationFrame
                // (see https://gist.github.com/paulirish/5d52fb081b3570c81e3a#appendix)
                const referenceLeftPad = parseInt(
                    window.getComputedStyle(reference.$el, null).getPropertyValue('padding-left'), 10);

                const referenceRightPad = parseInt(
                    window.getComputedStyle(reference.$el, null).getPropertyValue('padding-right'), 10);

                this.maxWidth = (reference.$el as HTMLElement).offsetWidth - referenceLeftPad - referenceRightPad;
                if (this.autoWidth) this.width = this.maxWidth;
                resolve();
            }));
        }

        // make sure that tooltipBox is created, then update measurements
        await Vue.nextTick();
        if (!this.isShown) return; // tooltip not visible anymore?
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
        if (this.reference) {
            if (!this.reference.$el) {
                // We don't wait here for the reference to get mounted, as we expect it to already be mounted when this
                // private method is called and to do measurements immediately in the scroll event listener
                console.warn('Tooltip reference does not seem to be mounted yet.');
                return;
            }
            // position tooltip such that it best fits reference element
            const triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
            const referenceBoundingRect = this.reference.$el.getBoundingClientRect();
            const requiredSpace = this.height + 16; // 16 for arrow, assuming same height on mobile for simplicity
            const fitsTop = triggerBoundingRect.top - referenceBoundingRect.top >= requiredSpace;
            const fitsBottom = referenceBoundingRect.bottom - triggerBoundingRect.bottom >= requiredSpace;
            if ((this.preferredPosition === Tooltip.Position.TOP && (fitsTop || !fitsBottom))
                || (this.preferredPosition === Tooltip.Position.BOTTOM) && (fitsTop && !fitsBottom)) {
                this.tooltipPosition = Tooltip.Position.TOP;
                this.top = -this.height;
            } else {
                this.tooltipPosition = Tooltip.Position.BOTTOM;
                this.top = this.$refs.tooltipTrigger.offsetHeight;
            }

            // set horizontal position
            const referenceLeftPad = parseInt(
                window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-left'), 10);
            const referenceRightPad = parseInt(
                window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-right'), 10);
            // left and right bound of reference, expressed in trigger's coordinate system
            const leftBound = referenceBoundingRect.left + referenceLeftPad - triggerBoundingRect.left;
            const rightBound = referenceBoundingRect.right - referenceRightPad - triggerBoundingRect.left;
            this.left = Math.max(
                leftBound,
                Math.min(
                    rightBound - this.width,
                    -this.width / 2 + triggerBoundingRect.width / 2,
                ),
            );
        } else {
            this.tooltipPosition = this.preferredPosition;
            this.top = this.preferredPosition === Tooltip.Position.BOTTOM
                ? this.$refs.tooltipTrigger.offsetHeight
                : -this.height;
            this.left = -this.width / 2 + this.$refs.tooltipTrigger.offsetWidth / 2;
        }
    }

    @Watch('reference')
    private async setReference(newReference: Vue | {$el: HTMLElement}, oldReference?: Vue | {$el: HTMLElement}) {
        if (oldReference && oldReference.$el) {
            oldReference.$el.removeEventListener('scroll', this.updatePosition);
        }

        if (newReference) {
            if (!newReference.$el && newReference instanceof Vue) {
                // wait until reference is mounted if it's a Vue instance
                await new Promise((resolve) => (newReference as Vue).$once('hook:mounted', resolve));
                if (newReference !== this.reference) return; // reference changed
            }
            // In case the reference container is scrollable add a listener
            await new Promise((resolve) => requestAnimationFrame(()  => {
                if (newReference.$el.scrollHeight !== (newReference.$el as HTMLElement).offsetHeight) {
                    this.reference.$el.addEventListener('scroll', this.updatePosition);
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
}

namespace Tooltip {
    export enum Position {
        TOP = 'top',
        BOTTOM = 'bottom',
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
        display: block;
        position: relative;
        line-height: 1;
    }

    .tooltip > a {
        position: relative;
        display: block;
        text-decoration: none;
    }

    .tooltip.disabled > a {
        outline: none;
        cursor: default;
    }

    .tooltip > a >>> svg {
        display: block;
    }

    .tooltip > a::after {
        opacity: 0;
        content: '';
        display: block;
        position: absolute;
        width: 2.25rem;
        height: 2rem;
        left: calc(50% - 1.125rem);
        background: var(--nimiq-blue-bg-darkened);
        mask-image: url('data:image/svg+xml,<svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.12c-.47 0-.93.2-1.23.64L3.2 14.29A4 4 0 010 16h18a4 4 0 01-3.2-1.7l-4.57-6.54c-.3-.43-.76-.64-1.23-.64z" fill="white"/></svg>');
        transition: opacity .3s ease, .3s visibility;
        transition-delay: 16ms; /* delay one animation frame for better sync with tooltipBox */
        visibility: hidden;
        pointer-events: visible;
        z-index: 1;
    }

    .tooltip.inverse-theme > a::after {
        background: white;
    }

    .tooltip.transition-position > a::after {
        transition: top .2s ease, transform .2s ease, opacity .3s ease, .3s visibility;
    }

    .tooltip.top > a::after {
        top: -2rem;
        transform: scaleY(-1);
    }

    .tooltip.bottom > a::after {
        top: 100%;
    }

    .tooltip.shown > a::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
        position: absolute;
        color: white;
        background: var(--nimiq-blue-bg);
        padding: 1.5rem;
        border-radius: .5rem;
        transition: opacity .3s ease;
        box-shadow: 0 1.125rem 2.275rem rgba(0, 0, 0, 0.11);
    }

    .tooltip.inverse-theme .tooltip-box {
        color: var(--nimiq-blue);
        background: white;
    }

    .tooltip.transition-position .tooltip-box {
        transition: opacity .3s ease, transform .2s ease, top .2s ease;
    }

    .tooltip-box.v-enter,
    .tooltip-box.v-leave-to {
        opacity: 0;
    }

    .tooltip.top .tooltip-box {
        transform: translateY(-2rem);
    }

    .tooltip.bottom .tooltip-box {
        transform: translateY(2rem);
    }
</style>
