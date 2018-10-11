<template>
    <div>
        <PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false"
                         origin="https://shop.nimiq.com"/>
        <small-page>
            <div class="visible-area">
                <div class="multi-pages" :style="`transform: translate3d(-${(page - 1) * 100}%, 0, 0)`">
                    <LoginSelector @login-selected="loginSelected"
                                   @account-selected="accountSelected"
                                   @add-login="addLogin"
                                   @back="back"
                                   :logins="logins"/>
                    <AccountSelector
                            @account-selected="accountSelected"
                            @switch-login="switchLogin"
                            @back="switchLogin"
                            :accounts="currentAccounts"
                            :loginId="currentLogin ? currentLogin.id : ''"
                            :loginLabel="currentLogin ? currentLogin.label : ''"
                            :loginType="currentLogin ? currentLogin.type : 0"
                            :show-switch-login="false"/>
                </div>
            </div>
        </small-page>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import LoginSelector from '../components/LoginSelector.vue';
import AccountSelector from '../components/AccountSelector.vue';
import SmallPage from '../components/SmallPage.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';

@Component({components: {PaymentInfoLine, SmallPage, AccountSelector, LoginSelector}})
export default class CheckoutFlow extends Vue {
    @Prop(Array) private logins!:
        Array<{ id: string, label: string, addresses: object[], contracts: object[], type: number }>;
    @Prop(String) private preselectedLoginId!: string;

    private page: number = 1;
    private selectedLoginId: string|null = null; // undefined is not reactive

    private get currentLogin() {
        const loginId = this.selectedLoginId || this.preselectedLoginId || false;
        if (!loginId) return undefined;

        return this.logins.find((l) => l.id === loginId);
    }

    private get currentAccounts() {
        const login = this.currentLogin;
        if (!login) return [];
        return Array.from(login.addresses.values());
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private back() {}

    @Emit()
    private loginSelected(loginId: string) {
        this.selectedLoginId = loginId;
        this.page = 2;
    }

    @Emit()
    private switchLogin() {
        this.page = 1;
    }

    @Emit()
    private addLogin() {
        this.logins.push({
            id: '123456',
            label: 'New Wallet',
            addresses: [{}, {}],
            contracts: [],
            type: 1, // BIP39
            // userFriendlyId: 'black panther',
        });
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private accountSelected(loginId: string, address: Nimiq.Address) {}
}
</script>

<style scoped>
    .visible-area {
        overflow: hidden;
        flex: 1;
        display: flex
    }

    .multi-pages {
        position: relative;
        flex: 1;
        display: grid;
        grid-template-columns: 100% 100%;
        will-change: transform;
        transition: all 400ms ease-in-out;
    }
</style>
