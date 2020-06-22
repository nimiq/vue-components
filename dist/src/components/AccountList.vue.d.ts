import { AccountInfo } from './AccountSelector.vue';
import I18nMixin from '../i18n/I18nMixin';
declare const AccountList_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class AccountList extends AccountList_base {
    accounts: AccountInfo[];
    disabledAddresses: string[];
    private walletId?;
    private editable?;
    private decimals?;
    private minBalance?;
    private disableContracts?;
    private disabled?;
    private tooltipProps?;
    private highlightedDisabledAddress;
    private highlightedDisabledAddressTimeout;
    focus(address: string): void;
    private accountSelected;
    private accountChanged;
    private _isDisabled;
    private _isDisabledContract;
    private _isDisabledAccount;
    private _hasInsufficientBalance;
    private _hasTooltip;
    private _clearHighlightedDisabledAddress;
}
export {};
