import { Vue } from 'vue-property-decorator';
export default class PaymentInfoLine extends Vue {
    private readonly originDomain;
    decimals: number;
    private amount;
    private fee;
    private origin;
    private address?;
    private shopLogoUrl?;
    private merchantInfoClicked;
}
