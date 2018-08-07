<template>
    <div class="account">
        <Identicon class="account-identicon" :address="address"/>
        <div class="account-description">
            <div class="label-and-balance">
                <div class="label">{{ label }}</div>
                <div class="balance" v-if="balance || balance === 0"><Amount :amount="balance" :decimals="2" showApprox/></div>
                <div class="balance balance-loading" v-if="!balance && balance !== 0"></div>
            </div>
            <div class="address">{{ address ? address.toUserFriendlyAddress() : 'Invalid address' }}</div>
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
        display: grid;
        grid-template-columns: 3.5rem 14.75rem;
        align-items: center;
        max-width: 18.25rem;
        padding-right: 0.5rem;
    }
    .account-identicon {
        width: 3rem;
        margin-bottom: -8%;
    }
    .label {
        font-weight: bold;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .label-and-balance {
        display: grid;
        grid-template-columns: auto auto;
        font-size: 90%;
        overflow: hidden;
    }
    .balance {
        text-align: right;
    }
    .address {
        padding-top: 0.1rem;
        font-weight: 300;
        font-size: 55.5%;
        font-family: "Source Code Pro", "Menlo", "Roboto Mono", "Droid Sans Mono", monospace;
    }
    @media (min-width: 430px) {
        .account {
            grid-template-columns: 4.5rem 19.5rem;
            max-width: 24rem;
        }
        .address {
            padding-top: 0.2rem;
            font-size: 73.5%;
        }
        .label-and-balance {
            font-size: 100%;
        }
        .account-identicon {
            width: 4rem;
        }
    }
</style>
