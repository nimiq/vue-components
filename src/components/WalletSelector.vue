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
            <div class="icon-plus-circle"></div>
            <div>Add Wallet</div>
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
        padding-left: calc(3 * var(--nimiq-size, 8px));
    }

    .wallet-selector >>> .account .identicon {
        margin-right: calc(1 * var(--nimiq-size, 8px));
    }

    .account-list {
        border-top: solid 1px #f2f2f2;
    }

    .icon-plus-circle {
        height: calc(4.25 * var(--nimiq-size, 8px));
        width: calc(4.25 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: calc(2 * var(--nimiq-size, 8px));
        background: lightgray;
        border-radius: 50%;
    }

    .page-footer {
        cursor: pointer;
    }
</style>
