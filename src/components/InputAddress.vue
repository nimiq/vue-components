<template>
    <div class="input-address">
        <div v-for="i in 3" >
            <div style="display: flex; margin-bottom: 0px;" >
                <InputTextChunk v-for="j in 3" ref="input"/>
            </div>
        </div>
        <div>
            <textarea id="nimiq-address" v-model="address" v-on:focus="onFocus" v-on:paste="onPaste" v-on:keyup="keyUp" v-on:keydown="keyDown" placeholder="nq" name="Text1" maxlength="45"></textarea>
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

function formatAddress(val: any) {
    if (val !instanceof String) {return}    
    const trailing:boolean = (val[val.length - 1] == ' ')
    const pre = preFormatAddress(val)
    if (pre.length == 0) {return ''}
    const tokens:string[] = pre.match(/\w{1,4}/g) 
    let address:string = tokens.join(' ')
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

@Component({components: {InputTextChunk}})
export default class InputAddress extends Vue {

    @Prop(String) public address!: string;

    mounted() {
        console.log('mounted')   
        this.updateDisplay()
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
        background-color: white;
        position: relative;
        text-align: center;
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
