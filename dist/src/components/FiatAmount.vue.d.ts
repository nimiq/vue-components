import { Vue } from 'vue-property-decorator';
export default class FiatAmount extends Vue {
    private static readonly NUMBER_REGEX;
    private static readonly DECIMAL_SEPARATOR_REGEX;
    amount: number;
    currency: string;
    maxRelativeDeviation: number;
    locale?: string;
    hideDecimals: boolean;
    private get _currencyString();
    private _currencyToLocale;
}
