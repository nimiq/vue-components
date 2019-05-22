import { Vue } from 'vue-property-decorator';
export default class Amount extends Vue {
    amount: number;
    decimals?: number;
    minDecimals: number;
    maxDecimals: number;
    showApprox: boolean;
    private static _validateDecimals;
    private readonly formattedAmount;
    private readonly isApprox;
}
