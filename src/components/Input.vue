<template>
    <form class="label-input" @submit.prevent="changed">
        <input type="text"
            :placeholder="placeholder"
            :style="{width: `${Math.max(placeholder.length, liveValue.length) + 1}ch`}"
            v-model="liveValue"
            @input="input"
            @blur="changed"
            ref="input">
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Utf8Tools } from '@nimiq/utils';

@Component({components: {}})
export default class Input extends Vue {
    @Prop(Number) protected maxBytes?: number;
    @Prop({type: String, default: ''}) private value!: string;
    @Prop({type: String, default: 'Name your account'}) private placeholder!: string;

    private liveValue = this.value;
    private lastValue = this.value;
    private lastEmittedValue = this.value;

    public focus() {
        (this.$refs.input as HTMLInputElement).focus();
    }

    public input() {
        if (this.maxBytes) {
            const lengthInBytes = Utf8Tools.stringToUtf8ByteArray(this.liveValue!).byteLength;
            if (lengthInBytes > this.maxBytes) {
                this.liveValue = this.lastValue;
                return;
            }
        }
        this.lastValue = this.liveValue;
    }

    private changed() {
        if (this.liveValue === this.lastEmittedValue) return;
        this.$emit('changed', this.liveValue);
        this.lastEmittedValue = this.liveValue;
        (this.$refs.input as HTMLInputElement).blur();
    }
}
</script>

<style scoped>
    .label-input {
        display: inline;
    }

    input {
        background: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: rgba(31, 35, 72, 0.7);
        font-weight: inherit;
        margin: 0;
        padding: calc(0.75 * var(--nimiq-size, 8px));
        line-height: 1.11;
        height: calc(2.5 * var(--nimiq-size, 8px));
        border: calc(0.25 * var(--nimiq-size, 8px)) solid transparent;
        border-radius: calc(0.5 * var(--nimiq-size, 8px));
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-color: rgba(31, 35, 72, 0.1);
        transition: width 200ms ease-out, border 200ms, color 200ms;
    }

    input::placeholder {
        color: rgba(5, 130, 202, 0.7);
    }

    input:hover,
    input:focus {
        border-color: rgba(31, 35, 72, 0.16);
    }

    input:focus {
        color: rgb(5, 130, 202);
    }
</style>
