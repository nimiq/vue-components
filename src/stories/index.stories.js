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
            template: `<AccountSelector @account-selected="accountSelected" @switch-login="switchLogin" :accounts="accounts"/>`
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
            template: `<Login label="${label}" user-friendly-id="${userFriendlyId}" id="${id}"></Login>`
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
                            label: 'Main Login',
                            userFriendlyId: 'funny giraffe',
                            id: 'abc'
                        }, {
                            label: 'Secondary login',
                            userFriendlyId: 'black panther',
                            id: 'def'
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
                addLogin: action('add-login')
            },
            data() {
                return {
                    logins: [
                        {
                            label: 'Main Login',
                            userFriendlyId: 'funny giraffe',
                            id: 'abc'
                        }, {
                            label: 'Secondary login',
                            userFriendlyId: 'black panther',
                            id: 'def'
                        }
                    ]
                };
            },
            template: `<LoginSelector @login-selected="loginSelected" @add-login="addLogin" :logins="logins"/>`
        };
    })
    .add('PaymentInfoLine', () => {
        const origin = text('origin', 'shop.nimiq.com');
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
            template: `<div style="background: linear-gradient(110deg, #b453fe, #536DFE); padding-top: 2rem; padding-bottom: 3rem"><small-page><div style="height: 5rem; padding: 2rem">Some text on a page</div></small-page></div>`
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
            template: `
<div style="background: linear-gradient(110deg, #b453fe, #536DFE); padding-top: 2rem; padding-bottom: 3rem">
    <PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="shop.nimiq.com"/>
    <small-page>
        <AccountSelector @account-selected="accountSelected" @switch-login="switchLogin" :accounts="accounts"/>
    </small-page>
</div>`
        };
    })
    .add('LoginSelector', () => {
        return {
            components: {LoginSelector, PaymentInfoLine, SmallPage},
            methods: {
                loginSelected: action('login-selected'),
                addLogin: action('add-login')
            },
            data() {
                return {
                    logins: [
                        {
                            label: 'Main Login',
                            userFriendlyId: 'funny giraffe',
                            id: 'abc'
                        }, {
                            label: 'Secondary login',
                            userFriendlyId: 'black panther',
                            id: 'def'
                        }
                    ]
                };
            },
            template: `
<div style="background: linear-gradient(110deg, #b453fe, #536DFE); padding-top: 2rem; padding-bottom: 3rem">
    <PaymentInfoLine style="color: white" :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="shop.nimiq.com"/>
    <small-page>
        <LoginSelector @login-selected="loginSelected" @add-login="addLogin" :logins="logins"/>
    </small-page>
</div>`
        };
    })
    .add('Flow', () => {
        return {
            components: {CheckoutFlow},
            methods: {
                loginSelected: action('login-selected'),
                addLogin: action('add-login'),
                accountSelected: action('account-selected'),
                switchLogin: action('switch-login')
            },
            data() {
                return {
                    logins: [
                        {
                            label: 'Main Login',
                            userFriendlyId: 'funny giraffe',
                            id: 'abc'
                        }, {
                            label: 'Secondary login',
                            userFriendlyId: 'black panther',
                            id: 'def'
                        }
                    ],
                    accounts: {
                        'abc': [
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
                        ],
                        'def': [
                            {
                                address: tryAddressFromString('NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM'),
                                label: 'Primary account',
                                balance: 12023110
                            },
                            {
                                address: tryAddressFromString('NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1'),
                                label: 'Empty account',
                                balance: 0
                            }
                        ]
                    }
                };
            },
            template: `<CheckoutFlow :logins="logins" :accounts="accounts"/>`
        };
    });
