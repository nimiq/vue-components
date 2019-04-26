<template>
    <div class="account-list">
        <a href="javascript:void(0)" class="account-entry"
            v-for="account in accounts"
            :class="{
                'good-balance': minBalance && (account.balance || 0) >= minBalance,
                'bad-balance': minBalance && (account.balance || 0) < minBalance,
                'highlight-low-balance': wrongClickedAddress === account.userFriendlyAddress,
            }"
            @click="accountSelected(account.walletId || walletId, account.userFriendlyAddress, !minBalance || account.balance >= minBalance)"
            :key="account.userFriendlyAddress"
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
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Account from './Account.vue';
import { AccountInfo } from './AccountSelector.vue';

@Component({components: {Account}})
export default class AccountList extends Vue {
    @Prop(Array) public accounts!: AccountInfo[];
    @Prop(String) private walletId?: string;
    @Prop(Boolean) private editable?: boolean;
    @Prop(Number) private decimals?: number;
    @Prop(Number) private minBalance?: number;

    private wrongClickedAddress: string | null = null;
    private wrongClickedAddressTimeout: number | null = null;

    public focus(address: string) {
        if (this.editable && this.$refs.hasOwnProperty(address)) {
            (this.$refs[address] as Account[])[0].focus();
        }
    }

    private accountSelected(walletId: string, address: string, enoughBalance: boolean) {
        if (this.wrongClickedAddressTimeout) {
            window.clearTimeout(this.wrongClickedAddressTimeout);
            this.wrongClickedAddressTimeout = null;
        }
        if (!enoughBalance) {
            this.wrongClickedAddress = address;
            this.wrongClickedAddressTimeout = window.setTimeout(() => this.wrongClickedAddress = null, 300);
        } else {
            this.$emit('account-selected', walletId, address);
        }
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountChanged(address: string, label: string) {}

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

    .account-entry.bad-balance {
        cursor: auto;
    }

    .account-entry.bad-balance >>> .identicon,
    .account-entry.bad-balance >>> .label,
    .account-entry.bad-balance >>> .balance {
        opacity: 0.2;
    }

    .account-entry:not(.bad-balance):hover,
    .account-entry:not(.bad-balance):focus {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
        outline: none;
    }

    .account-entry:not(.bad-balance):hover >>> img,
    .account-entry:not(.bad-balance):focus >>> img {
        transform: scale(1);
    }

    .account-entry:not(.bad-balance):hover >>> .label div,
    .account-entry:not(.bad-balance):hover >>> .balance,
    .account-entry:not(.bad-balance):focus >>> .label div,
    .account-entry:not(.bad-balance):focus >>> .balance {
        opacity: 1;
    }

    .account-entry.bad-balance.highlight-low-balance >>> .balance {
        color: var(--nimiq-red);
        opacity: 1;
    }

    .account-entry.good-balance:hover >>> .balance,
    .account-entry.good-balance:focus >>> .balance {
        margin-right: 3rem;
        color: var(--nimiq-green);
    }

    .account-entry.good-balance:hover .chevron-right,
    .account-entry.good-balance:focus .chevron-right {
        transform: translateX(0);
        opacity: 0.23;
    }
</style>
