<template>
    <div class="account-list">
        <component :is="accountContainerTag" href="javascript:void(0)" class="account-entry"
            v-for="account in accounts"
            :class="{
                'disabled': disabled || disableContracts && _isContract(account) || minBalance && account.balance < minBalance,
                'disabled-contract': disableContracts && _isContract(account),
                'good-balance': minBalance && (account.balance || 0) >= minBalance,
                'bad-balance': minBalance && (account.balance || 0) < minBalance,
                'highlight-disabled-address': highlightedDisabledAddress === account.userFriendlyAddress,
            }"
            @click="accountSelected(account)" :key="account.userFriendlyAddress"
        >
            <Account :ref="account.userFriendlyAddress"
                :address="account.userFriendlyAddress"
                :label="account.label"
                :placeholder="account.defaultLabel"
                :balance="account.balance"
                :decimals="decimals"
                :editable="editable && !disabled"
                @changed="accountChanged(account.userFriendlyAddress, $event)"
            />

            <CaretRightSmallIcon/>
        </component>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Account from './Account.vue';
import { AccountInfo, ContractInfo } from './AccountSelector.vue';
import { CaretRightSmallIcon } from './Icons';

@Component({components: {Account, CaretRightSmallIcon}})
export default class AccountList extends Vue {
    @Prop(Array) public accounts!: AccountInfo[];
    @Prop(String) private walletId?: string;
    @Prop(Boolean) private editable?: boolean;
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;
    @Prop(Boolean) private disabled?: boolean;

    private highlightedDisabledAddress: string | null = null;
    private highlightedDisabledAddressTimeout: number | null = null;

    public focus(address: string) {
        if (this.editable && this.$refs.hasOwnProperty(address)) {
            (this.$refs[address] as Account[])[0].focus();
        }
    }

    private accountSelected(account: AccountInfo) {
        if (this.disabled) return;

        const hasEnoughBalance = !this.minBalance || account.balance >= this.minBalance;
        if (this.highlightedDisabledAddressTimeout) {
            window.clearTimeout(this.highlightedDisabledAddressTimeout);
            this.highlightedDisabledAddressTimeout = null;
        }
        const isDisabledContract = this.disableContracts && this._isContract(account);
        if (isDisabledContract || (this.minBalance && account.balance < this.minBalance)) {
            const waitTime = isDisabledContract ? 1500 : 300;
            this.highlightedDisabledAddress = account.userFriendlyAddress;
            this.highlightedDisabledAddressTimeout =
                window.setTimeout(() => this.highlightedDisabledAddress = null, waitTime);
        } else {
            this.$emit('account-selected', account.walletId || this.walletId, account.userFriendlyAddress);
        }
    }

    private get accountContainerTag() {
        return !this.editable || this.disabled ? 'a' : 'div';
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
    .account-list {
        flex-grow: 1;
    }

    .account-entry {
        display: block;
        transition: background-color .3s cubic-bezier(0.25, 0, 0, 1);
        border-radius: 0.5rem;
        margin: 0.5rem 2rem;
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    .account-entry:not(.disabled)::after {
        content: "";
        position: absolute;
        left: -0.625rem;
        top: -0.625rem;
        right: -0.625rem;
        bottom: -0.625rem;
        border: 0.25rem solid rgba(5, 130, 202, 0.5); /* Based on Nimiq Light Blue */
        border-radius: 1rem;
        opacity: 0;
    }

    .account-entry:not(.disabled):focus::after {
        opacity: 1;
    }

    .account-entry .account {
        transition: opacity .3s cubic-bezier(0.25, 0, 0, 1);
    }

    .account-entry >>> .identicon img {
        transform: scale(0.9);
        transition: transform .45s cubic-bezier(0.25, 0, 0, 1);
    }

    .account-entry >>> .label,
    .account-entry >>> .balance {
        transition: opacity .3s cubic-bezier(0.25, 0, 0, 1), color .3s cubic-bezier(0.25, 0, 0, 1), margin-right .45s cubic-bezier(0.25, 0, 0, 1);
    }

    .account-entry .nq-icon {
        position: absolute;
        right: 2rem;
        top: 3.625rem;
        font-size: 2rem;
        transform: translateX(3rem);
        opacity: 0;
        transition: transform .45s cubic-bezier(0.25, 0, 0, 1), opacity .35s .1s cubic-bezier(0.25, 0, 0, 1);
    }

    a.account-entry:focus {
        outline: none;
    }

    a.account-entry:not(.disabled):hover,
    a.account-entry:not(.disabled):focus {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
    }

    a.account-entry:not(.disabled):hover >>> img,
    a.account-entry:not(.disabled):focus >>> img {
        transform: scale(1);
    }

    a.account-entry:not(.disabled):hover >>> .label,
    a.account-entry:not(.disabled):hover >>> .balance,
    a.account-entry:not(.disabled):focus >>> .label,
    a.account-entry:not(.disabled):focus >>> .balance {
        opacity: 1;
    }

    a.account-entry:not(.disabled).good-balance:hover >>> .balance,
    a.account-entry:not(.disabled).good-balance:focus >>> .balance {
        margin-right: 3rem;
        color: var(--nimiq-green);
    }

    a.account-entry:not(.disabled).good-balance:hover .nq-icon,
    a.account-entry:not(.disabled).good-balance:focus .nq-icon {
        transform: translateX(0);
        opacity: 0.23;
    }

    a.account-entry.disabled {
        cursor: not-allowed;
    }

    a.account-entry.disabled >>> .identicon,
    a.account-entry.disabled >>> .label,
    a.account-entry.disabled >>> .balance {
        opacity: 0.2;
    }

    a.account-entry.bad-balance:not(.disabled-contract).highlight-disabled-address >>> .balance {
        color: var(--nimiq-red);
        opacity: 1;
    }

    a.account-entry.disabled-contract::after {
        content: 'Contracts are incompatible with this operation.';
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
        transition: opacity .3s cubic-bezier(0.25, 0, 0, 1);
        opacity: 0;
    }

    a.account-entry.disabled-contract.highlight-disabled-address .account {
        opacity: .2;
    }

    a.account-entry.disabled-contract.highlight-disabled-address::after {
        opacity: 1;
    }
</style>
