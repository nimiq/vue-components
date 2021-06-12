<template>
    <div class="account-selector">
        <div ref="container" class="container" :class="{'extra-spacing': wallets.length === 1}">
            <div v-for="wallet in sortedWallets" :key="wallet.id">
                <div v-if="wallets.length > 1 || _isAccountDisabled(wallet)" class="wallet-label">
                    <div class="nq-label">
                        {{ wallet.label }}
                        <span v-if="highlightBitcoinAccounts && wallet.btcXPub" class="btc-pill">BTC</span>
                    </div>
                    <Tooltip
                        v-if="_isAccountDisabled(wallet)"
                        :ref="`tooltip-${wallet.id}`"
                        v-bind="{
                            ...tooltipProps,
                            styles: {
                                width: '25.25rem',
                                ...tooltipProps.styles,
                            },
                        }"
                    >
                        {{ $t(
                            '{type} accounts cannot be used for this operation.',
                            { type: _getAccountTypeName(wallet)},
                        ) }}
                    </Tooltip>
                </div>
                <AccountList
                    :accounts="wallet | listAccountsAndContracts
                        | sortAccountsAndContracts(minBalance, disableContracts, disabledAddresses)"
                    :disabledAddresses="disabledAddresses"
                    :walletId="wallet.id"
                    :minBalance="minBalance"
                    :decimals="decimals"
                    :disableContracts="disableContracts"
                    :disabled="_isAccountDisabled(wallet)"
                    :tooltipProps="tooltipProps"
                    @account-selected="accountSelected"
                    @click.native="_accountClicked(wallet)"
                />
            </div>
        </div>

        <div class="footer">
            <button v-if="allowLogin" class="nq-button-s" @click="login">{{ $t('Login to another account') }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Mixins, Emit, Prop} from 'vue-property-decorator';
import AccountList from './AccountList.vue';
import Tooltip from './Tooltip.vue';
import I18nMixin from '../i18n/I18nMixin';

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
    btcXPub?: string;
}

@Component({
    name: 'AccountSelector',
    components: {AccountList, Tooltip},
    filters: {
        listAccountsAndContracts(wallet: WalletInfo): Array<AccountInfo|ContractInfo> {
            return [ ...wallet.accounts.values(), ...wallet.contracts ];
        },
        sortAccountsAndContracts: (
            accounts: Array<AccountInfo|ContractInfo>,
            minBalance?: number,
            disableContracts?: boolean,
            disabledAddresses?: string[],
        ): Array<AccountInfo|ContractInfo> => {
            if (!minBalance) return accounts;

            return accounts.sort((a: AccountInfo|ContractInfo, b: AccountInfo|ContractInfo): number => {
                // sort disabled contracts to the end
                const aIsDisabledContract = disableContracts && !('path' in a && a.path);
                const bIsDisabledContract = disableContracts && !('path' in b && b.path);
                if (aIsDisabledContract && !bIsDisabledContract) return 1;
                if (!aIsDisabledContract && bIsDisabledContract) return -1;

                // sort disabled addresses below other addresses
                const aIsDisabledAddress = disabledAddresses && disabledAddresses.includes(a.userFriendlyAddress);
                const bIsDisabledAddress = disabledAddresses && disabledAddresses.includes(b.userFriendlyAddress);
                if (aIsDisabledAddress && !bIsDisabledAddress) return 1;
                if (!aIsDisabledAddress && bIsDisabledAddress) return -1;

                // sort accounts with insufficient funds below accounts with enough balance
                if ((!a.balance || a.balance < minBalance) && b.balance && b.balance >= minBalance) return 1;
                if ((!b.balance || b.balance < minBalance) && a.balance && a.balance >= minBalance) return -1;

                return 0;
            });
        },
    },
})
export default class AccountSelector extends Mixins(I18nMixin) {
    @Prop(Array) private wallets!: WalletInfo[];
    @Prop({type: Array, default: () => []}) public disabledAddresses!: string[];
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;
    @Prop(Boolean) private disableLegacyAccounts?: boolean;
    @Prop(Boolean) private disableBip39Accounts?: boolean;
    @Prop(Boolean) private disableLedgerAccounts?: boolean;
    @Prop(Boolean) private highlightBitcoinAccounts?: boolean;
    @Prop({type: Boolean, default: true}) private allowLogin!: boolean;

    private shownTooltip: Tooltip | null = null;
    private hideTooltipTimeout: number = -1;
    private tooltipProps: any = {
        container: null, // set in mounted hook
        preferredPosition: 'bottom right',
        margin: {
            left: 16,
            right: 16,
            top: 32, // avoid that tooltips get affected by mask image
            bottom: 32,
        },
        styles: {
            pointerEvents: 'none',
        },
    };

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

    private mounted() {
        this.tooltipProps.container = {
            $el: this.$refs.container as HTMLElement,
        };
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

    private _getAccountTypeName(account: WalletInfo): string {
        switch (account.type) {
            case 1: return this.$t('Legacy');
            case 2: return 'Keyguard';
            case 3: return 'Ledger';
            default: throw new Error(`Unknown account type ${account.type}`);
        }
    }

    private _accountClicked(account: WalletInfo) {
        window.clearTimeout(this.hideTooltipTimeout);
        const tooltip = this.$refs[`tooltip-${account.id}`]
            ? (this.$refs[`tooltip-${account.id}`] as Tooltip[])[0]
            : null;
        if (this.shownTooltip && this.shownTooltip !== tooltip) {
            this.shownTooltip.hide(/* force */ false);
        }
        if (tooltip) {
            tooltip.show();
            this.hideTooltipTimeout = window.setTimeout(() => {
                tooltip.hide(/* force */ false);
                this.shownTooltip = null;
            }, 2000);
        }
        this.shownTooltip = tooltip;
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
        mask-image: linear-gradient(0deg , rgba(255,255,255,0), rgba(255,255,255, 1) 4rem,
            rgba(255,255,255,1) calc(100% - 4rem), rgba(255,255,255,0));
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
    }

    .wallet-label .tooltip {
        margin-left: 1rem;
    }

    .wallet-label::after {
        content: '';
        display: block;
        flex-grow: 1;
        height: 1px;
        margin-left: 2rem;
        background: rgba(31, 35, 72, 0.1);
    }

    .btc-pill {
        background: #F7931A; /* Bitcoin orange */
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 2rem;
        margin-left: 0.25rem;
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
