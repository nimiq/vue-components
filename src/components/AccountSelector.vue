<template>
    <div class="account-selector">
        <div class="header"></div>

        <div class="container" :class="{'extra-spacing': wallets.length === 1}">
            <div v-for="wallet in sortedWallets" :key="wallet.id">
                <div v-if="wallets.length > 1" class="wallet-label">
                    <span class="nq-label">{{ wallet.label }}</span>
                </div>
                <AccountList
                    :accounts="wallet | listAccountsAndContracts | sortAccountsAndContracts(minBalance, disableContracts)"
                    :walletId="wallet.id"
                    :minBalance="minBalance"
                    :decimals="decimals"
                    :disableContracts="disableContracts"
                    @account-selected="accountSelected"/>
            </div>
        </div>

        <div class="footer">
            <button v-if="allowLogin" class="nq-button-s" @click="login">Login to another Account</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import AccountList from './AccountList.vue';

// This is a reduced list of properties, for convenience
export interface ContractInfo {
    label: string;
    userFriendlyAddress: string;
    balance?: number;
    walletId?: string;
}

export interface AccountInfo {
    path: string;
    label: string;
    // address: Nimiq.Address; // Nimiq namespace is not known and not used by @nimiq/vue-components
    userFriendlyAddress: string;
    balance?: number;
    walletId?: string;
}

export interface WalletInfo {
    id: string;
    label: string;
    accounts: Map<string, AccountInfo>;
    contracts: any[];
    type: number;
    keyMissing: boolean;
}

@Component({
    components: {AccountList},
    filters: {
        listAccountsAndContracts(wallet: WalletInfo): Array<AccountInfo|ContractInfo> {
            return [ ...wallet.accounts.values(), ...wallet.contracts ];
        },
        sortAccountsAndContracts: (
            accounts: Array<AccountInfo|ContractInfo>,
            minBalance?: number,
            disableContracts?: boolean,
        ): Array<AccountInfo|ContractInfo> => {
            if (!minBalance) return accounts;

            return accounts.sort((a: AccountInfo|ContractInfo, b: AccountInfo|ContractInfo): number => {
                // sort disabled contracts to the end
                const aIsDisabledContract = disableContracts && !('path' in a && a.path);
                const bIsDisabledContract = disableContracts && !('path' in b && b.path);
                if (aIsDisabledContract && !bIsDisabledContract) return 1;
                if (!aIsDisabledContract && bIsDisabledContract) return -1;

                // sort accounts with insufficient funds below accounts with enough balance
                if ((!a.balance || a.balance < minBalance) && b.balance && b.balance >= minBalance) return 1;
                if ((!b.balance || b.balance < minBalance) && a.balance && a.balance >= minBalance) return -1;

                return 0;
            });
        },
    },
})
export default class AccountSelector extends Vue {
    @Prop(Array) private wallets!: WalletInfo[];
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;
    @Prop({type: Boolean, default: true}) private allowLogin!: boolean;

    private get sortedWallets(): WalletInfo[] {
        if (!this.minBalance) return this.wallets;

        return this.wallets.slice(0).sort((a: WalletInfo, b: WalletInfo): number => {
            const hasAddressWithSufficientBalance = (accounts: Map<string, AccountInfo>, contracts: ContractInfo[]) =>
                Array.from(accounts.values()).some((account) => account.balance >= this.minBalance)
                    || (!this.disableContracts && contracts.some((contract) => contract.balance >= this.minBalance));

            const aHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(a.accounts, a.contracts);
            const bHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(b.accounts, b.contracts);

            if (!aHasAddressWithSufficientBalance && bHasAddressWithSufficientBalance) return 1;
            if (aHasAddressWithSufficientBalance && !bHasAddressWithSufficientBalance) return -1;

            return 0;
        });
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountSelected(walletId: string, address: string) {}

    @Emit()
    // tslint:disable-next-line no-empty
    private login() {}
}
</script>

<style scoped>
    .account-selector {
        overflow: auto;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .container {
        overflow-y: auto;
        padding-top: 0.5rem;
        flex-grow: 1;
    }

    .container.extra-spacing {
        padding-top: 3rem;
    }

    .wallet-label {
        margin: 3.5rem 2rem 2rem 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .wallet-label .nq-label {
        margin: 0;
        margin-right: 2rem;
    }

    .wallet-label::after {
        content: '';
        display: block;
        flex-grow: 1;
        height: 1px;
        background: rgba(31, 35, 72, 0.1);
    }

    .header {
        height: 4rem;
        margin-bottom: -4rem;
        flex-shrink: 0;
        background: linear-gradient(
            white 0,
            rgba(255, 255, 255, 0) 4rem
        );
        z-index: 1;
        pointer-events: none;
    }

    .footer {
        padding: 4rem 0;
        margin-top: -4rem;
        text-align: center;
        background: linear-gradient(
            rgba(255, 255, 255, 0) 0,
            white 4rem,
            rgba(255, 255, 255, 0) 4rem
        );
        position: relative;
        pointer-events: none;
    }

    .nq-button-s {
        margin: auto;
        pointer-events: all;
    }
</style>
