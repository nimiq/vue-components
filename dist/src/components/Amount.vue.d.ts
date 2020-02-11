import { Vue } from 'vue-property-decorator';
declare type BigInteger = import('big-integer').BigInteger;
export default class Amount extends Vue {
    amount: number | BigInteger;
    decimals?: number;
    minDecimals: number;
    maxDecimals: number;
    showApprox: boolean;
    currency: string;
    currencyDecimals: number;
    private _validateDecimals;
    private get formattedAmount();
    private get isApprox();
}
export {};
