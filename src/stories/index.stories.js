import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, number, text, object, select, withKnobs} from '@storybook/addon-knobs';

import Account from '../components/Account.vue';
import AccountDetails from '../components/AccountDetails.vue';
import AccountList from '../components/AccountList.vue';
import AccountSelector from '../components/AccountSelector.vue';
import Address from '../components/Address.vue';
import AddressDisplay from '../components/AddressDisplay.vue';
import AccountRing from '../components/AccountRing.vue';
import Amount from '../components/Amount.vue';
import AmountWithDetails from '../components/AmountWithDetails.vue';
import Contact from '../components/Contact.vue';
import ContactList from '../components/ContactList.vue';
import Identicon from '../components/Identicon.vue';
import LabelInput from '../components/LabelInput.vue';
import Wallet from '../components/Wallet.vue';
import WalletList from '../components/WalletList.vue';
import WalletMenu from '../components/WalletMenu.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import QrCode from '../components/QrCode.vue';
import QrScanner from '../components/QrScanner.vue';
import SmallPage from '../components/SmallPage.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

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
    .add('LabelInput', () => {
        return {
            components: {LabelInput},
            methods: {
                changed: action('changed'),
            },
            template: `<LabelInput placeholder="Name this account..." @changed="changed"/>`,
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
    });

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .add('Account', () => {
        const layout = select('Layout', ['row', 'column'], 'row');
        const address = text('Address', 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM');
        const label = text('Label', 'My account');
        const walletLabel = text('Wallet Label', '');
        const image = select('Image Url', {
            'None': '',
            'Restaurant Golden Swallow': 'https://www.decsa.com/wp-content/uploads/2016/10/mcds.png',
            'Invalid Image': 'javascript:alert(1)',
        }, '');
        const balance = number('Balance (can be empty)', 12023110);
        const editable = boolean('Editable', false);

        return {
            components: {Account},
            methods: {
                changed: action('changed'),
            },
            data: () => ({ layout, address, label, walletLabel, image, balance, editable }),
            template: `<Account :layout="layout" :address="address" :label="label" :walletLabel="walletLabel"
                :image="image" :balance="balance" :editable="editable" @changed="changed"></Account>`,
        };
    })
    .add('AccountList', () => {
        const minBalance = number('minBalance', 500) * 1e5;
        const decimals = number('decimals', 2);
        const editable = boolean('editable', false);
        const disableContracts = boolean('disableContracts', false);
        const disabled = boolean('disabled', false);
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
                            path: "44'/242'/0'/0'",
                        },
                        {
                            userFriendlyAddress: 'NQ21 YPRN 1KVN BQP5A17U YGD3 HH96 6TKA 6BL4',
                            label: 'HODL account 2',
                            balance: 100000000,
                            path: "44'/242'/0'/1'",
                        },
                        {
                            userFriendlyAddress: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                            label: 'My Vesting Contract',
                            balance: 77777777,
                        },
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110,
                            path: "44'/242'/0'/2'",
                        },
                    ],
                    minBalance,
                    decimals,
                    editable,
                    disableContracts,
                    disabled,
                };
            },
            template: `<AccountList @account-selected="accountSelected" :accounts="accounts" walletId="helloworld1"
                :minBalance="minBalance" :decimals="decimals" :editable="editable" :disableContracts="disableContracts"
                :disabled="disabled" />`
        };
    })
    .add('AccountSelector', () => {
        const demoType = select('Demo Type', {
            'Single Account': 'single-account',
            'Multiple Accounts': 'multiple-accounts',
        }, 'multiple-accounts');
        const minBalance = number('minBalance', 500) * 1e5
        const decimals = number('decimals', 2);
        const disableContracts = boolean('disableContracts', false);
        const disableLegacyAccounts = boolean('disableLegacyAccounts', false);
        const disableBip39Accounts = boolean('disableBip39Accounts', false);
        const disableLedgerAccounts = boolean('disableLedgerAccounts', false);
        const allowLogin = boolean('allowLogin', true);

        const demoData = {
            wallets: [
                {
                    id: 'helloworld',
                    label: 'Keyguard Wallet',
                    type: 2, // BIP39
                    accounts: [
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110,
                            path: "44'/242'/0'/0'",
                        },
                        {
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'HODL account',
                            balance: 2712415141213,
                            path: "44'/242'/0'/1'",
                        },
                    ],
                    contracts: [
                        {
                            userFriendlyAddress: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                            label: 'My Vesting Contract',
                            balance: 777777777,
                        },
                    ],
                },
            ],
            minBalance,
            decimals,
            disableContracts,
            disableLegacyAccounts,
            disableBip39Accounts,
            disableLedgerAccounts,
            allowLogin,
        };

        if (demoType === 'multiple-accounts') {
            demoData.wallets.unshift({
                id: 'helloword2',
                label: 'Ledger Wallet',
                type: 3, // LEDGER
                accounts: [
                    {
                        userFriendlyAddress: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        label: 'My Ledger Account',
                        balance: 9876543210,
                        path: "44'/242'/0'/0'",
                    }
                ],
                contracts: [],
            });
        }

        return {
            components: {AccountSelector},
            data: () => demoData,
            methods: {
                accountSelected: action('account-selected'),
                login: action('login'),
            },
            template: `<AccountSelector @account-selected="accountSelected" @login="login" :wallets="wallets"
                :minBalance="minBalance" :decimals="decimals" :disableContracts="disableContracts"
                :disableLegacyAccounts="disableLegacyAccounts" :disableBip39Accounts="disableBip39Accounts"
                :disableLedgerAccounts="disableLedgerAccounts" :allowLogin="allowLogin"/>`
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
    .add('AccountRing', () => {
        return {
            data() {
                return {
                    addresses: [
                        'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                    ],
                };
            },
            components: {AccountRing},
            template: `<div>
                Atomatic width/height:<br><br>
                <AccountRing :addresses="addresses" :animate="true"/>
                <br>300px width/height:<br><br>
                <AccountRing style="width: 300px;" :addresses="addresses" :animate="true"/>
            </div>`,
        };
    })
    .add('AccountRing (more than 6)', () => {
        return {
            data() {
                return {
                    addresses: [
                        'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                    ],
                };
            },
            components: {AccountRing},
            template: `<AccountRing :addresses="addresses" :animate="true"/>`,
        };
    })
    .add('AccountRing (empty)', () => {
        return {
            data() {
                return {
                    addresses: [],
                };
            },
            components: {AccountRing},
            template: `<AccountRing :addresses="addresses" :animate="true"/>`,
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
    .add('ContactList', () => {
        // setup knobs
        const contacts = object('Contacts', [{
            label: 'Nimiq Bar',
            address: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
        }, {
            label: 'Nimiq Shop',
            address: 'NQ26 XM1G BFAD PACE R5L0 C85L 6143 FD8L 82U9',
        }, {
            label: 'Nimiq Foundation',
            address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF',
        }, {
            label: 'Nimiq Charity',
            address: 'NQ19 YG54 46TX EHGQ D2R2 V8XA JX84 UFG0 S0MC',
        }]);

        return {
            components: { ContactList },
            data: () => ({
                contacts
            }),
            methods: {
                onSelect: action('select'),
                onSet: action('set'),
                onRemove: action('remove'),
                onNotification: action('notification'),
                addNewContact() {
                    this.$refs.contactList.addNewContact();
                },
                abortNewContact() {
                    this.$refs.contactList.abortNewContact();
                },
                toggleManaging() {
                    this.$refs.contactList.toggleManaging();
                },
                exportContacts() {
                    this.$refs.contactList.export();
                },
                importContacts() {
                    this.$refs.contactList.import();
                },
                clearSearch() {
                    this.$refs.contactList.clearSearch();
                },
                reset() {
                    this.$refs.contactList.reset();
                },
            },
            template: `
                <div>
                    <ContactList ref="contactList" :contacts="contacts" @select-contact="onSelect" @set-contact="onSet"
                        @remove-contact="onRemove" @notification="onNotification"></ContactList>
                    <hr>
                    <!--
                    note: while knobs also offers the functionality to add buttons to the knobs panel, the preview
                    iframe gets completely rerendered whenever one is pressed, destroying the old ContactList instance.
                    Therefore, we create our own buttons in the template to trigger methods on the current
                    ContactList instance.
                    -->
                    <button class="nq-button" @click="addNewContact">Add New Contact</button>
                    <button class="nq-button" @click="abortNewContact">Abort New Contact</button>
                    <button class="nq-button" @click="toggleManaging">Toggle Managing</button>
                    <button class="nq-button" @click="exportContacts">Export</button>
                    <button class="nq-button" @click="importContacts">Import</button>
                    <button class="nq-button" @click="clearSearch">Clear Search</button>
                    <button class="nq-button" @click="reset">Reset</button>
                </div>
            `
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
                    type: 2, // BIP39
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
                            type: 2, // BIP39
                            balance: 101 * 1e5,
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'ihhhhahh',
                            label: 'Keyguard Account',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 2, // BIP39
                            balance: 101 * 1e5,
                            // userFriendlyId: 'funny giraffe',
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Account',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 3, // LEDGER
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
                            type: 2, // BIP39
                            balance: 62345123 * 1e5,
                        }, {
                            id: 'vwxyz',
                            label: 'Ledger Wallet',
                            accounts: new Map([['path1', {}], ['path2', {}], ['path3', {}]]),
                            contracts: [],
                            type: 3, // LEDGER
                            balance: 101 * 1e5,
                        }, {
                            id: 'legacy-01',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 1, // LEGACY
                            balance: 1239 * 1e5,
                        }, {
                            id: 'legacy-02',
                            label: 'Keyguard Wallet',
                            accounts: new Map([['path1', {}]]),
                            contracts: [],
                            type: 1, // LEGACY
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
    .add('PaymentInfoLine', () => {
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        const origin = text('origin', 'https://shop.nimiq.com');
        const shopLogo = text('shopLogo', 'https://www.decsa.com/wp-content/uploads/2016/10/mcds.png');
        const amount = number('amount', 199862);
        const fee = number('fee', 138);
        return {
            components: {PaymentInfoLine},
            methods: {
                merchantInfoClicked: action('merchant-info-clicked'),
            },
            template: `<div style="width: 400px"><PaymentInfoLine address="${address}" :amount="${amount}" :fee="${fee}"
                origin="${origin}" shopLogoUrl="${shopLogo}" @merchant-info-clicked="merchantInfoClicked"/></div>`,
        };
    })
    .add('QrCode', () => {
        return {
            components: { QrCode },
            data: () => ({
                data: '',
                errorCorrection: 'M',
                radius: .5,
                fill: '#0582ca',
                background: '#ffffff',
                size: 128,
            }),
            template: windowTemplate(`
                <QrCode :data="data" :errorCorrection="errorCorrection" :radius="parseFloat(radius)" :fill="fill"
                    :background="background" :size="parseInt(size)"/>
                <label>
                    Data
                    <input v-model="data">
                </label>
                <label>
                    Error Correction
                    <select v-model="errorCorrection">
                        <option>L</option>
                        <option>M</option>
                        <option>H</option>
                        <option>Q</option>
                    </select>
                </label>
                <label>
                    Radius
                    <input v-model="radius" type="range" min="0" max=".5" step=".01">
                </label>
                <label>
                    Fill
                    <input v-model="fill" type="color">
                </label>
                <label>
                    Background
                    <input v-model="background" type="color">
                </label>
                <label>
                    Size
                    <input v-model="size" type="number" min="1" step="1">
                </label>
            `)
        };
    })
    .add('QrScanner', () => {
        return {
            components: { SmallPage, QrScanner },
            template: windowTemplate(`
                <SmallPage style="height: 560px; overflow: hidden">
                    <QrScanner style="height: 100%" @result="result" @cancel="cancel" @error="error"></QrScanner>
                </SmallPage>`),
            methods: {
                result: action(QrScanner.Events.RESULT),
                cancel: action(QrScanner.Events.CANCEL),
                error: action(QrScanner.Events.ERROR),
            },
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
    });

storiesOf('Pages', module)
    .addDecorator(withKnobs)
    .add('AccountDetails', () => {
        const demoType = select('Demo Type', {
            'Normal Account': 'normal',
            'Merchant': 'merchant',
        }, 'normal');

        const demoData = {
            normal: {
                walletLabel: 'Keyguard Wallet',
                account: {
                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                    label: 'Savings Account',
                    balance: 2712415141213,
                },
                origin: null,
                shopLogoUrl: null,
            },
            merchant: {
                walletLabel: null,
                account: {
                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                },
                origin: 'https://macces.com',
                // shopLogoUrl: 'https://shop.nimiq.com/wp-content/uploads/2018/10/nimiq_signet_rgb_base_size.576px.png',
                shopLogoUrl: 'https://www.decsa.com/wp-content/uploads/2016/10/mcds.png',
            },
        }[demoType];

        return {
            components: {AccountDetails, SmallPage},
            methods: {
                close: action('close'),
            },
            data: () => demoData,
            computed: {
                label() {
                    return this.account.label || this.origin.split('://')[1];
                }
            },
            template: windowTemplate(`
                <small-page style="height: 560px;">
                    <AccountDetails :address="account.userFriendlyAddress" :label="label"
                    :balance="account.balance" :walletLabel="walletLabel"
                    :image="shopLogoUrl" @close="close"/>
                </small-page>
            `),
        };
    });

