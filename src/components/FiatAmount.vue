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
    private static readonly CURRENCY_CODE_REGEX = /[A-Z]{3}\s?/i;
    private static readonly SYMBOL_TRAILING_ALPHA_REGEX = /[A-Z.]$/i;

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
        required: false,
    })
    public locale?: string;

    // If set takes precedence over maxRelativeDeviation.
    @Prop({
        type: Boolean,
        default: false,
    })
    public hideDecimals!: boolean;

    private get _currencyString() {
        const positioningLocale = this._getPositioningLocale(this.currency);
        // Only create CurrencyInfo for a specific locale if a locale was requested, otherwise use default behavior.
        // Don't use positioningLocale as it's just a rough guess for a language typical for a country where the
        // currency is used and might result in using a language that the user does not understand.
        const currencyInfo = new CurrencyInfo(this.currency, this.locale || undefined);
        const formattingOptions = {
            style: 'currency',
            currency: this.currency,
            currencyDisplay: 'code', // will later be replaced by the optimized currency symbol provided by CurrencyInfo
            useGrouping: false,
            numberingSystem: 'latn',
            // start with decimal count typical for this.currency, e.g. 2 for eur, unless hideDecimals was requested
            minimumFractionDigits: this.hideDecimals ? 0 : currencyInfo.decimals,
            maximumFractionDigits: this.hideDecimals ? 0 : currencyInfo.decimals,
        };
        let formatted: string;
        let integers: string;
        let relativeDeviation: number;

        do {
            formatted = this.amount.toLocaleString([
                this.locale || positioningLocale,
                positioningLocale,
                `${navigator.language.substring(0, 2)}-${positioningLocale}`,
                navigator.language,
                `en-${positioningLocale}`,
                'en',
            ], formattingOptions)
                // Enforce a dot as decimal separator for consistency and parseFloat. Using capturing groups instead of
                // lookahead/lookbehind to avoid browser support limitations.
                .replace(FiatAmount.DECIMAL_SEPARATOR_REGEX, '$1.$2');
            const regexMatch = formatted.match(FiatAmount.NUMBER_REGEX)!;
            const [/* full match */, sign, /* integers */, decimalsIncludingSeparator, decimals] = regexMatch;
            integers = regexMatch[2];
            const formattedNumber = `${sign || ''}${integers}${decimalsIncludingSeparator || ''}`;
            relativeDeviation = Math.abs((this.amount - Number.parseFloat(formattedNumber)) / this.amount);

            const nextDecimals = decimals ? decimals.length + 1 : 1;
            formattingOptions.minimumFractionDigits = nextDecimals;
            formattingOptions.maximumFractionDigits = nextDecimals;
        } while (relativeDeviation > this.maxRelativeDeviation
            && formattingOptions.minimumFractionDigits <= 20 // max for minimumFractionDigits and maximumFractionDigits
            && !this.hideDecimals
        );

        // Replace the currency code with our custom currency symbol.
        formatted = formatted.replace(FiatAmount.CURRENCY_CODE_REGEX, (match, position) => {
            if (position !== 0 || !FiatAmount.SYMBOL_TRAILING_ALPHA_REGEX.test(currencyInfo.symbol)) {
                // For trailing currency symbol or currency symbol that does not end with a latin letter or dot do not
                // append a space, e.g.: 1.00 € (EUR), $1.00 (USD), R$1.00 (BRL), ₼1.00 (AZN), ৳1 (BDT), S/1.00 (PEN)
                return currencyInfo.symbol;
            }
            // For leading currency symbol that ends with a latin letter or dot, add a (non-breaking) space, e.g.
            // KM 1.00 (BAM), B/. 1.00 (PAB), лв. 1.00 (BGN), kr 1.00 (DKK)
            return `${currencyInfo.symbol}\u00A0`;
        });

        // apply integer grouping
        if (integers.length <= 4) return formatted;
        return formatted.replace(integers, new FormattableNumber(integers).toString(true));
    }

    private _getPositioningLocale(currency: string) {
        // Try to guess a locale which positions the currency symbol in a way typical for countries, where the currency
        // is used, e.g. 1.00€ for eur; $1.00 for usd.
        currency = currency.toLowerCase();
        switch (currency) {
            case 'eur':
            case 'chf':
                return 'de';
            case 'gbp':
            case 'usd':
                return 'en';
            case 'cny':
                return 'zh';
            default:
                // Return the country from the currency code which is typically (but not necessarily) the first two
                // letters (see https://en.wikipedia.org/wiki/ISO_4217#National_currencies), in the hope that it
                // coincides with a locale.
                // TODO oftentimes this results in the wrong locale, e.g. ARS (Argentinan Peso) -> AR (Arabic),
                //  CAD (Canadian Dollar) -> CA (Catalan). Can we come up with a better heuristic?
                return currency.substr(0, 2);
        }
    }
}
</script>
