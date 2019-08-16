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
    @Prop(Object) public reference?: any;

    private tooltipPosition: string = 'top'; // 'top' | 'bottom'
    private isInSrollableContainer: boolean = false;

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
        if (!this.height) { // skip if setReference hasn't run yet.
            console.warn('Trying to update tooltip before reference is set.');
            return;
        }

        this.top = (this.$el as HTMLElement).offsetTop - this.height;

        if ((this.reference.$el as HTMLElement).scrollTop < this.top) {
            this.tooltipPosition = 'top';
        } else {
            this.tooltipPosition = 'bottom';
            this.top += this.iconHeight;
        }
    }

    @Watch('reference', {immediate: true})
    private async setReference() {
        if (!this.reference || this.height) {
             // Wait for the reference to get passed on
             // Skip if already set up.
            return;
        }

        // Move the element
        (this.$refs.tooltipBox as HTMLElement).parentElement.removeChild(this.$refs.tooltipBox as HTMLElement);
        (this.reference.$el as HTMLElement).appendChild(this.$refs.tooltipBox as HTMLElement);

        // Compute fixed positions
        this.left = parseInt(
            window.getComputedStyle(this.reference.$el as HTMLElement, null).getPropertyValue('padding-left'), 10);

        this.width = (this.reference.$el as HTMLElement).offsetWidth - this.left - parseInt(
            window.getComputedStyle(this.reference.$el as HTMLElement, null).getPropertyValue('padding-right'), 10);

        this.iconHeight = (this.$el as HTMLElement).offsetHeight;
        await Vue.nextTick();
        // Height depends on width, soo calculate in vues next tick

        this.height = (this.$refs.tooltipBox as HTMLDivElement).offsetHeight;

        // calculate variable positions.
        this.update();

        // In case the reference container is scrollable add a listener
        if ((this.reference.$el as HTMLElement).scrollHeight !== (this.reference.$el as HTMLElement).offsetHeight) {
            (this.reference.$el as HTMLElement).addEventListener('scroll', this.update.bind(this));
            this.isInSrollableContainer = true;
        }
    }

    private async toggleTooltip() {
        if (!this.height) {
            console.warn('Trying to toggle tooltip before reference is set.');
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
        display: inline-block;
        position: relative;
        line-height: 1;
    }

    .tooltip > a {
        position: relative;
        display: inline-block;
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
