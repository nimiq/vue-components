<template>
    <span class="tooltip"
        :class="{ active: tooltipActive }"
        @mouseenter="mouseOver(true)"
        @mouseleave="mouseOver(false)"
    >
        <a href="javascript:void(0);"
            ref="tooltipIcon"
            @focus.stop="toggleTooltip"
            @blur.stop="tooltipToggled ? toggleTooltip() : ''"
            :class="{
                top: tooltipPosition === 'top',
                bottom: tooltipPosition === 'bottom',
            }">
            <slot name="icon">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
        </a>
        <div ref="tooltipBox"
            class="tooltip-box"
            :style="styles"
            :class="{
                active: tooltipActive,
                top: tooltipPosition === 'top',
                bottom: tooltipPosition === 'bottom',
            }">
            <slot></slot>
        </div>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AlertTriangleIcon } from './Icons';

@Component({ components: { AlertTriangleIcon }})
export default class Tooltip extends Vue {
    // Only $el of the reference is of interest
    @Prop(Object) public reference?: {$el : HTMLElement};

    // Typing of $refs and $el, in order to not having to cast it everywhere.
    public $refs!: {
        tooltipBox: HTMLDivElement,
        tooltipIcon: HTMLAnchorElement,
    }
    public $el: HTMLElement;

    private tooltipPosition: 'top' | 'bottom' = 'top';
    private tooltipToggled: boolean = false;
    private mousedOver: boolean = false;
    private mouseOverTimeout: number | NodeJS.Timer;

    private iconHeight: number = 0;
    private height: number = 0;
    private width: number = 0;
    private left: number = 0;
    private top: number = 0;

    private async mounted() {
        this.update();
    }

    private get styles() {
        if (this.width && this.top) {
            return {
                height: this.height + 'px',
                top: this.top + 'px',
                left: this.left + 'px',
                width: this.width + 'px',
            };
        }
        // needed in setReference
        if (this.width) {
            return {
                width: this.width + 'px',
            };
        }
        return {};
    }

    private get tooltipActive() {
        return this.tooltipToggled || this.mousedOver;
    }

    public update() {
        if (this.reference && this.$el) {
            const referenceLeftPad = parseInt(
                window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-left'), 10);
            this.left = this.reference.$el.getBoundingClientRect().left - this.$el.getBoundingClientRect().left + referenceLeftPad;

            if (this.reference.$el.scrollTop < this.$el.offsetTop - this.height) {
                this.tooltipPosition = 'top';
                this.top = -this.height;
            } else {
                this.tooltipPosition = 'bottom';
                this.top = this.iconHeight;
            }
        } else {
            this.tooltipPosition = 'top';
            this.width = this.$refs.tooltipBox.offsetWidth;
            this.height = this.$refs.tooltipBox.offsetHeight;
            this.top = -this.height;
            this.left = -this.width / 2 + this.$el.offsetWidth / 2;
        }

    }

    @Watch('reference', { immediate: true })
    @Watch('$el', { immediate: true })
    private async setReference() {
        if (this.reference && this.$el) {
            // Compute fixed positions
            const referenceLeftPad = parseInt(
                window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-left'), 10);

            const referenceRightPad = parseInt(
                window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-right'), 10);

            this.width = this.reference.$el.offsetWidth - referenceLeftPad - referenceRightPad;

            this.iconHeight = this.$el.offsetHeight;
            // reset height
            this.height = 0;
            this.top = 0;
            await Vue.nextTick();
            // Height depends on width, so wait a tick fot it to update

            this.height = this.$refs.tooltipBox.offsetHeight;

            // calculate variable positions.
            this.update();

            // In case the reference container is scrollable add a listener
            if (this.reference.$el.scrollHeight !== this.reference.$el.offsetHeight) {
                this.reference.$el.addEventListener('scroll', this.update.bind(this));
            }
        }
    }

    private async toggleTooltip() {
        if (!this.height) {
            console.warn('Trying to toggle tooltip before dimensions are set.');
            return;
        }
        this.update();
        this.tooltipToggled = !this.tooltipToggled;

        if (!this.tooltipToggled) {
            this.$refs.tooltipIcon.blur();
        }
    }

    private mouseOver(mouseOverTooltip: boolean) {
        if (mouseOverTooltip === false) { // mouseleave
            this.mouseOverTimeout = setTimeout(
                () => this._updateMouseOverTooltip(mouseOverTooltip),
                100
            );
        } else { // mouseenter
            clearTimeout(this.mouseOverTimeout as number);
            this._updateMouseOverTooltip(mouseOverTooltip);
        }
    }

    private _updateMouseOverTooltip(mouseOverTooltip: boolean) {
        this.update();
        this.mousedOver = mouseOverTooltip;
    }
}
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
        transition: bottom .2s ease, top .2s ease, opacity .3s ease;
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

    .tooltip a:focus::after,
    .tooltip a:hover::after,
    .tooltip.active > a::after {
        opacity: 1;
        visibility: visible;
    }

    .tooltip-box {
        position: absolute;
        visibility: hidden;
        pointer-events: visible;
        color: white;
        background: var(--nimiq-blue-bg);
        padding: 1.5rem;
        border-radius: .5rem;
        transition: opacity .3s ease, transform .2s ease, top .2s ease;
        opacity: 0;
        box-shadow: 0 1.125rem 2.275rem rgba(0, 0, 0, 0.11);
    }

    .tooltip-box.bottom {
        transform: translateY(2rem);
    }

    .tooltip-box.top {
        transform: translateY(-2rem);
    }

    .tooltip a:focus ~ .tooltip-box,
    .tooltip a:hover ~ .tooltip-box,
    .tooltip.active .tooltip-box {
        visibility: visible;
        opacity: 1;
    }
</style>
