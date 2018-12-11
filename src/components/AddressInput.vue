<template>
    <form class="address-input" @submit.prevent="changed">
        <div class="form-row">
            <input type="text" maxlength="4" @input="onInput(0)" ref="input0" placeholder="NQ">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(1)" ref="input1">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(2)" ref="input2">
        </div>
        <div class="form-row">
            <input type="text" maxlength="4" @input="onInput(3)" ref="input3">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(4)" ref="input4">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(5)" ref="input5">
        </div>
        <div class="form-row">
            <input type="text" maxlength="4" @input="onInput(6)" ref="input6">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(7)" ref="input7">
            <div class="dash"></div>
            <input type="text" maxlength="4" @input="onInput(8)" ref="input8">
        </div>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';

@Component({components: {}})
export default class Input extends Vue {
    @Prop({type: String, default: ''}) private value!: string;
    @Prop({type: String, default: 'Name your account'}) private placeholder!: string;

    private addressChunks: string[] = [];

    public focus(index = 0) {
        (this.$refs[`input${index}`] as HTMLInputElement).focus();
    }

    private onInput(index: number) {
        const input = (this.$refs[`input${index}`] as HTMLInputElement);
        const value = input.value.toUpperCase();

        let cleanValue: string;
        if (index === 0) {
            switch (value.length) {
                case 1: cleanValue = value === 'N' ? value : ''; break;
                case 2: cleanValue = value === 'NQ' ? value : 'N'; break;
                case 3: cleanValue = `NQ${!isNaN(parseInt(value[2], 10)) ? value[2] : ''}`; break;
                case 4: cleanValue = `NQ${value[2]}${!isNaN(parseInt(value[3], 10)) ? value[3] : ''}`; break;
                default: cleanValue = '';
            }
        } else {
            // Replace all letters that do not appear in Nimiq addresses
            cleanValue = value.replace(/[^0123456789ABCDEFGHJKLMNPQRSTUVXY]/g, '');
        }

        if (cleanValue !== value) input.value = cleanValue;

        if (cleanValue.length === 4 && index < 8) {
            this.focus(index + 1);
        }

        this.changed(index, cleanValue);
    }

    private changed(index: number, value: string) {
        this.addressChunks[index] = value;

        const address = this.addressChunks.join(' ');
        if (address.length !== 44) return;

        // Validate address
        if (ValidationUtils.isValidAddress(address)) this.$emit('changed', address);
        else console.log('Invalid address:', address);
    }
}
</script>

<style scoped>
    .address-input {
        display: block;
        width: 100%;
        width: calc(28.25 * var(--nimiq-size, 8px));
        font-family: 'Fira Mono', monospace;
        font-size: calc(3 * var(--nimiq-size, 8px));
    }

    .form-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: calc(1 * var(--nimiq-size, 8px));
    }

    .form-row:last-child {
        margin-bottom: 0;
    }

    input {
        background: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: rgba(31, 35, 72, 0.7);
        font-weight: inherit;
        margin: 0;
        padding: calc(0.125 * var(--nimiq-size, 8px)) calc(0.5 * var(--nimiq-size, 8px));
        line-height: 1.11;
        height: 100%;
        border: calc(0.25 * var(--nimiq-size, 8px)) solid transparent;
        border-radius: calc(0.5 * var(--nimiq-size, 8px));
        max-width: calc(8.75 * var(--nimiq-size, 8px));
        box-sizing: border-box;
        border-color: rgba(31, 35, 72, 0.1);
        text-transform: uppercase;
    }

    .dash {
        width: calc(1 * var(--nimiq-size, 8px));
        height: calc(0.25 * var(--nimiq-size, 8px));
        background: rgba(31, 35, 72, 0.1);
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
