<template>
    <div class="account-list">
        <div class="account-entry" v-for="account in accounts" @click="accountSelected(account.walletId || walletId, account.userFriendlyAddress)" :key="account.userFriendlyAddress">
            <Account :address="account.userFriendlyAddress"
                     :label="account.label"
                     :balance="account.balance"
                     :editable="editable"
                     @changed="accountChanged(account.userFriendlyAddress, $event)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import Account from './Account.vue';

    @Component({components: {Account}})
    export default class AccountList extends Vue {
        @Prop(Array) public accounts!: Array<{ label: string, userFriendlyAddress: string, balance?: number }>;
        @Prop(String) private walletId?: string;
        @Prop(Boolean) private editable?: boolean;

        @Emit()
        // tslint:disable-next-line no-empty
        private accountSelected(walletId: string, address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private accountChanged(address: string, label: string) {}
    }
</script>

<style scoped>
    .account-entry {
        cursor: pointer;
        transition: background 300ms;
    }

    .account-entry:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
</style>
