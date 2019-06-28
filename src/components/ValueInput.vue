<template>
    <form class="label-input" @submit.prevent="onBlur" ref="fullWidth">
        <span class="width-finder width-placeholder" ref="widthPlaceholder">{{placeholder}}</span>
        <div v-if="maxFontSize" class="full-width" :class="{'width-finder': maxWidth > 0}" >Width</div>
        <span class="width-finder width-value" :style="{fontSize: `${fontSize}rem`}" ref="widthValue">{{liveValue}}</span>
        <input type="text" class="nq-input nq-light-blue" :class="{'vanishing': vanishing}"
            :placeholder="placeholder"
            :style="{width: `${this.width}px`, fontSize: `${this.fontSize}rem`}"
            v-model="liveValue"
            @input="onInput"
            @blur="onBlur"
            ref="input">
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';
import LabelInput from './LabelInput.vue';

@Component
export default class ValueInput extends LabelInput {
    @Prop(Number) private maxFontSize?: number;
    private fontSize = this.maxFontSize;
    private maxWidth = 0;

    public async mounted() {
        if (this.maxFontSize) {
            this.maxWidth = (this.$refs.fullWidth as HTMLElement).offsetWidth;
        }
    }

    protected onInput() {
        const regExp = new RegExp(/([0-9]*)(\.{0,1})([0-9]{0,5})/g);
        const hits = regExp.exec(this.liveValue);
        if (hits && `${hits[1]}${hits[2]}${hits[3]}` !== this.liveValue) {
            this.liveValue = this.lastValue;
            return;
        }
        if (this.liveValue.length > 0 && this.lastEmittedValue === ''
            || this.liveValue.length === 0 && this.lastEmittedValue !== '') {
            this.$emit('changed', this.liveValue);
            this.lastEmittedValue = this.liveValue;
        }
        this.lastValue = this.liveValue;
    }

    @Watch('liveValue', {immediate: true})
    protected async updateWidth() {
        await Vue.nextTick(); // Await updated DOM
        if (!this.$refs.widthPlaceholder) return;

        const placeholderWidth = (this.$refs.widthPlaceholder as HTMLSpanElement).offsetWidth;
        let valueWidth = (this.$refs.widthValue as HTMLSpanElement).offsetWidth;

        if (this.maxFontSize && this.width > this.maxWidth || valueWidth < this.maxWidth) {
            this.fontSize = Math.min(this.maxFontSize, Math.max(1,
                this.fontSize * (this.maxWidth / valueWidth),
            ));
        }

        await Vue.nextTick(); // Await updated DOM
        valueWidth = (this.$refs.widthValue as HTMLSpanElement).offsetWidth;

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
        transition: width 50ms ease-out;
        text-align: center;
    }

    .full-width {
        width: 1000px;
    }
</style>
