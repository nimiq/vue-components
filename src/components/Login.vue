<template>
    <div class="login">
        <div class="login-icon" :class="loginIconClass"></div>
        <div class="login-description" v-if="label">
            <div class="label">{{ label }}</div>
            <div class="number-accounts">{{numberAccounts}} Accounts</div>
        </div>
        <div v-if="showArrow" class="icon-chevron-right"></div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {
        @Prop(String) private id!: string;
        @Prop(String) private label?: string;
        @Prop(Number) private numberAccounts!: number;
        @Prop(Number) private type!: number;
        @Prop({type: Boolean, default: false}) private showArrow!: boolean;

        private get loginIconClass() {
            switch (this.type) {
                case 0: return 'keyguard';
                case 1: return 'keyguard';
                case 2: return 'ledger';
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 32px;
        box-sizing: border-box;
    }

    .login-icon {
        height: 46px;
        width: 46px;
        flex-shrink: 0;
        margin-right: 18px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .login-icon.keyguard {
        background-image: url('data:image/svg+xml,<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 28" style="enable-background:new 0 0 24 28;" xml:space="preserve"><path fill="%23F5AF2D" d="M15.45,9.57c-0.15-0.3-0.57-0.53-0.89-0.53H9.42c-0.32,0-0.72,0.23-0.89,0.53l-2.57,4.49 c-0.15,0.28-0.15,0.76,0,1.03l2.57,4.49c0.17,0.3,0.57,0.53,0.89,0.53h5.14c0.35,0,0.74-0.23,0.89-0.53l2.57-4.49 c0.17-0.28,0.17-0.76,0-1.03L15.45,9.57z M23.58,5.29C23.83,5.36,24,5.59,24,5.85c0,10-0.87,17.98-11.8,22.11 C12.13,27.99,12.07,28,12,28c-0.07,0-0.13-0.01-0.2-0.04C0.87,23.83,0,15.85,0,5.85c0-0.26,0.17-0.49,0.42-0.56 c0.08-0.02,8.46-2.35,11.16-5.12c0.21-0.22,0.61-0.22,0.83,0C15.12,2.94,23.49,5.27,23.58,5.29z"/></svg>');
        background-size: auto 46px;
    }

    .login-icon.ledger {
        background-image: url('data:image/svg+xml,<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"><path fill="%23333745" d="M21.05,0H9.5V15.1H25l0-11.17C25,1.81,23.22,0,21.05,0"/><path fill="%23333745" d="M6.04,0H4.08C1.88,0,0,1.75,0,3.98v1.91h6.04V0z"/><rect fill="%23333745" y="9.21" width="6.08" height="5.92"/><path fill="%23333745" d="M18.92,25h1.97C23.11,25,25,23.24,25,21v-1.92h-6.08V25z"/><rect fill="%23333745" x="9.46" y="19.08" width="6.08" height="5.92"/><path fill="%23333745" d="M0,19.08V21c0,2.16,1.8,4,4.11,4h1.97v-5.92H0z"/></svg>');
        background-size: 37px;
    }

    .label {
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 3px;
    }

    .login-description {
        flex-grow: 1;
    }

    .number-accounts {
        font-size: 14px;
        line-height: 20px;
    }

    .icon-chevron-right {
        width: 11.4px;
        height: 20.44px;
        flex-shrink: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('data:image/svg+xml,<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 17" style="enable-background:new 0 0 10 17;" xml:space="preserve"><polygon points="1.43,17 0,15.58 7.13,8.5 0,1.42 1.43,0 10,8.5 "/></svg>');
        background-size: 100%;
    }
</style>
