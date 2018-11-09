import Vue from 'vue';
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
import LabelInput from '../components/LabelInput.vue';
import Wallet from '../components/Wallet.vue';
import WalletList from '../components/WalletList.vue';
import WalletMenu from '../components/WalletMenu.vue';
import WalletSelector from '../components/WalletSelector.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import SmallPage from '../components/SmallPage.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

import CheckoutFlow from './CheckoutFlow.vue';

function windowTemplate(slot) {
    return `
        <div style="background: #F4F4F5; padding: 128px; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 18px;">
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
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        return {
            components: {Identicon},
            data() {
                return { address };
            },
            template: `<Identicon :address="address"/>`,
        };
    })
    .add('LabelInput', () => {
        return {
            components: {LabelInput},
            methods: {
                changed: action('changed'),
            },
            data() {
                return {
                    value: "Standard Account"
                };
            },
            template: `<LabelInput :value="value" @changed="changed"/>`,
        };
    })
    .add('LoadingSpinner', () => {
        return {
            components: {LoadingSpinner},
            template: `<LoadingSpinner />`,
        };
    });;

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('Account', () => {
        const label = text('label', 'My account');
        const address = text('address', 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM');
        const balance = number('balance', 12023110);

        return {
            components: {Account},
            data() {
                return { address };
            },
            template: `<Account :address="address" label="${label}" :balance="${balance}"></Account>`,
        };
    })
    .add('Account (editable)', () => {
        const label = text('label', 'My account');
        const address = text('address', 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM');
        const balance = number('balance', 12023110);

        return {
            components: {Account},
            methods: {
                changed: action('changed'),
            },
            data() {
                return { address };
            },
            template: `<Account :address="address" label="${label}" :balance="${balance}" :editable="true" @changed="changed"></Account>`,
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
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110,
                        },
                        {
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'HODL account',
                            balance: 2712415141213,
                        }
                    ]
                };
            },
            template: `<AccountList @account-selected="accountSelected" :accounts="accounts" walletId="helloworld1"/>`
        };
    })
    .add('AccountSelector', () => {
        return {
            components: {AccountSelector},
            data() {
                return {
                    walletId: 'helloworld2',
                    walletLabel: 'Keyguard Wallet',
                    walletType: 1,
                    accounts: [
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110
                        },
                        {
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'HODL account',
                            balance: 2712415141213
                        }
                    ]
                };
            },
            methods: {
                accountSelected: action('account-selected'),
                switchWallet: action('switch-wallet'),
            },
            template: `<AccountSelector @account-selected="accountSelected" @switch-wallet="switchWallet" :accounts="accounts" :walletId="walletId" :walletLabel
            ="walletLabel" :walletType="walletType"/>`
        };
    })
    .add('Address', () => {
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        return {
            components: {Address},
            data() {
                return { address };
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
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        const showOptions = boolean('showOptions', false);
        return {
            components: {Contact},
            methods: {
                onSelect: action('select'),
                onChange: action('change'),
                onDelete: action('delete'),
            },
            data() {
                return { address };
            },
            template: `<Contact label="${label}" :address="address" :show-options="${showOptions}" @select="onSelect" @change="onChange" @delete="onDelete"/>`,
        };
    })
    .add('Wallet', () => {
        const label = text('label', 'Main Wallet');
        const userFriendlyId = text('user-friendly-id', 'funny giraffe');
        const id = text('id', 'abc');
        return {
            components: {Wallet},
            data() {
                return {
                    id: 'abcdef',
                    label: 'Keyguard Wallet',
                    accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                    contracts: [],
                    type: 1, // BIP39
                    // userFriendlyId: 'funny giraffe',
                };
            },
            template: `<Wallet :id="id"
                              :label="label"
                              :numberAccounts="accounts.size + contracts.length"
                              :type="type"/>`
        };
    })
    .add('WalletList', () => {
        return {
            components: {WalletList},
            methods: {
                walletSelected: action('wallet-selected'),
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ]
                };
            },
            template: `<WalletList @wallet-selected="walletSelected" :wallets="wallets"/>`
        };
    })
    .add('WalletMenu', () => {
        return {
            components: {WalletMenu},
            methods: {
                walletSelected: action('wallet-selected'),
                renameWallet: action('rename-wallet'),
                exportWallet: action('export-wallet'),
                logoutWallet: action('logout-wallet'),
                create: action('create'),
                login: action('login'),
            },
            data() {
                return {
                    activeWalletId: 'abcdef',
                    wallets: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                        }, {
                            id: 'legacy-01',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 0, // LEGACY
                        }, {
                            id: 'legacy-02',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 0, // LEGACY
                        }
                    ]
                };
            },
            template: windowTemplate(`<WalletMenu
                :wallets="wallets"
                :active-wallet-id="activeWalletId"
                @wallet-selected="walletSelected"
                @rename-wallet="renameWallet"
                @export-wallet="exportWallet"
                @logout-wallet="logoutWallet"
                @create="create"
                @login="login"
            />`)
        };
    })
    .add('WalletSelector', () => {
        return {
            components: {WalletSelector},
            methods: {
                walletSelected: action('wallet-selected'),
                addWallet: action('add-wallet'),
                back: action('back'),
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ]
                };
            },
            template: `<WalletSelector @wallet-selected="walletSelected" @add-wallet="addWallet" @back="back" :wallets="wallets"/>`
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
                switchWallet: action('switch-wallet'),
                back: action('back'),
            },
            data() {
                return {
                    walletId: 'helloworld3',
                    walletLabel: 'Keyguard Wallet',
                    walletType: 1,
                    accounts: [
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Standard Account',
                            balance: 12023110
                        },
                        {
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'Savings',
                            balance: 2712415141213
                        }
                    ]
                };
            },
            template: windowTemplate(`
<PaymentInfoLine :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="https://shop.nimiq.com"/>
<small-page>
    <AccountSelector @account-selected="accountSelected" @switch-wallet="switchWallet" @back="back" :accounts="accounts" :walletId="walletId" :walletLabel="walletLabel" :walletType="walletType"/>
</small-page>
`),
        };
    })
    .add('WalletSelector', () => {
        return {
            components: {WalletSelector, PaymentInfoLine, SmallPage},
            methods: {
                walletSelected: action('wallet-selected'),
                addWallet: action('add-wallet'),
                back: action('back'),
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ],
                };
            },
            template: windowTemplate(`
<PaymentInfoLine :amount="199000" :networkFee="1000" :networkFeeEditable="false" origin="https://shop.nimiq.com"/>
<small-page>
    <WalletSelector @wallet-selected="walletSelected" @add-wallet="addWallet" @back="back" :wallets="wallets"/>
</small-page>
`),
        };
    })
    .add('Flow', () => {
        return {
            components: {CheckoutFlow},
            methods: {
                addWallet: action('add-wallet'),
                accountSelected: action('account-selected'),
                back: action('back'),
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'legacy-01',
                            label: 'Keyguard Wallet',
                            accounts: new Map([
                                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM', {
                                    userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                                    label: 'Standard Account',
                                    balance: 2023110
                                }]
                            ]),
                            contracts: [],
                            type: 0, // LEGACY
                            // userFriendlyId: 'funny giraffe',
                        },
                        {
                            id: 'abcdef',
                            label: 'Keyguard Wallet',
                            accounts: new Map([
                                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM', {
                                    userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                                    label: 'Standard Account',
                                    balance: 12023110
                                }],
                                ['NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1', {
                                    userFriendlyAddress: 'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1',
                                    label: 'Savings',
                                    balance: 2712415141213
                                }]
                            ]),
                            contracts: [],
                            type: 1, // BIP39
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([
                                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM', {
                                    userFriendlyAddress: 'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM',
                                    label: 'Standard Account',
                                    balance: 12023110
                                }],
                                ['NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1', {
                                    userFriendlyAddress: 'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1',
                                    label: 'Savings',
                                    balance: 2712415141213
                                }]
                            ]),
                            contracts: [],
                            type: 2, // LEDGER
                            // userFriendlyId: 'black panther',
                        }
                    ],
                };
            },
            template: windowTemplate(`
<CheckoutFlow :wallets="wallets" @account-selected="accountSelected" @add-wallet="addWallet" @back="back"/>
`),
        };
    });
