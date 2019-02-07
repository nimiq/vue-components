<template>
    <div class="input-address">
        <form>
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-on:mouseover="save" v-model="text[0]" type="text" placeholder="NQ" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[1]" type="text" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[2]" type="text" /><br>
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[3]" type="text" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[4]" type="text" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[5]" type="text" /><br>
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[6]" type="text" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[7]" type="text" />
            <input class="nimiq-address-input" v-on:paste="paste" maxlength=4 v-on:keydown="kdown" v-on:keyup="kup" v-model="text[8]" type="text" />
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import Identicon from './Identicon.vue'
import '@nimiq/style/nimiq-style.min.css'

function alphaNum(text) {

    return text.replace(/\W/g,'')
}

function splitText(text, size) {
    if (text) {
        var split = text.match(/.{1,4}/g);
        if (split) {
            if (split.length > size) {
                return split
            } else {
                return split.concat(Array(size - split.length).fill(''))
            }
        }
    }
    return Array(size).fill('')
}

function lockInput(inputElement) {
    inputElement.maxLength = inputElement.value.length;
}

function freeInput(inputElement) {
    inputElement.removeAttribute('maxLength')
}

@Component({components: {Identicon}})
export default class InputAddress extends Vue {
    text = Array(9).fill('');
    Address = '';
    oldAddress = ''
    active = -1;
    act = false;
    maxLength = 4
    clipboardData = ''
    counter = 0
    first = false;
    keyNext = [""];
    keyPrevKeyUp = ["ArrowLeft"]
    keyPrevKeyDown = ["Backspace"]
    s = 0
    e = 0

    private kdownFirst(event) {
        console.log(event.target)
        if (event.target.value.length == 0 ) {
            if (!event.key.match(/n/i)) {
                event.target.value = 'nq';
            }
        } 
        this.kdown(event)
    }

    private kdown(event) {
        if ((!event.key.match(/[a-zA-Z0-9]/g)) || (event.target.value.length == this.maxLength )) {
            lockInput(event.target)
        }

        var s = event.target.selectionStart
        var e = event.target.selectionEnd

        if ((s == e) && (s == this.maxLength) && (event.key.length == 1)) {
               // if (this.keyNext.indexof(event.code)) {
                try {
                    this.getNextInput(event.target).focus()
                } catch(err) {console.log(err)}
               // }  
        }   
        if ((s == e) && (s == 0) && (this.keyPrevKeyDown.indexOf(event.key) > -1)) {
            try {
                this.getPreviousInput(event.target).focus()
            } catch(err) {console.log(err)}
        }
    }
    

    private kup(event) {
        if (event.target.maxLength < this.maxLength) {
            freeInput(event.target)
        } 

        var s = event.target.selectionStart
        var e = event.target.selectionEnd

        console.log(event)
        console.log({s, e})
 
        if (s == e) {
            if (s == this.maxLength) {
               // if (this.keyNext.indexof(event.code)) {
                try {
                    this.getNextInput(event.target).focus()
                } catch(err) {console.log(err)}
               // }  
            } 
            if ((s == 0) && (this.keyPrevKeyUp.indexOf(event.key) > -1)) {
               // if (this.keyPrev.indexof(event.code)) {
                try {
                    this.getPreviousInput(event.target).focus()
                } catch(err) {console.log(err)}
               // }
            }
        }
    }

    private pasteFirst(event) {
        this.paste()
    }

    private paste(event, prefix = '') {
        var clipboard = event.clipboardData.getData('Text').replace(/\W/g,'')
        event.stopPropagation()
        event.preventDefault()

        var s = event.target.selectionStart
        var e = event.target.selectionEnd

        if ((event.target.maxLength == event.target.value.length) && (e == s)) {
            return
        }

        var text = event.target.value
        text = text.substr(0,s) + clipboard + text.substr(e)

        event.target.value = text.substr(0, this.maxLength)
        clipboard = text.substr(this.maxLength)


        try {
        var n = this.getNextInput(event.target)
        while ((n) && (clipboard)) {
            if (!n.value) {
                console.log(clipboard)
                n.value = clipboard.substr(0, this.maxLength)
                clipboard = clipboard.substr(this.maxLength)
            } else {
                break;
            }
            n.focus()
            n = this.getNextInput(n)
        }
        } catch(err) {console.log(err)}

        var e = this.getInputElements()
        // set component text to input 
        for (var i = 0; i < this.text.length; i++) {
            this.text[i] = e[i].value
        }
        // trigger text changed 
        this.onTextChanged(this.text, this.text)
    }


    private save(event) {
        console.log('ENTER')
    }

    private getInputElements() {
        return this.$el.getElementsByClassName('nimiq-address-input')
    }

    private getActiveInput() {
        var e = document.activeElement
        try {
            return this.isInput(e) ? e : null;
        } catch(err){
            return null
        }  
    }

    private isInput(input) {
        return input.classList.contains('nimiq-address-input')
    }

    private getNextInput(input) {
        if (input === this.getLastInput()) {
            return null
        } else {
            while(!this.isInput(input.nextElementSibling)) {
                input = input.nextElementSibling
            }
            return input.nextElementSibling
        }
    }

    private getPreviousInput(input) {
        if (input === this.getFirstInput()) {
            return null
        } else {
            while(!this.isInput(input.previousElementSibling)) {
                input = input.previousElementSibling
            }
            return input.previousElementSibling
        } 
    }

    private getActiveInputIndex() {
        
    }

    private disableInput(input) {
        if (input.value.length == this.maxLength) {
            input.classList.add('dis')
        } else {
            input.classList.remove('dis')
        }
    }

    private getFirstInput() {
        return this.getInputElements()[0]
    }

    private getLastInput() {
        var i = this.getInputElements()
        return i[i.length]
    }

    @Watch('text', {immediate: true, deep: false})
    onTextChanged(val: string, oldVal: string) {
        if (!this.first) {this.first = true} else {
        this.counter++
        var maxLen = this.maxLength
        this.Address = this.text.join('')

        for (let e of this.getInputElements()) {
            this.disableInput(e)
        }
        
        return 
        }
    }

    @Prop(String) public address!: string;
    @Prop(String) public name!: string;
}
</script>

<style scoped>
    form {
        background-color: white;
        padding: 10px;
    }

    input {
        /*letter-spacing: 0.1em;*/
        text-transform: uppercase;
        width: 3em;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 24px;
        border: 2px solid #dbdce2;
        border-radius: 8px;
        margin: 4px;
        box-sizing: border-box;

        color: var(--nimiq-light-blue);
        size: 4;

        /* Light Blue */
        mix-blend-mode: normal;
        /*opacity: 0.6;   */

    }

    input:focus {

    }

    .dis {
        color: black;
        border: 2px solid white;
        color: var(--nimiq-blue);
    }

    input:disabled {
        color: black;
        border: 2px solid white;
        color: var(--nimiq-blue);
    }

    input::placeholder {
            color: var(--nimiq-light-blue);
            opacity: 0.6
        };

    span {
        text-align: center;
    }

    .identicon-contact {
        width: calc(10 * var(--nimiq-size, 8px));
        min-width: calc(5 * var(--nimiq-size, 8px));
        text-align: center
    }

    .identicon-contact .identicon {
        margin: auto;
    }

    .name-placeholder {
        background-color: var(--nimiq-light-gray);
        width: calc(10 * var(--nimiq-size, 8px));
        height: 1em;
        border-radius: 0.5em;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
