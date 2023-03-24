import I18nMixin from '../i18n/I18nMixin';
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
    contracts: ContractInfo[];
    type: number;
    keyMissing: boolean;
    btcXPub?: string;
}
declare const AccountSelector_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class AccountSelector extends AccountSelector_base {
    private wallets;
    disabledAddresses: string[];
    private decimals?;
    private minBalance?;
    private disableContracts?;
    private disableLegacyAccounts?;
    private disableBip39Accounts?;
    private disableLedgerAccounts?;
    private highlightBitcoinAccounts?;
    private allowLogin;
    private shownTooltip;
    private hideTooltipTimeout;
    private tooltipProps;
    private get sortedWallets();
    private mounted;
    private accountSelected;
    private login;
    private _isAccountDisabled;
    private _getAccountTypeName;
    private _accountClicked;
}
export {};
