import { Vue } from 'vue-property-decorator';
export default class Amount extends Vue {
    amount: number;
    decimals: number;
    showApprox: boolean;
    private amountToString;
    private isApprox;
}
