<template>
    <span class="fiat-amount">
        {{ _currencyString }}
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FormattableNumber, toNonScientificNumberString } from '@nimiq/utils';

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
            minimumFractionDigits: undefined,
        };
        let formatted: string;
        formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], formattingOptions)
            // Enforce a dot as decimal separator for consistency. Using capturing groups instead of
            // lookahead/lookbehind to avoid browser support limitations.
            .replace(/(\d)\D(\d)/, '$1.$2');
        const numberRegex = /(-)?\D*(\d+)(\.(\d+))?/;
        const [, sign, integers, decimalsIncludingSeparator, defaultDecimals] = formatted.match(numberRegex);
        const formattedNumber = `${sign || ''}${integers}${decimalsIncludingSeparator || ''}`;
        const relativeDeviation = Math.abs((this.amount - Number.parseFloat(formattedNumber)) / this.amount);

        if (relativeDeviation > this.maxRelativeDeviation) {
            // determine how many decimals we have to use
            let sampleString: string;
            if (this.maxRelativeDeviation === 0) {
                // have to use all decimals of the original number, therefore we measure the decimals from this.amount.
                sampleString = toNonScientificNumberString(this.amount);
            } else {
                // Check which decimal changes when advancing in maxAllowedDeviation steps.
                // Note that this might in some cases generate one digit more than required for the requested precision:
                // For example 1.011 JPY for max error 0.001 will be rendered as 1.011 while 1.01 would be acceptable.
                // This happens if the last required digit is <= the first significant digit.
                const maxAllowedDeviation = this.maxRelativeDeviation * this.amount;
                sampleString = maxAllowedDeviation.toLocaleString('en-US', { // note: renders as non-scientific number
                    maximumSignificantDigits: 1,
                });
            }
            const [, , , , sampleDecimals] = sampleString.match(numberRegex);
            formattingOptions.minimumFractionDigits = Math.min(
                20, // maximum allowed by toLocaleString
                Math.max(
                    sampleDecimals ? sampleDecimals.length : 0,
                    defaultDecimals ? defaultDecimals.length : 0,
                ),
            );

            formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], formattingOptions)
                .replace(/(\d)\D(\d)/, '$1.$2');
        }

        // apply integer grouping
        return formatted.replace(integers, new FormattableNumber(integers).toString(true));
    }
}
</script>
