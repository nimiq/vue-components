<template>
    <div class="login-selector">
        <PageHeader back-arrow @back="$emit('back')">
            {{ title }}
        </PageHeader>

        <LoginList class="login-list" :logins="logins" @login-selected="loginSelected" show-arrows/>

        <PageFooter v-if="showAddLogin" @click.native="addLogin">
            <div class="icon-plus-circle"></div>
            <div>Add Wallet</div>
        </PageFooter>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import LoginList from './LoginList.vue';
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';

@Component({components: {LoginList, PageHeader, PageFooter}})
export default class LoginSelector extends Vue {
    @Prop(Array) public logins!:
        Array<{ id: string, label: string, addresses: object[], contracts: object[], type: number }>;
    @Prop({type: String, default: 'Select Wallet'}) public title!: string;
    @Prop({type: Boolean, default: true}) public showAddLogin!: boolean;

    @Emit()
    // tslint:disable-next-line no-empty
    private loginSelected(address: string) {}

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

    .icon-plus-circle {
        height: 34px;
        width: 34px;
        flex-shrink: 0;
        margin-right: 20px;
        background: lightgray;
        border-radius: 50%;
    }

    .page-footer {
        cursor: pointer;
    }
</style>
