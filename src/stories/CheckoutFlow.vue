<template>
    <div style="background: linear-gradient(110deg, #b453fe, #536DFE); padding-top: 2rem; padding-bottom: 3rem">
        <PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false"
                         origin="shop.nimiq.com"/>
        <small-page>
            <div class="visible-area">
                <div class="multi-pages" :style="'left: -'+((page-1)*100)+'%'">
                    <LoginSelector @login-selected="loginSelected"
                                   @add-login="addLogin"
                                   :logins="logins"/>
                    <AccountSelector
                            @account-selected="(address) => accountSelected(selectedLogin || preselectedLogin, address)"
                            @switch-login="switchLogin"
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
        @Prop(Array) private logins!: Array<{ label: string, userFriendlyId: string, id: string }>;
        @Prop(Object) private accounts!: object;
        @Prop(String) private preselectedLogin!: string;

        private page: number = 1;
        private selectedLogin?: string;

        private currentAccounts() {
            return this.accounts[this.selectedLogin || this.preselectedLogin] || [];
        }

        @Emit()
        private loginSelected(login: string) {
            this.selectedLogin = login;
            this.page = 2;
        }

        @Emit()
        private switchLogin() {
            this.page = 1;
        }

        @Emit()
        // tslint:disable-next-line
        private addLogin() {
        }

        @Emit()
        // tslint:disable-next-line
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
        transition: all .5s ease-in-out;
    }

    @media (min-width: 490px) {
        .multi-pages {
            grid-template-columns: 28em 28em;
        }
    }
</style>
