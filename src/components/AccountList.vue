<template>
    <div class="account-list">
        <component :is="!_isDisabled(account) && !editable ? 'a' : 'div'"
            href="javascript:void(0)"
            class="account-entry"
            v-for="account in accounts"
            :class="{
                'disabled': _isDisabled(account),
                'has-tooltip': _hasTooltip(account),
                'highlight-insufficient-balance': highlightedDisabledAddress === account.userFriendlyAddress
                    && _hasInsufficientBalance(account)
                    && !_isDisabledContract(account)
                    && !_isDisabledAccount(account),
            }"
            @click="accountSelected(account)"
            :key="account.userFriendlyAddress"
        >
            <Account :ref="account.userFriendlyAddress"
                :address="account.userFriendlyAddress"
                :label="account.label"
                :placeholder="account.defaultLabel"
                :balance="minBalance ? account.balance : undefined"
                :decimals="decimals"
                :editable="editable && !disabled"
                @changed="accountChanged(account.userFriendlyAddress, $event)"
            />

            <CaretRightSmallIcon v-if="!_isDisabled(account)" class="caret"/>
            <Tooltip v-if="_hasTooltip(account)"
                :ref="`tooltip-${account.userFriendlyAddress}`"
                v-bind="{
                    preferredPosition: 'bottom left',
                    ...tooltipProps,
                    styles: {
                        width: '22.25rem',
                        pointerEvents: 'none',
                        ...(tooltipProps ? tooltipProps.styles : undefined),
                    },
                }"
                @click.native.stop
            >
                {{ _isDisabledContract(account)
                    ? $t('Contracts cannot be used for this operation.')
                    : $t('This address cannot be used for this operation.')
                }}
            </Tooltip>
        </component>
    </div>
</template>

<script lang="ts">
import {Component, Mixins, Emit, Prop} from 'vue-property-decorator';
import Account from './Account.vue';
import { AccountInfo, ContractInfo } from './AccountSelector.vue';
import Tooltip from './Tooltip.vue';
import { CaretRightSmallIcon } from './Icons';
import I18nMixin from '../i18n/I18nMixin';

@Component({
    name: 'AccountList',
    components: {
        Account,
        Tooltip,
        CaretRightSmallIcon,
    },
})
export default class AccountList extends Mixins(I18nMixin) {
    @Prop(Array) public accounts!: AccountInfo[];
    @Prop({type: Array, default: () => []}) public disabledAddresses!: string[];
    @Prop(String) private walletId?: string;
    @Prop(Boolean) private editable?: boolean;
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;
    @Prop(Boolean) private disableContracts?: boolean;
    @Prop(Boolean) private disabled?: boolean;
    @Prop(Object) private tooltipProps?: object;

    private highlightedDisabledAddress: string | null = null;
    private highlightedDisabledAddressTimeout: number = -1;

    public focus(address: string) {
        if (this.editable && this.$refs.hasOwnProperty(address)) {
            (this.$refs[address] as Account[])[0].focus();
        }
    }

    private accountSelected(account: AccountInfo) {
        if (this.disabled || this.editable) return;

        window.clearTimeout(this.highlightedDisabledAddressTimeout);
        if (account.userFriendlyAddress !== this.highlightedDisabledAddress) {
            this._clearHighlightedDisabledAddress();
        }

        const isDisabledContract = this._isDisabledContract(account);
        const isDisabledAccount = this._isDisabledAccount(account);
        if (isDisabledContract
            || isDisabledAccount
            || this._hasInsufficientBalance(account)) {
            this.highlightedDisabledAddress = account.userFriendlyAddress;
            if (this.$refs[`tooltip-${this.highlightedDisabledAddress}`]) {
                (this.$refs[`tooltip-${this.highlightedDisabledAddress}`] as Tooltip[])[0].show();
            }
            const waitTime = isDisabledContract || isDisabledAccount ? 2000 : 300;
            this.highlightedDisabledAddressTimeout =
                window.setTimeout(() => this._clearHighlightedDisabledAddress(), waitTime);
        } else {
            this.$emit('account-selected', account.walletId || this.walletId, account.userFriendlyAddress);
        }
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountChanged(address: string, label: string) {}

    private _isDisabled(account: AccountInfo | ContractInfo) {
        return this.disabled || (!this.editable
            && (this._isDisabledContract(account)
            || this._isDisabledAccount(account)
            || this._hasInsufficientBalance(account)));
    }

    private _isDisabledContract(account: AccountInfo | ContractInfo) {
        return this.disableContracts && !('path' in account && account.path);
    }

    private _isDisabledAccount(account: AccountInfo | ContractInfo) {
        return this.disabledAddresses.includes(account.userFriendlyAddress);
    }

    private _hasInsufficientBalance(account: AccountInfo | ContractInfo) {
        return this.minBalance && account.balance < this.minBalance;
    }

    private _hasTooltip(account: AccountInfo | ContractInfo) {
        return !this.disabled && !this.editable
            && (this._isDisabledContract(account) || this._isDisabledAccount(account));
    }

    private _clearHighlightedDisabledAddress() {
        if (!this.highlightedDisabledAddress) return;
        if (this.$refs[`tooltip-${this.highlightedDisabledAddress}`]) {
            // Hide tooltip if it's not hovered
            (this.$refs[`tooltip-${this.highlightedDisabledAddress}`] as Tooltip[])[0].hide(/* force */ false);
        }
        this.highlightedDisabledAddress = null;
    }
}
</script>

<style scoped>
    .account-list {
        flex-grow: 1;
    }

    .account-entry {
        display: block;
        transition: background-color .3s var(--nimiq-ease);
        border-radius: 0.5rem;
        margin: 0.5rem 2rem;
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    .account-entry >>> .identicon img {
        transform: scale(0.9);
        transition: transform .45s var(--nimiq-ease);
    }

    .account-entry >>> .label,
    .account-entry >>> .balance {
        transition: opacity .3s var(--nimiq-ease), color .3s var(--nimiq-ease), margin-right .45s var(--nimiq-ease);
    }

    .account-entry .caret,
    .account-entry .tooltip {
        position: absolute;
        right: 2rem;
        top: 3.625rem;
        font-size: 2rem;
    }

    .account-entry .caret {
        transform: translateX(3rem);
        opacity: 0;
        transition: transform .45s var(--nimiq-ease), opacity .35s .1s var(--nimiq-ease);
    }

    a.account-entry:focus {
        outline: none;
    }

    a.account-entry:focus::after {
        content: "";
        position: absolute;
        left: -0.625rem;
        top: -0.625rem;
        right: -0.625rem;
        bottom: -0.625rem;
        border: 0.25rem solid rgba(5, 130, 202, 0.5); /* Based on Nimiq Light Blue */
        border-radius: 1rem;
        pointer-events: none;
    }

    a.account-entry:hover,
    a.account-entry:focus {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
    }

    a.account-entry:hover >>> .identicon img,
    a.account-entry:focus >>> .identicon img {
        transform: scale(1);
    }

    a.account-entry:hover >>> .label,
    a.account-entry:hover >>> .balance,
    a.account-entry:focus >>> .label,
    a.account-entry:focus >>> .balance {
        opacity: 1;
    }

    a.account-entry:hover >>> .balance,
    a.account-entry:focus >>> .balance,
    .account-entry.has-tooltip >>> .balance {
        margin-right: 3rem; /* make space for caret or tooltip trigger */
    }

    a.account-entry:hover >>> .balance,
    a.account-entry:focus >>> .balance {
        color: var(--nimiq-green);
    }

    a.account-entry:hover .caret,
    a.account-entry:focus .caret {
        transform: translateX(0);
        opacity: 0.23;
    }

    .account-entry.disabled {
        cursor: not-allowed;
    }

    .account-entry.disabled >>> .identicon,
    .account-entry.disabled >>> .label,
    .account-entry.disabled >>> .balance {
        opacity: 0.2;
    }

    .account-entry.highlight-insufficient-balance >>> .balance {
        color: var(--nimiq-red);
        opacity: 1;
    }
</style>
