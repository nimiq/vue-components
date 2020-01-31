import { Vue } from 'vue-property-decorator';
import AccountDetails from './AccountDetails.vue';
import AddressInput from './AddressInput.vue';
import { WalletInfo } from './AccountSelector.vue';
import LabelInput from './LabelInput.vue';
import AmountWithFee from './AmountWithFee.vue';
import SelectBar from './SelectBar.vue';
declare class SendTx extends Vue {
    private static FEE_OPTIONS;
    contacts: Array<{
        address: string;
        label: string;
    }>;
    addresses: Array<{
        address: string;
        label: string;
    }>;
    wallet: WalletInfo;
    sender?: {
        walletId: string;
        address: string;
    };
    recipient?: {
        address: string;
        label?: string;
    };
    recipientIsReadonly: boolean;
    isLoading: boolean;
    value: number;
    message: string;
    validityStartHeight: number;
    $refs: {
        accountDetails: AccountDetails;
        amountWithFee: AmountWithFee;
        messageInput: LabelInput;
        feeSetter: SelectBar;
        address: AddressInput;
    };
    focus(dontFocusOnMobile?: boolean): void;
    clear(): void;
    private liveSender;
    private liveRecipient;
    private displayedDetails;
    private contactsOpened;
    private optionsOpened;
    private addContactOpened;
    private liveAddress;
    private feeLunaPerByte;
    private feeLunaPerBytePreview;
    private liveExtraData;
    private liveContactLabel;
    private liveAmountAndFee;
    private checkLiveSenderInWallet;
    private setSender;
    private updateSender;
    private setRecipient;
    private updateRecipient;
    private proceedToSetAmount;
    private backFromAmount;
    private backFromRecipient;
    private updateFeePreview;
    private setFee;
    private setValue;
    private setMessage;
    private setLabel;
    private closeDetails;
    private closeOptions;
    private closeAddContact;
    private storeContactAndCloseOverlay;
    private sendTransaction;
    private readonly addressCount;
    private readonly fee;
    private readonly feePreview;
    private computeFee;
    private readonly buttonText;
    private readonly addContactButtonText;
    private readonly showButtonLoader;
    private readonly recipientValid;
    private readonly isValid;
    private login;
    private scanQr;
    private createCashlink;
}
declare namespace SendTx {
    enum Details {
        NONE = 0,
        SENDER = 1,
        RECIPIENT = 2
    }
    enum RecipientType {
        UNKOWN = 0,
        CONTACT = 1,
        OWN_ADDRESS = 2
    }
}
export default SendTx;
