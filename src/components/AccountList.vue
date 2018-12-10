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
                :balance="account.balance"
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
import { clearTimeout } from 'timers';

    @Component({components: {Account}})
    export default class AccountList extends Vue {
        @Prop(Array) public accounts!: Array<{ label: string, userFriendlyAddress: string, balance?: number }>;
        @Prop(String) private walletId?: string;
        @Prop(Boolean) private editable?: boolean;
        @Prop(Number) private minBalance?: boolean;

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

    .account-entry {
        display: block;
        transition: background 300ms;
        border-radius: calc(0.5 * var(--nimiq-size, 8px));
        margin: calc(0.5 * var(--nimiq-size, 8px)) calc(2 * var(--nimiq-size, 8px));
        position: relative;
        overflow: hidden; /* chevron-right is outside the box */
        color: inherit;
        text-decoration: none;
    }

    .account-entry >>> .label,
    .account-entry >>> .balance {
        transition: opacity 300ms, color 300ms, margin-right 300ms;
    }

    .account-entry .chevron-right {
        position: absolute;
        right: calc(2.5 * var(--nimiq-size, 8px));
        top: calc(3.625 * var(--nimiq-size, 8px));
        width: calc(2 * var(--nimiq-size, 8px));
        height: calc(2 * var(--nimiq-size, 8px));
        transform: translateX(calc(4 * var(--nimiq-size, 8px)));
        opacity: 0;
        transition: transform 300ms, opacity 300ms;
    }

    .account-entry.bad-balance {
        cursor: auto;
    }

    .account-entry.bad-balance >>> .identicon,
    .account-entry.bad-balance >>> .label,
    .account-entry.bad-balance >>> .balance {
        opacity: 0.2;
    }

    .account-entry:not(.bad-balance):hover {
        background-color: rgba(31, 35, 72, 0.06);
    }

    .account-entry:not(.bad-balance):hover >>> .label div,
    .account-entry:not(.bad-balance):hover >>> .balance {
        opacity: 1;
    }

    .account-entry.bad-balance.highlight-low-balance >>> .balance {
        color: #D94432;
        opacity: 1;
    }

    .account-entry.good-balance:hover >>> .balance {
        margin-right: calc(4 * var(--nimiq-size, 8px));
        color: #21BCA5;
    }

    .account-entry.good-balance:hover .chevron-right {
        transform: translateX(0);
        opacity: 0.23;
    }
</style>
