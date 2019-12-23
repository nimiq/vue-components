<template>
    <span class="tooltip" :class="{active: tooltipActive}">
        <a href="javascript:void(0);"
            @click="toggleTooltip"
            @mouseenter="mousOver(true)"
            @mouseleave="mousOver(false)"
            :class="{top: tooltipPosition === 'top', bottom: tooltipPosition === 'bottom'}">
            <slot name="icon">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
        </a>
        <div :style="styles"
            ref="tooltipBox"
            class="tooltip-box"
            :class="{active: tooltipActive, top: tooltipPosition === 'top', bottom: tooltipPosition === 'bottom'}">
            <slot></slot>
        </div>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AlertTriangleIcon } from './Icons';

@Component({components: { AlertTriangleIcon }})
export default class Tooltip extends Vue {
    // Only $el of the reference is of interest
    @Prop(Object) public reference?: {$el : HTMLElement};

    // Typing of $refs and $el, in order to not having to cast it everywhere.
    public $refs!: {
        tooltipBox: HTMLElement,
    }
    public $el: HTMLElement;

    private tooltipPosition: 'top' | 'bottom' = 'top';

    private tooltipToggled: boolean = false;
    private mousedOver: boolean = false;

    private iconHeight: number = 0;
    private height: number = 0;
    private width: number = 0;
    private left: number = 0;
    private top: number = 0;

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
        if (!this.height) { // If setReference hasn't run yet position the tooltip centered on top
            this.width = this.$refs.tooltipBox.offsetWidth;
            this.height = this.$refs.tooltipBox.offsetHeight;
            return;
        }
        if (this.$refs.tooltipBox.parentElement === this.$el) {
            this.tooltipPosition = 'top';
            this.top = -this.height;
            this.left = -this.width / 2 + this.$el.offsetWidth / 2;
        } else {
            this.top = this.$el.offsetTop - this.height;

            if (this.reference.$el.scrollTop < this.top) {
                this.tooltipPosition = 'top';
            } else {
                this.tooltipPosition = 'bottom';
                this.top += this.iconHeight;
            }
        }

    }

    @Watch('reference', {immediate: true})
    private async setReference() {
        if (!this.reference || this.$refs.tooltipBox.parentElement !== this.$el) {
             // If this.reference is null wait for the reference to get passed on.
             // Also skip if already set up indicated by the moved tooltipBox.
            return;
        }

        // Move the element
        this.$refs.tooltipBox.parentElement.removeChild(this.$refs.tooltipBox);
        this.reference.$el.appendChild(this.$refs.tooltipBox);

        // Compute fixed positions
        this.left = parseInt(
            window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-left'), 10);

        this.width = this.reference.$el.offsetWidth - this.left - parseInt(
            window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-right'), 10);

        this.iconHeight = this.$el.offsetHeight;
        // reset height
        this.height = 0;
        await Vue.nextTick();
        // Height depends on width, soo wait a tick fot it to update

        this.height = this.$refs.tooltipBox.offsetHeight;

        // calculate variable positions.
        this.update();

        // In case the reference container is scrollable add a listener
        if (this.reference.$el.scrollHeight !== this.reference.$el.offsetHeight) {
            this.reference.$el.addEventListener('scroll', this.update.bind(this));
        }
    }

    private async toggleTooltip() {
        if (!this.height) {
            console.warn('Trying to toggle tooltip before dimensions are set.');
            return;
        }
        this.update();
        this.tooltipToggled = !this.tooltipToggled;
    }

    private mousOver(mouseOverTooltip: boolean) {
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
        transform: translateY(calc(100% + 2rem));
    }

    .tooltip-box.top {
        transform: translateY(-2rem);
    }

    .tooltip-box.active {
        visibility: visible;
        opacity: 1;
    }
</style>
