// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator

declare module 'vue-components' {
    export { default as Account } from 'vue-components/src/components/Account.vue';
    export { default as AccountList } from 'vue-components/src/components/AccountList.vue';
    export { default as AccountSelector } from 'vue-components/src/components/AccountSelector.vue';
    export { default as Address } from 'vue-components/src/components/Address.vue';
    export { default as Amount } from 'vue-components/src/components/Amount.vue';
    export { default as AmountWithDetails } from 'vue-components/src/components/AmountWithDetails.vue';
    export { default as Contact } from 'vue-components/src/components/Contact.vue';
    export { default as ContactList } from 'vue-components/src/components/ContactList.vue';
    export { default as Identicon } from 'vue-components/src/components/Identicon.vue';
    export { default as Login } from 'vue-components/src/components/Login.vue';
    export { default as LoginList } from 'vue-components/src/components/LoginList.vue';
    export { default as LoginSelector } from 'vue-components/src/components/LoginSelector.vue';
    export { default as NewContact } from 'vue-components/src/components/NewContact.vue';
    export { default as PaymentInfoLine } from 'vue-components/src/components/PaymentInfoLine.vue';
    export { default as SmallPage } from 'vue-components/src/components/SmallPage.vue';
}

declare module 'vue-components/src/components/Account.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Account extends Vue {
        address: Nimiq.Address;
        label: string;
        balance: number;
    }
}

declare module 'vue-components/src/components/AccountList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountList extends Vue {
        accounts: Array<{
            label: string;
            address: Nimiq.Address;
            balance?: number;
        }>;
    }
}

declare module 'vue-components/src/components/AccountSelector.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AccountSelector extends Vue {
    }
}

declare module 'vue-components/src/components/Address.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Address extends Vue {
        address: Nimiq.Address;
    }
}

declare module 'vue-components/src/components/Amount.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Amount extends Vue {
        amount: number;
        decimals: number;
        showApprox: boolean;
    }
}

declare module 'vue-components/src/components/AmountWithDetails.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class AmountWithDetails extends Vue {
        amount: number;
        networkFee: number;
        networkFeeEditable: boolean;
        decimals: number;
        toggleDetails(): void;
    }
}

declare module 'vue-components/src/components/Contact.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Contact extends Vue {
        address: Nimiq.Address;
        label: string;
        showOptions: boolean;
    }
}

declare module 'vue-components/src/components/ContactList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class ContactList extends Vue {
        contacts: Array<{
            address: Nimiq.Address;
            label: string;
        }>;
    }
}

declare module 'vue-components/src/components/Identicon.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Identicon extends Vue {
        address: Nimiq.Address;
    }
}

declare module 'vue-components/src/components/Login.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class Login extends Vue {
    }
}

declare module 'vue-components/src/components/LoginList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class LoginList extends Vue {
    }
}

declare module 'vue-components/src/components/LoginSelector.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class LoginSelector extends Vue {
        logins: Array<{
            id: string;
            label: string;
            addresses: object[];
            contracts: object[];
            type: number;
        }>;
        title: string;
        showAddLogin: boolean;
    }
}

declare module 'vue-components/src/components/NewContact.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class NewContact extends Vue {
        edit(): void;
    }
}

declare module 'vue-components/src/components/PaymentInfoLine.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class PaymentInfoLine extends Vue {
        amount: number;
        networkFee: number;
        networkFeeEditable: boolean;
        decimals: number;
        origin: string;
    }
}

declare module 'vue-components/src/components/SmallPage.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class SmallPage extends Vue {
    }
}

