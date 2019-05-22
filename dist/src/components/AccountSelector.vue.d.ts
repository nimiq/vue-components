import { Vue } from 'vue-property-decorator';
export interface ContractInfo {
    label: string;
    userFriendlyAddress: string;
    balance?: number;
    walletId?: string;
}
export interface AccountInfo {
    path: string;
    label: string;
    userFriendlyAddress: string;
    balance?: number;
    walletId?: string;
}
export interface WalletInfo {
    id: string;
    label: string;
    accounts: Map<string, AccountInfo>;
    contracts: any[];
    type: number;
    keyMissing: boolean;
}
export default class AccountSelector extends Vue {
    private wallets;
    private decimals?;
    private minBalance?;
    private disableContracts?;
    private disableLegacyAccounts?;
    private disableBip39Accounts?;
    private disableLedgerAccounts?;
    private allowLogin;
    private highlightedDisabledAccount;
    private highlightedDisabledAccountTimeout;
    private readonly sortedWallets;
    private accountSelected;
    private login;
    private _isAccountDisabled;
    private _accountClicked;
}
