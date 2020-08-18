<template>
    <span class="fiat-amount">
        {{ _currencyString }}
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FormattableNumber, CurrencyInfo } from '@nimiq/utils';

@Component
export default class FiatAmount extends Vue {
    private static readonly NUMBER_REGEX = /(-)?\D*(\d+)(\.(\d+))?/;
    private static readonly DECIMAL_SEPARATOR_REGEX = /(\d)\D(\d)/;

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
        type: Number,
        default: .1,
    })
    public maxRelativeDeviation!: number;

    @Prop({
        type: String,
        default: navigator.language,
    })
    public locale!: string;

    private get _currencyString() {
        const localeWithLatinNumbers = `${this.locale}-u-nu-latn`;
        const formattingOptions = {
            style: 'currency',
            currency: this.currency,
            currencyDisplay: 'symbol',
            useGrouping: false,
            minimumFractionDigits: undefined, // start with decimal count typical for this.currency, e.g. 2 for eur
        };
        let formatted: string;
        let integers: string;
        let relativeDeviation: number;

        do {
            formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], formattingOptions)
                // Enforce a dot as decimal separator for consistency and parseFloat. Using capturing groups instead of
                // lookahead/lookbehind to avoid browser support limitations.
                .replace(FiatAmount.DECIMAL_SEPARATOR_REGEX, '$1.$2');
            if (formatted.includes(this.currency.toUpperCase())) {
                const symbol = new CurrencyInfo(this.currency).symbol;
                // Replace prefixed currency code including space, with the symbol and an unbreaking zero-width space
                formatted = formatted.replace(new RegExp(`${this.currency.toUpperCase()}\\s`), `${symbol}\uFEFF`);
                // Replace suffixed currency code, preserving the non-breaking space
                formatted = formatted.replace(this.currency.toUpperCase(), symbol);
            }
            const regexMatch = formatted.match(FiatAmount.NUMBER_REGEX)!;
            const [/* full match */, sign, /* integers */, decimalsIncludingSeparator, decimals] = regexMatch;
            integers = regexMatch[2];
            const formattedNumber = `${sign || ''}${integers}${decimalsIncludingSeparator || ''}`;
            relativeDeviation = Math.abs((this.amount - Number.parseFloat(formattedNumber)) / this.amount);

            formattingOptions.minimumFractionDigits = decimals ? decimals.length + 1 : 1;
        } while (relativeDeviation > this.maxRelativeDeviation
            && formattingOptions.minimumFractionDigits <= 20 // maximum allowed value for minimumFractionDigits
        );

        // apply integer grouping
        if (integers.length <= 4) return formatted;
        return formatted.replace(integers, new FormattableNumber(integers).toString(true));
    }
}
</script>
