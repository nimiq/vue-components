import { Vue } from 'vue-property-decorator';
/** @deprecated */
export default class AmountWithDetails extends Vue {
    amount: number;
    networkFee: number;
    networkFeeEditable: boolean;
    decimals: number;
    private created;
    private showDetails;
    private isEditing;
    toggleDetails(): void;
}
