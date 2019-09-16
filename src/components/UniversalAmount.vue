<template>
    <span class="amount" :class="{ approx: showApprox && isApprox }">
        {{ formattedAmount }}
        <span class="currency" :class="currency">{{currency}}</span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import bigInt from 'big-integer';

@Component
export default class UniversalAmount extends Vue {
    /**
     * Amount in smallest unit
     */
    @Prop({type: [Number, Object]}) public amount!: number | bigInt.BigInteger;
    /**
     * Actual decimal count of the currency being displayed
     */
    @Prop({type: Number, default: 5}) public decimals!: number;
    @Prop({type: Number, default: 2}) public minDecimals!: number;
    @Prop({type: Number, default: 5}) public maxDecimals!: number;
    @Prop({type: Boolean, default: false}) public showApprox!: boolean;
    @Prop({type: String, default: 'nim'}) public currency;

    private isApprox: boolean = false;

    private get formattedAmount() {
        let result: string;

        if (typeof this.amount === 'number') {
            const value = Math.round(
                    this.amount * 10 ** this.maxDecimals / 10 ** this.decimals,
                ) / 10 ** this.maxDecimals;
            result = parseFloat(value.toFixed(this.minDecimals)) === value
                ? value.toFixed(this.minDecimals)
                : value.toString();

            this.isApprox = (this.amount / 10 ** this.decimals).toFixed(this.decimals)
                !== value.toFixed(this.decimals);

            if (Math.abs(value ) < 10 ** this.decimals) return result;
        } else {
            // typeof this.amount === bigInt.BigInteger
            const powerOfTen = (n: number) => bigInt(10).pow(bigInt(n));

            let divisionResult = bigInt(this.amount)
                .times(powerOfTen(this.maxDecimals))
                .divmod(powerOfTen(this.decimals));
            const remainder = divisionResult.remainder
                .divide(powerOfTen(this.maxDecimals));

            this.isApprox = !remainder.isZero();
            const value = divisionResult.quotient.add( // quotiont + potential carry
                this.maxDecimals !== this.decimals
                ? remainder.greaterOrEquals(powerOfTen(this.decimals - this.maxDecimals).divide(bigInt(2)))
                    ? bigInt(1)
                    : bigInt(0)
                : bigInt(0),
            );

            divisionResult = value.divmod(powerOfTen(this.maxDecimals));

            const decimals = `${divisionResult.remainder.toString().padStart(this.maxDecimals, '0')
                .match(/^(\d*?[1-9]?)0*?$/)[1]}`.padEnd(this.minDecimals, '0');
            result = `${divisionResult.quotient.toString()}${decimals.length > 0 ? '.' + decimals : ''}`;
        }

        // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one
        const regexp = this.minDecimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
        return result.replace(regexp, '$1\u202F');
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
