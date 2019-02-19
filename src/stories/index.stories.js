import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, number, text, withKnobs} from '@storybook/addon-knobs';

import Account from '../components/Account.vue';
import AccountInfo from '../components/AccountInfo.vue';
import AccountList from '../components/AccountList.vue';
import AccountSelector from '../components/AccountSelector.vue';
import Address from '../components/Address.vue';
import AddressDisplay from '../components/AddressDisplay.vue';
import AddressInput from '../components/AddressInput.vue';
import Amount from '../components/Amount.vue';
import AmountWithDetails from '../components/AmountWithDetails.vue';
import Contact from '../components/Contact.vue';
import Identicon from '../components/Identicon.vue';
import Input from '../components/Input.vue';
import Wallet from '../components/Wallet.vue';
import WalletList from '../components/WalletList.vue';
import WalletMenu from '../components/WalletMenu.vue';
import WalletSelector from '../components/WalletSelector.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import SmallPage from '../components/SmallPage.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import OnboardingMenu from '../components/OnboardingMenu.vue';

import CheckoutFlow from './CheckoutFlow.vue';

function windowTemplate(slot) {
    return `
        <div style="background: var(--nimiq-gray); padding: 64px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
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
    .add('Input', () => {
        return {
            components: {Input},
            methods: {
                changed: action('changed'),
            },
            template: `<Input placeholder="Name this account..." @changed="changed"/>`,
        };
    })
    .add('Input (restricted to 63 bytes)', () => {
        return {
            components: {Input},
            methods: {
                changed: action('changed'),
            },
            data() {
                return {
                    value: "Standard Address"
                };
            },
            template: `<Input :value="value" :maxBytes="63" @changed="changed"/>`,
        };
    })
    .add('LabelInput (restricted to 63 bytes)', () => {
        return {
            components: {LabelInput},
            methods: {
                changed: action('changed'),
            },
            data() {
                return {
                    value: "Standard Address"
                };
            },
            template: `<LabelInput :value="value" :maxBytes="63" @changed="changed"/>`,
        };
    })
    .add('LoadingSpinner', () => {
        return {
            components: {LoadingSpinner},
            template: `<div style="color: #0582CA"><LoadingSpinner /></div>`,
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
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'HODL account',
                            balance: 2712415141213,
                        },
                        {
                            userFriendlyAddress: 'NQ21 YPRN 1KVN BQP5A17U YGD3 HH96 6TKA 6BL4',
                            label: 'HODL account 2',
                            balance: 100000000,
                        },
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110,
                        }
                    ],
                    minBalance: 1000e5,
                };
            },
            template: `<AccountList @account-selected="accountSelected" :accounts="accounts" walletId="helloworld1" :minBalance="minBalance"/>`
        };
    })
    .add('AccountSelector', () => {
        return {
            components: {AccountSelector},
            data() {
                return {
                    wallets: [
                        {
                            id: 'helloworld2',
                            label: 'Keyguard Wallet',
                            type: 1,
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
                            ],
                        },
                    ],
                };
            },
            methods: {
                accountSelected: action('account-selected'),
                login: action('login'),
            },
            template: `<AccountSelector @account-selected="accountSelected" @login="login" :wallets="wallets"/>`
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
    .add('AddressDisplay', () => {
        return {
            data() {
                return {
                    address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                };
            },
            components: {AddressDisplay},
            template: `<AddressDisplay :address="address"/>`,
        };
    })
    .add('AddressInput', () => {
        return {
            components: {AddressInput},
            methods: {
                changed: action('changed'),
            },
            template: `<AddressInput @changed="changed"/>`,
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
                            label: 'Keyguard Account',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            balance: 101 * 1e5,
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'ihhhhahh',
                            label: 'Keyguard Account',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            balance: 101 * 1e5,
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Account',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                            balance: 553452 * 1e5,
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
                changePassphraseWallet: action('change-passphrase-wallet'),
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
                            label: 'My Keyguard Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}], ['path4', {}], ['path5', {}]]),
                            contracts: [],
                            type: 1, // BIP39
                            balance: 62345123 * 1e5,
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 2, // LEDGER
                            balance: 101 * 1e5,
                        }, {
                            id: 'legacy-01',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 0, // LEGACY
                            balance: 1239 * 1e5,
                        }, {
                            id: 'legacy-02',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 0, // LEGACY
                            balance: 123 * 1e5,
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
                @change-passphrase-wallet="changePassphraseWallet"
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
        const fee = number('fee', 138);
        const networkFeeEditable = boolean('networkFeeEditable', false);
        return {
            components: {PaymentInfoLine},
            template: `<div style="width: 400px"><PaymentInfoLine :amount="${amount}" :fee="${fee}" origin="${origin}"/></div>`,
        };
    })
    .add('SmallPage', () => {
        return {
            components: {SmallPage},
            template: windowTemplate(`
<small-page>
    <p>Some text on a page</p>
</small-page>
`),
        };
    })
    .add('OnboardingMenu', () => {
        return {
            components: {OnboardingMenu},
            methods: {
                signup: action('signup'),
                login: action('login'),
                ledger: action('ledger'),
            },
            template: windowTemplate(`<OnboardingMenu @signup="signup" @login="login" @ledger="ledger"/>`),
        };
    });

storiesOf('Pages', module)
    .addDecorator(withKnobs)
    .add('AccountInfo', () => {
        return {
            components: {AccountInfo, SmallPage},
            methods: {
                close: action('close'),
            },
            data() {
                return {
                    walletLabel: 'Keyguard Wallet',
                    account: {
                        userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                        label: 'Savings',
                        balance: 2712415141213,
                    },
                };
            },
            template: windowTemplate(`<small-page style="height: 560px;">
    <AccountInfo :address="account.userFriendlyAddress" :label="account.label" :balance="account.balance" :walletLabel="walletLabel" @close="close"/>
</small-page>
`),
        };
    })
    .add('AccountInfo (merchant)', () => {
        return {
            components: {AccountInfo, SmallPage},
            methods: {
                close: action('close'),
            },
            data() {
                return {
                    walletLabel: 'Keyguard Wallet',
                    account: {
                        userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                        label: 'Savings',
                        balance: 2712415141213,
                    },
                    origin: 'https://shop.nimiq.com',
                    // shopLogoUrl: 'https://shop.nimiq.com/wp-content/uploads/2018/10/nimiq_signet_rgb_base_size.576px.png',
                    shopLogoUrl: 'https://www.decsa.com/wp-content/uploads/2016/10/mcds.png',
                };
            },
            template: windowTemplate(`<small-page style="height: 560px;">
    <AccountInfo :address="account.userFriendlyAddress" :shopLogoUrl="shopLogoUrl" :origin="origin" @close="close"/>
</small-page>
`),
        };
    });

storiesOf('Pages/Checkout', module)
    .addDecorator(withKnobs)
    .add('AccountSelector (one wallet)', () => {
        return {
            components: {AccountSelector, PaymentInfoLine, AccountInfo, SmallPage},
            methods: {
                accountSelected: action('account-selected'),
                login: action('login'),
                openMerchantInfo: function(event) {
                    this.showMerchantInfo = true;
                    return action('merchant-info-clicked')(event);
                },
                closeMerchantInfo: function(event) {
                    this.showMerchantInfo = false;
                    return action('close')(event);
                },
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'helloworld3',
                            label: 'Keyguard Wallet',
                            type: 1, // BIP39
                            accounts: [
                                {
                                    userFriendlyAddress: 'NQ06 P49N KLUN P978 TY4P K96P F7RE 6UAX E03B',
                                    label: 'My real Savings',
                                    balance: 98273987345,
                                },
                                {
                                    userFriendlyAddress: 'NQ66 A99L SPYE G24D E802 HF3M SXRQ 5MT2 AF3Y',
                                    label: 'Standard Address',
                                    balance: 42023110,
                                },
                                {
                                    userFriendlyAddress: 'NQ61 H1EF 8AAJ UC8X E8XX U91E KL97 LLLV 7DRH',
                                    label: 'Not my Savings',
                                    balance: 7463341234,
                                },
                            ],
                        },
                    ],
                    amount: 199900000,
                    fee: 138,
                    shopAddress: 'NQ21 YPRN 1KVN BQP5 A17U YGD3 HH96 6TKA 6BL4',
                    origin: 'https://mcdonalds.com',
                    shopLogoUrl: 'https://brandmark.io/logo-rank/random/mcdonalds.png',
                    showMerchantInfo: false,
                };
            },
            template: windowTemplate(`<small-page style="height: 560px; position: relative;">
    <PaymentInfoLine :amount="amount" :fee="fee" :address="shopAddress" :origin="origin" :shopLogoUrl="shopLogoUrl" @merchant-info-clicked="openMerchantInfo"/>
    <h1 style="font-size: 3rem; text-align: center; margin: 3rem 0 1rem; line-height: 1;">Choose an account to pay</h1>
    <AccountSelector @account-selected="accountSelected" @login="login" :wallets="wallets" :minBalance="amount + fee"/>
    <AccountInfo v-if="showMerchantInfo" :address="shopAddress" :origin="origin" :shopLogoUrl="shopLogoUrl" @close="closeMerchantInfo" style="position: absolute; left: 0; top: 0;"/>
</small-page>
`),
        };
    })
    .add('AccountSelector (two wallets)', () => {
        return {
            components: {AccountSelector, PaymentInfoLine, AccountInfo, SmallPage},
            methods: {
                accountSelected: action('account-selected'),
                login: action('login'),
                openMerchantInfo: function(event) {
                    this.showMerchantInfo = true;
                    return action('merchant-info-clicked')(event);
                },
                closeMerchantInfo: function(event) {
                    this.showMerchantInfo = false;
                    return action('close')(event);
                },
            },
            data() {
                return {
                    wallets: [
                        {
                            id: 'helloworld3',
                            label: 'Keyguard Wallet',
                            type: 1, // BIP39
                            accounts: [
                                {
                                    userFriendlyAddress: 'NQ06 P49N KLUN P978 TY4P K96P F7RE 6UAX E03B',
                                    label: 'My real Savings',
                                    balance: 98273987345,
                                },
                                {
                                    userFriendlyAddress: 'NQ66 A99L SPYE G24D E802 HF3M SXRQ 5MT2 AF3Y',
                                    label: 'Standard Account',
                                    balance: 42023110,
                                },
                                {
                                    userFriendlyAddress: 'NQ61 H1EF 8AAJ UC8X E8XX U91E KL97 LLLV 7DRH',
                                    label: 'Not my Savings',
                                    balance: 7463341234,
                                },
                            ],
                        },
                        {
                            id: 'helloworld4',
                            label: 'Ledger Wallet',
                            type: 1, // BIP39
                            accounts: [
                                {
                                    userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                                    label: 'Standard Account',
                                    balance: 123023110,
                                },
                                {
                                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                                    label: 'My Savings',
                                    balance: 293872343,
                                },
                                {
                                    userFriendlyAddress: 'NQ21 YPRN 1KVN BQP5 A17U YGD3 HH96 6TKA 6BL4',
                                    label: 'Standard Account',
                                    balance: 2023110,
                                },
                            ],
                        },
                    ],
                    amount: 199900000,
                    fee: 138,
                    shopAddress: 'NQ21 YPRN 1KVN BQP5 A17U YGD3 HH96 6TKA 6BL4',
                    origin: 'https://shop.nimiq.com',
                    shopLogoUrl: 'https://shop.nimiq.com/wp-content/uploads/2018/10/nimiq_signet_rgb_base_size.576px.png',
                    showMerchantInfo: false,
                };
            },
            template: windowTemplate(`<small-page style="position: relative;">
    <PaymentInfoLine :amount="amount" :fee="fee" :address="shopAddress" :origin="origin" :shopLogoUrl="shopLogoUrl" @merchant-info-clicked="openMerchantInfo"/>
    <h1 style="font-size: 3rem; text-align: center; margin: 3rem 0 1rem; line-height: 1;">Choose an account to pay</h1>
    <AccountSelector @account-selected="accountSelected" @login="login" :wallets="wallets" :minBalance="amount + fee"/>
    <AccountInfo v-if="showMerchantInfo" :address="shopAddress" :origin="origin" :shopLogoUrl="shopLogoUrl" @close="closeMerchantInfo" style="position: absolute; left: 0; top: 0;"/>
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
                                    label: 'Standard Address',
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
                                    label: 'Standard Address',
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
                                    label: 'Standard Address',
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
