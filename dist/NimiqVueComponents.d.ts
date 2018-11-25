// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator

declare module 'NimiqVueComponents' {
    export { default as Account } from 'NimiqVueComponents/src/components/Account.vue';
    export { default as AccountList } from 'NimiqVueComponents/src/components/AccountList.vue';
    export { default as AccountSelector } from 'NimiqVueComponents/src/components/AccountSelector.vue';
    export { default as Amount } from 'NimiqVueComponents/src/components/Amount.vue';
    export { default as Identicon } from 'NimiqVueComponents/src/components/Identicon.vue';
    export { default as LabelInput } from 'NimiqVueComponents/src/components/LabelInput.vue';
    export { default as LoadingSpinner } from 'NimiqVueComponents/src/components/LoadingSpinner.vue';
    export { default as Wallet } from 'NimiqVueComponents/src/components/Wallet.vue';
    export { default as WalletList } from 'NimiqVueComponents/src/components/WalletList.vue';
    export { default as WalletSelector } from 'NimiqVueComponents/src/components/WalletSelector.vue';
    export { default as PageHeader } from 'NimiqVueComponents/src/components/PageHeader.vue';
    export { default as PageBody } from 'NimiqVueComponents/src/components/PageBody.vue';
    export { default as PageFooter } from 'NimiqVueComponents/src/components/PageFooter.vue';
    export { default as PaymentInfoLine } from 'NimiqVueComponents/src/components/PaymentInfoLine.vue';
    export { default as SmallPage } from 'NimiqVueComponents/src/components/SmallPage.vue';
}

declare module 'NimiqVueComponents/src/components/Account.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Account extends Vue {
        address: string;
        label: string;
        balance: number;
        focus(): void;
    }
}

declare module 'NimiqVueComponents/src/components/AccountList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountList extends Vue {
        accounts: Array<{
            label: string;
            userFriendlyAddress: string;
            balance?: number;
        }>;
        focus(address: string): void;
    }
}

declare module 'NimiqVueComponents/src/components/AccountSelector.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountSelector extends Vue {
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
        static isUserFriendlyAddress(str: string): any;
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

declare module 'NimiqVueComponents/src/components/Wallet.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Wallet extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/WalletList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class WalletList extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/WalletSelector.vue' {
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
    }
}

declare module 'NimiqVueComponents/src/components/PageHeader.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PageHeader extends Vue {
        readonly progressSteps: any[];
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

declare module 'NimiqVueComponents/src/components/PaymentInfoLine.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PaymentInfoLine extends Vue {
        amount: number;
        networkFee: number;
        networkFeeEditable: boolean;
        decimals: number;
        origin: string;
    }
}

declare module 'NimiqVueComponents/src/components/SmallPage.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class SmallPage extends Vue {
    }
}

