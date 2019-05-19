<template>
    <div class="account-details">
        <a href="javascript:void(0)" class="cancel-circle" @click="close">
            <CloseIcon/>
        </a>
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
import { CloseIcon } from './Icons';

@Component({components: {Account, Amount, AddressDisplay, CloseIcon}})
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
        color: inherit;
        font-size: 3rem;
        background-size: 135%;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .cancel-circle svg {
        opacity: .2;
        transition: opacity .3s cubic-bezier(0.25, 0, 0, 1);
    }

    .cancel-circle .nq-icon {
        display: block;
    }

    .cancel-circle::before {
        /* Focus Ring */
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid rgba(5, 130, 202, 0.5); /* Based on Nimiq Light Blue */
        border-radius: 500px;
        opacity: 0;
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

    .cancel-circle:hover svg,
    .cancel-circle:active svg,
    .cancel-circle:focus svg {
        opacity: .4;
    }

    .cancel-circle:focus {
        outline: none;
    }

    .cancel-circle:focus::before {
        opacity: 1;
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
