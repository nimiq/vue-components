<template>
    <div class="account-details">
        <CloseButton class="top-right" @click="close"/>
        <Account layout="column" :address="address" :image="image" :label="label !== address ? label : ''"
             :walletLabel="walletLabel" :balance="balance" :editable="editable" :placeholder="placeholder"
             @changed="changed" ref="account"/>
        <AddressDisplay :address="address" copyable />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Account from './Account.vue';
import Amount from './Amount.vue';
import AddressDisplay from './AddressDisplay.vue';
import CloseButton from './CloseButton.vue';

@Component({components: {Account, Amount, AddressDisplay, CloseButton}})
export default class AccountDetails extends Vue {
    @Prop(String) private address!: string;
    @Prop(String) private image?: string;
    @Prop(String) private label?: string;
    @Prop(String) private walletLabel?: string;
    @Prop(Number) private balance?: number;
    @Prop(Boolean) private editable?: boolean;
    @Prop(String) private placeholder?: string;

    public focus() {
        if (this.editable) {
            (this.$refs.account as Account).focus();
        }
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private close() {}

    @Emit()
    // tslint:disable-next-line no-empty
    private changed(label: string) {}
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
        /* background: rgba(255, 255, 255, 0.95); */
        padding: 4rem;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        z-index: 2;
        box-sizing: border-box;
    }

    .account {
        padding: 0;
        width: 100%;
    }

    .account >>> .identicon-and-label {
        width: 100%;
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
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
</style>
