<template>
    <div class="account-details">
        <a href="javascript:void(0)" class="nq-icon cancel-circle" @click="close"></a>
        <Account layout="column" :address="address" :image="image" :label="label !== address ? label : ''"
             :walletLabel="walletLabel" :balance="balance"></Account>
        <AddressDisplay :address="address"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Account from './Account.vue';
import Amount from './Amount.vue';
import AddressDisplay from './AddressDisplay.vue';

@Component({components: {Account, Amount, AddressDisplay}})
export default class AccountDetails extends Vue {
    @Prop(String) private address!: string;
    @Prop(String) private image?: string;
    @Prop(String) private label?: string;
    @Prop(String) private walletLabel?: string;
    @Prop(Number) private balance?: number;

    @Emit()
    // tslint:disable-next-line no-empty
    private close() {}
}
</script>

<style scoped>
    /* Nimiq Style */
    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.cancel-circle {
        background-image: url('data:image/svg+xml,<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.80761 9.80762C14.8761 4.7391 23.1239 4.7391 28.1924 9.80762C33.2609 14.8761 33.2609 23.1239 28.1924 28.1924C23.1239 33.2609 14.8761 33.2609 9.80761 28.1924C4.73909 23.1239 4.73909 14.8761 9.80761 9.80762ZM19 17.5858L22.5355 14.0503L23.9497 15.4645L20.4142 19L23.9497 22.5355L22.5355 23.9498L19 20.4142L15.4645 23.9498L14.0503 22.5355L17.5858 19L14.0503 15.4645L15.4645 14.0503L19 17.5858Z" fill="%23101531"/></svg>');
    }
    /* END Nimiq Style */

    .account-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        padding: 4rem;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .cancel-circle {
        width: 3rem;
        height: 3rem;
        background-size: 135%;
        position: absolute;
        top: 2rem;
        right: 2rem;
        opacity: 0.2;
        transition: opacity .3s ease, transform .45s ease;
    }

    .cancel-circle::after {
        /* enlarged click area */
        content: '';
        display: block;
        position: absolute;
        top: -1.5rem;
        right: -1.5rem;
        bottom: -1.5rem;
        left: -1.5rem;
    }

    .cancel-circle:focus,
    .cancel-circle:hover {
        opacity: .4;
        /* transform: scale(1.06); */
    }

    .cancel-circle:focus {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: .7;
        outline: none;
    }

    .account {
        padding: 0;
    }

    .account >>> .identicon {
        width: 18rem;
        height: 18rem;
        margin-bottom: 3rem;
    }

    .account >>> .label {
        font-size: 3rem;
        font-weight: 600;
        opacity: 1;
    }

    .account >>> .wallet-label {
        margin-top: .5rem;
    }

    .account >>> .label,
    .account >>> .wallet-label {
        max-width: unset;
        max-height: unset;
    }

    .account >>> .balance {
        font-size: 3rem;
        margin-top: 3rem;
    }

    .address-display {
        margin-top: 7rem;
    }
</style>
