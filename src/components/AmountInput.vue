<template>
    <div class="amount">
        <form class="label-input" @submit.prevent="onBlur" ref="fullWidth">
            <span class="width-finder width-placeholder" ref="widthPlaceholder">{{placeholder}}</span>
            <div v-if="maxFontSize" class="full-width" :class="{'width-finder': maxWidth > 0}" >Width</div>
            <span class="width-finder width-value" ref="widthValue">{{formattedValue || ''}}</span>
            <input type="text" class="nq-input nq-light-blue vanishing"
                :placeholder="placeholder"
                :style="{width: `${this.width}px`, fontSize: `${this.fontSize}rem`}"
                v-model="formattedValue"
                ref="input">
        </form>
        <span>NIM</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';

@Component
export default class AmountInput extends Vue {
    @Prop({type: Number, default: 8}) private maxFontSize!: number;
    @Prop({type: Number}) private amount?: number;
    @Prop({type: String, default: '0.00'}) private placeholder!: string;

    private liveValue: string = '';
    private lastEmittedValue = 0;
    private width = 50;
    private fontSize = this.maxFontSize;
    private maxWidth = 0;
    private valueInLuna = 0;

    public async mounted() {
        if (this.maxFontSize) {
            this.maxWidth = (this.$refs.fullWidth as HTMLElement).offsetWidth;
        }
        this.formattedValue = this.amount ? (this.amount / 1e5).toString() : '';
        if (!this.formattedValue) this.updateWidth();
    }

    public focus() {
        (this.$refs.input as HTMLInputElement).focus();
    }

    @Watch('formattedValue')
    private async updateWidth() {
        await Vue.nextTick(); // Await updated DOM
        if (!this.$refs.widthPlaceholder) return;

        const placeholderWidth = (this.$refs.widthPlaceholder as HTMLSpanElement).offsetWidth;
        const valueWidth = (this.$refs.widthValue as HTMLSpanElement).offsetWidth;
        const fontSizeFactor = Math.min(1.0, Math.max(this.maxWidth / valueWidth, 1 / this.maxFontSize));

        this.fontSize = fontSizeFactor * this.maxFontSize;
        this.width = (this.formattedValue ? (fontSizeFactor === 1 ? valueWidth : this.maxWidth) : placeholderWidth);
    }

    public get formattedValue() {
        return this.liveValue;
    }

    public set formattedValue(value: string) {
        if (!value) {
            this.liveValue = '';
            this.$emit('changed', 0);
            this.lastEmittedValue = 0;
            this.valueInLuna = 0;
            return;
        }
        value = value.replace(/\,/, '.');
        const regExp = new RegExp(/(\d*)(\.(\d{0,5}))?/g);
        const regExpResult = regExp.exec(value)!;
        if (regExpResult[1] || regExpResult[2]) {
            this.liveValue = `${regExpResult[1] ? regExpResult[1] : '0'}${regExpResult[2] ? regExpResult[2] : ''}`;
            this.valueInLuna = Number(
                `${regExpResult[1]}${regExpResult[2] ? regExpResult[3].padEnd(5, '0') : '00000'}`,
            );
        }

        if (this.lastEmittedValue !== this.valueInLuna) {
            this.$emit('changed', this.valueInLuna);
            this.lastEmittedValue = this.valueInLuna;
        }

        // Trigger a valueChange for the getter.
        this.$forceUpdate();
    }
}
</script>

<style scoped>
    .label-input {
        position: relative;
        overflow: hidden; /* limit width-finder width to parent available width */
        max-width: 100%;
        height: 100%;
    }

    .width-finder {
        position: absolute;
        color: transparent;
        pointer-events: none;
        user-select: none;
        white-space: pre;
        padding: 1.25rem;
    }

    input {
        padding: 1rem 0.25rem;
        max-width: 100%;
        transition: width 50ms ease-out;
        text-align: center;
    }

    .full-width {
        width: 1000px;
    }

    .amount {
        display: flex;
        align-items: baseline;
        justify-content: center;
        width: 100%;
        font-size: 8rem;
    }

    .amount form {
        display: flex;
    }

    .amount > span {
        padding-left: 1rem;
        font-size: 4rem;
        font-weight: 700;
        line-height: 4.5rem;
        color: var(--nimiq-light-blue);
    }
</style>