<template>
    <div>
        <PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false"
                         origin="https://shop.nimiq.com"/>
        <small-page>
            <div class="visible-area">
                <div class="multi-pages" :style="`transform: translate3d(-${(page - 1) * 450}px, 0, 0)`">
                    <LoginSelector @login-selected="loginSelected"
                                   @add-login="addLogin"
                                   @back="back"
                                   :logins="logins"/>
                    <AccountSelector
                            @account-selected="(address) => accountSelected(selectedLoginId || preselectedLoginId, address)"
                            @switch-login="switchLogin"
                            @back="page--"
                            :accounts="currentAccounts()"/>
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
        @Prop(Array) private logins!: { id: string, label: string, addresses: object[], contracts: object[], type: number }[];
        @Prop(Object) private accounts!: object;
        @Prop(String) private preselectedLoginId!: string;

        private page: number = 1;
        private selectedLoginId?: string;

        private currentAccounts() {
            return this.accounts[this.selectedLoginId || this.preselectedLoginId] || [];
        }

        @Emit()
        private back() {}

        @Emit()
        private loginSelected(login: string) {
            this.selectedLoginId = login;
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
        private accountSelected(login: string, address: Nimiq.Address) {
        }
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
        grid-template-columns: 100vw 100vw;
        will-change: transform;
        transition: all 400ms ease-in-out;
    }

    @media (min-width: 450px) {
        .multi-pages {
            grid-template-columns: 450px 450px;
        }
    }
</style>
