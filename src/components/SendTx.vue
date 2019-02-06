<template>
    <div class="SendTx">        
        <div class="nq-card-header">
            <h1 class="nq-h1">Send transaction</h1>
        </div>
        
        <div class="center">
            <div class="center inline-block">
                <div class="contact-display">
                    <div class="contact-button">
                        <div class="contact-button-icon"></div>
                        <span>Contacts</span>
                    </div>
                    <div class="vertical-separator"></div>
                    <div class="identicon-display">
                        <IdenticonContact v-for="c in contacts" :name="c.name" :address="c.address"/>
                    </div>
                </div>
            </div>
            <p><span class="nq-label">Enter address</span></p>   
        </div>

      

        <InputAddress :prefill="address" :disabled="disabled"/>


        <div class="center"> 
            <p class="annotation">Address unavailable?</p>
            <p><button class="nq-button-s">Create a Cashlink</button></p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import InputAddress from './InputAddress.vue';
import IdenticonContact from './IdenticonContact.vue';
import '@nimiq/style/nimiq-style.min.css';

@Component({components: {InputAddress, IdenticonContact}})
export default class SendTx extends Vue {

    @Prop(String) public address!: string;
    @Prop(Boolean, {default: false}) public disabled!: boolean;

    data() {
        return {
            contacts: [
                {name: '', address: ''},
                {name: '', address: ''},
                {name: '', address: ''},
            ]
        };
    }

}
</script>

<style scoped>

    h1 {
        margin-top: 32px;
        margin-bottom: 64px;
    }

    .center {
        text-align: center
    }

    .inline-block {
        display: inline-block;
    }

    .vertical-separator {
        width: 2px;
        height: 100%;
        background-color: var(--nimiq-gray);
    }

    .contact-button {
        width: calc(11 * var(--nimiq-size, 8px));
        text-align: center;
        margin-right: 24px;
    }

    .contact-button-icon {
        margin: auto;
        margin-top: 11px;
        margin-bottom: 11.5px; 
        width: 40px;
        height: 49px;
        background-image: url('data:image/svg+xml,<svg width="40" height="49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.73 7.25c0 .48.34.9.82 1a4.08 4.08 0 0 1 3.26 4v32.67A4.08 4.08 0 0 1 35.73 49H6.13A6.13 6.13 0 0 1 0 42.87V6.13A6.13 6.13 0 0 1 6.13 0h25.52a4.08 4.08 0 0 1 4.08 4.08v3.17zm-5.1 31.88A10.23 10.23 0 0 0 20.4 29.6c-5.21 0-9.6 3.9-10.19 9.08a1.02 1.02 0 0 0 1.02 1.13h18.75a.64.64 0 0 0 .64-.68zm-16.38-17.7a6.15 6.15 0 1 1 12.3-.04 6.15 6.15 0 0 1-12.3.05zM6.12 4.09a2.04 2.04 0 0 0 0 4.09h25.01c.29 0 .51-.23.51-.51V4.59a.51.51 0 0 0-.5-.5H6.11z" fill="%23DADADA"/></svg>');
    }

    .contact-display {
        display: flex; 
        margin-top: 10px;
        margin-bottom: 30px;
        height: 104px;
    }

    .input-address {
        margin-bottom: 40px;
    }

    .annotation {
        margin-bottom: 5px
    }

    .identicon-display {
        display: flex; 
        margin-top: 4px;
    }

    .identicon-Contact {
        margin-left: 15px !important;
    }

</style>
