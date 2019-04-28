<template>
    <div class="account-list">
        <component :is="accountContainerTag" href="javascript:void(0)" class="account-entry"
            v-for="account in accounts"
            :class="{
                'incompatible': disableContracts && _isContract(account) || minBalance && account.balance < minBalance,
                'disabled-contract': disableContracts && _isContract(account),
                'good-balance': minBalance && (account.balance || 0) >= minBalance,
                'bad-balance': minBalance && (account.balance || 0) < minBalance,
                'highlight-incompatible-address': highlightedIncompatibleAddress === account.userFriendlyAddress,
            }"
            @click="accountSelected(account)" :key="account.userFriendlyAddress"
        >
            <Account :ref="account.userFriendlyAddress"
                :address="account.userFriendlyAddress"
                :label="account.label"
                :placeholder="account.defaultLabel"
                :balance="account.balance"
                :decimals="decimals"
                :editable="editable"
                @changed="accountChanged(account.userFriendlyAddress, $event)"
            />

            <i class="nq-icon chevron-right"></i>
        </component>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Account from './Account.vue';
import { AccountInfo, ContractInfo } from './AccountSelector.vue';

@Component({components: {Account}})
export default class AccountList extends Vue {
    @Prop(Array) public accounts!: AccountInfo[];
    @Prop(String) private walletId?: string;
    @Prop(Boolean) private editable?: boolean;
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;

    private highlightedIncompatibleAddress: string | null = null;
    private highlightedIncompatibleAddressTimeout: number | null = null;

    public focus(address: string) {
        if (this.editable && this.$refs.hasOwnProperty(address)) {
            (this.$refs[address] as Account[])[0].focus();
        }
    }

    private accountSelected(account: AccountInfo) {
        const hasEnoughBalance = !this.minBalance || account.balance >= this.minBalance;
        if (this.highlightedIncompatibleAddressTimeout) {
            window.clearTimeout(this.highlightedIncompatibleAddressTimeout);
            this.highlightedIncompatibleAddressTimeout = null;
        }
        const isDisabledContract = this.disableContracts && this._isContract(account);
        if (isDisabledContract || (this.minBalance && account.balance < this.minBalance)) {
            const waitTime = isDisabledContract ? 1500 : 300;
            this.highlightedIncompatibleAddress = account.userFriendlyAddress;
            this.highlightedIncompatibleAddressTimeout =
                window.setTimeout(() => this.highlightedIncompatibleAddress = null, waitTime);
        } else {
            this.$emit('account-selected', account.walletId || this.walletId, account.userFriendlyAddress);
        }
    }

    private get accountContainerTag() {
        return !this.editable ? 'a' : 'div';
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountChanged(address: string, label: string) {}

    private _isContract(account: AccountInfo | ContractInfo) {
        return !('path' in account) || !account.path;
    }
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

    .nq-icon.chevron-right {
        background-image: url('data:image/svg+xml,<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3137 2L18.7978 10.4865L10.3137 18.9706" stroke="%231F2348" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
    /* END Nimiq Style */

    .account-list {
        flex-grow: 1;
        overflow-y: auto;
    }

    .account-entry {
        display: block;
        transition: background-color .3s ease;
        border-radius: 0.5rem;
        margin: 0.5rem 2rem;
        position: relative;
        overflow: hidden; /* chevron-right is outside the box */
        color: inherit;
        text-decoration: none;
    }

    .account-entry .account {
        transition: opacity .3s ease;
    }

    .account-entry >>> .identicon img {
        transform: scale(0.9);
        transition: transform .45s ease;
    }

    .account-entry >>> .label,
    .account-entry >>> .balance {
        transition: opacity .3s ease, color .3s ease, margin-right .45s ease;
    }

    .account-entry .chevron-right {
        position: absolute;
        right: 2rem;
        top: 3.625rem;
        width: 2rem;
        height: 2rem;
        transform: translateX(3rem);
        opacity: 0;
        transition: transform .45s ease, opacity .35s .1s ease;
    }

    a.account-entry:not(.incompatible):hover,
    a.account-entry:not(.incompatible):focus {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
        outline: none;
    }

    a.account-entry:not(.incompatible):hover >>> img,
    a.account-entry:not(.incompatible):focus >>> img {
        transform: scale(1);
    }

    a.account-entry:not(.incompatible):hover >>> .label,
    a.account-entry:not(.incompatible):hover >>> .balance,
    a.account-entry:not(.incompatible):focus >>> .label,
    a.account-entry:not(.incompatible):focus >>> .balance {
        opacity: 1;
    }

    a.account-entry:not(.incompatible).good-balance:hover >>> .balance,
    a.account-entry:not(.incompatible).good-balance:focus >>> .balance {
        margin-right: 3rem;
        color: var(--nimiq-green);
    }

    a.account-entry:not(.incompatible).good-balance:hover .chevron-right,
    a.account-entry:not(.incompatible).good-balance:focus .chevron-right {
        transform: translateX(0);
        opacity: 0.23;
    }

    a.account-entry.incompatible {
        cursor: not-allowed;
    }

    a.account-entry.incompatible >>> .identicon,
    a.account-entry.incompatible >>> .label,
    a.account-entry.incompatible >>> .balance {
        opacity: 0.2;
    }

    a.account-entry.bad-balance:not(.disabled-contract).highlight-incompatible-address >>> .balance {
        color: var(--nimiq-red);
        opacity: 1;
    }

    a.account-entry.disabled-contract::after {
        content: 'Contracts are not supported by this operation.';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--nimiq-red);
        transition: opacity .3s ease;
        opacity: 0;
    }

    a.account-entry.disabled-contract.highlight-incompatible-address .account {
        opacity: .2;
    }

    a.account-entry.disabled-contract.highlight-incompatible-address::after {
        opacity: 1;
    }
</style>
