// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator
//   ../qr-code
//   ../qr-scanner

declare module 'NimiqVueComponents' {
    export { default as Account } from 'NimiqVueComponents/src/components/Account.vue';
    export { default as AccountDetails } from 'NimiqVueComponents/src/components/AccountDetails.vue';
    export { default as AccountList } from 'NimiqVueComponents/src/components/AccountList.vue';
    export { default as AccountRing } from 'NimiqVueComponents/src/components/AccountRing.vue';
    export { default as AccountSelector } from 'NimiqVueComponents/src/components/AccountSelector.vue';
    export { default as AddressDisplay } from 'NimiqVueComponents/src/components/AddressDisplay.vue';
    export { default as Amount } from 'NimiqVueComponents/src/components/Amount.vue';
    export { default as AmountWithDetails } from 'NimiqVueComponents/src/components/AmountWithDetails.vue';
    export { default as Contact } from 'NimiqVueComponents/src/components/Contact.vue';
    export { default as ContactList } from 'NimiqVueComponents/src/components/ContactList.vue';
    export { default as AmountInput } from 'NimiqVueComponents/src/components/AmountInput.vue';
    export { default as Identicon } from 'NimiqVueComponents/src/components/Identicon.vue';
    export { default as LabelInput } from 'NimiqVueComponents/src/components/LabelInput.vue';
    export { default as LoadingSpinner } from 'NimiqVueComponents/src/components/LoadingSpinner.vue';
    export { default as PageBody } from 'NimiqVueComponents/src/components/PageBody.vue';
    export { default as PageFooter } from 'NimiqVueComponents/src/components/PageFooter.vue';
    export { default as PageHeader } from 'NimiqVueComponents/src/components/PageHeader.vue';
    export { default as PaymentInfoLine } from 'NimiqVueComponents/src/components/PaymentInfoLine.vue';
    export { default as QrCode } from 'NimiqVueComponents/src/components/QrCode.vue';
    export { default as QrScanner } from 'NimiqVueComponents/src/components/QrScanner.vue';
    export { default as SelectBar } from 'NimiqVueComponents/src/components/SelectBar.vue';
    export { default as SmallPage } from 'NimiqVueComponents/src/components/SmallPage.vue';
    export * from 'NimiqVueComponents/src/components/Icons';
}

declare module 'NimiqVueComponents/src/components/Account.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Account extends Vue {
        address: string;
        image?: string;
        label: string;
        placeholder?: string;
        walletLabel?: string;
        balance?: number;
        decimals: number;
        editable?: boolean;
        layout: string;
        focus(): void;
    }
}

declare module 'NimiqVueComponents/src/components/AccountDetails.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountDetails extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/AccountList.vue' {
    import { Vue } from 'vue-property-decorator';
    import { AccountInfo } from 'NimiqVueComponents/src/components/AccountSelector.vue';
    export default class AccountList extends Vue {
        accounts: AccountInfo[];
        focus(address: string): void;
    }
}

declare module 'NimiqVueComponents/src/components/AccountRing.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountRing extends Vue {
        addresses: string[];
        animate: boolean;
    }
}

declare module 'NimiqVueComponents/src/components/AccountSelector.vue' {
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
    }
}

declare module 'NimiqVueComponents/src/components/AddressDisplay.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AddressDisplay extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/Amount.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Amount extends Vue {
        amount: number;
        decimals?: number;
        minDecimals: number;
        maxDecimals: number;
        showApprox: boolean;
    }
}

declare module 'NimiqVueComponents/src/components/AmountWithDetails.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AmountWithDetails extends Vue {
        amount: number;
        networkFee: number;
        networkFeeEditable: boolean;
        decimals: number;
        toggleDetails(): void;
    }
}

declare module 'NimiqVueComponents/src/components/Contact.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Contact extends Vue {
        address: string;
        label: string;
        showOptions?: boolean;
        abortTrigger?: number;
    }
}

declare module 'NimiqVueComponents/src/components/ContactList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class ContactList extends Vue {
        contacts: Array<{
            address: string;
            label: string;
        }>;
    }
}

declare module 'NimiqVueComponents/src/components/AmountInput.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AmountInput extends Vue {
        mounted(): Promise<void>;
        focus(): void;
        formattedValue: string;
    }
}

declare module 'NimiqVueComponents/src/components/Identicon.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Identicon extends Vue {
        static formatAddress(str: string): string;
        static isUserFriendlyAddress(str: string): boolean;
        address: string;
    }
}

declare module 'NimiqVueComponents/src/components/LabelInput.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class LabelInput extends Vue {
        focus(): void;
    }
}

declare module 'NimiqVueComponents/src/components/LoadingSpinner.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class LoadingSpinner extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/PageBody.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PageBody extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/PageFooter.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PageFooter extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/PageHeader.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PageHeader extends Vue {
        readonly progressSteps: any[];
    }
}

declare module 'NimiqVueComponents/src/components/PaymentInfoLine.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PaymentInfoLine extends Vue {
        decimals: number;
    }
}

declare module 'NimiqVueComponents/src/components/QrCode.vue' {
    import { Vue } from 'vue-property-decorator';
    import QrEncoder from 'qr-code';
    /**
      * **Nimiq QR Code Component**
      *
      * Props:
      *
      * **data** {string} The data to render
      *
      * **errorCorrection** {'L', 'M', 'H', 'Q'} [optional, default: 'M'] Error correction level according to QR specs
      *
      * **radius** {number} [optional, default .5] Roundness of QR code modules. Recommended value: .5
      *
      * **fill** {string|LinearGradient|RadialGradient} [optional, default '#0582ca' (nimiq-light-blue)] Fill of QR code
      *
      * **background** {string|null} [optional, default null] Background color of QR code. null means transparent.
      *
      * **size** {number} [optional, default 128] Width and height of QR code
      *
      * The QR encoder lib itself is lazy loaded as a webpack chunk when the data is set. If you want to use the QrCode
      * component in your project, you should copy the chunk from the dist folder over to your project.
      */
    export default class QrCode extends Vue {
        data: string;
        errorCorrection: 'L' | 'M' | 'H' | 'Q';
        radius: number;
        fill: string | QrEncoder.LinearGradient | QrEncoder.RadialGradient;
        background: string | null;
        size: number;
    }
}

declare module 'NimiqVueComponents/src/components/QrScanner.vue' {
    import { Vue } from 'vue-property-decorator';
    import QrScannerLib from 'qr-scanner';
    class QrScanner extends Vue {
        reportFrequency: number;
        validate?: (scanResult: string) => boolean;
        start(): Promise<boolean>;
        stop(): void;
        setGrayscaleWeights(red: any, green: any, blue: any): void;
        setInversionMode(inversionMode: QrScannerLib.InversionMode): void;
        repositionOverlay(): void;
    }
    namespace QrScanner {
        const enum Events {
            RESULT = "result",
            CANCEL = "cancel",
            ERROR = "error"
        }
    }
    export default QrScanner;
}

declare module 'NimiqVueComponents/src/components/SelectBar.vue' {
    import { Vue } from 'vue-property-decorator';
    export interface SelectBarOption {
        color: string;
        value: number;
        text: string;
        index: number;
    }
    export default class SelectBar extends Vue {
        name: string;
        options: SelectBarOption[];
        selectedValue: number;
        readonly value: number;
    }
}

declare module 'NimiqVueComponents/src/components/SmallPage.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class SmallPage extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/Icons' {
    /**
      * Comment out any unused icons here
      */
    export const AlertTriangleIcon: any;
    export const ArrowLeftSmallIcon: any;
    export const ArrowLeftIcon: any;
    export const ArrowRightSmallIcon: any;
    export const ArrowRightIcon: any;
    export const CaretRightSmallIcon: any;
    export const CheckmarkIcon: any;
    export const CloseIcon: any;
    export const ContactsIcon: any;
    export const FaceNeutralIcon: any;
    export const FaceSadIcon: any;
    export const GearIcon: any;
    export const HexagonIcon: any;
    export const InfoCircleIcon: any;
    export const LedgerIcon: any;
    export const LoginIcon: any;
    export const MenuDotsIcon: any;
    export const PlusCircleIcon: any;
    export const QrCodeIcon: any;
    export const ScanQrCodeIcon: any;
    export const SettingsIcon: any;
    export const TransferIcon: any;
}

