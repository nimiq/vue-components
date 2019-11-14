<template>
    <span class="amount" :class="{ approx: showApprox && isApprox }">
        {{ formattedAmount }}
        <span class="currency" :class="currency">{{currency}}</span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { FormattableNumber } from '@nimiq/utils';
type BigInteger = import ('big-integer').BigInteger;

@Component
export default class Amount extends Vue {
    // Amount in smallest unit
    @Prop({type: [Number, Object]}) public amount!: number | BigInteger;
    // If set takes precedence over minDecimals and maxDecimals
    @Prop(Number) public decimals?: number;
    @Prop({type: Number, default: 2}) public minDecimals!: number;
    @Prop({type: Number, default: 5}) public maxDecimals!: number;
    @Prop({type: Number, default: 5}) public totalDecimals!: number;
    @Prop({type: Boolean, default: false}) public showApprox!: boolean;
    @Prop({type: String, default: 'nim'}) public currency!: string;

    @Watch('minDecimals', {immediate: true})
    @Watch('maxDecimals', {immediate: true})
    @Watch('decimals', {immediate: true})
    private _validateDecimals(decimals: number) {
        if (this.decimals !== undefined && decimals !== this.decimals) {
            // skip validation for minDecimals and maxDecimals if they're overwritten by decimals
            return;
        }
        if (decimals !== undefined && (decimals < 0 || decimals > this.totalDecimals || !Number.isInteger(decimals))) {
            throw new Error('Amount: decimals is not in range');
        }
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

        return new FormattableNumber(this.amount).moveDecimalSeparator(-this.totalDecimals)
            .toString({ maxDecimals, minDecimals, useGrouping: true });
    }

    private get isApprox() {
        return !new FormattableNumber(this.amount).moveDecimalSeparator(-this.totalDecimals)
            .equals(this.formattedAmount.replace(/\s/g, ''));
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

    .currency {
        text-transform: uppercase;
    }
</style>
