import { Vue } from 'vue-property-decorator';
export default class WalletSelector extends Vue {
    wallets: Array<{
        id: string;
        label: string;
        accounts: Map<string, any>;
        contracts: object[];
        type: number;
    }>;
    title: string;
    showAddWallet: boolean;
    private readonly walletWallets;
    private readonly legacyAccounts;
    private walletSelected;
    private accountSelected;
    private addWallet;
}
