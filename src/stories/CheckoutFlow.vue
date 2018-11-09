<template>
    <div>
        <PaymentInfoLine :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="https://shop.nimiq.com"/>
        <small-page>
            <div class="visible-area">
                <div class="multi-pages" :style="`transform: translate3d(-${(page - 1) * 100}%, 0, 0)`">
                    <WalletSelector @wallet-selected="walletSelected"
                                   @account-selected="accountSelected"
                                   @add-wallet="addWallet"
                                   @back="back"
                                   :wallets="wallets"/>
                    <AccountSelector
                            @account-selected="accountSelected"
                            @switch-wallet="switchWallet"
                            @back="switchWallet"
                            :accounts="currentAccounts"
                            :walletId="currentWallet ? currentWallet.id : ''"
                            :walletLabel="currentWallet ? currentWallet.label : ''"
                            :walletType="currentWallet ? currentWallet.type : 0"
                            :show-switch-wallet="false"/>
                </div>
            </div>
        </small-page>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import WalletSelector from '../components/WalletSelector.vue';
import AccountSelector from '../components/AccountSelector.vue';
import SmallPage from '../components/SmallPage.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';

@Component({components: {PaymentInfoLine, SmallPage, AccountSelector, WalletSelector}})
export default class CheckoutFlow extends Vue {
    @Prop(Array) private wallets!:
        Array<{ id: string, label: string, accounts: object[], contracts: object[], type: number }>;
    @Prop(String) private preselectedWalletId!: string;

    private page: number = 1;
    private selectedWalletId: string|null = null; // undefined is not reactive

    private get currentWallet() {
        const walletId = this.selectedWalletId || this.preselectedWalletId || false;
        if (!walletId) return undefined;

        return this.wallets.find((l) => l.id === walletId);
    }

    private get currentAccounts() {
        const wallet = this.currentWallet;
        if (!wallet) return [];
        return Array.from(wallet.accounts.values());
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private back() {}

    @Emit()
    private walletSelected(walletId: string) {
        this.selectedWalletId = walletId;
        this.page = 2;
    }

    @Emit()
    private switchWallet() {
        this.page = 1;
    }

    @Emit()
    private addWallet() {
        this.wallets.push({
            id: '123456',
            label: 'New Wallet',
            accounts: [{}, {}],
            contracts: [],
            type: 1, // BIP39
            // userFriendlyId: 'black panther',
        });
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountSelected(walletId: string, address: string) {}
}
</script>

<style scoped>
    .visible-area {
        overflow: hidden;
        flex: 1;
        display: flex
    }

    .multi-pages {
        position: relative;
        flex: 1;
        display: grid;
        grid-template-columns: 100% 100%;
        will-change: transform;
        transition: all 400ms ease-in-out;
    }
</style>
