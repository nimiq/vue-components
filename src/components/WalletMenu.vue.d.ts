import { Vue } from 'vue-property-decorator';
export default class WalletMenu extends Vue {
    private wallets;
    private activeWalletId;
    private LEGACY_ID;
    private LEGACY_LABEL;
    private readonly activeWallet;
    private readonly selectableWallets;
    private readonly legacyAccountCount;
    private readonly legacyWallet;
    private walletSelected;
    private renameWallet;
    private exportWallet;
    private logoutWallet;
    private create;
    private login;
}
