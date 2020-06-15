<template>
    <div class="address-input">
        <textarea ref="textarea" placeholder="NQ" spellcheck="false" autocomplete="off"
            @keydown="_onKeyDown" @input="_onInput" @paste="_onPaste" @cut="_onCut" @copy="_formatClipboard"
            @click="_updateSelection" @select="_updateSelection" @blur="_updateSelection" @focus="_onFocus"
        ></textarea>
        <template v-for="i in 9">
            <div class="block" :class="{
                focused: _isBlockFocused(i - 1),
                invisible: _isBlockFilled(i - 1),
            }"></div>
            <div v-if="i % 3" class="block-connector" :class="{
                invisible: _isBlockFilled(i - 1) && !_isBlockFocused(i - 1) || _isBlockFilled(i) && !_isBlockFocused(i),
            }"></div>
        </template>

        <template v-if="supportsMixBlendMode">
            <template v-for="row in 3">
                <template v-for="column in 3">
                    <div class="color-overlay" :style="{
                        /* Hidden when placeholder shown. Visibility instead of v-if to avoid flickering in Firefox */
                        visibility: currentValue ? 'visible' : 'hidden',
                        left: `calc(${column - 1} * (var(--block-width) + var(--block-gap)) + .25rem)`,
                        top: `calc(${row - 1} * (var(--block-height) + var(--block-gap)) + .25rem)`,
                        background:  `var(--nimiq-${_isBlockFocused((row - 1) * 3 + (column - 1)) ? 'light-' : ''}blue)`,
                    }"></div>
                </template>
            </template>
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
import { Clipboard, ValidationUtils } from '@nimiq/utils';

@Component
export default class AddressInput extends Vue {
    private static readonly ADDRESS_MAX_LENGTH_WITHOUT_SPACES = 9 * 4;
    private static readonly ADDRESS_MAX_LENGTH = AddressInput.ADDRESS_MAX_LENGTH_WITHOUT_SPACES + 8;

    // definiton of the parse method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _parse(char: string, value: string) {
        // Handle I, O, W, Z which are the only characters missing in Nimiq's Base 32 address alphabet
        switch (char.toUpperCase()) {
            case 'I': char = '1'; break;
            case 'O': char = '0'; break;
            case 'Z': char = '2'; break;
            case 'W': return; // reject character
        }

        const regex = new RegExp('^('
            + 'N(Q?)' // NQ at the beginning
            + '|NQ\\d{1,2}' // first two characters after starting NQ must be digits
            + `|NQ\\d{2}[0-9A-Z]{1,${AddressInput.ADDRESS_MAX_LENGTH_WITHOUT_SPACES - 4}}` // valid address < max length
            + '|\\d' // Allow a single digit. It will then get expanded by a leading NQ.
            + ')$', 'i');

        // We return the original character without transforming it to uppercase to improve compatibility with some
        // browsers that struggle with undo/redo of manipulated input. The actual transformation to uppercase is then
        // done via CSS and when the value is exported
        if (regex.test(value + char)) return char;
        else return; // reject character
    }

    // definiton of the format method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _format(value: string) {
        if (value !== '' && value.toUpperCase() !== 'N') {
            // If user typed a valid character and not typed N to start NQ, enforce NQ and form blocks
            value = AddressInput._stripWhitespace(value)
                .replace(/^N?Q?/i, 'NQ') // enforce NQ at the beginning
                .replace(/.{4}/g, (match, offset) => `${match}${(offset + 4) % 12 ? ' ' : '\n'}`) // form blocks
                .substring(0, AddressInput.ADDRESS_MAX_LENGTH); // discarding the new line after last block

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
            template: 'wwww wwww wwww\nwwww wwww wwww\nwwww wwww wwww', // used by input-format to position caret. Using
            // w as placeholder instead of default x as w is not in our address alphabet.
        };
    }

    private static _stripWhitespace(value: string) {
        return value.replace(/\s|\u200B/g, ''); // normal whitespace, tabs, newlines or zero-width whitespace
    }

    private static _exportValue(value: string) {
        return value.toUpperCase().replace(/\n/g, ' ').replace(/\u200B/g, '');
    }

    // value that can be bound to via v-model
    @Prop({
        type: String,
        default: '',
    })
    public value!: string;

    @Prop(Boolean)
    public autofocus?: boolean;

    public $refs: { textarea: HTMLTextAreaElement };

    public focus(scrollIntoView = false) {
        this.$refs.textarea.focus();
        if (scrollIntoView) this.$refs.textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    private currentValue: string = '';
    private selectionStartBlock: number = -1;
    private selectionEndBlock: number = -1;
    private supportsMixBlendMode: boolean = CSS.supports('mix-blend-mode', 'screen');

    private mounted() {
        // trigger initial value change. Not using immediate watcher as it already fires before mounted.
        this._onExternalValueChange();

        // Bind selectionchange event handler. It has to be registered on document and is unfortunately not fired for
        // selections in textareas in Firefox. Therefore we also bind the listener to focus, blur, select, click.
        this._updateSelection = this._updateSelection.bind(this);
        document.addEventListener('selectionchange', this._updateSelection);

        if (this.autofocus) this.focus();
    }

    private destroyed() {
        document.removeEventListener('selectionchange', this._updateSelection);
    }

    @Watch('value')
    private _onExternalValueChange() {
        if (AddressInput._stripWhitespace(this.value) === AddressInput._stripWhitespace(this.currentValue)) return;

        // could also be using format-input's parse and format helpers that preserve caret position but as we're not
        // interested in that, we calculate the formatted value manually
        const parsedValue = this.value.split('').reduce((parsed, char) =>
            parsed + (AddressInput._parse(char, parsed) || ''), '');
        this.$refs.textarea.value = AddressInput._format(parsedValue).text; // moves the caret to the end

        this._afterChange(parsedValue);
    }

    private _onKeyDown(e: KeyboardEvent) {
        inputFormatOnKeyDown(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
        setTimeout(() => this._updateSelection(), 10); // for arrow keys in Firefox
    }

    private _onInput(e: KeyboardEvent & { inputType?: string }) {
        if (e.inputType === 'deleteByDrag') return; // we'll handle the subsequent insertFromDrop
        const textarea = this.$refs.textarea;
        if (e.inputType === 'historyRedo' && textarea.value.length >= 2 && !textarea.value.startsWith('NQ')) {
            // Redo has problems when redoing an edit where NQ was added automatically. We make sure here to correctly
            // apply the NQ again.
            textarea.value = `NQ${textarea.value.substring(2)}`;
        }
        inputFormatOnChange(e, textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onPaste(e: ClipboardEvent) {
        const clipboardData = e.clipboardData;
        const pastedData = clipboardData ? clipboardData.getData('text/plain') : '';
        this.$emit('paste', e, pastedData);

        inputFormatOnPaste(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
    }

    private _onCut(e: ClipboardEvent) {
        inputFormatOnCut(e, this.$refs.textarea, AddressInput._parse, AddressInput._format, this._afterChange);
        this._formatClipboard();
    }

    private _onFocus() {
        // have to add a delay because the textarea is not focused yet at this point
        setTimeout(() => this._updateSelection());
    }

    private _formatClipboard() {
        // While it's possible to set the clipboard data via clipboardEvent.clipboardData.setData this requires calling
        // preventDefault() which then results in the need to reimplement the behavior for cutting text and has side
        // effects like the change not being added to the undo history. Therefore we let the browser do the default
        // behavior but overwrite the clipboard afterwards.
        const text = AddressInput._exportValue(document.getSelection().toString());
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

        this.currentValue = AddressInput._exportValue(this.$refs.textarea.value);
        this.$emit('input', this.currentValue); // emit event compatible with v-model

        const isValid = ValidationUtils.isValidAddress(this.currentValue);
        if (isValid) this.$emit('address', this.currentValue);

        // if user entered a full address that is not valid give him a visual feedback
        this.$el.classList.toggle('invalid', this.currentValue.length === AddressInput.ADDRESS_MAX_LENGTH && !isValid);
    }

    private _updateSelection() {
        const textarea = this.$refs.textarea;
        const focused = document.activeElement === textarea
            && (textarea.selectionStart !== AddressInput.ADDRESS_MAX_LENGTH // if all blocks are filled and the caret
            || textarea.selectionEnd !== AddressInput.ADDRESS_MAX_LENGTH); // is at the end display as if not focused
        this.selectionStartBlock = focused ? Math.floor(textarea.selectionStart / 5) : -1;
        this.selectionEndBlock = focused ? Math.floor(textarea.selectionEnd / 5) : -1;
    }

    private _isBlockFocused(blockIndex: number) {
        return this.selectionStartBlock <= blockIndex && blockIndex <= this.selectionEndBlock;
    }

    private _isBlockFilled(blockIndex: number) {
        return this.currentValue.length >= blockIndex * 5 + 4;
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
        background: white; /* Note: our text coloring with mix-blend-mode only works on white background */
    }

    .address-input.invalid {
        animation: shake .4s;
    }

    /* Copied from Keyguard */
    @keyframes shake {
        from { transform: none; }
        10%  { transform: translate3d(-0.25rem, 0, 0) rotate(-0.15deg); }
        20%  { transform: translate3d(0.5rem, 0, 0) rotate(0.15deg); }
        30%  { transform: translate3d(-0.5rem, 0, 0) rotate(-0.15deg); }
        40%  { transform: translate3d(0.5rem, 0, 0) rotate(0.15deg); }
        50%  { transform: translate3d(-0.25rem, 0, 0) rotate(-0.15deg); }
        to   { transform: none; }
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
        /* Note: if loading only a subset of Fira Mono, the whitespace character must be included for rendering of
        spaces at correct width in some browsers */
        font-family: Fira Mono, 'monospace';
        font-size: var(--font-size);
        text-transform: uppercase;
        /* the width of rendered letters may slightly differ across different browsers on different OSs. To compensate
        for that we apply a letter-spacing based on the deviation from a reference value */
        letter-spacing: calc(1.8rem - 1ch);
        word-spacing: calc(var(--block-gap) / 2);
        color: var(--nimiq-light-blue);
        background: transparent;
        /* Mask image to make selections visible only within blocks. Using mask image instead clip path to be able to
        click onto the textarea on the invisible areas too */
        mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 123"><rect x="-1" y="6" width="61" height="27"/><rect x="75" y="6" width="61" height="27"/><rect x="151" y="6" width="61" height="27"/><rect x="-1" y="47" width="61" height="27"/><rect x="75" y="47" width="61" height="27"/><rect x="151" y="47" width="61" height="27"/><rect x="-1" y="88" width="61" height="27"/><rect x="75" y="88" width="61" height="27"/><rect x="151" y="88" width="61" height="27"/></svg>');
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

    .block,
    .block-connector {
        transition: opacity .2s var(--nimiq-ease);
    }

    .invisible {
        opacity: 0;
    }

    @supports (mix-blend-mode: screen) {
        textarea {
            color: black; /* the actual color will be set via mix-blend-mode */
        }

        textarea::selection {
            color: white;
            background: #561a51; /* a color that in combination with mix-blend-mode yields a color close to the default */
        }

        textarea::-moz-selection {
            background: #411d68; /* a color that in combination with mix-blend-mode yields a color close to the default */
        }

        .color-overlay {
            position: absolute;
            width: calc(var(--block-width) - .5rem);
            height: calc(var(--block-height) - .5rem);
            mix-blend-mode: screen;
            z-index: 1;
            pointer-events: none;
        }
    }
</style>
