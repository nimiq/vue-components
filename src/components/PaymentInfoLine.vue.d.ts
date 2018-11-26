import { Vue } from 'vue-property-decorator';
export default class PaymentInfoLine extends Vue {
    amount: number;
    networkFee: number;
    networkFeeEditable: boolean;
    decimals: number;
    origin: string;
    private readonly originDomain;
}
