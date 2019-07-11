<template>
    <div class="address-input">
        <textarea ref="textarea" placeholder="NQ" spellcheck="false" autocomplete="off"
            @keydown="_onKeyDown" @input="_onInput" @paste="_onPaste" @cut="_onCut"
        ></textarea>
        <template v-for="i in 9">
            <div class="block"></div>
            <div v-if="i % 3" class="block-connector"></div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {
    onChange as inputFormatOnChange,
    onPaste as inputFormatOnPaste,
    onCut as inputFormatOnCut,
    onKeyDown as inputFormatOnKeyDown,
} from 'input-format';
import { ValidationUtils } from '@nimiq/utils';

@Component
export default class AddressInput extends Vue {
    // definiton of the parse method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _parse(char: string, value: string) {
        value = value.replace(/ /g, '');
        if (value.length >= 36) return; // reject characters when full address length (without spaces) is reached

        char = char.toUpperCase();

        // Handle I, O, W, Z which are the only characters missing in Nimiq's Base 32 address alphabet
        switch (char) {
            case 'I': char = '1'; break;
            case 'O': char = '0'; break;
            case 'Z': char = '2'; break;
            case 'W': return; // reject character
        }

        const isNumeric = char >= '0' && char <= '9';
        const isAlphaNumeric = isNumeric || (char >= 'A' && char <= 'Z');
        if (!isAlphaNumeric
            || (value === '' && char !== 'N' && !isNumeric) // Must start with N or the checksum (then NQ gets added)
            || (value === 'N' && char !== 'Q') // Only Q allowed after starting N
            || (value.length >= 2 && value.length < 4 && !isNumeric)) { // checksum at index 2 and 3 must be digits
            return; // reject
        }

        return char;
    }

    // definiton of the format method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _format(value: string) {
        if (value !== '' && value !== 'N') {
            // If user typed a valid character and not typed N to start NQ, enforce NQ and form blocks
            value = value
                .replace(/ /g, '')
                .replace(/^N?Q?/, 'NQ') // enforce NQ at the beginning
                .replace(/.{4}/g, '$& ') // add spaces each 4 chars
                .substring(0, 44); // address length with spaces, discarding the space after last block
        }
        return {
            text: value,
            template: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx', // used by input-format to position caret
        }
    }

    // value that can be bound to via v-model
    @Prop({
        type: String,
        default: '',
    })
    public value!: string;

    public $refs: { textarea: HTMLTextAreaElement };

    private mounted() {
        // trigger initial value change. Not using immediate watcher as it already fires before mounted.
        this._onExternalValueChange();
    }

    @Watch('value')
    private _onExternalValueChange() {
        if (this.value === this.$refs.textarea.value) return;

        // could also be using format-input's parse and format helpers that preserve caret position but as we're not
        // interested in that, we calculate the formatted value manually
        const parsedValue = this.value.split('').reduce((parsed, char) =>
            parsed + AddressInput._parse(char, parsed) || '', '');
        this.$refs.textarea.value = AddressInput._format(parsedValue).text; // moves the caret to the end

        this._notifyChanges();
    }

    private _onKeyDown(e: KeyboardEvent) {
        inputFormatOnKeyDown(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onInput(e: KeyboardEvent) {
        inputFormatOnChange(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onPaste(e: ClipboardEvent) {
        inputFormatOnPaste(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onCut(e: ClipboardEvent) {
        inputFormatOnCut(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _afterChange(value: string) {
        // value is the unformatted value (i.e. the concatenation of characters returned by _parse). It includes NQ
        // if NQ was already added to the textarea before the current change but is not included if it is getting
        // automatically added just in our current change.
        const textarea = this.$refs.textarea;

        // have to move caret or selection by two to account for the NQ automatically added to the formatted text
        if (!value.startsWith('NQ')) {
            textarea.selectionEnd += 2;
            textarea.selectionStart += 2;
        }

        // if selection is a caret in front of a space move caret behind space
        if (textarea.selectionStart === textarea.selectionEnd && textarea.value[textarea.selectionStart] === ' ') {
            textarea.selectionStart += 1; // this also moves the selectionEnd as they were equal
        }

        this._notifyChanges();
    }

    private _notifyChanges() {
        const formattedValue = this.$refs.textarea.value;
        this.$emit('input', formattedValue);

        if (!ValidationUtils.isValidAddress(formattedValue)) return;
        this.$emit('address', formattedValue);
    }
}
</script>

<style scoped>
    .address-input {
        --font-size: 3rem;
        --block-height: 4.125rem;
        --block-width: 8.5rem;
        --block-gap: 1rem;

        width: calc(3 * var(--block-width) + 2 * var(--block-gap));
        height: calc(3 * var(--block-height) + 2 * var(--block-gap));
        position: relative;
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(2, var(--block-width) var(--block-gap)) var(--block-width);
        grid-template-rows: repeat(3, var(--block-height));
        grid-row-gap: var(--block-gap);
    }

    textarea {
        --line-height: calc(var(--block-height) + var(--block-gap));

        position: absolute;
        width: 100%;
        height: calc(3 * var(--line-height));
        line-height: var(--line-height);
        top: calc(var(--font-size) / 24 * -3); /* -3px at default font size */
        left: calc(var(--font-size) / 24 * 5); /* 5px at default font size */
        padding: 0;
        border: none;
        outline: unset !important;
        resize: none;
        overflow: hidden;
        z-index: 1;
        font-family: Fira Mono, 'monospace';
        font-size: var(--font-size);
        color: var(--nimiq-blue);
        background: transparent;
        word-spacing: calc(var(--block-gap) / 2);
        /* Mask image to make selections visible only within blocks. Using mask image instead clip path to be able to
        click onto the textarea on the invisible areas too */
        mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 123"><rect x="0" y="6" width="59" height="27"></rect><rect x="76" y="6" width="59" height="27"></rect><rect x="152" y="6" width="59" height="27"></rect><rect x="0" y="47" width="59" height="27"></rect><rect x="76" y="47" width="59" height="27"></rect><rect x="152" y="47" width="59" height="27"></rect><rect x="0" y="88" width="59" height="27"></rect><rect x="76" y="88" width="59" height="27"></rect><rect x="152" y="88" width="59" height="27"></rect></svg>');
    }

    .block {
        border: .25rem solid var(--nimiq-blue);
        border-radius: .5rem;
        opacity: .1;
    }

    .block-connector {
        width: var(--block-gap);
        height: .25rem;
        background: var(--nimiq-blue);
        align-self: center;
        opacity: .1;
    }
</style>
