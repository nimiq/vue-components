declare type BigInteger = import('big-integer').BigInteger;
import I18nMixin from '../i18n/I18nMixin';
interface CryptoAmountInfo {
    amount: number | bigint | BigInteger;
    currency: string;
    decimals: number;
}
interface FiatAmountInfo {
    amount: number;
    currency: string;
}
declare const PaymentInfoLine_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
declare class PaymentInfoLine extends PaymentInfoLine_base {
    private static readonly REFERENCE_RATE_UPDATE_INTERVAL;
    private static readonly RATE_DEVIATION_THRESHOLD;
    cryptoAmount: CryptoAmountInfo;
    fiatAmount?: FiatAmountInfo;
    vendorMarkup?: number;
    networkFee?: number | bigint | BigInteger;
    origin: string;
    address?: string;
    shopLogoUrl?: string;
    startTime?: number;
    endTime?: number;
    theme: string;
    private referenceRate;
    private referenceRateUpdateTimeout;
    private lastTooltipToggle;
    protected created(): void;
    protected destroyed(): void;
    setTime(time: number): Promise<void>;
    private get originDomain();
    private get effectiveRate();
    private get formattedVendorMarkup();
    private get isFormattedNetworkFeeZero();
    private get rateDeviation();
    private get isBadRate();
    private get formattedRateDeviation();
    private rateInfo;
    private updateReferenceRate;
    private onPriceTooltipToggle;
}
declare namespace PaymentInfoLine {
    enum Themes {
        NORMAL = "normal",
        INVERSE = "inverse"
    }
}
export default PaymentInfoLine;
