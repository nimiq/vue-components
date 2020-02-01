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
    private highlightedDisabledAddress;
    private highlightedDisabledAddressTimeout;
    focus(address: string): void;
    private accountSelected;
    private readonly accountContainerTag;
    private accountChanged;
    private _isContract;
}
