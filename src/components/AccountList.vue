<template>
    <div class="account-list">
        <div class="account-entry" v-for="account in accounts" @click="accountSelected(account.loginId || loginId, account.address)" :key="account.userFriendlyAddress">
            <Account :address="account.address"
                     :label="account.label"
                     :balance="account.balance"
                     :editable="editable"
                     @changed="accountChanged(account.address, $event)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import Account from './Account.vue';

    @Component({components: {Account}})
    export default class AccountList extends Vue {
        @Prop(Array) public accounts!: Array<{ label: string, address: Nimiq.Address, balance?: number }>;
        @Prop(String) private loginId?: string;
        @Prop(Boolean) private editable?: boolean;

        @Emit()
        // tslint:disable-next-line no-empty
        private accountSelected(loginId: string, address: Nimiq.Address) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private accountChanged(address: Nimiq.Address, label: string) {
            console.log('changed@AccountList', address, label);
        }
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
