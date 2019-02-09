<template>
    <div class="SendTx">        
        <div class="nq-card-header">
            <h1 class="nq-h1">Send transaction</h1>
        </div>
        <div style="text-align: center">
            <div style="text-align: center;display: inline-block;">
                <div id="contact-display">
                    <div id="contact-button">
                        <div id="contact-button-icon"></div>
                        <span>Contacts</span>
                    </div>
                    <div class="vertical-separator"></div>
                    <div id="identicon-display">
                        <slot></slot>
                    </div>
                </div>
                <div id="address-input">
                <p><span class="nq-label">Enter address</span></p>
                <InputAddress :address="address" :disabled="disabled"/>
                </div>
                <p id="annotation">Address unavailable?</p>
                <p><button class="nq-button-s">Create a Cashlink</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import InputAddress from './InputAddress.vue';
    import IdenticonContact from './IdenticonContact.vue';
    import '@nimiq/style/nimiq-style.min.css'

    @Component({components: {InputAddress, IdenticonContact}})
    export default class SendTx extends Vue {

        @Prop(String) public address!: string;
        @Prop(Boolean, {default: false}) public disabled!: boolean;

    }
</script>

<style scoped>
    /** Nimiq Style **/
    h1 {
        margin-top: 32px;
        margin-bottom: 64px;
    }

    .vertical-separator {
        width: 2px;
        height: 100%;
        background-color: var(--nimiq-gray);
    }

    #contact-button {
        width: calc(11 * var(--nimiq-size, 8px));
        text-align: center;
        margin-right: 24px;
    }

    #contact-button-icon {
        margin: auto;
        margin-top: 11px;
        margin-bottom: 11.5px; 
        width: 40px;
        height: 49px;
        background-image: url('data:image/svg+xml,<svg width="40" height="49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.73 7.25c0 .48.34.9.82 1a4.08 4.08 0 0 1 3.26 4v32.67A4.08 4.08 0 0 1 35.73 49H6.13A6.13 6.13 0 0 1 0 42.87V6.13A6.13 6.13 0 0 1 6.13 0h25.52a4.08 4.08 0 0 1 4.08 4.08v3.17zm-5.1 31.88A10.23 10.23 0 0 0 20.4 29.6c-5.21 0-9.6 3.9-10.19 9.08a1.02 1.02 0 0 0 1.02 1.13h18.75a.64.64 0 0 0 .64-.68zm-16.38-17.7a6.15 6.15 0 1 1 12.3-.04 6.15 6.15 0 0 1-12.3.05zM6.12 4.09a2.04 2.04 0 0 0 0 4.09h25.01c.29 0 .51-.23.51-.51V4.59a.51.51 0 0 0-.5-.5H6.11z" fill="%23DADADA"/></svg>');
    }

    #contact-display {
        display: flex; 
        margin-top: 23px;
        margin-bottom: 52px;
        height: 104px;
    }

    #address-input {
        margin-bottom: 39px;
        margin-left: calc(50%+10%);
    }


    #annotation {
        margin-bottom: 5px
    }

    #identicon-display {
        display: flex; 
        margin-top: 4px;
    }

    .nq-card {
        max-width: calc(75 * var(--nimiq-size, 8px));
        background: #fafafa;
        border-radius: calc(1 * var(--nimiq-size, 8px));
        box-shadow: 0 calc(0.5 * var(--nimiq-size, 8px)) calc(3.5 * var(--nimiq-size, 8px)) rgba(0, 0, 0, 0.111158);
        margin: calc(2 * var(--nimiq-size, 8px));
    }

    @media (max-width: 450px) {
        .nq-card {
            margin: calc(2 * var(--nimiq-size, 8px)) calc(1 * var(--nimiq-size, 8px));
        }
    }
    /** END Nimiq Style **/

    .identicon-Contact {
        margin-left: 15px !important;
    }

    .small-page {
        width: 100%;
        max-width: calc(56.25 * var(--nimiq-size, 8px)); /* 450px */
        min-height: calc(58 * var(--nimiq-size, 8px)); /* 464px */
        max-height: calc(77.5 * var(--nimiq-size, 8px)); /* 620px */
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        margin: 0 calc(1.25 * var(--nimiq-size, 8px));
    }
</style>
