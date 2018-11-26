import { Vue } from 'vue-property-decorator';
export default class AccountSelector extends Vue {
    private title;
    private walletId;
    private walletLabel;
    private walletType;
    private accounts;
    private showSwitchWallet;
    private accountSelected;
    private switchWallet;
    private readonly walletIconClass;
}
