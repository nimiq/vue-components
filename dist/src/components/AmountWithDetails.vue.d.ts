import { Vue } from 'vue-property-decorator';
export default class AmountWithDetails extends Vue {
    amount: number;
    networkFee: number;
    networkFeeEditable: boolean;
    decimals: number;
    private showDetails;
    private isEditing;
    toggleDetails(): void;
}
