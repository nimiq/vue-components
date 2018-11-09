<template>
    <div class="info-line">
        <div class="description">
            Payment to <span class="origin">{{ originDomain }}</span>
        </div>
        <Amount :amount="this.amount + this.networkFee"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Amount from './Amount.vue';

    @Component({components: {Amount}})
    export default class PaymentInfoLine extends Vue {
        @Prop(Number) public amount!: number;
        @Prop(Number) public networkFee!: number;
        @Prop(Boolean) public networkFeeEditable!: boolean;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
        @Prop(String) public origin!: string;

        private get originDomain() {
            return this.origin.split('://')[1];
        }
    }
</script>

<style scoped>
    .info-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        padding: calc(1.5 * var(--nimiq-size, 8px)) calc(1.25 * var(--nimiq-size, 8px));
        width: 450px;
        max-width: 100%;
        font-size: calc(1.5 * var(--nimiq-size, 8px));
        line-height: 1;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .amount {
        font-weight: bold;
    }
</style>
