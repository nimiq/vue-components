<template>
    <div class="account-list">
        <div class="account-entry" v-for="account in accounts" @click="accountSelected(account.address)" :key="account.userFriendlyAddress">
            <Account :address="account.address"
                     :label="account.label"
                     :balance="account.balance"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import Account from './Account.vue';

    @Component({components: {Account}})
    export default class AccountList extends Vue {
        @Prop(Array) public accounts!: Array<{ label: string, address: Nimiq.Address, balance?: number }>;

        @Emit()
        // tslint:disable-next-line no-empty
        private accountSelected(address: Nimiq.Address) {}
    }
</script>

<style scoped>
    .account-list {
        flex-grow: 1;
        overflow-y: auto;
    }

    .account-entry {
        cursor: pointer;
        transition: background 300ms;
    }

    .account-entry:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
</style>
