// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator

declare module 'NimiqVueComponents' {
    export { default as Account } from 'NimiqVueComponents/src/components/Account.vue';
    export { default as AccountDetails } from 'NimiqVueComponents/src/components/AccountDetails.vue';
    export { default as AccountList } from 'NimiqVueComponents/src/components/AccountList.vue';
    export { default as AccountRing } from 'NimiqVueComponents/src/components/AccountRing.vue';
    export { default as AccountSelector } from 'NimiqVueComponents/src/components/AccountSelector.vue';
    export { default as AddressDisplay } from 'NimiqVueComponents/src/components/AddressDisplay.vue';
    export { default as Amount } from 'NimiqVueComponents/src/components/Amount.vue';
    export { default as Identicon } from 'NimiqVueComponents/src/components/Identicon.vue';
    export { default as LabelInput } from 'NimiqVueComponents/src/components/LabelInput.vue';
    export { default as LoadingSpinner } from 'NimiqVueComponents/src/components/LoadingSpinner.vue';
    export { default as PageBody } from 'NimiqVueComponents/src/components/PageBody.vue';
    export { default as PageFooter } from 'NimiqVueComponents/src/components/PageFooter.vue';
    export { default as PageHeader } from 'NimiqVueComponents/src/components/PageHeader.vue';
    export { default as PaymentInfoLine } from 'NimiqVueComponents/src/components/PaymentInfoLine.vue';
    export { default as SmallPage } from 'NimiqVueComponents/src/components/SmallPage.vue';
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
        placeholder?: string;
        userFriendlyAddress: string;
        balance?: number;
        walletId?: string;
    }
    export interface AccountInfo {
        path: string;
        label: string;
        placeholder?: string;
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
        decimals: number;
        showApprox: boolean;
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
        protected maxBytes?: number;
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

declare module 'NimiqVueComponents/src/components/SmallPage.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class SmallPage extends Vue {
    }
}

