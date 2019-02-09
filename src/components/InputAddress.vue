<template>
    <div class="input-address">
        <div v-for="i in 3" >
            <div style="display: flex; margin-bottom: 0px;" >
                <InputTextChunk v-for="j in 3" ref="input" :disabled="disabled"/>
            </div>
        </div>
        <div>
            <textarea id="nimiq-address" v-model="address" v-on:focus="onFocus" v-on:copy="onCopy" v-on:paste="onPaste" v-on:keyup="keyUp" v-on:keydown="keyDown" placeholder="nq" name="Text1" maxlength="45" :disabled="disabled"></textarea>
        </div>
        <div class="grid-overlay"></div>
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

function formatAddress(val: any) {
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
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

@Component({components: {InputTextChunk}})
export default class InputAddress extends Vue {

    @Prop(String) public address!: string;

    @Prop(Boolean, {default: false}) public disabled!: boolean;

    mounted() {
        console.log('mounted')   
        this.updateDisplay()
        console.log(this.disabled)
        if (this.disabled) {
            
        }
    }

    private updateDisplay():string {
        const text:string = this.getTextarea().value
        for (let i = 0; i < this.$refs.input.length; i++) {
            this.$refs.input[i].text = text.substr(5*i,4)
        }
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
        // TODO
    }

    private onCopy(event:event):void {
        console.log(event)
        copyTextToClipboard(event.target.value.replace(/\n/g,' '))
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

    private keyDown(event:Event):void {
        let t:Element = event.target
        
        const specialKey:boolean = (event.altKey) || (event.ctrlKey) || (event.metaKey)

        if (specialKey) {return}

        if (event.key == 'Enter') {event.preventDefault()}

        this.lockInput(t)

        if (event.key.length == 1) {
            event.preventDefault()
            if ('0123456789abcdefghjklmnpqrstuvxyABCDEFGHJKLMNPQRSTUVXY'.indexOf(event.key) > -1) {
            const k:string = this.preCalcTextInput(event.key)
            t.value = k.n
            t.selectionStart = k.c 
            t.selectionEnd = k.c 
            } else {
                // trigger bad char event here
            }
        }

        if (event.key == 'Tab') {
            const c:integer = (Math.floor(c/5)+1)*5
            t.selectionEnd = c + 4
            t.selectionStart = c 
            if (c > this.addressLength) {
                return
            } else {
                event.preventDefault()
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

<style scoped>

    .input-address {
        position: relative;
        text-align: center;
        display: inline-block;
    }

    .grid-overlay {
        position: absolute;
        left: 6px;
        top: 6px;
        width: 228px;
        height: 114px;
        background-image: url('data:image/svg+xml,<svg viewBox="0 0 228 114" version="1" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1"><path d="M158 0v28c0 2 2 4 4 4h66v8h-66c-2 0-4 1-4 3v27c0 2 2 4 4 4h64l2-1v9h-66c-2 0-4 1-4 3v27l1 2h-9V85c0-2-2-3-4-3H82c-2 0-4 1-4 3v27l1 2h-9V85c0-2-2-3-4-3H0v-9l2 1h64c2 0 4-2 4-4V43c0-2-2-3-4-3H0v-9l2 1h64c2 0 4-2 4-4V2 0h8v28c0 2 2 4 4 4h64c2 0 4-2 4-4V2 0h8zm-12 74c2 0 4-2 4-4V43c0-2-2-3-4-3H82c-2 0-4 1-4 3v27c0 2 2 4 4 4h64z" fill="white"/></svg>');    
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: 0;
        pointer-events: none;
    }

    textarea { /* for chrome on macOS */
        position: absolute;
        left: 0px;
        top: -2px;
        word-spacing: 16.5px;
        text-transform: uppercase;
        width: 235px;
        height: 125px;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-style: normal;
        font-weight: normal;
        line-height: 42px;
        font-size: 24px;
        margin: 0px;
        padding-left: 7px;
        resize: none;
        border: none;
        outline: none;
        overflow: hidden;
        background-color: transparent;
        color: rgba(0,0,0,0.0);
        caret-color: var(--nimiq-blue);
    }

    textarea::placeholder {
        color: var(--nimiq-light-blue);
        opacity: 0.6;
    }

</style>
