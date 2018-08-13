<template>
    <div class="info-line">
        <div class="description">
            Payment to <span class="origin">{{ originDomain }}</span>
        </div>
        <div class="amount">
            {{total}} NIM
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import AmountWithDetails from './AmountWithDetails.vue';

    @Component({components: {AmountWithDetails}})
    export default class PaymentInfoLine extends Vue {
        @Prop(Number) public amount!: number;
        @Prop(Number) public networkFee!: number;
        @Prop(Boolean) public networkFeeEditable!: boolean;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
        @Prop(String) public origin!: string;

        private get total() {
            return this.formatNumber((this.amount + this.networkFee) / 1e5);
        }

        private get originDomain() {
            return this.origin.split('://')[1];
        }

        private formatNumber(value: number, maxDecimals: number = 5, minDecimals: number = 2): string {
            const roundingFactor = 10 ** maxDecimals;
            value = Math.floor(value * roundingFactor) / roundingFactor;

            const result = parseFloat(value.toFixed(minDecimals)) === value
                ? value.toFixed(minDecimals)
                : value.toString();

            if (Math.abs(value) < 10000) return result;

            // Add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one.
            const regexp = minDecimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
            return result.replace(regexp, '$1\u202F');
        }
    }
</script>

<style scoped>
    .info-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 12px 10px;
        width: 450px;
        max-width: 100%;
        font-size: 12px;
        line-height: 1;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }

    .info-line .amount {
        text-align: right;
        font-weight: bold;
    }
</style>
