<template>
    <div class="account-selector">
        <div class="container" :class="{'extra-spacing': wallets.length === 1}">
            <div v-for="wallet in sortedWallets" :key="wallet.id"
                :class="{
                    'disabled-account': _isAccountDisabled(wallet),
                    'highlighted-disabled-account': highlightedDisabledAccount === wallet,
                }"
            >
                <div v-if="wallets.length > 1 || _isAccountDisabled(wallet)" class="wallet-label">
                    <div>
                        <span class="nq-label">{{ wallet.label }}</span>
                        <div v-if="_isAccountDisabled(wallet)" class="warning-disabled-account nq-label">
                            (Incompatible with this operation)
                        </div>
                    </div>
                </div>
                <AccountList
                    :accounts="wallet | listAccountsAndContracts | sortAccountsAndContracts(minBalance, disableContracts)"
                    :disabledAddresses="disabledAddresses"
                    :walletId="wallet.id"
                    :minBalance="minBalance"
                    :decimals="decimals"
                    :disableContracts="disableContracts"
                    :disabled="_isAccountDisabled(wallet)"
                    @account-selected="accountSelected"
                    @click.native="_accountClicked(wallet)"
                />
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
    contracts: ContractInfo[];
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
    @Prop({type: Array, default: []}) public disabledAddresses!: string[];
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;
    @Prop(Boolean) private disableLegacyAccounts?: boolean;
    @Prop(Boolean) private disableBip39Accounts?: boolean;
    @Prop(Boolean) private disableLedgerAccounts?: boolean;
    @Prop({type: Boolean, default: true}) private allowLogin!: boolean;

    private highlightedDisabledAccount: WalletInfo | null = null;
    private highlightedDisabledAccountTimeout: number = -1;

    private get sortedWallets(): WalletInfo[] {
        return this.wallets.slice(0).sort((a: WalletInfo, b: WalletInfo): number => {
            const aDisabled = this._isAccountDisabled(a);
            const bDisabled = this._isAccountDisabled(b);

            if (aDisabled && !bDisabled) return 1;
            if (!aDisabled && bDisabled) return -1;

            if (!this.minBalance) return 0; // don't sort by balance if no minBalance required

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

    private _isAccountDisabled(account: WalletInfo): boolean {
        return this.disableLegacyAccounts && account.type === 1 /* LEGACY */
            || this.disableBip39Accounts && account.type === 2 /* BIP39 */
            || this.disableLedgerAccounts && account.type === 3 /* LEDGER */;
    }

    private _accountClicked(account: WalletInfo) {
        if (!this._isAccountDisabled(account)) return;

        window.clearTimeout(this.highlightedDisabledAccountTimeout);
        this.highlightedDisabledAccount = account;
        this.highlightedDisabledAccountTimeout = window.setTimeout(() => this.highlightedDisabledAccount = null, 300);
    }
}
</script>

<style scoped>
    .account-selector {
        overflow: auto;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 400px;
    }

    .container {
        overflow-y: auto;
        padding-top: 0.5rem;
        padding-bottom: 4rem;
        flex-grow: 1;
        mask-image: linear-gradient(0deg , rgba(255,255,255,0), rgba(255,255,255, 1) 4rem, rgba(255,255,255,1) calc(100% - 4rem), rgba(255,255,255,0));
    }

    .container.extra-spacing {
        padding-top: 3rem;
    }

    .disabled-account > .wallet-label .nq-label {
        opacity: .4;
    }

    .disabled-account .warning-disabled-account {
        padding-top: .5rem;
        text-transform: none;
        line-height: 1.2;
        transition: opacity .3s ease, color .3s ease;
    }

    .disabled-account.highlighted-disabled-account .warning-disabled-account {
        color: var(--nimiq-red);
        opacity: 1;
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

    .footer {
        padding: 4rem 0 3rem;
        margin-top: -4rem;
        text-align: center;
    }

    .nq-button-s {
        margin: auto;
        pointer-events: all;
    }
</style>
