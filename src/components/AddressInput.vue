<template>
    <div class="address-input" :class="{'is-domain': isDomain}">
        <textarea ref="textarea" spellcheck="false" autocomplete="off"
            :class="{'will-be-address': willBeAddress}"
            @keydown="_onKeyDown" @input="_onInput" @paste="_onPaste" @cut="_onCut" @copy="_formatClipboard"
            @click="_updateSelection" @select="_updateSelection" @blur="_updateSelection" @focus="_onFocus"
        ></textarea>

        <template v-if="willBeAddress && supportsMixBlendMode">
            <template v-for="row in 3">
                <template v-for="column in 3">
                    <div class="color-overlay" :style="{
                        /* Hidden when placeholder shown. Visibility instead of v-if to avoid flickering in Firefox */
                        visibility: currentValue ? 'visible' : 'hidden',
                        left: `calc(${column - 1} * (var(--block-width) + var(--block-gap-h)) + var(--block-gap-h) - 0.25rem)`,
                        top: `calc(${row - 1} * (var(--block-height) + var(--block-gap-v)) + var(--block-gap-v) + 0.25rem)`,
                        background: `var(--nimiq-${_isBlockFocused((row - 1) * 3 + (column - 1)) ? 'light-' : ''}blue)`,
                    }" :key="`color-${row}-${column}`"></div>
                </template>
            </template>
        </template>

        <svg width="210" height="99" viewBox="0 0 210 99" fill="none" xmlns="http://www.w3.org/2000/svg" class="grid">
            <g stroke-width="1.5" stroke-linecap="round">
                <line x1="67.75" y1="0.75" x2="67.75" y2="22.25"/>
                <line x1="67.75" y1="37.75" x2="67.75" y2="60.25"/>
                <line x1="67.75" y1="75.75" x2="67.75" y2="98.25"/>
                <line x1="0.75" y1="30.25" x2="209.25" y2="30.25"/>
                <line x1="0.75" y1="68.25" x2="209.25" y2="68.25"/>
                <line x1="143.75" y1="37.75" x2="143.75" y2="60.25"/>
                <line x1="143.75" y1="0.75" x2="143.75" y2="22.25"/>
                <line x1="143.75" y1="75.75" x2="143.75" y2="98.25"/>
            </g>
        </svg>
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
    private static _parse(char: string, value: string, allowDomains = false) {
        if (!allowDomains || AddressInput._willBeAddress(value + char)) {
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
                + ')$', 'i');

            // We return the original character without transforming it to uppercase to improve compatibility with some
            // browsers that struggle with undo/redo of manipulated input. The actual transformation to uppercase is then
            // done via CSS and when the value is exported
            if (regex.test(value + char)) return char;
            else return; // reject character
        } else {
            // Reject non-URL formats while allowing typing URLs character by character
            /**
             * [-a-z0-9]    Allow hyphens, english letters and numbers
             * [a-z0-9]\.   Require a character or letter before the period (to prevent a period directly after a hyphen)
             * [a-z]        Only allow characters, no numbers, after the period
             */
            if (/^[-a-z0-9]*([a-z0-9]\.[a-z]*)?$/i.test(value + char)) return char;
            else return; // reject character
        }
    }

    // definiton of the format method for input-format (https://github.com/catamphetamine/input-format#usage)
    private static _format(value: string, allowDomains = false) {
        if (!allowDomains || AddressInput._willBeAddress(value)) {
            if (value !== '' && value.toUpperCase() !== 'N') {
                value = AddressInput._stripWhitespace(value)
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
        } else {
            return {
                text: value,
            };
        }
    }

    private static _stripWhitespace(value: string) {
        return value.replace(/\s|\u200B/g, ''); // normal whitespace, tabs, newlines or zero-width whitespace
    }

    private static _exportValue(value: string, allowDomains = false) {
        if (!allowDomains || AddressInput._willBeAddress(value)) {
            return value.toUpperCase().replace(/\n/g, ' ').replace(/\u200B/g, '');
        } else {
            return value.replace(/\n/g, '').replace(/\u200B/g, '');
        }
    }

    private static _willBeAddress(value: string): boolean {
        if (value.length < 3) return false;
        if (value.toUpperCase().startsWith('NQ') && !isNaN(parseInt(value[2], 10))) return true;
        return false;
    }

    // value that can be bound to via v-model
    @Prop({
        type: String,
        default: '',
    })
    public value!: string;

    @Prop(Boolean)
    public autofocus?: boolean;

    @Prop(Boolean)
    public allowDomains?: boolean;

    public $refs: { textarea: HTMLTextAreaElement };

    public focus(scrollIntoView = false) {
        this.$refs.textarea.focus();
        if (scrollIntoView) this.$refs.textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    private currentValue: string = '';
    private selectionStartBlock: number = -1;
    private selectionEndBlock: number = -1;
    private supportsMixBlendMode: boolean = CSS.supports('mix-blend-mode', 'screen');

    private get willBeAddress() {
        return !this.allowDomains || AddressInput._willBeAddress(this.currentValue);
    }

    private get isDomain() {
        return this.currentValue.length >= 3 && !this.willBeAddress;
    }

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
            parsed + (AddressInput._parse(char, parsed, this.allowDomains) || ''), '');
        this.$refs.textarea.value = AddressInput._format(parsedValue, this.allowDomains).text; // moves the caret to the end

        this._afterChange(parsedValue);
    }

    private _onKeyDown(e: KeyboardEvent) {
        inputFormatOnKeyDown(
            e,
            this.$refs.textarea,
            (char: string, value: string) => AddressInput._parse(char, value, this.allowDomains),
            (value: string) => AddressInput._format(value, this.allowDomains),
            this._afterChange,
        );
        setTimeout(() => this._updateSelection(), 10); // for arrow keys in Firefox
    }

    private _onInput(e: KeyboardEvent & { inputType?: string }) {
        if (e.inputType === 'deleteByDrag') return; // we'll handle the subsequent insertFromDrop
        const textarea = this.$refs.textarea;
        inputFormatOnChange(
            e,
            textarea,
            (char: string, value: string) => AddressInput._parse(char, value, this.allowDomains),
            (value: string) => AddressInput._format(value, this.allowDomains),
            this._afterChange,
        );
    }

    private _onPaste(e: ClipboardEvent) {
        const clipboardData = e.clipboardData;
        const pastedData = clipboardData ? clipboardData.getData('text/plain') : '';
        this.$emit('paste', e, pastedData);

        inputFormatOnPaste(
            e,
            this.$refs.textarea,
            (char: string, value: string) => AddressInput._parse(char, value, this.allowDomains),
            (value: string) => AddressInput._format(value, this.allowDomains),
            this._afterChange,
        );
    }

    private _onCut(e: ClipboardEvent) {
        inputFormatOnCut(
            e,
            this.$refs.textarea,
            (char: string, value: string) => AddressInput._parse(char, value, this.allowDomains),
            (value: string) => AddressInput._format(value, this.allowDomains),
            this._afterChange,
        );
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
        const text = AddressInput._exportValue(document.getSelection()!.toString(), this.allowDomains);
        setTimeout(() => Clipboard.copy(text));
    }

    private _afterChange(value: string) {
        // value is the unformatted value (i.e. the concatenation of characters returned by _parse)
        const textarea = this.$refs.textarea;

        // if selection is a caret in front of a space or new line move caret behind it
        if (textarea.selectionStart === textarea.selectionEnd
            && (textarea.value[textarea.selectionStart] === ' ' || textarea.value[textarea.selectionStart] === '\n')) {
            textarea.selectionStart += 1; // this also moves the selectionEnd as they were equal
        }

        this.currentValue = AddressInput._exportValue(this.$refs.textarea.value, this.allowDomains);
        this.$emit('input', this.currentValue); // emit event compatible with v-model

        if (AddressInput._willBeAddress(value)) {
            const isValid = ValidationUtils.isValidAddress(this.currentValue);
            if (isValid) this.$emit('address', this.currentValue);

            // if user entered a full address that is not valid give him a visual feedback
            this.$el.classList.toggle('invalid', this.currentValue.length === AddressInput.ADDRESS_MAX_LENGTH && !isValid);
        }
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
}
</script>

<style scoped>
    .address-input {
        --font-size: 3rem;
        --block-height: 4.125rem;
        --block-width: 8.5rem;
        --block-gap-v: 0.75rem;
        --block-gap-h: 1rem;

        width: calc(3 * var(--block-width) + 3 * var(--block-gap-h));
        height: calc(3 * var(--block-height) + 3.5 * var(--block-gap-v));
        position: relative;
        background: white; /* Note: our text coloring with mix-blend-mode only works on white background */

        border-radius: 0.5rem;
        --border-color: rgba(31, 35, 72, 0.1); /* Based on Nimiq Blue */
        box-shadow: inset 0 0 0 1.5px var(--border-color);
        transition: box-shadow .2s ease, height 0.3s var(--nimiq-ease);
        overflow: hidden;
    }

    .address-input.is-domain {
        height: calc(var(--block-height) + 2 * var(--block-gap-v));
    }

    .address-input:hover {
        --border-color: rgba(31, 35, 72, 0.14); /* Based on Nimiq Blue */
    }

    .address-input:focus-within {
        --border-color: rgba(5, 130, 202, 0.4); /* Based on Nimiq Light Blue */
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
        --line-height: calc(var(--block-height) + var(--block-gap-v));

        position: absolute;
        width: 100%;
        height: calc(3 * var(--line-height));
        line-height: var(--line-height);
        top: calc(var(--font-size) / 24 + var(--block-gap-v) / 2); /* -3px at default font size */
        left: calc(var(--font-size) / 24 * 5 + var(--block-gap-h) / 2); /* 5px at default font size */
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
        /* the width of rendered letters may slightly differ across different browsers on different OSs. To compensate
        for that we apply a letter-spacing based on the deviation from a reference value */
        letter-spacing: calc(1.8rem - 0.6em); /* 1ch changed to 0.6em, 'ch' in 'calc' making Safari 14.5 crash */
        word-spacing: calc(var(--block-gap-h) / 2);
        color: var(--nimiq-blue);
        background: transparent;
        transition: color 0.2s ease;
    }

    .is-domain textarea {
        height: var(--line-height);
        white-space: nowrap;
        width: calc(100% - 2 * var(--block-gap-h))
    }

    textarea:focus {
        color: var(--nimiq-light-blue);
    }

    textarea.will-be-address {
        text-transform: uppercase;
        /* Mask image to make selections visible only within blocks. Using mask image instead clip path to be able to
        click onto the textarea on the invisible areas too */
        mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 123"><rect x="-1" y="6" width="62" height="28"/><rect x="79" y="6" width="62" height="28"/><rect x="159" y="6" width="62" height="28"/><rect x="-1" y="47" width="62" height="28"/><rect x="79" y="47" width="62" height="28"/><rect x="159" y="47" width="62" height="28"/><rect x="-1" y="88" width="62" height="28"/><rect x="79" y="88" width="62" height="28"/><rect x="159" y="88" width="62" height="28"/></svg>');
    }

    .grid {
        position: absolute;
        top: calc(var(--font-size) / 24 * 8 + var(--block-gap-v) / 2);
        left: calc(var(--font-size) / 24 * 5 + var(--block-gap-h) / 2);
        stroke: var(--border-color);
        transition: stroke .2s ease, opacity 0.2s ease;
    }

    textarea:focus ~ .grid {
        opacity: 0.5;
    }

    .is-domain .grid {
        opacity: 0 !important;
    }

    @supports (mix-blend-mode: screen) {
        textarea.will-be-address {
            color: black; /* the actual color will be set via mix-blend-mode */
        }

        textarea.will-be-address::selection {
            color: white;
            background: #561a51; /* a color that in combination with mix-blend-mode yields a color close to the default */
        }

        textarea.will-be-address::-moz-selection {
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
