<template>
    <div class="input-address">
        <div>
            <textarea ref="textarea" class="nimiq-address" @focus="updateDisplay" @focusout="updateDisplay" @mouseover="updateDisplay" @click="updateDisplay" @paste="onPaste" @cut="onCut" @keyup="keyUp" @keydown="keyDown" placeholder="nq" maxlength="44" :disabled="disabled"></textarea>
        </div>        
        <div ref="display" class="div-input">
            <div class="chunk-container" v-for="(chunk, index) in textDisplay">
            <div :class="`chunk-border chunk-${chunk.length} ${isActive(index)?'active':''}`"></div><!--
         --><span :class="`chunk-${chunk.length} ${isActive(index)?'active':''}`">{{ chunk }}</span><!--
         --><span class="chunk-fill">{{ Array(4-chunk.length).fill('F').join('') }}</span><br v-if="index%3 == 2">
            <span v-else>&nbsp;</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

function preFormatAddress(val: string):string {
    let plain: string;
    plain = val.trim()
        .replace(/[w]/gi, 'V')
        .replace(/[i]/gi, '1')
        .replace(/[z]/gi, '2')
        .replace(/[o]/gi, '0')
        .replace(/[\W](?!$)/gi, '')
        .toUpperCase(); 
    if (plain === '' || plain === 'N') return plain;
    plain = plain.replace(/^(\d\d?)/g,"NQ$1");
    plain = plain.replace(/^([^NQ]?)[NQ]?([^NQ]?)[NQ]?([^NQ]?)/g, "NQ$1$2$3");
    return plain;
}

function formatAddress(val: any): string {
    if (typeof(val) != "string") return ''; 
    const trailing: boolean = (val.endsWith == ' ');
    const pre = preFormatAddress(val);
    if (pre.length == 0) return ''
    const tokens: string[] = pre.match(/\w{1,4}/g);
    let address: string = tokens.join(' ');
    if (trailing && address.length % 5 == 4) {
        address += ' ';
    }
    let split = address.split('');
    if (address.length >= 14) {
        split[14] = "\n";
    }
    if (address.length >= 29) {
        split[29] = "\n";
    }  
    address = split.join('');
    return address.substring(0, 44);
}

@Component()
export default class InputAddress extends Vue {

    @Prop({type: Boolean, default: false}) public disabled!: boolean;
    @Prop({type: String, default: ''}) public prefill!: string;

    public mounted() {
        this.$refs.textarea.value = this.prefill;
        this.updateDisplay();
    }

    data() {
        return {
            textDisplay: Array(9).fill(''),
            address: ''
        };
    }

    private isActive(i: number): boolean {
        try {
            const textarea = this.$refs.textarea;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            return (Math.floor(start / 5) <= i && i <= Math.floor(end / 5) && document.activeElement === textarea);
        } catch {return false;}
    }

    private updateDisplayWith(value: string) {
        const address = formatAddress(value)
        const tokens:string[] = address.match(/\w{1,4}/g) || [];
        while (tokens.length < 9) {
            tokens.push('');
        }        

        for (let i = 0; i < tokens.length; i++) {
            this.textDisplay[i] = tokens[i];
        }
        this.$forceUpdate();

    }

    private updateDisplay(): string {
        this.updateDisplayWith(this.$refs.textarea.value);
    }

    private chunkHTML(text: string, active: boolean = false, decoration= true): string  {
        text = text.substring(0, 4);
        let fill: string = '';
        while (text.length + fill.length < 4) {
            fill += '0';
        }
        const fillTag = (fill) ? `<span class="chunk-fill">${fill} </span>` : '';
        text += (text.length == 4) ? ' ' : '';
        return `<div class="chunk-border ${(active) ? 'active' : ''} chunk-${text.length}"></div><span class="chunk-${text.length}">${text}</span>${fillTag}`;
    }

    private lockInput(input: HTMLInputElement): void {
        input.maxLength = input.value.length;
    }

    private freeInput(input: HTMLInputElement): void {
        input.removeAttribute('maxLength');
    }

    private onCut(event: Event): void {
        console.log(event);
        const k: {caret: number, text: string} = this.preCalcTextDelete();
        this.updateDisplayWith(k.text);
    }

    private onPaste(event: Event): void {
        event.preventDefault();
        const input: string = event.clipboardData.getData('Text');
        const k: {caret: number, text: string} = this.preCalcTextInput(formatAddress(input));
        event.target.value = k.text;
        event.target.selectionStart = k.caret;
        event.target.selectionEnd = k.caret;
        this.updateDisplay();
    }

    private keyDown(event: Event): void {
        const textarea: HTMLTextAreaElement = event.target;

        const specialKey: boolean = event.altKey || event.ctrlKey || event.metaKey;

        if (specialKey) {
            this.updateDisplay();
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault(); 
        }

        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(event.key) > -1) {
            this.updateDisplay();
        }

        if (event.key.length === 1) {
            event.preventDefault();
            if (event.key.match(/\w/gi)) {
                let k: {caret: number, text: string} = this.preCalcTextInput(event.key);
                if ((k.caret + 1) % 5 == 0) {
                    // add space when at end of box
                    k = this.preCalcTextInput(event.key + ' ');
                }
                this.setCaretAndText(k)
            } 
        }

        if (event.key == 'Tab') {
            const caretStart: integer = (Math.floor(textarea.selectionStart / 5) + 1) * 5;
            const caretEnd: integer = (Math.floor(textarea.selectionEnd / 5) + 1) * 5;

            if (event.shiftKey) {
                if ((textarea.selectionStart == textarea.selectionEnd) && (textarea.selectionEnd == 0)) {
                    return;
                }
                event.preventDefault();
                textarea.selectionEnd = (caretEnd - 6 > 0) ? caretEnd - 6 : 0;
                textarea.selectionStart = (caretEnd - 6 > 0) ? caretEnd - 10 : 0;
            } else {
                if ((textarea.selectionStart == textarea.selectionEnd) && (textarea.selectionEnd == textarea.value.length)) {
                    return;
                }
                event.preventDefault();
                textarea.selectionEnd = caretStart + 4;
                textarea.selectionStart = caretStart;
            }
        }

        if (event.key == ' ') {
            if (textarea.selectionStart == textarea.selectionEnd) {
                if ((textarea.selectionStart + 1) % 5 == 0) {
                    const k: {caret: number, text: string} = this.preCalcTextInput(event.key);
                    this.setCaretAndText(k)
                }
            } else {
                event.preventDefault();
                const k: {caret: number, text: string} = this.preCalcTextDelete();
                this.setCaretAndText(k)
            }
        }

        if (event.key == 'Delete') {
            event.preventDefault();
            const k: {caret: number, text: string} = this.preCalcTextDelete();
            this.setCaretAndText(k)
        }

        if (event.key == 'Backspace') {
            event.preventDefault();
            const k: {caret: number, text: string} = this.preCalcTextBackspace();
            this.setCaretAndText(k)
        }

        this.freeInput(textarea);

        this.updateDisplay();
    }

    private keyUp(event: Event): void {
        event.preventDefault();
        const textarea: Element = event.target;
        this.freeInput(textarea);
        this.updateDisplay();
    }

    private preCalcTextDelete(): {caret: number, text: string} {
        const textarea = this.$refs.textarea;
        const value = textarea.value;
        const caretStart = textarea.selectionStart;
        let caretEnd = textarea.selectionEnd;
        let caret = caretStart;
        if (caretStart == caretEnd) {
            caretEnd++;
            try {
                if (value[caretStart].match(/\W/)) {
                    caretEnd--;
                    caret = caretEnd + 1;
                }
            } catch (err) {}
        }
        caret = (caret > 0)? caret: 0;
        const textBefore = value.substring(0, caretStart);
        const textAfter = value.substring(caretEnd);
        const text = formatAddress(textBefore + textAfter); // new text generated after formatting
        return {caret, text};
    }

    private preCalcTextBackspace(): {caret: number, text: string} {
        const textarea = this.$refs.textarea;
        const value = textarea.value;
        let caretStart = textarea.selectionStart;
        const caretEnd = textarea.selectionEnd;
        const caret = (caretStart == caretEnd) ? caretStart - 1 : caretStart;
        caretStart = caret;
        const textBefore = value.substring(0, caretStart);
        const textAfter = value.substring(caretEnd);
        const text = formatAddress(textBefore + textAfter); // new text generated after formatting
        return {caret, text};
    }

    private preCalcTextInput(input: string): {caret: number, text: string} {
        const textarea = this.$refs.textarea;
        const value = textarea.value;
        const caretStart = textarea.selectionStart;
        const caretEnd = textarea.selectionEnd;
        const textBefore = value.substring(0, caretStart);
        const textAfter = value.substring(caretEnd);
        const caret = formatAddress(textBefore + input).length; // new caret position
        const text = formatAddress(textBefore + input + textAfter); // new text generated after formatting
        return {caret, text};
    }

    private setCaretAndText(k) {
        const textarea = this.$refs.textarea;
        textarea.value = k.text;
        textarea.selectionStart = k.caret;
        textarea.selectionEnd = k.caret;
    }
}
</script>


<style scoped>
    .chunk-border {
        border: calc(var(--nimiq-size, 8px)/4) solid rgba(0,0,0,0);
        border-radius: calc(var(--nimiq-size, 8px)/2);
        margin: 0;
        margin-right: calc(-74px + var(--offset));
        width: calc(9.25 * var(--nimiq-size, 8px));
        height: calc(4.375* var(--nimiq-size, 8px));
        margin-top: calc(0.375 * var(--nimiq-size, 8px));
        display: inline-block;
        vertical-align: top;
        border-color: var(--nimiq-gray);
    }

    .chunk-fill {
        color: transparent;
    }

    .chunk-4 {
        border-color: transparent;
    }

    .active {
        border-color: var(--nimiq-light-blue);
        color: var(--nimiq-light-blue);
    }

    div, textarea {
        --line-height: calc(5.25 * var(--nimiq-size, 8px));
        --offset: 7px;
        --word-spacing: calc(3.125 * var(--nimiq-size, 8px)); /* distance between chunks */
    }

    .input-address {
        position: relative;
        width: calc(31.25 * var(--nimiq-size, 8px));
        height: calc(16.25 * var(--nimiq-size, 8px));
        overflow: hidden;
        margin-left: calc(50% - var(--nimiq-size, 8px)*16.25);
    }

    textarea {
        top: 0px;
        word-spacing: var(--word-spacing);
        padding-left: calc(0.875*var(--nimiq-size, 8px));
        resize: none;
        border: none;
        outline: none;
        color: rgba(0,0,0,0);
        caret-color: var(--nimiq-blue);
        z-index: 0;
        background: none;
    }

    textarea::placeholder {
        color: var(--nimiq-light-blue);
        opacity: 0.6;
    }

    .div-input, textarea {
        left: 0px;
        position: absolute;
        width: 120%; /* prevent early linebreak on safari */
        height: 100%;
        text-transform: uppercase;
        line-height: var(--line-height);
        overflow: hidden;
        font-family: Fira Mono, system-ui, monospace;
        font-style: normal;
        font-weight: normal;
        font-size: calc(3*var(--nimiq-size, 8px));
    }

    .div-input {
        top: calc(var(--nimiq-size, 8px)/4);;
        pointer-events: none;
        word-spacing: calc(-1*var(--offset) + var(--word-spacing));
        z-index: 10;
        padding: 0;
    }

    .chunk-container {
        display: inline-block;
    }
</style>
