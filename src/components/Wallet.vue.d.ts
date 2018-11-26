import { Vue } from 'vue-property-decorator';
export default class Wallet extends Vue {
    private id;
    private label?;
    private numberAccounts;
    private type;
    private showArrow;
    private readonly walletIconClass;
}
