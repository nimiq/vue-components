<template>
    <form class="label-input" @submit.prevent="onBlur">
        <span class="width-finder width-placeholder" ref="widthPlaceholder">{{placeholder}}</span>
        <span class="width-finder width-value" ref="widthValue">{{liveValue}}</span>
        <input type="text" class="nq-input"
            :placeholder="placeholder"
            :style="{width: `${this.width}px`}"
            v-model="liveValue"
            @input="onInput"
            @blur="onBlur"
            ref="input">
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';

@Component
export default class LabelInput extends Vue {
    @Prop(Number) protected maxBytes?: number;
    @Prop({type: String, default: ''}) private value!: string;
    @Prop({type: String, default: 'Name your address'}) private placeholder!: string;

    private liveValue = this.value;
    private lastValue = this.value;
    private lastEmittedValue = this.value;
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
    }

    private onBlur() {
        if (this.liveValue === this.lastEmittedValue) return;
        this.$emit('changed', this.liveValue);
        this.lastEmittedValue = this.liveValue;
        (this.$refs.input as HTMLInputElement).blur();
    }

    @Watch('liveValue', {immediate: true})
    private async updateWidth() {
        await Vue.nextTick(); // Await updated DOM
        if (!this.$refs.widthPlaceholder) return;

        const placeholderWidth = (this.$refs.widthPlaceholder as HTMLSpanElement).offsetWidth;
        const valueWidth = (this.$refs.widthValue as HTMLSpanElement).offsetWidth;

        // Add a padding, so entering new letters does not flicker the input before width is adjusted
        this.width = Math.max(placeholderWidth, valueWidth) + 20;
    }
}
</script>

<style scoped>
    .label-input {
        display: inline;
        position: relative;
    }

    .width-finder {
        position: absolute;
        color: transparent;
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
    }

    input {
        box-sizing: content-box;
        padding-right: 0;
    }
</style>
