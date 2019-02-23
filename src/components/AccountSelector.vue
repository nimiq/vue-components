<template>
    <div class="account-selector">
        <div class="header"></div>

        <div class="container" :class="{'extra-spacing': wallets.length === 1}">
            <div v-for="wallet in sortedWallets" :key="wallet.id">
                <div v-if="wallets.length > 1" class="wallet-label">
                    <span class="nq-label">{{ wallet.label }}</span>
                </div>
                <AccountList :accounts="wallet.accounts | accountsToArray | sortAccounts(minBalance)" :walletId="wallet.id" :minBalance="minBalance" @account-selected="accountSelected"/>
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
        accountsToArray: (accounts: Map<string, AccountInfo>): AccountInfo[] => {
            return Array.from(accounts.values());
        },
        sortAccounts: (accounts: AccountInfo[], minBalance?: number): AccountInfo[] => {
            if (!minBalance) return accounts;

            return accounts.slice(0).sort((a: AccountInfo, b: AccountInfo): number => {
                if ((!a.balance || a.balance < minBalance) && b.balance && b.balance >= minBalance) return 1;
                if ((!b.balance || b.balance < minBalance) && a.balance && a.balance >= minBalance) return -1;
                return 0;
            });
        },
    },
})
export default class AccountSelector extends Vue {
    @Prop(Array) private wallets!: WalletInfo[];
    @Prop(Number) private minBalance?: number;
    @Prop({type: Boolean, default: true}) private allowLogin!: boolean;

    private get sortedWallets(): WalletInfo[] {
        if (!this.minBalance) return this.wallets;

        return this.wallets.slice(0).sort((a: WalletInfo, b: WalletInfo): number => {
            const balanceA = Array.from(a.accounts.values()).reduce((sum, account) => sum + (account.balance || 0), 0);
            const balanceB = Array.from(b.accounts.values()).reduce((sum, account) => sum + (account.balance || 0), 0);

            if ((!balanceA || balanceA < this.minBalance!) && balanceB && balanceB >= this.minBalance!) return 1;
            if ((!balanceB || balanceB < this.minBalance!) && balanceA && balanceA >= this.minBalance!) return -1;
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
        padding-top: calc(0.5 * var(--nimiq-size, 8px));
        flex-grow: 1;
    }

    .container.extra-spacing {
        padding-top: calc(3 * var(--nimiq-size, 8px));
    }

    .wallet-label {
        margin:
            calc(3.5 * var(--nimiq-size, 8px))
            calc(2 * var(--nimiq-size, 8px))
            calc(2 * var(--nimiq-size, 8px))
            calc(3 * var(--nimiq-size, 8px));
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .wallet-label .nq-label {
        margin: 0;
        margin-right: calc(2 * var(--nimiq-size, 8px));
    }

    .wallet-label::after {
        content: '';
        display: block;
        flex-grow: 1;
        height: 1px;
        background: rgba(31, 35, 72, 0.1);
    }

    .header {
        height: calc(4 * var(--nimiq-size, 8px));
        margin-bottom: calc(-4 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        background: linear-gradient(
            white 0,
            rgba(255, 255, 255, 0) calc(4 * var(--nimiq-size, 8px))
        );
        z-index: 1;
        pointer-events: none;
    }

    .footer {
        padding: calc(4 * var(--nimiq-size, 8px)) 0;
        margin-top: calc(-4 * var(--nimiq-size, 8px));
        text-align: center;
        background: linear-gradient(
            rgba(255, 255, 255, 0) 0,
            white calc(4 * var(--nimiq-size, 8px)),
            rgba(255, 255, 255, 0) calc(4 * var(--nimiq-size, 8px))
        );
        position: relative;
        pointer-events: none;
    }

    .nq-button-s {
        margin: auto;
        pointer-events: all;
    }
</style>
