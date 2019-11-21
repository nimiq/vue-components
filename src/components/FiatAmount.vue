<template>
    <span class="fiat-amount">
        {{ _currencyString }}
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FormattableNumber } from '@nimiq/utils';

@Component
export default class FiatAmount extends Vue {
    @Prop({
        type: Number,
        required: true,
    })
    public amount!: number;

    @Prop({
        type: String,
        required: true,
    })
    public currency!: string;

    @Prop({
        type: String,
        default: navigator.language,
    })
    public locale!: string;

    private get _currencyString() {
        const localeWithLatinNumbers = `${this.locale}-u-nu-latn`;
        const formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], {
            style: 'currency',
            currency: this.currency,
            currencyDisplay: 'symbol',
            useGrouping: false,
        });
        const integerPart = formatted.match(/\d+/)![0]; // first match is the integer part
        return formatted
            // Enforce a dot as decimal separator for consistency. Using capturing groups instead of
            // lookahead/lookbehind to avoid browser support limitations.
            .replace(/(\d)\D(\d)/, '$1.$2')
            .replace(integerPart, new FormattableNumber(integerPart).toString(true));
    }
}
</script>
