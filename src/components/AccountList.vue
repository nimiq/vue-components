<template>
    <div class="account-list">
        <component v-bind:is="accountContainerTag" href="javascript:void(0)" class="account-entry"
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

            <CaretRightSmallIcon/>
        </component>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Account from './Account.vue';
import { AccountInfo } from './AccountSelector.vue';
import { CaretRightSmallIcon } from './Icons';

@Component({components: {Account, CaretRightSmallIcon}})
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

    private get accountContainerTag() {
        return !this.editable ? 'a' : 'div';
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountChanged(address: string, label: string) {}

}
</script>

<style scoped>
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

    .account-entry .nq-icon {
        position: absolute;
        right: 2rem;
        top: 3.625rem;
        font-size: 2rem;
        transform: translateX(3rem);
        opacity: 0;
        transition: transform .45s ease, opacity .35s .1s ease;
    }

    a.account-entry.bad-balance {
        cursor: auto;
    }

    a.account-entry.bad-balance >>> .identicon,
    a.account-entry.bad-balance >>> .label,
    a.account-entry.bad-balance >>> .balance {
        opacity: 0.2;
    }

    a.account-entry:not(.bad-balance):hover,
    a.account-entry:not(.bad-balance):focus {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
        outline: none;
    }

    a.account-entry:not(.bad-balance):hover >>> img,
    a.account-entry:not(.bad-balance):focus >>> img {
        transform: scale(1);
    }

    a.account-entry:not(.bad-balance):hover >>> .label div,
    a.account-entry:not(.bad-balance):hover >>> .balance,
    a.account-entry:not(.bad-balance):focus >>> .label div,
    a.account-entry:not(.bad-balance):focus >>> .balance {
        opacity: 1;
    }

    a.account-entry.bad-balance.highlight-low-balance >>> .balance {
        color: var(--nimiq-red);
        opacity: 1;
    }

    a.account-entry.good-balance:hover >>> .balance,
    a.account-entry.good-balance:focus >>> .balance {
        margin-right: 3rem;
        color: var(--nimiq-green);
    }

    a.account-entry.good-balance:hover .nq-icon,
    a.account-entry.good-balance:focus .nq-icon {
        transform: translateX(0);
        opacity: 0.23;
    }
</style>
