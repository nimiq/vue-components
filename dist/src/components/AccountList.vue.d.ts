import { Vue } from 'vue-property-decorator';
import { AccountInfo } from './AccountSelector.vue';
export default class AccountList extends Vue {
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
