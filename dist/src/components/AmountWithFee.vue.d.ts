import I18nMixin from '../i18n/I18nMixin';
declare const AmountWithFee_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class AmountWithFee extends AmountWithFee_base {
    private value;
    private availableBalance;
    private fiatAmount;
    private fiatCurrency;
    private liveAmount;
    mounted(): void;
    private watchAvailableAmountChange;
    private watchAmountChange;
    private get isValid();
    focus(): void;
}
export {};
