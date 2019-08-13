<template>
    <span class="amount" :class="{ approx: showApprox && isApprox }">
        {{ formattedAmount }}
        <span class="nim">NIM</span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Amount extends Vue {
    // Amount in luna
    @Prop(Number) public amount!: number;
    // If set takes precedence over minDecimals and maxDecimals
    @Prop({type: Number, validator: Amount._validateDecimals }) public decimals?: number;
    @Prop({type: Number, default: 2, validator: Amount._validateDecimals }) public minDecimals!: number;
    @Prop({type: Number, default: 5, validator: Amount._validateDecimals }) public maxDecimals!: number;
    @Prop({type: Boolean, default: false}) public showApprox!: boolean;

    private static _validateDecimals(decimals: number) {
        return decimals >= 0 && decimals <= 5 && Number.isInteger(decimals);
    }

    private get formattedAmount() {
        let minDecimals: number;
        let maxDecimals: number;
        if (typeof this.decimals === 'number') {
            minDecimals = maxDecimals = this.decimals;
        } else {
            minDecimals = this.minDecimals;
            maxDecimals = this.maxDecimals;
        }

        const roundingFactor = 10 ** maxDecimals;
        const value = Math.floor((this.amount / 1e5) * roundingFactor) / roundingFactor;

        const result = parseFloat(value.toFixed(minDecimals)) === value
            ? value.toFixed(minDecimals)
            : value.toString();

        if (Math.abs(value) < 10000) return result;
        // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one
        const regexp = minDecimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
        return result.replace(regexp, '$1\u202F');
    }

    private get isApprox() {
        const roundedNum = Number.parseFloat((this.amount / 1e5).toFixed(this.decimals));
        return roundedNum.toFixed(5) !== (this.amount / 1e5).toFixed(5);
    }
}
</script>

<style scoped>
    .amount {
        white-space: nowrap;
    }

    .amount.approx::before {
        content: '~ ';
        opacity: 0.5;
    }
</style>
