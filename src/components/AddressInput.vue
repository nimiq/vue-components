<template>
    <div class="address-input">
        <textarea ref="textarea" placeholder="NQ" spellcheck="false" autocomplete="off"
            @keydown="_onKeyDown" @input="_onInput" @paste="_onPaste" @cut="_onCut" @copy="_formatClipboard"
            @select="_updateSelection" @focus="_updateSelection" @blur="_updateSelection" @click="_updateSelection"
        ></textarea>
        <template v-for="i in 9">
            <div class="block" :class="{ focused: selectionStartBlock <= i - 1 && i - 1 <= selectionEndBlock }"></div>
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
import { BrowserDetection, Clipboard, ValidationUtils } from '@nimiq/utils';

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
        };
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

    private selectionStartBlock: number = -1;
    private selectionEndBlock: number = -1;

    private mounted() {
        // trigger initial value change. Not using immediate watcher as it already fires before mounted.
        this._onExternalValueChange();

        // Bind selectionchange event handler. It has to be registered on document and is unfortunately not fired for
        // selections in textareas in Firefox. Therefore we also bind the listener to focus, blur, select, click.
        this._updateSelection = this._updateSelection.bind(this);
        document.addEventListener('selectionchange', this._updateSelection);
    }

    private destroyed() {
        document.removeEventListener('selectionchange', this._updateSelection);
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

        this._afterChange(parsedValue);
    }

    private _onKeyDown(e: KeyboardEvent) {
        inputFormatOnKeyDown(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
        setTimeout(() => this._updateSelection(), 10); // for arrow keys in Firefox
    }

    private _onInput(e: KeyboardEvent) {
        inputFormatOnChange(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onPaste(e: ClipboardEvent) {
        inputFormatOnPaste(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onCut(e: ClipboardEvent) {
        inputFormatOnCut(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
        this._formatClipboard();
    }

    private _formatClipboard() {
        // While it's possible to set the clipboard data via clipboardEvent.clipboardData.setData this requires calling
        // preventDefault() which then results in the need to reimplement the behavior for cutting text and has side
        // effects like the change not being added to the undo history. Therefore we let the browser do the default
        // behavior but overwrite the clipboard afterwards.
        const text = document.getSelection().toString().replace(/\n/g, ' ').replace(/\u200B/g, '');
        setTimeout(() => Clipboard.copy(text));
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
        this._updateTextClipBackground(); // must rerender background after each change
    }

    private _notifyChanges() {
        const formattedValue = this.$refs.textarea.value.replace(/\n/g, ' ').replace(/\u200B/g, '');
        this.$emit('input', formattedValue);

        if (!ValidationUtils.isValidAddress(formattedValue)) return;
        this.$emit('address', formattedValue);
    }

    private _updateSelection() {
        const textarea = this.$refs.textarea;
        const focused = document.activeElement === textarea;
        const selectionStartBlock = focused ? Math.floor(textarea.selectionStart / 5) : -1;
        const selectionEndBlock = focused ? Math.floor(textarea.selectionEnd / 5) : -1;
        if (selectionStartBlock === this.selectionStartBlock && selectionEndBlock === this.selectionEndBlock) return;
        this.selectionStartBlock = selectionStartBlock;
        this.selectionEndBlock = selectionEndBlock;
        this._updateTextClipBackground();
    }

    private _updateTextClipBackground() {
        const textarea = this.$refs.textarea;
        if (textarea.classList.contains('background-clip-text-unsupported')) return;

        if (!textarea.style.backgroundImage) {
            // This is the first time we want to set a background. First check for support.
            const computedStyle = window.getComputedStyle(textarea);
            const supported = computedStyle['caret-color']
                && (computedStyle['background-clip'] === 'text' || computedStyle['-webkit-background-clip'] === 'text');
            textarea.classList.toggle('background-clip-text-unsupported', !supported);
            if (!supported) return;
        }

        if (textarea.value.length === 0) {
            // placeholder is shown
            textarea.style.backgroundImage = 'unset';
            textarea.style.backgroundColor = 'unset';
            return;
        }

        // Generate a svg background image similar to the mask image that sets the color for focused blocks.
        // Chrome (and potentially others) only rerender the background-clip on background change, not on text change,
        // therefore we assign an incremental id to ensure a new svg is generated each time. In Firefox we don't need
        // that and do not generate new svgs every time to reduce flickering.
        const svgId = !BrowserDetection.isFirefox() ? `text-clip-${Date.now()}` : `text-clip`;
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 123" id="${svgId}">`;
        const xOffset = 0;
        const yOffset = 6;
        const xStep = 76;
        const yStep = 41;
        for (let row = 0; row < 3; ++row) {
            for (let column = 0; column < 3; ++column) {
                const blockIndex = 3 * row + column;
                if (blockIndex < this.selectionStartBlock || blockIndex > this.selectionEndBlock) continue;
                svg += `<rect x="${xOffset + column * xStep}" y="${yOffset + row * yStep}" `
                       + 'fill="#0582ca" width="59" height="27"/>'; // nimiq-light-bue
            }
        }
        svg += '</svg>';
        textarea.style.backgroundImage = `url(data:image/svg+xml;base64,${btoa(svg)})`;
        // Assign the color for unfocused text. While we could also set this in the svg, each rerendering of the svg
        // causes flickering in Firefox. By having a constant background color, this is way less noticeable.
        textarea.style.backgroundColor = 'var(--nimiq-blue)';
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
        margin: 0;
        border: none;
        outline: unset !important;
        resize: none;
        overflow: hidden;
        z-index: 1;
        font-family: Fira Mono, 'monospace';
        font-size: var(--font-size);
        color: var(--nimiq-light-blue);
        background: transparent;
        word-spacing: calc(var(--block-gap) / 2);
        /* Mask image to make selections visible only within blocks. Using mask image instead clip path to be able to
        click onto the textarea on the invisible areas too */
        mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 123"><rect x="0" y="6" width="59" height="27"/><rect x="76" y="6" width="59" height="27"/><rect x="152" y="6" width="59" height="27"/><rect x="0" y="47" width="59" height="27"/><rect x="76" y="47" width="59" height="27"/><rect x="152" y="47" width="59" height="27"/><rect x="0" y="88" width="59" height="27"/><rect x="76" y="88" width="59" height="27"/><rect x="152" y="88" width="59" height="27"/></svg>');
    }

    /* This css hack only applies to Firefox. Firefox requires a larger word-spacing for some reason. */
    @-moz-document url-prefix() {
        .address-input textarea {
            word-spacing: calc(var(--block-gap) * .75);
        }
    }

    textarea:not(.background-clip-text-unsupported) {
        /* Use background-clip to be able to set multiple text colors in the textarea. We could also achieve this with
        a colored overlay with mix-blend-mode but at the disadvantage that it only works with white background and
        also colorizes text selections */
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        caret-color: var(--nimiq-light-blue);
    }

    ::-webkit-input-placeholder {
        color: var(--nimiq-light-blue);
        opacity: .6;
    }
    ::-moz-placeholder {
        color: var(--nimiq-light-blue);
        opacity: .6;
    }
    :-ms-input-placeholder {
        color: var(--nimiq-light-blue);
        opacity: .6;
    }
    :-moz-placeholder {
        color: var(--nimiq-light-blue);
        opacity: .6;
    }

    /* Setting a background color (see _updateTextClipBackground) does not work well in Firefox in combination with
    background-clip: text and selections, the selected text is not highlighted by a background color. Therefore we
    assign one here manually. Unfortunately setting the selection text color to white does also not seem to work in
    Firefox, therefore we set a background color different from the default selection background color to get a higher
    contrast to the text color. */
    textarea::-moz-selection {
        background: #0582ca26; /* nimiq-light-blue with .15 opacity */
    }

    .block {
        border: .25rem solid var(--nimiq-blue);
        border-radius: .5rem;
        opacity: .1;
    }

    .block.focused {
        opacity: .16;
    }

    .block-connector {
        width: var(--block-gap);
        height: .25rem;
        background: var(--nimiq-blue);
        align-self: center;
        opacity: .1;
    }
</style>
