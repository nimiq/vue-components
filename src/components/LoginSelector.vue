<template>
    <div class="login-selector">
        <PageHeader back-arrow @back="$emit('back')">
            {{ title }}
        </PageHeader>

        <div class="page-body">
            <LoginList :logins="walletLogins" @login-selected="loginSelected" show-arrows/>

            <AccountList v-if="legacyAccounts.length > 0" :accounts="legacyAccounts" @account-selected="accountSelected"/>
        </div>

        <PageFooter v-if="showAddLogin" @click.native="addLogin">
            <div class="icon-plus-circle"></div>
            <div>Add Wallet</div>
        </PageFooter>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import LoginList from './LoginList.vue';
import AccountList from './AccountList.vue';
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';

@Component({components: {LoginList, AccountList, PageHeader, PageFooter}})
export default class LoginSelector extends Vue {
    @Prop(Array) public logins!:
        Array<{ id: string, label: string, addresses: Map<string, any>, contracts: object[], type: number }>;
    @Prop({type: String, default: 'Select Wallet'}) public title!: string;
    @Prop({type: Boolean, default: true}) public showAddLogin!: boolean;

    private get walletLogins() {
        return this.logins.filter((login) => login.type !== 0); // Return only non-legacy wallets
    }

    private get legacyAccounts() {
        const legacyLogins = this.logins.filter((login) => login.type === 0); // Filter legacy wallets
        return legacyLogins.map((login) => ({
            ...login.addresses.values().next().value,
            loginId: login.id,
        }));
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private loginSelected(address: string) {}

    @Emit()
    // tslint:disable-next-line no-empty
    private accountSelected(address: Nimiq.Address) {}

    @Emit()
    private addLogin() {
        console.log('adding-login, login-selector');
    }
}
</script>

<style scoped>
    .login-selector {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
    }

    .page-body {
        flex-grow: 1;
        background: #fafafa;
        overflow-y: auto;
    }

    .login-selector >>> .account {
        padding-left: calc(3 * var(--nimiq-size, 8px));
    }

    .login-selector >>> .account .identicon {
        margin-right: calc(1 * var(--nimiq-size, 8px));
    }

    .account-list {
        border-top: solid 1px #f2f2f2;
    }

    .icon-plus-circle {
        height: calc(4.25 * var(--nimiq-size, 8px));
        width: calc(4.25 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: 2.5rem;
        background: lightgray;
        border-radius: 50%;
    }

    .page-footer {
        cursor: pointer;
    }
</style>
