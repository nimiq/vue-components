<template>
    <div class="account">
        <Identicon :address="address"/>
        <div class="account-description">
            <div class="label-and-balance">
                <div class="label">{{ label }}</div>
                <div class="balance" v-if="balance || balance === 0"><Amount :amount="balance" :decimals="2"/></div>
                <div class="balance balance-loading" v-if="!balance && balance !== 0"></div>
            </div>
            <div class="address">{{ address.toUserFriendlyAddress() }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Identicon from './Identicon.vue';
    import Amount from './Amount.vue';

    @Component({components: {Amount, Identicon}})
    export default class Account extends Vue {
        @Prop(Nimiq.Address) public address!: Nimiq.Address;
        @Prop(String) public label!: string;
        @Prop(Number) public balance!: number;
    }
</script>

<style scoped>
    .account {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 13px 32px;
        box-sizing: border-box;
    }

    .identicon {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        margin-right: 16px;
    }

    .account-description {
        flex-grow: 1;
    }

    .label-and-balance {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
    }

    .label {
        margin-bottom: 3px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .balance {
        color: #24bdb6;
    }

    .address {
        font-size: 12px;
        line-height: 20px;
        font-family: "Andale Mono", monospace;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        word-spacing: -0.2em;
        max-width: 307px;
    }
</style>
