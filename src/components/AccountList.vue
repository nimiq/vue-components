<template>
    <div class="account-list">
        <div class="account-entry" v-for="account in accounts" @click="accountSelected(account.address)">
            <Account :address="account.address"
                     :label="account.label"
                     :balance="account.balance"
                     :key="account.address && account.address.toUserFriendlyAddress ? account.address.toUserFriendlyAddress() : 'Invalid'"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import Account from './Account.vue';

    @Component({components: {Account}})
    export default class AccountList extends Vue {
        @Prop(Array) private accounts!: Array<{ label: string, address: Nimiq.Address, balance?: number }>;

        @Emit()
        // tslint:disable-next-line
        private accountSelected(address: Nimiq.Address) {
        }
    }
</script>

<style scoped>

    .account-list .account-entry {
        padding: 0.3rem;
        border: 2px dashed transparent;
        cursor: pointer;
        transition: background .2s;
    }
    
    .account-list .account {
        margin: 0 auto;
    }

    .account-list .account-entry:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
</style>
