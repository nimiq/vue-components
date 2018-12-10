<template>
    <div class="account-selector">
        <div class="wallet-label">
            <span class="nq-label">{{ walletLabel }}</span>
        </div>
        <AccountList :accounts="accounts" :walletId="walletId" :minBalance="minBalance" @account-selected="accountSelected"/>
        <div class="footer">
            <button v-if="showSwitchWallet" class="nq-button-s" @click="login">Login with another Wallet</button>
        </div>
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
        @Prop({type: Boolean, default: true}) private showSwitchWallet!: boolean;
        @Prop(Number) private minBalance?: boolean;

        @Emit()
        // tslint:disable-next-line no-empty
        private accountSelected(walletId: string, address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private login() {}
    }
</script>

<style scoped>
    /* Nimiq Style */
    .nq-label {
        font-size: calc(1.75 * var(--nimiq-size, 8px));
        line-height: 0.857;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.107em;
        margin: calc(1 * var(--nimiq-size, 8px)) 0;
        opacity: 0.7;
    }

    .nq-button-s {
        display: inline-block;
        font-size: 1.75rem;
        line-height: 2rem;
        height: 3.375rem;
        text-decoration: none;
        font-weight: bold;
        letter-spacing: 0.014em;
        padding: 0 1.5rem;
        background-color: rgba(31, 35, 72, 0.07); /* Based on Nimiq Blue */
        color: var(--nimiq-blue);
        border-radius: 1.6875rem;
        transition: background-color 150ms;
        will-change: background-color;
        border: none;
        cursor: pointer;
        position: relative;
        font-family: inherit;
    }

    .nq-button-s::after {
        content: '';
        display: block;
        position: absolute;
        left: -1rem;
        top: -1rem;
        right: -1rem;
        bottom: -1rem;
    }

    .nq-button-s:hover,
    .nq-button-s:active {
        background-color: rgba(31, 35, 72, 0.12); /* Based on Nimiq Blue */
    }
    /* END Nimiq Style */

    .account-selector {
        flex-grow: 1;
        overflow: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .wallet-label {
        margin:
            calc(2 * var(--nimiq-size, 8px))
            calc(2 * var(--nimiq-size, 8px))
            calc(2.5 * var(--nimiq-size, 8px))
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

    .footer {
        padding: 4rem 0;
        margin-top: -4rem;
        text-align: center;
        background: linear-gradient(transparent 0%, white 50%);
        position: relative;
        pointer-events: none;
    }

    .nq-button-s {
        margin: auto;
        pointer-events: all;
    }
</style>
