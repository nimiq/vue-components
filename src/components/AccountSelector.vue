<template>
    <div class="account-selector">
        <div class="wallet-label">
            <span class="nq-label">{{ walletLabel }}</span>
        </div>
        <AccountList :accounts="accounts" :walletId="walletId" @account-selected="accountSelected"/>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import AccountList from './AccountList.vue';

    @Component({components: {AccountList}})
    export default class AccountSelector extends Vue {
        @Prop({type: String, default: 'Select Account'}) private title!: string;
        @Prop(String) private walletId!: string;
        @Prop(String) private walletLabel!: string;
        @Prop(Number) private walletType!: number;
        @Prop(Array) private accounts!: Array<{ label: string, userFriendlyAddress: string, balance?: number }>;
        @Prop({type: Boolean, default: false}) private showSwitchWallet!: boolean;

        @Emit()
        // tslint:disable-next-line no-empty
        private accountSelected(walletId: string, address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private switchWallet() {}

        private get walletIconClass() {
            switch (this.walletType) {
                case 0: return 'keyguard';
                case 1: return 'keyguard';
                case 2: return 'ledger';
            }
        }
    }
</script>

<style scoped>
    /* Nimiq Style */
    .nq-label {
        font-size: 1.75rem;
        line-height: 0.857;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.107em;
        margin: 1rem 0;
        opacity: 0.7;
    }
    /* END Nimiq Style */

    .account-selector {
        flex-grow: 1;
        overflow: auto;
    }

    .wallet-label {
        margin: 2.5rem 2rem 2.5rem 3rem;
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
</style>
