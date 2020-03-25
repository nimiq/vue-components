<template>
    <span class="tooltip"
        :class="{ active: tooltipActive }"
        @mouseenter="mouseOver(true)"
        @mouseleave="mouseOver(false)"
    >
        <a href="javascript:void(0);"
            ref="tooltipTrigger"
            @focus.stop="toggleTooltip"
            @blur.stop="tooltipToggled ? toggleTooltip() : ''"
            :class="{
                top: tooltipPosition === 'top',
                bottom: tooltipPosition === 'bottom',
            }">
            <slot name="trigger">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
        </a>
        <transition :duration="isTakingInitialMeasurement ? 0 : undefined">
            <div ref="tooltipBox"
                v-if="tooltipActive || isTakingInitialMeasurement"
                class="tooltip-box"
                :style="styles"
                :class="{
                    top: tooltipPosition === 'top',
                    bottom: tooltipPosition === 'bottom',
                }">
                <slot></slot>
            </div>
        </transition>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AlertTriangleIcon } from './Icons';

@Component({ components: { AlertTriangleIcon }})
export default class Tooltip extends Vue {
    @Prop(Object) public reference?: Vue | {$el: HTMLElement};

    // Typing of $refs and $el, in order to not having to cast it everywhere.
    public $refs!: {
        tooltipBox?: HTMLDivElement,
        tooltipTrigger: HTMLAnchorElement,
    };
    public $el: HTMLElement;

    private tooltipPosition: 'top' | 'bottom' = 'top';
    private tooltipToggled: boolean = false;
    private isTakingInitialMeasurement: boolean = true; // take an initial measurement to avoid jumping on first display
    private mousedOver: boolean = false;
    private mouseOverTimeout: number;

    private triggerHeight: number = 0;
    private height: number = 0;
    private width: number = 0;
    private left: number = 0;
    private top: number = 0;

    private get styles() {
        // note that we let the browser calculate height automatically
        return {
            top: this.top + 'px',
            left: this.left + 'px',
            width: this.reference ? this.width + 'px' : 'auto',
        };
    }

    private get tooltipActive() {
        return this.tooltipToggled || this.mousedOver;
    }

    private created() {
        this.updateVerticalPosition = this.updateVerticalPosition.bind(this);
    }

    private destroyed() {
        if (this.reference && this.reference.$el) {
            this.reference.$el.removeEventListener('scroll', this.updateVerticalPosition);
        }
    }

    @Watch('tooltipActive', { immediate: true })
    public async update() {
        // updates dimensions and repositions tooltip
        if (!this.tooltipActive && !this.isTakingInitialMeasurement) return; // no need to update as tooltip not visible
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

            const referenceLeftPad = parseInt(
                window.getComputedStyle(reference.$el, null).getPropertyValue('padding-left'), 10);

            const referenceRightPad = parseInt(
                window.getComputedStyle(reference.$el, null).getPropertyValue('padding-right'), 10);

            this.width = (reference.$el as HTMLElement).offsetWidth - referenceLeftPad - referenceRightPad;
            this.left =
                reference.$el.getBoundingClientRect().left
                - this.$el.getBoundingClientRect().left
                + referenceLeftPad;
        }

        // make sure that tooltipBox is rendered and apply new width then update measurements
        await Vue.nextTick();
        if (!this.tooltipActive && !this.isTakingInitialMeasurement) return; // tooltip not visible anymore?
        this.height = this.$refs.tooltipBox.offsetHeight;
        this.width = this.$refs.tooltipBox.offsetWidth;
        this.triggerHeight = this.$refs.tooltipTrigger.offsetHeight;

        if (!reference) {
            const triggerWidth = this.$refs.tooltipTrigger.offsetWidth;
            this.left = -this.width / 2 + triggerWidth / 2;
        }

        this.updateVerticalPosition();

        this.isTakingInitialMeasurement = false;
        setTimeout(() => this.$el.style.overflow = 'unset', this.tooltipActive ? 0 : 300);
    }

    private updateVerticalPosition() {
        if (this.reference) {
            // position tooltip such that it best fits reference element
            if (this.reference.$el.scrollTop < this.$el.offsetTop - this.height) {
                this.tooltipPosition = 'top';
                this.top = -this.height;
            } else {
                this.tooltipPosition = 'bottom';
                this.top = this.triggerHeight;
            }
        } else {
            this.tooltipPosition = 'top';
            this.top = -this.height;
        }
    }

    @Watch('reference', { immediate: true })
    private async setReference(newReference: Vue | {$el: HTMLElement}, oldReference: Vue | {$el: HTMLElement}) {
        if (oldReference && oldReference.$el) {
            oldReference.$el.removeEventListener('scroll', this.updateVerticalPosition);
        }

        if (newReference) {
            if (!newReference.$el && newReference instanceof Vue) {
                // wait until reference is mounted if it's a Vue instance
                await new Promise((resolve) => (newReference as Vue).$once('hook:mounted', resolve));
                if (newReference !== this.reference) return; // reference changed
            }
            // In case the reference container is scrollable add a listener
            if (newReference.$el.scrollHeight !== (newReference.$el as HTMLElement).offsetHeight) {
                this.reference.$el.addEventListener('scroll', this.updateVerticalPosition);
            }
        }

        await this.update();
    }

    private async toggleTooltip() {
        this.tooltipToggled = !this.tooltipToggled;

        if (!this.tooltipToggled) {
            this.$refs.tooltipTrigger.blur();
        }
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
</script>

<style scoped>
    .tooltip {
        display: block;
        position: relative;
        line-height: 1;
        overflow: hidden; /* avoid showing potential scrollbars for wrongly positioned tooltip on initial measurement */
    }

    .tooltip > a {
        position: relative;
        display: block;
        text-decoration: none;
    }

    .tooltip > a >>> svg {
        display: block;
    }

    .tooltip > a::after {
        opacity: 0;
        content: '';
        display: block;
        position: absolute;
        left: calc(50% - 1rem);
        border-width: 1rem;
        border-style: solid;
        transition: bottom .2s ease, top .2s ease, opacity .3s ease, .3s visibility;
        transition-delay: 16ms; /* delay one animation frame for better sync with tooltipBox */
        visibility: hidden;
        pointer-events: visible;
    }

    .tooltip > a.top::after {
        border-color: var(--nimiq-blue-darkened) transparent transparent transparent;
        top: -2rem;
        bottom: 0;
    }

    .tooltip > a.bottom::after {
        border-color: transparent transparent var(--nimiq-blue-darkened) transparent;
        top: 0;
        bottom: -2rem;
    }

    .tooltip.active > a::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
        position: absolute;
        color: white;
        background: var(--nimiq-blue-bg);
        padding: 1.5rem;
        border-radius: .5rem;
        transition: opacity .3s ease, visibility .3s, transform .2s ease, top .2s ease;
        box-shadow: 0 1.125rem 2.275rem rgba(0, 0, 0, 0.11);
        visibility: hidden; /* for hiding on initial measurement */
    }

    .tooltip-box.v-enter,
    .tooltip-box.v-leave-to {
        opacity: 0;
    }

    .tooltip-box.bottom {
        transform: translateY(2rem);
    }

    .tooltip-box.top {
        transform: translateY(-2rem);
    }

    .tooltip.active .tooltip-box {
        visibility: visible;
    }
</style>
