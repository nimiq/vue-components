<template>
    <div class="account-selector">
        <PageHeader :back-arrow="!showSwitchWallet" @back="$emit('back')">
            {{ title }}
        </PageHeader>

        <div class="page-body">
            <div class="wallet-label"><div class="wallet-icon" :class="walletIconClass"></div> {{ walletLabel }}</div>

            <AccountList :accounts="accounts" :walletId="walletId" @account-selected="accountSelected"/>
        </div>

        <PageFooter v-if="showSwitchWallet" @click.native="switchWallet">
            <div class="icon-plus-circle"></div>
            <div>Use different Wallet</div>
        </PageFooter>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import AccountList from './AccountList.vue';
    import PageHeader from './PageHeader.vue';
    import PageFooter from './PageFooter.vue';

    @Component({components: {AccountList, PageHeader, PageFooter}})
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
    .account-selector {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
    }

    .wallet-label {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: calc(2.25 * var(--nimiq-size, 8px));
        line-height: calc(2.5 * var(--nimiq-size, 8px));
        font-weight: 500;
        padding:
            calc(3 * var(--nimiq-size, 8px))
            calc(3 * var(--nimiq-size, 8px))
            calc(2 * var(--nimiq-size, 8px))
            calc(3 * var(--nimiq-size, 8px));
        background: #fafafa;
    }

    .wallet-icon {
        height: calc(3 * var(--nimiq-size, 8px));
        width: calc(3 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: calc(1 * var(--nimiq-size, 8px));
        background-repeat: no-repeat;
        background-position: center;
    }

    .wallet-icon.keyguard {
        background-image: url('data:image/svg+xml,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 28" style="enable-background:new 0 0 24 28;" xml:space="preserve"><path fill="%23F5AF2D" d="M15.45,9.57c-0.15-0.3-0.57-0.53-0.89-0.53H9.42c-0.32,0-0.72,0.23-0.89,0.53l-2.57,4.49 c-0.15,0.28-0.15,0.76,0,1.03l2.57,4.49c0.17,0.3,0.57,0.53,0.89,0.53h5.14c0.35,0,0.74-0.23,0.89-0.53l2.57-4.49 c0.17-0.28,0.17-0.76,0-1.03L15.45,9.57z M23.58,5.29C23.83,5.36,24,5.59,24,5.85c0,10-0.87,17.98-11.8,22.11 C12.13,27.99,12.07,28,12,28c-0.07,0-0.13-0.01-0.2-0.04C0.87,23.83,0,15.85,0,5.85c0-0.26,0.17-0.49,0.42-0.56 c0.08-0.02,8.46-2.35,11.16-5.12c0.21-0.22,0.61-0.22,0.83,0C15.12,2.94,23.49,5.27,23.58,5.29z"/></svg>');
        background-size: auto calc(3 * var(--nimiq-size, 8px));
    }

    .wallet-icon.ledger {
        background-image: url('data:image/svg+xml,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"><path fill="%23333745" d="M21.05,0H9.5V15.1H25l0-11.17C25,1.81,23.22,0,21.05,0"/><path fill="%23333745" d="M6.04,0H4.08C1.88,0,0,1.75,0,3.98v1.91h6.04V0z"/><rect fill="%23333745" y="9.21" width="6.08" height="5.92"/><path fill="%23333745" d="M18.92,25h1.97C23.11,25,25,23.24,25,21v-1.92h-6.08V25z"/><rect fill="%23333745" x="9.46" y="19.08" width="6.08" height="5.92"/><path fill="%23333745" d="M0,19.08V21c0,2.16,1.8,4,4.11,4h1.97v-5.92H0z"/></svg>');
        background-size: calc(2.5 * var(--nimiq-size, 8px));
    }

    .page-body {
        flex-grow: 1;
        background: #fafafa;
        overflow-y: auto;
    }

    .icon-plus-circle {
        height: calc(4.25 * var(--nimiq-size, 8px));
        width: calc(4.25 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: calc(2.5 * var(--nimiq-size, 8px));
        background: lightgray;
        border-radius: 50%;
    }

    .page-footer {
        cursor: pointer;
    }
</style>
