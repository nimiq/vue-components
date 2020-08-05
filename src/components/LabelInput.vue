<template>
    <form class="label-input" @submit.prevent="onBlur" :class="{disabled}">
        <span class="width-finder width-placeholder" ref="widthPlaceholder">{{
            placeholder || $t('Name your address')
        }}</span>
        <span class="width-finder width-value" ref="widthValue">{{liveValue}}</span>
        <input type="text" class="nq-input" :class="{'vanishing': vanishing}"
            :placeholder="placeholder || $t('Name your address')"
            :style="{width: `${this.width}px`}"
            v-model="liveValue"
            :disabled="disabled"
            @input="onInput"
            @blur="onBlur"
            @paste="$emit('paste', $event)"
            ref="input">
    </form>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue, Watch } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';
import I18nMixin from '../i18n/I18nMixin';

@Component({ name: 'LabelInput' })
export default class LabelInput extends Mixins(I18nMixin) {
    @Prop(Number) protected maxBytes?: number;
    @Prop({type: String, default: ''}) private value!: string;
    @Prop({type: String}) private placeholder?: string;
    @Prop({type: Boolean, default: false}) private vanishing!: boolean;
    @Prop({type: Boolean, default: false}) private disabled!: boolean;

    private liveValue: string = '';
    private lastValue: string = '';
    private lastEmittedValue: string = '';
    private width = 50;

    public focus() {
        (this.$refs.input as HTMLInputElement).focus();
    }

    private onInput() {
        if (this.maxBytes) {
            const lengthInBytes = Utf8Tools.stringToUtf8ByteArray(this.liveValue!).byteLength;
            if (lengthInBytes > this.maxBytes) {
                this.liveValue = this.lastValue;
                return;
            }
            this.lastValue = this.liveValue;
        }
        this.$emit('input', this.liveValue);
    }

    private onBlur() {
        if (this.liveValue === this.lastEmittedValue) return;
        this.$emit('changed', this.liveValue);
        this.lastEmittedValue = this.liveValue;
        (this.$refs.input as HTMLInputElement).blur();
    }

    @Watch('value', {immediate: true})
    private updateValue(newValue: string) {
        this.liveValue = newValue;
        this.lastValue = this.liveValue;
        this.lastEmittedValue = this.lastValue;
    }

    @Watch('liveValue', {immediate: true})
    private async updateWidth() {
        await Vue.nextTick(); // Await updated DOM
        if (!this.$refs.widthPlaceholder) return;

        const placeholderWidth = (this.$refs.widthPlaceholder as HTMLSpanElement).offsetWidth;
        const valueWidth = (this.$refs.widthValue as HTMLSpanElement).offsetWidth;

        // Add an additional padding, so entering new letters does not flicker the input before width is adjusted
        //
        // A third of the font-size was found to be a good compromise between not adding too big a gap and
        // still resonably supporting wide letters (it still jumps for W at bigger font-sizes, but that's why
        // it's called a compromise).
        const fontSize = parseFloat(window.getComputedStyle((this.$refs.input as HTMLInputElement), null)
            .getPropertyValue('font-size'));

        this.width = (this.liveValue.length ? valueWidth : placeholderWidth) + fontSize / 3;
    }
}
</script>

<style scoped>
    .label-input {
        position: relative;
        overflow: hidden; /* limit width-finder width to parent available width */
        max-width: 100%;
        box-sizing: border-box;
    }

    .width-finder {
        position: absolute;
        color: transparent;
        pointer-events: none;
        user-select: none;
        white-space: pre;
        padding: 0 2.25rem; /* nq-input padding + border-width */
    }

    input {
        padding-right: 0;
        max-width: 100%;
        transition:
            color .2s ease, box-shadow .2s ease, /* Copied from Nimiq Styles */
            width 50ms ease-out;
    }

    input:disabled {
        pointer-events: none; /* Prevent hover effects */
    }
</style>
