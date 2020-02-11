declare type BigInteger = import('big-integer').BigInteger;
import { Vue } from 'vue-property-decorator';
interface CryptoAmountInfo {
    amount: number | bigint | BigInteger;
    currency: string;
    decimals: number;
}
interface FiatAmountInfo {
    amount: number;
    currency: string;
}
declare class PaymentInfoLine extends Vue {
    private get originDomain();
    cryptoAmount: CryptoAmountInfo;
    fiatAmount?: FiatAmountInfo;
    origin: string;
    address?: string;
    shopLogoUrl?: string;
    startTime?: number;
    endTime?: number;
    theme: string;
    setTime(time: number): Promise<void>;
}
declare namespace PaymentInfoLine {
    enum Themes {
        NORMAL = "normal",
        INVERSE = "inverse"
    }
}
export default PaymentInfoLine;
