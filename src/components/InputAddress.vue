<template>
    <div class="input-address">
        <textarea id="nimiq-address" v-on:focus="onFocus" v-on:paste="onPaste" v-on:keyup="keyUp" v-on:keydown="keyDown" v-model="address" placeholder="nq" name="Text1" maxlength="45"></textarea>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import '@nimiq/style/nimiq-style.min.css'



function preFormatAddress(val) {
    try { 
        // remove invalid characters
        var plain = val.trim().replace(/[wizo]/gi,'').replace(/[\W](?!$)/gi,'')
    } catch(err) {}

    try {
    if (plain.length == 1) {
        if (plain.match(/n/i)) {
            return plain
        } else if (plain.match(/q/i)) {
            return 'nq'
        } else {
            return 'nq'.concat(plain)
        }
    } else if ((plain.length == 2) || (plain[0].match(/\d/))) {
        return 'NQ'.concat(plain.replace(/[nq]/gi,''))
    } else {
        return plain.replace(/^([\D]{1,2})/,"NQ")
    }
    } catch(err) {return ''}   
}

function formatAddress(val) {
    if (!val) {return ''}
    var trailing = (val[val.length - 1] == ' ')
    var tokens = preFormatAddress(val).match(/\w{1,4}/g)
    var address = tokens.join(' ')
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


@Component({components: {}})
export default class InputAddress extends Vue {
    //caretPosition = 0

    addressLength = 44
    
    private getTextarea() {
        return this.$el.getElementsByTagName('textarea').item(0)
    }

    private lockInput(inputElement) {
        inputElement.maxLength = inputElement.value.length;
    }

    private freeInput(inputElement) {
        inputElement.removeAttribute('maxLength')
    }

    private onFocus(event) {
        // TODO
    }

    private onPaste(event) {
        event.preventDefault()
        var input = event.clipboardData.getData('Text').replace(/\W/g,'')
        var k = this.preCalcTextInput(formatAddress(input))
        event.target.value = k.n
        event.target.selectionStart = k.c 
        event.target.selectionEnd = k.c 
    }

    private keyDown(event) {
        var t = event.target
        
        var specialKey = (event.altKey) || (event.ctrlKey) || (event.metaKey)

        if (specialKey) {return}

        this.lockInput(t)

        if (event.key.length == 1) {
            event.preventDefault()
            if ('0123456789abcdefghjklmnpqrstuvxyABCDEFGHJKLMNPQRSTUVXY'.indexOf(event.key) > -1) {
            var k = this.preCalcTextInput(event.key)
            event.target.value = k.n
            event.target.selectionStart = k.c 
            event.target.selectionEnd = k.c 
            //this.caretPosition = k.c 
            } else {
                // trigger bad char here
            }
        }

        if (event.key == 'Tab') {
            c = (Math.floor(c/5)+1)*5
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
                    var k = this.preCalcTextInput(event.key)
                    event.target.value = k.n
                    event.target.selectionStart = k.c 
                    event.target.selectionEnd = k.c 
                    //this.caretPosition = k.c 
                }
            } else {
                event.preventDefault()
                var k = this.preCalcTextDelete()
                event.target.value  = k.n
                event.target.selectionStart = k.c 
                event.target.selectionEnd = k.c 
                //this.caretPosition = k.c
            }
        }

        if (event.key == 'Delete') {
            event.preventDefault()
            var k = this.preCalcTextDelete()
            event.target.value  = k.n
            event.target.selectionStart = k.c 
            event.target.selectionEnd = k.c 
            //this.caretPosition = k.c
        }

        if (event.key == 'Backspace') {
            event.preventDefault()
            var k = this.preCalcTextBackspace()
            event.target.value  = k.n
            event.target.selectionStart = k.c 
            event.target.selectionEnd = k.c 
            //this.caretPosition = k.c
        }

        this.freeInput(t)
        
    }

    private keyUp(event) {
        event.preventDefault()
        var t = event.target
        this.freeInput(t)
    }

    private preCalcTextDelete() {
        var t = this.getTextarea()
        var v = t.value
        var s = t.selectionStart
        var e = t.selectionEnd
        var c = s
        if (s == e) {
            e++
            try {
                if (v[s].match(/\W/)) {
                    e++
                }
            } catch(err) {}
        }
        var a = v.substr(0,s)
        var m = v.substr(s,e)   // highlighted text
        var b = v.substr(e,v.length)
        var n = formatAddress(a+b) // new text generated after formatting
        return {a, m, b, c, n, s, e}   
    }

    private preCalcTextBackspace() {
        var t = this.getTextarea()
        var v = t.value
        var s = t.selectionStart
        var e = t.selectionEnd
        var c = (s == e) ? s - 1 : s
        s = (s == e) ? s - 1 : s
        var a = v.substr(0,s)
        var m = v.substr(s,e)   // highlighted text
        var b = v.substr(e,v.length)
        var n = formatAddress(a+b) // new text generated after formatting
        return {a, m, b, c, n, s, e}   
    }

    private preCalcTextInput(input) {
        var t = this.getTextarea()
        var v = t.value
        var s = t.selectionStart
        var e = t.selectionEnd
        var a = v.substr(0,s)
        var m = v.substr(s,e)
        var b = v.substr(e,v.length)
        var c = formatAddress(a+input).length // new caret position
        var n = formatAddress(a+input+b) // new text generated after formatting
        return {a, m, b, c, n, input, s, e}
    }

    @Watch('address', {immediate: true, deep: false})
    onTfieldChanged(val: string, oldVal: string) {
        this.address = formatAddress(val)
    }

    @Prop(String) public address!: string;
}
</script>

<style scoped>

    textarea {
        word-spacing: 30px;
        text-transform: uppercase;
        width: 3*3em;
        height: 100px;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-style: normal;
        font-weight: normal;
        line-height: 30px;
        font-size: 24px;
        border: 2px var(--nimiq-gray);
        border-radius: 4px;
        margin: 4px;
        box-sizing: border-box;
        resize: none;

        color: var(--nimiq-blue);

        /* Light Blue */
        mix-blend-mode: normal;
        /*opacity: 0.6;   */
        outline: none;
        overflow: hidden;
        padding-left: 30px;
        background-color: transparent;
    }

    textarea::placeholder {
        color: var(--nimiq-light-blue);
        opacity: 0.6;
    }

</style>
