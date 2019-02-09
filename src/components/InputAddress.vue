<template>
    <div class="input-address">
        <div>
            <textarea id="nimiq-address" v-model="address" v-on:focus="onFocus" v-on:focusout="onFocusout" v-on:mouseover="onMouseover" v-on:click="onClick" v-on:copy="onCopy" v-on:paste="onPaste" v-on:cut="onCut" v-on:keyup="keyUp" v-on:keydown="keyDown" placeholder="nq" name="Text1" maxlength="45" :disabled="disabled"></textarea>
        </div>        
        <div ref="display" v-on:focus="onFocus"  v-on:copy="onCopy" v-on:paste="onPaste" v-on:keyup="keyUp" v-on:keydown="keyDown" id="div-input">
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue, Provide} from 'vue-property-decorator';
import '@nimiq/style/nimiq-style.min.css'
import InputTextChunk from './InputTextChunk.vue'

function preFormatAddress(val: string) {
    let plain:string
    try { 
        // remove invalid characters
        plain = val.trim()
                   .replace(/[wizo]/gi,'')
                   .replace(/[\W](?!$)/gi,'')
                   .toUpperCase()
    } catch(err) {constole.log(err); return ''}
    try {
        if (plain.length == 0) {
            return ''
        } else if (plain.length == 1) { 
            // add N, NQ for one character input
            if (plain.match(/n/i)) {
                return plain
            } else if (plain.match(/q/i)) {
                return 'NQ'
            } else {
                return 'NQ'+plain
            }
        } else if (plain.length == 2) { 
            // add nq and add all not [nq] characters
            return 'NQ'+plain.replace(/[nq]/gi,'')
        } else if (plain[0].match(/\d/)) { 
            // add NQ to string starting w/ digits
            return 'NQ'+plain
        } else { 
            // replace word characts at begining /w NQ
            return plain.replace(/^([\D]{1,2})/,"NQ")
        }
    } catch(err) {console.log(err); return ''}   
}

function formatAddress(val: any):string {
    if (val !instanceof String) {return}    
    const trailing:boolean = (val[val.length - 1] == ' ')
    const pre = preFormatAddress(val)
    if (pre.length == 0) {return ''}
    const tokens:string[] = pre.match(/\w{1,4}/g) 
    let address:string = tokens.join(' ')
    if ((trailing) && (address.length%5 == 4)) {
        address += ' '
    }
    address = address.split('')
        try { // insert linebreak
            if (address.length >= 14) {
            address[14] = '\n'  
            }
            if (address.length >= 29) {
            address[29] = '\n'
            }
        } catch(err) {}
    return address.join('').substr(0,44)
}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) { console.log(err )}

  document.body.removeChild(textArea);
}

@Component({components: {InputTextChunk}})
export default class InputAddress extends Vue {

    @Prop(String) public address!: string;

    @Prop(Boolean, {default: false}) public disabled!: boolean;

    mounted() {
        this.updateDisplay()
        if (this.disabled) {

        }
    }

    private updateDisplay():string {
        const t = this.getTextarea()
        const s = t.selectionStart
        const e = t.selectionEnd
        const text:string = t.value
        var active:boolean
  
        let tokens:string[] = text.match(/[\w\d]{1,4}/gi)
        if (tokens) {
            tokens = tokens.concat(Array(9 - tokens.length).fill(''))
        } else {
            tokens = Array(9).fill('')
        }
        this.$refs.display.innerHTML = '' 
        let nl:string
        for (let i = 0; i < tokens.length; i++) {
            nl = ((i+1)%3 == 0) ? '<br>' : '' 
            active = ((Math.floor(s/5) <= i) && (i <= Math.floor(e/5)) && (document.activeElement === t))
            this.$refs.display.innerHTML += this.chunkHTML(tokens[i], active) + nl 
        }     
    }


    private chunkHTML(text:string, active:boolean = false):string  {
        text = text.substr(0,4)
        let fill:string = ''
        while (text.length + fill.length < 4) {
            fill += '0'
        }
        let fillTag = (fill) ? `<span class="cbl-fill">${fill} </span>` : ''
        text += (text.length == 4) ? ' ' : ''
        return `<div class="chunk-border ${(active) ? 'active' : ''} cbl-${text.length}"></div><span class="cbl-${text.length}">${text}</span>${fillTag}`
    }

    private getTextarea():string {
        return this.$el.getElementsByTagName('textarea').item(0)
    }

    private lockInput(input:Element):void {
        input.maxLength = input.value.length;
    }

    private freeInput(input:Element):void {
        input.removeAttribute('maxLength')
    }

    private onFocus(event:Event):void {
        this.updateDisplay()
    }

    private onFocusout(event:Event):void {
        this.updateDisplay()
    }

    private onClick(event:Event):void {
        this.updateDisplay()
    }

    private onMouseover(event:Event):void {
        this.updateDisplay()
    }

    private onCopy(event:Event):void {
        console.log(event)
        //copyTextToClipboard(event.target.value.replace(/\n/g,' '))
    }

    private onPaste(event:Event):void {
        event.preventDefault()
        const input:string = event.clipboardData.getData('Text').replace(/\W/g,'')
        const k:object = this.preCalcTextInput(formatAddress(input))
        event.target.value = k.n
        event.target.selectionStart = k.c 
        event.target.selectionEnd = k.c 
        this.updateDisplay()
    }

    private onCut(event:Event): void {
        this.updateDisplay()
    }

    private keyDown(event:Event):void {
        let t:Element = event.target

        const specialKey:boolean = (event.altKey) || (event.ctrlKey) || (event.metaKey)

        if (specialKey) {
            this.updateDisplay()
            return
        }

        if (event.key == 'Enter') {event.preventDefault()}

        this.lockInput(t)

        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(event.key) > -1) {
            this.updateDisplay()
        }

        if (event.key.length == 1) {
            event.preventDefault()
            if ('0123456789abcdefghjklmnpqrstuvxyABCDEFGHJKLMNPQRSTUVXY'.indexOf(event.key) > -1) {
            let k:string = this.preCalcTextInput(event.key)      
            if ((k.c+1)%5 == 0) {
                // add space when at end of box
                k = this.preCalcTextInput(event.key+' ')
            }
            t.value = k.n
            t.selectionStart = k.c 
            t.selectionEnd = k.c 
            } else {
                // trigger bad char event here
            }
        }

        if (event.key == 'Tab') {
            const cs:integer = (Math.floor(t.selectionStart/5)+1)*5
            const ce:integer = (Math.floor(t.selectionEnd/5)+1)*5
            const l:integer = (Math.floor(t.value.length/5)+1)*5

            
            if (event.shiftKey) {
                if ((t.selectionStart == t.selectionEnd) && (t.selectionEnd == 0)) {
                    return
                }
                event.preventDefault()
                t.selectionEnd = (ce-10 > 0) ? ce-6 : 0
                t.selectionStart = (ce-10 > 0) ? ce-10: 0
                console.log([cs, ce, l])
            } else {
                if ((t.selectionStart == t.selectionEnd) && (t.selectionEnd == t.value.length)) {
                    return
                }
                event.preventDefault()
                t.selectionEnd = cs + 4 
                t.selectionStart = cs 
                console.log([t.selectionStart, t.selectionEnd, l, cs])
            }
        }

        if (event.key == ' ') {
            if (t.selectionStart == t.selectionEnd) {
                if ((t.selectionStart+1)%5 == 0) {
                    const k:string = this.preCalcTextInput(event.key)
                    t.value = k.n
                    t.selectionStart = k.c 
                    t.selectionEnd = k.c 
                }
            } else {
                event.preventDefault()
                const k:string = this.preCalcTextDelete()
                t.value  = k.n
                t.selectionStart = k.c 
                t.selectionEnd = k.c 
            }
        }

        if (event.key == 'Delete') {
            event.preventDefault()
            const k:string = this.preCalcTextDelete()
            t.value  = k.n
            t.selectionStart = k.c 
            t.selectionEnd = k.c 
        }

        if (event.key == 'Backspace') {
            event.preventDefault()
            const k:string = this.preCalcTextBackspace()
            t.value  = k.n
            t.selectionStart = k.c 
            t.selectionEnd = k.c 
        }

        this.freeInput(t)
        
        this.updateDisplay()
    }

    private keyUp(event:Event):void {
        event.preventDefault()
        let t:Element = event.target
        this.freeInput(t)
        this.updateDisplay()
    }

    private preCalcTextDelete():object {
        const t = this.getTextarea()
        const v = t.value
        const s = t.selectionStart
        let e = t.selectionEnd
        let c = s
        if (s == e) {
            e++
            try {
                if (v[s].match(/\W/)) {
                    e--
                    c = e+1
                }
            } catch(err) {}
        }
        const a = v.substr(0,s)
        const m = v.substr(s,e)   // highlighted text
        const b = v.substr(e,v.length)
        const n = formatAddress(a+b) // new text generated after formatting
        return {a, m, b, c, n, s, e}   
    }

    private preCalcTextBackspace():object {
        const t = this.getTextarea()
        const v = t.value
        let s = t.selectionStart
        const e = t.selectionEnd
        const c = (s == e) ? s - 1 : s
        s = (s == e) ? s - 1 : s
        const a = v.substr(0,s)
        const m = v.substr(s,e)   // highlighted text
        const b = v.substr(e,v.length)
        const n = formatAddress(a+b) // new text generated after formatting
        return {a, m, b, c, n, s, e}   
    }

    private preCalcTextInput(input:string):object {
        const t = this.getTextarea()
        const v = t.value
        let s = t.selectionStart
        let e = t.selectionEnd
        const a = v.substr(0,s)
        const m = v.substr(s,e)
        const b = v.substr(e,v.length)
        const c = formatAddress(a+input).length // new caret position
        const n = formatAddress(a+input+b) // new text generated after formatting
        return {a, m, b, c, n, input, s, e}
    }
}

</script>


<style>
    .chunk-border {
        --border-height: 2em;
        border: 2px solid rgba(0,0,0,0);
        border-radius: 4px;
        margin: 0;
        margin-right: calc(-74px + var(--offset));
        width: 74px;
        height: 35px;
        margin-top: 3px;
        display: inline-block;
        vertical-align: top;
    }

    .cbl-0 {
        border-color: var(--nimiq-gray)
    }

    .cbl-4 {
        border-color: var(--nimiq-blue);
        color: var(--nimiq-blue);
    }

    .cbl-5 {
        border-color: transparent;
    }

    .cbl-fill {
        color: transparent;
    }

    .active {
        border-color: var(--nimiq-light-blue);
    }

    .cbl-1, .cbl-2, .cbl-3 {
        color: var(--nimiq-light-blue);
    }

</style>

<style scoped>
    .input-address {
        position: relative;
        margin: auto;
        width: 280px;
        height: 125px;
        overflow: hidden;
    }

    div, textarea {
        --line-height: 42px;
        --offset: 7px;
        --word-spacing: 25px; /* distance between chunks */
    }

    textarea {
        position: absolute;
        left: 9px;
        top: 0px;
        word-spacing: var(--word-spacing);
        text-transform: uppercase;
        width: 280px;
        height: 125px;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-style: normal;
        font-weight: normal;
        line-height: var(--line-height);
        font-size: 24px;
        margin: 0px;
        padding-left: 7px;
        resize: none;
        border: none;
        outline: none;
        overflow: hidden;
        color: rgba(255,0,1,0.0);
        caret-color: var(--nimiq-blue);
        z-index: 0;
    }

    textarea::placeholder {
        color: var(--nimiq-light-blue);
        opacity: 0.6;
    }

    #div-input {
        left: 9px;
        top: 2px;
        pointer-events: none;
        width: 280px;
        height: 125px;
        overflow: hidden;
        word-spacing: calc(-1*var(--offset) + var(--word-spacing));
        font-family: 'Fira Mono', system-ui, sans-serif;
        line-height: var(--line-height);
        text-align: left;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-size: 24px;
        z-index: 10;
        position: absolute;
    }
</style>
