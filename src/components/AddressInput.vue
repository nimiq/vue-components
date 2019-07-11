<template>
    <div class="address-input">
        <textarea ref="textarea" placeholder="NQ" spellcheck="false" autocomplete="off"
            @keydown="_onKeyDown" @input="_onInput" @paste="_onPaste" @cut="_onCut" @copy="_formatClipboard"
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
    onKeyDown as inputFormatOnKeyDown,
} from 'input-format';
import { ValidationUtils } from '@nimiq/utils';

@Component
export default class AddressInput extends Vue {
    // definiton of the parse method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _parse(char: string, value: string) {
        value = AddressInput._stripWhitespace(value);
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
            value = AddressInput._stripWhitespace(value)
                .replace(/^N?Q?/, 'NQ') // enforce NQ at the beginning
                .replace(/.{4}/g, (match, offset) => `${match}${(offset + 4) % 12 ? ' ' : '\n'}`) // form blocks
                .substring(0, 44); // address length with spaces, discarding the new line after last block

            if (value.endsWith(' ')) {
                // The word spacing set via css is only applied to spaces that are actually between words which is not
                // the case for an ending space and the caret after an ending space therefore gets rendered at the wrong
                // position. To avoid that we add a zero-width space as an artificial word. We do not add that to the
                // template returned to input-format though to avoid it being interpreted as a typed character which
                // would place the caret after the zero width space.
                value += '\u200B';
            }
        }
        return {
            text: value,
            template: 'xxxx xxxx xxxx\nxxxx xxxx xxxx\nxxxx xxxx xxxx', // used by input-format to position caret
        }
    }

    private static _stripWhitespace(value: string) {
        return value.replace(/\s|\u200B/g, ''); // normal whitespace, tabs, newlines or zero-width whitespace
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
        const textarea = this.$refs.textarea;
        if (AddressInput._stripWhitespace(this.value) === AddressInput._stripWhitespace(textarea.value)) return;

        // could also be using format-input's parse and format helpers that preserve caret position but as we're not
        // interested in that, we calculate the formatted value manually
        const parsedValue = this.value.split('').reduce((parsed, char) =>
            parsed + AddressInput._parse(char, parsed) || '', '');
        textarea.value = AddressInput._format(parsedValue).text; // moves the caret to the end

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
        this._formatClipboard(e);
        // As _formatClipboard has to preventDefault(), we have to update the value manually.
        // Note that selection.deleteFromDocument() wouldn't update the actual textarea value.
        const textarea = this.$refs.textarea;
        const selectionStart = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, selectionStart) + textarea.value.substring(textarea.selectionEnd);
        textarea.selectionStart = textarea.selectionEnd = selectionStart; // restore correct caret position
        // While input-format has an onCut handler the only difference to onChange is that it executes with a delay to
        // await the changes from cutting to apply. As we implement cutting ourselves, we don't need that.
        inputFormatOnChange(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _formatClipboard(e: ClipboardEvent) {
        // intercept event to replace new lines with spaces
        const selection = document.getSelection();
        const selectionText = selection.toString();
        if (!selectionText) return; // use default behavior which typically is to not overwrite the previous clipboard
        e.preventDefault(); // we have to prevent the default to be able to set the clipboard data
        e.clipboardData.setData('text/plain', selectionText.replace(/\n/g, ' ').replace(/\u200B/g, ''));
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

        // if selection is a caret in front of a space or new line move caret behind it
        if (textarea.selectionStart === textarea.selectionEnd
            && (textarea.value[textarea.selectionStart] === ' ' || textarea.value[textarea.selectionStart] === '\n')) {
            textarea.selectionStart += 1; // this also moves the selectionEnd as they were equal
        }

        this._notifyChanges();
    }

    private _notifyChanges() {
        const formattedValue = this.$refs.textarea.value.replace(/\n/g, ' ').replace(/\u200B/g, '');
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
