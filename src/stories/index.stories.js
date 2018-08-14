import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, number, text, withKnobs} from '@storybook/addon-knobs';

import Account from '../components/Account.vue';
import AccountList from '../components/AccountList.vue';
import AccountSelector from '../components/AccountSelector.vue';
import Address from '../components/Address.vue';
import Amount from '../components/Amount.vue';
import AmountWithDetails from '../components/AmountWithDetails.vue';
import Contact from '../components/Contact.vue';
import Identicon from '../components/Identicon.vue';
import Login from '../components/Login.vue';
import LoginList from '../components/LoginList.vue';
import LoginSelector from '../components/LoginSelector.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import SmallPage from '../components/SmallPage.vue';

import CheckoutFlow from './CheckoutFlow.vue';

Vue.use(AsyncComputed);

function tryAddressFromString(addr) {
    try {
        return Nimiq.Address.fromString(addr);
    } catch (e) {
        return null;
    }
}

function windowTemplate(slot) {
    return `
        <div style="background-image: linear-gradient(55deg, #2462dc, #a83df6); padding: 128px; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px;">
            ${slot}
        </div>
    `;
}

storiesOf('Basic', module)
    .addDecorator(withKnobs)
    .add('Amount', () => {
        let template = '<table style="text-align: right">';
        for (const digit of [0, 2, 5]) {
            template += `<tr><td colspan="2"><br><b>${digit} digits</b></td></tr>`;
            for (const num of [138, 12345, 1234567, 123456789012, 12345000]) {
                template += `<tr><td>${num} sat</td><td><Amount :amount="${num}" :decimals="${digit}"/></td></tr>`;
            }

            template += `<tr><td colspan="2"><b>${digit} digits approx</b></td></tr>`;
            for (const num of [138, 12345, 1234567, 123456789012, 12345000]) {
                template += `<tr><td>${num} sat</td><td><Amount :amount="${num}" :decimals="${digit}" showApprox/></td></tr>`;
            }
        }
        template += '</table>';
        return {
            components: {Amount},
            style: `td { text-align: right }`,
            template
        };
    })
    .add('Identicon', () => {
        const address = text('address', 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000');
        return {
            components: {Identicon},
            data() {
                return {address: tryAddressFromString(address)}
            },
            template: `<Identicon :address="address"/>`,
        };
    });

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('Account', () => {
        const label = text('label', 'My account');
        const address = text('address', 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM');
        const balance = number('balance', 12023110);

        return {
            components: {Account},
            data() {
                return {address: tryAddressFromString(address)};
            },
            template: `<Account :address="address" label="${label}" :balance="${balance}"></Account>`,
        };
    })
    .add('AccountList', () => {
        return {
            components: {AccountList},
            methods: {
                accountSelected: action('account-selected')
            },
            data() {
                return {
                    accounts: [
                        {
                            address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                            label: 'Primary account',
                            balance: 12023110
                        },
                        {
                            address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                            label: 'HODL account',
                            balance: 2712415141213
                        }
                    ]
                };
            },
            template: `<AccountList @account-selected="accountSelected" :accounts="accounts"/>`
        };
    })
    .add('AccountSelector', () => {
        return {
            components: {AccountSelector},
            data() {
                return {
                    loginLabel: 'Keyguard Wallet',
                    loginType: 1,
                    accounts: [
                        {
                            address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                            label: 'Primary account',
                            balance: 12023110
                        },
                        {
                            address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                            label: 'HODL account',
                            balance: 2712415141213
                        }
                    ]
                };
            },
            methods: {
                accountSelected: action('account-selected'),
                switchLogin: action('switch-login'),
            },
            template: `<AccountSelector @account-selected="accountSelected" @switch-login="switchLogin" :accounts="accounts" :loginLabel
            ="loginLabel" :loginType="loginType"/>`
        };
    })
    .add('Address', () => {
        const address = text('address', 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000');
        return {
            components: {Address},
            data() {
                return {address: tryAddressFromString(address)};
            },
            template: `<Address :address="address"/>`,
        };
    })
    .add('AmountWithDetails', () => {
        const amount = number('amount', 199862);
        const networkFee = number('networkFee', 138);
        const networkFeeEditable = boolean('networkFeeEditable', false);
        const digits = number('digits', 2, {range: true, min: 0, max: 5, step: 1});
        return {
            components: {AmountWithDetails},
            template: `<div style="padding-left: 20rem"><AmountWithDetails :decimals="${digits}" :amount="${amount}" :networkFee="${networkFee}" :networkFeeEditable="${networkFeeEditable}"/></div>`,
        };
    })
    .add('Contact', () => {
        const label = text('label', 'Burn address');
        const address = text('address', 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000');
        const showOptions = boolean('showOptions', false);
        return {
            components: {Contact},
            methods: {
                onSelect: action('select'),
                onChange: action('change'),
                onDelete: action('delete'),
            },
            data() {
                return {address: tryAddressFromString(address)};
            },
            template: `<Contact label="${label}" :address="address" :show-options="${showOptions}" @select="onSelect" @change="onChange" @delete="onDelete"/>`,
        };
    })
    .add('Login', () => {
        const label = text('label', 'Main Login');
        const userFriendlyId = text('user-friendly-id', 'funny giraffe');
        const id = text('id', 'abc');
        return {
            components: {Login},
            data() {
                return {
                    id: 'abcdef',
                    label: 'Keyguard Wallet',
                    addresses: [{}, {}, {}, {}, {}],
                    contracts: [],
                    type: 1, // BIP39
                    // userFriendlyId: 'funny giraffe',
                };
            },
            template: `<Login :id="id"
                              :label="label"
                              :numberAccounts="addresses.length + contracts.length"
                              :type="type"/>`
        };
    })
    .add('LoginList', () => {
        return {
            components: {LoginList},
            methods: {
                loginSelected: action('login-selected'),
            },
            data() {
                return {
                    logins: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            addresses: [{}, {}, {}, {}, {}],
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            addresses: [{}, {}, {}],
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ]
                };
            },
            template: `<LoginList @login-selected="loginSelected" :logins="logins"/>`
        };
    })
    .add('LoginSelector', () => {
        return {
            components: {LoginSelector},
            methods: {
                loginSelected: action('login-selected'),
                addLogin: action('add-login'),
                back: action('back'),
            },
            data() {
                return {
                    logins: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            addresses: [{}, {}, {}, {}, {}],
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            addresses: [{}, {}, {}],
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ]
                };
            },
            template: `<LoginSelector @login-selected="loginSelected" @add-login="addLogin" @back="back" :logins="logins"/>`
        };
    })
    .add('PaymentInfoLine', () => {
        const origin = text('origin', 'https://shop.nimiq.com');
        const amount = number('amount', 199862);
        const networkFee = number('networkFee', 138);
        const networkFeeEditable = boolean('networkFeeEditable', false);
        return {
            components: {PaymentInfoLine},
            template: `<div style="width: 400px"><PaymentInfoLine :amount="${amount}" :networkFee="${networkFee}" :networkFeeEditable="${networkFeeEditable}" origin="${origin}"/></div>`,
        };
    })
    .add('SmallPage', () => {
        return {
            components: {SmallPage},
            template: windowTemplate(`
<small-page>
    <div style="height: 20rem; padding: 2rem">Some text on a page</div>
</small-page>
`),
        };
    });

storiesOf('Pages/Payment', module)
    .addDecorator(withKnobs)
    .add('AccountSelector', () => {
        return {
            components: {AccountSelector, PaymentInfoLine, SmallPage},
            methods: {
                accountSelected: action('account-selected'),
                switchLogin: action('switch-login')
            },
            data() {
                return {
                    loginLabel: 'Keyguard Wallet',
                    loginType: 1,
                    accounts: [
                        {
                            address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                            userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Standard Account',
                            balance: 12023110
                        },
                        {
                            address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                            userFriendlyAddress: 'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'Savings',
                            balance: 2712415141213
                        }
                    ]
                };
            },
            template: windowTemplate(`
<PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="https://shop.nimiq.com"/>
<small-page>
    <AccountSelector @account-selected="accountSelected" @switch-login="switchLogin" :accounts="accounts" :loginLabel="loginLabel" :loginType="loginType"/>
</small-page>
`),
        };
    })
    .add('LoginSelector', () => {
        return {
            components: {LoginSelector, PaymentInfoLine, SmallPage},
            methods: {
                loginSelected: action('login-selected'),
                addLogin: action('add-login'),
                back: action('back'),
            },
            data() {
                return {
                    logins: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            addresses: [{}, {}, {}, {}, {}],
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            addresses: [{}, {}, {}],
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ],
                };
            },
            template: windowTemplate(`
<PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="https://shop.nimiq.com"/>
<small-page>
    <LoginSelector @login-selected="loginSelected" @add-login="addLogin" @back="back" :logins="logins"/>
</small-page>
`),
        };
    })
    .add('Flow', () => {
        return {
            components: {CheckoutFlow},
            methods: {
                addLogin: action('add-login'),
                accountSelected: action('account-selected'),
                back: action('back'),
            },
            data() {
                return {
                    logins: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            addresses: [{
                                address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                                userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                                label: 'Standard Account',
                                balance: 12023110
                            },
                            {
                                address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                                userFriendlyAddress: 'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1',
                                label: 'Savings',
                                balance: 2712415141213
                            }],
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            addresses: [{
                                address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                                userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                                label: 'Standard Account',
                                balance: 12023110
                            },
                            {
                                address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                                userFriendlyAddress: 'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1',
                                label: 'Savings',
                                balance: 2712415141213
                            }],
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ],
                };
            },
            template: windowTemplate(`
<CheckoutFlow :logins="logins" @account-selected="accountSelected" @add-login="addLogin" @back="back"/>
`),
        };
    });
