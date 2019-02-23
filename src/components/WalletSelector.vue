<template>
    <div class="wallet-selector">
        <PageHeader back-arrow @back="$emit('back')">
            {{ title }}
        </PageHeader>

        <PageBody>
            <WalletList :wallets="walletWallets" @wallet-selected="walletSelected" show-arrows/>

            <AccountList v-if="legacyAccounts.length > 0" :accounts="legacyAccounts" @account-selected="accountSelected"/>
        </PageBody>

        <PageFooter v-if="showAddWallet" @click.native="addWallet">
            <div class="nq-icon add-circle"></div>
            <div>Add wallet</div>
        </PageFooter>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import WalletList from './WalletList.vue';
import AccountList from './AccountList.vue';
import PageHeader from './PageHeader.vue';
import PageBody from './PageBody.vue';
import PageFooter from './PageFooter.vue';

@Component({components: {WalletList, AccountList, PageHeader, PageBody, PageFooter}})
export default class WalletSelector extends Vue {
    @Prop(Array) public wallets!:
        Array<{ id: string, label: string, accounts: Map<string, any>, contracts: object[], type: number }>;
    @Prop({type: String, default: 'Select Wallet'}) public title!: string;
    @Prop({type: Boolean, default: true}) public showAddWallet!: boolean;

    private get walletWallets() {
        return this.wallets.filter((wallet) => wallet.type !== 0); // Return only non-legacy wallets
    }

    private get legacyAccounts() {
        const legacyWallets = this.wallets.filter((wallet) => wallet.type === 0); // Filter legacy wallets
        return legacyWallets.map((wallet) => {
            const addressInfo = wallet.accounts.values().next().value;
            return {
                label: addressInfo.label,
                userFriendlyAddress: addressInfo.userFriendlyAddress,
                balance: addressInfo.balance,
                walletId: wallet.id,
            };
        });
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private walletSelected(walletId: string) {}

    @Emit()
    // tslint:disable-next-line no-empty
    private accountSelected(walletId: string, address: string) {}

    @Emit()
    private addWallet() {
        console.log('adding-wallet, wallet-selector');
    }
}
</script>

<style scoped>
    /** Nimiq Style **/
    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.add-circle {
        background-image: url('data:image/svg+xml,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 34"><path fill="%23724CEB" d="M15.69,9.15v6.54H9.15v2.62h6.54v6.54h2.62v-6.54h6.54v-2.62h-6.54V9.15H15.69z M17,2.62 c7.96,0,14.38,6.43,14.38,14.38S24.96,31.38,17,31.38S2.62,24.96,2.62,17S9.04,2.62,17,2.62z M17,0C7.63,0,0,7.63,0,17 s7.63,17,17,17s17-7.63,17-17S26.37,0,17,0z"/></svg>');
    }
    /** END Nimiq Style **/

    .wallet-selector {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
    }

    .page-body {
        padding: 0 !important;
    }

    .wallet-selector >>> .account {
        padding-left: 3rem;
    }

    .wallet-selector >>> .account .identicon {
        margin-right: 1rem;
    }

    .account-list {
        border-top: solid 1px #f2f2f2;
    }

    .add-circle {
        height: 4.25rem;
        width: 4.25rem;
        flex-shrink: 0;
        margin-right: 2rem;
    }

    .page-footer {
        cursor: pointer;
    }
</style>
