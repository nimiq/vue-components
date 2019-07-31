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
                @blur="onBlur"
                ref="input">
        </form>
        <span>NIM</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';
import LabelInput from './LabelInput.vue';

@Component
export default class AmountInput extends Vue {
    @Prop(Number) private maxFontSize?: number;
    @Prop({type: Number}) private value?: number;
    @Prop({type: Number, default: 2100000000000000}) private maxValue!: number;
    @Prop({type: String, default: '0.00'}) private placeholder!: string;

    private liveValue = null;
    private lastValue = this.value;
    private lastEmittedValue = this.value;
    private showDot = false;
    private width = 50;
    private fontSize = this.maxFontSize;
    private maxWidth = 0;

    public async mounted() {
        if (this.maxFontSize) {
            this.maxWidth = (this.$refs.fullWidth as HTMLElement).offsetWidth;
        }
        this.liveValue = this.value;
    }

    public focus() {
        (this.$refs.input as HTMLInputElement).focus();
    }

    private onBlur() {
        if (this.liveValue === this.lastEmittedValue) return;
        this.$emit('changed', this.liveValue);
        this.lastEmittedValue = this.liveValue;
        (this.$refs.input as HTMLInputElement).blur();
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
        if (!this.liveValue) return null;
        return `${Number(this.liveValue / 1e5)}${this.showDot ? '.' : ''}`;
    }

    public set formattedValue(value: string) {
        if (!value) {
            this.liveValue = null;
        }
        value = value.replace(/\,/, '.');
        const regExp = new RegExp(/(\d*)(\.(\d{0,5}))?/g);
        const regExpResult = regExp.exec(value);
        if (regExpResult[1]) {
            this.liveValue = Number(`${regExpResult[1]}${regExpResult[2] ? regExpResult[3].padEnd(5, '0') : '00000'}`);
            if (this.liveValue > this.maxValue) this.liveValue = this.maxValue;
        }

        if (this.liveValue > 0 && !this.lastEmittedValue) {
            this.$emit('changed', this.liveValue);
            this.lastEmittedValue = this.liveValue;
        }
        if (!this.liveValue && this.lastEmittedValue > 0) {
            this.$emit('changed', 0);
            this.lastEmittedValue = 0;
        }
        this.showDot = regExpResult[2] === '.' && regExpResult[3] === '';
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
