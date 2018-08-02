<template>
    <div class="login-selector">
        <h2>{{ title }}</h2>
        <LoginList class="login-list" :logins="logins" @login-selected="loginSelected"/>
        <div class="use-space"></div>
        <div v-if="showAddLogin" class="other-login" @click="addLogin">
            <div>
                <div class="big-char">+</div>
                <div class="other-login-text">Add another login</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import LoginList from './LoginList.vue';

    @Component({components: {LoginList}})
    export default class LoginSelector extends Vue {
        @Prop(Array) private logins!: Array<{ label: string, userFriendlyId: string, id: string }>;
        @Prop({type: String, default: 'Log In'}) private title!: string;
        @Prop({type: Boolean, default: true}) private showAddLogin!: boolean;

        @Emit()
        // tslint:disable-next-line
        private loginSelected(address: string) {
        }

        @Emit()
        // tslint:disable-next-line
        private addLogin(address: string) {
        }
    }
</script>

<style scoped>
    .login-selector {
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .use-space {
        flex: 1;
    }

    h2 {
        text-align: center;
        font-weight: normal;
        padding-top: 1rem;
    }

    .other-login {
        transition: background .2s;
        cursor: pointer;
    }

    .other-login > div {
        display: grid;
        grid-template-columns: 3.5rem 14.75rem;
        align-items: center;
        max-width: 18.25rem;
        margin: 0 auto;
    }

    .other-login:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }

    .other-login .big-char {
        font-size: 200%;
        color: white;
        height: 2.5rem;
        width: 2.5rem;
        margin: 0.5rem 0.8rem 0.5rem 0.2rem;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 1.25rem;
        text-align: center;
        vertical-align: middle;
    }

    @media (min-width: 430px) {
        .other-login > div {
            grid-template-columns: 4.5rem 19.5rem;
            max-width: 24rem;
        }

        .other-login .big-char {
            margin: 0.5rem 1.3rem 0.5rem 0.7rem
        }
    }
</style>
