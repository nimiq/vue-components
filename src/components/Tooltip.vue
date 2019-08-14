<template>
    <span class="tooltip" :class="{active: tooltipActive}">
        <a href="javascript:void(0);"
            @click="toggleTooltip"
            :class="{top: tooltipPosition === 'top', bottom: tooltipPosition === 'bottom'}">
            <slot name="icon">
                <AlertTriangleIcon class="nq-orange" />
            </slot>
        </a>
        <div :style="styles" ref="tooltipBox" class="tooltip-box">
            <slot></slot>
        </div>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AlertTriangleIcon } from './Icons';

@Component({components: { AlertTriangleIcon }})
export default class Tooltip extends Vue {
    private static CARET_SIZE = 10;

    @Prop(Object) public reference?: any;

    private tooltipActive: boolean = false;
    private height: number = 0;
    private width: number = 0;
    private left: number = 0;
    private top: number = 0;
    private immutableTop: number = 0;
    private tooltipPosition: string = 'top';

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

    @Watch('reference', {immediate: true})
    public async setReference() {
        if (!this.reference) return; // Wait for the reference to get passed on
        console.log(this.reference);
        await Vue.nextTick();
        this.width = (this.reference.$el as HTMLElement).offsetWidth * 2 / 3;
        this.left = (this.reference.$el as HTMLElement).offsetLeft
                + (this.reference.$el as HTMLElement).offsetWidth / 6
                - (this.$el as HTMLElement).offsetLeft
                - (this.$el as HTMLElement).offsetWidth / 2;

        await Vue.nextTick();
        this.height = (this.$refs.tooltipBox as HTMLDivElement).offsetHeight;
        this.immutableTop = (this.reference.$el as HTMLElement).offsetTop
                        + this.height
                        + Tooltip.CARET_SIZE
                        - (this.$el as HTMLElement).offsetTop;

        this.calculateBoundingBox();

        if ((this.reference.$el as HTMLElement).scrollHeight !== (this.reference.$el as HTMLElement).offsetHeight) {
            (this.reference.$el as HTMLElement).addEventListener('scroll', this.calculateBoundingBox.bind(this));
        }

    }

    public calculateBoundingBox() {
        if (this.immutableTop + (this.reference.$el as HTMLElement).scrollTop < 0) {
            this.top = -this.height - Tooltip.CARET_SIZE;
            this.tooltipPosition = 'top';
        } else {
            this.top = (this.$el as HTMLElement).offsetHeight + Tooltip.CARET_SIZE;
            this.tooltipPosition = 'bottom';
        }
    }

    private toggleTooltip() {
        if (!this.height) this.setReference();
        this.tooltipActive = !this.tooltipActive;
    }
}
</script>

<style scoped>
    .tooltip {
        display: inline-block;
        position: relative;
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
        left: calc(50% - .625rem);
        border-width: .625rem;
        border-style: solid;
        transition: bottom .3s ease, opacity .3s ease;
        border-color: var(--nimiq-blue) transparent transparent transparent;
        visibility: hidden;
        pointer-events: visible;
    }

    .tooltip:hover > a::after,
    .tooltip.active > a::after {
        transition: bottom .3s ease, opacity .3s ease;
        opacity: 1;
        visibility: visible;
    }

    .tooltip:hover > a.top::after,
    .tooltip.active > a.top::after {
        transform: rotateX(0deg);
        bottom: 2.875rem;
    }

    .tooltip:hover > a.bottom::after,
    .tooltip.active > a.bottom::after {
        transform: rotateX(180deg);
        bottom: -1.25rem;
    }

    .tooltip > .tooltip-box {
        position: absolute;
        visibility: hidden;
        pointer-events: visible;
        color: white;
        background: var(--nimiq-blue-bg);
        padding: 1rem;
        border-radius: .5rem;
        transition: top .3s ease, opacity .3s ease;
        opacity: 0;
    }

    .tooltip:hover > .tooltip-box,
    .tooltip.active > .tooltip-box {
        visibility: visible;
        opacity: 1;
    }
</style>
