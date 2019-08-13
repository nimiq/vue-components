import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, number, text, object, select, withKnobs} from '@storybook/addon-knobs';

import Account from '../components/Account.vue';
import AccountDetails from '../components/AccountDetails.vue';
import AccountList from '../components/AccountList.vue';
import AccountSelector from '../components/AccountSelector.vue';
import Address from '../components/Address.vue';
import AddressDisplay from '../components/AddressDisplay.vue';
import AddressInput from '../components/AddressInput.vue';
import AccountRing from '../components/AccountRing.vue';
import Amount from '../components/Amount.vue';
import AmountInput from '../components/AmountInput.vue';
import AmountWithDetails from '../components/AmountWithDetails.vue';
import CircleSpinner from '../components/CircleSpinner.vue';
import CloseButton from '../components/CloseButton.vue';
import Contact from '../components/Contact.vue';
import ContactList from '../components/ContactList.vue';
import ContactShortcuts from '../components/ContactShortcuts.vue';
import Copyable from '../components/Copyable.vue';
import CopyableField from '../components/CopyableField.vue';
import FiatAmount from '../components/FiatAmount.vue';
import Identicon from '../components/Identicon.vue';
import LabelInput from '../components/LabelInput.vue';
import Wallet from '../components/Wallet.vue';
import WalletList from '../components/WalletList.vue';
import WalletMenu from '../components/WalletMenu.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import QrCode from '../components/QrCode.vue';
import QrScanner from '../components/QrScanner.vue';
import SelectBar from '../components/SelectBar.vue';
import SmallPage from '../components/SmallPage.vue';
import Timer from '../components/Timer.vue';
import PageHeader from '../components/PageHeader.vue';
import PageBody from '../components/PageBody.vue';
import PageFooter from '../components/PageFooter.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import MigrationWelcome from '../components/MigrationWelcome.vue';
import SendTx from '../components/SendTx.vue';
import * as Icons from '../components/Icons';

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
        const amount = number('amount', 6.54321) * 1e5;
        const minDecimals = number('minDecimals', 2);
        const maxDecimals = number('maxDecimals', 5);
        let decimals = parseFloat(text('decimals', ''));
        if (Number.isNaN(decimals)) decimals = undefined;
        const showApprox = boolean('showApprox', false);

        return {
            components: {Amount},
            data: () => ({ amount, minDecimals, maxDecimals, decimals, showApprox }),
            template: `<Amount :amount="amount" :minDecimals="minDecimals" :maxDecimals="maxDecimals"
                :decimals="decimals" :showApprox="showApprox" />`,
        };
    })
    .add('AmountInput', () => {
        const value = number('Value', 0);
        return {
            components: { AmountInput },
            data() {
                return {
                    value,
                };
            },
            methods: {
                input: action('input'),
            },
            template: `<AmountInput :value="value" @input="input"/>`,
        };
    })
    .add('FiatAmount', () => {
        const amount = number('amount', 12345.67);
        const currency = text('currency', 'eur');
        const locale = text('locale', navigator.language);

        return {
            components: {FiatAmount},
            data: () => ({ amount, currency, locale }),
            template: `<FiatAmount :amount="amount" :currency="currency" :locale="locale" />`,
        };
    })
    .add('Icons', () => {
        return {
            components: Icons,
            template: `
                <div style="font-size: 40px; color: var(--nimiq-blue); padding: 16px;">
                    <AlertTriangleIcon/>
                    <ArrowLeftSmallIcon/>
                    <ArrowLeftIcon/>
                    <ArrowRightSmallIcon/>
                    <ArrowRightIcon/>
                    <BrowserLoginIcon/>
                    <CaretRightSmallIcon/>
                    <CheckmarkIcon/>
                    <CloseIcon/>
                    <ContactsIcon/>
                    <CopyIcon/>
                    <DownloadIcon/>
                    <FaceNeutralIcon/>
                    <FaceSadIcon/>
                    <FireIcon/>
                    <GearIcon/>
                    <HexagonIcon/>
                    <InfoCircleIcon/>
                    <KeysIcon/>
                    <LedgerIcon/>
                    <LockLockedIcon/>
                    <LockUnlockedIcon/>
                    <LoginIcon/>
                    <MenuDotsIcon/>
                    <PaperEditIcon/>
                    <PlusCircleIcon/>
                    <QrCodeIcon/>
                    <QuestionmarkIcon/>
                    <ScanQrCodeIcon/>
                    <SettingsIcon/>
                    <ShredderIcon/>
                    <SkullIcon/>
                    <TransferIcon/>
                    <ViewOffIcon/>
                    <ViewIcon/>
                </div>`,
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
                input: action('input'),
            },
            template: `<LabelInput placeholder="Name this account..." @changed="changed" @input="input"/>`,
        };
    })
    .add('LabelInput (restricted to 63 bytes)', () => {
        return {
            components: {LabelInput},
            methods: {
                changed: action('changed'),
                input: action('input'),
            },
            data() {
                return {
                    value: "Standard Address"
                };
            },
            template: `<LabelInput :value="value" :maxBytes="63" @changed="changed" @input="input"/>`,
        };
    })
    .add('LoadingSpinner', () => {
        return {
            components: {LoadingSpinner},
            template: `<div style="color: #0582CA"><LoadingSpinner /></div>`,
        };
    })
    .add('CircleSpinner', () => {
        return {
            components: { CircleSpinner },
            template: `<CircleSpinner />`,
        };
    })
    .add('SelectBar', () => {
        return {
            components: { SelectBar },
            methods: {
                changed: action('changed'),
            },
            data() {
                return {
                    options: [{
                        color: 'nq-light-blue-bg',
                        value: 0,
                        text: 'free',
                        index: 0,
                    }, {
                        color: 'nq-green-bg',
                        value: 1,
                        text: 'standard',
                        index: 1,
                    }, {
                        color: 'nq-gold-bg',
                        value: 2,
                        text: 'express',
                        index: 2,
                    }],
                };
            },
            template: `<SelectBar :options="options" @changed="changed"/>`
        }
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
            'Restaurant Golden Swallow': 'https://pbs.twimg.com/profile_images/1150268408287698945/x4f3ITmx_400x400.png',
            'Invalid Image': 'javascript:alert(1)',
        }, '');
        const balance = number('Balance (can be empty)', 12023110);
        const editable = boolean('Editable', false);
        const cashlink = boolean('Cashlink', false);

        return {
            components: {Account},
            methods: {
                changed: action('changed'),
            },
            data: () => ({ layout, address, label, walletLabel, image, balance, editable, cashlink }),
            template: `<Account :layout="layout" :address="address" :label="label" :walletLabel="walletLabel"
                :image="image" :balance="balance" :editable="editable" :displayAsCashlink="cashlink"
                @changed="changed"/>`,
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
    .add('AddressInput', () => {
        return {
            components: {AddressInput},
            data() {
                return {
                    address: '',
                    lastValidAddress: null,
                };
            },
            template: `<div>
                <AddressInput v-model="address" @address="lastValidAddress = $event" />
                <div>Current address: {{ address }}</div>
                <div>valid?: {{ address === lastValidAddress }}</div>
            </div>`,
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
    .add('CloseButton', () => {
        return {
            components: {CloseButton},
            methods: {
                click: action('click'),
            },
            template: `<CloseButton class="top-right" @click="click"/>`,
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
    .add('ContactShortcuts', () => {
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
            components: { ContactShortcuts },
            data: () => ({
                contacts

            }),
            methods: {
            },
            template: `<ContactShortcuts :contacts="contacts"/>`,
        };
    })
    .add('Copyable', () => ({
        components: { Copyable },
        template: `
            <div>
                <Copyable ref="copyable">I'm a text you can copy.</Copyable>
                <Copyable>
                    I'm a copyable text<br>with <b>child nodes</b>.
                </Copyable>
                <Copyable text="Surprise!!!" style="margin-top: 7rem">When you click me you get a surprise!</Copyable>
                <button class="nq-button" style="margin-top: 7rem; margin-left: 1rem" @click="$refs.copyable.copy()">
                    Click me to trigger a copy via code
                </button>
            </div>
        `,
    }))
    .add('CopyableField', () => {
        const label = text('label', '');
        const value = object('value (number, json string or json object)', {
            a: 'Value a',
            b: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        });

        return {
            components: {CopyableField},
            data: () => ({ label, value }),
            template: `
                <CopyableField
                    :label="label"
                    :value="value"
                    style="color: white; background: var(--nimiq-blue-bg); width: 50rem"
                />
            `,
        };
    })
    .add('Wallet', () => {
        const label = text('label', 'Main Wallet');
        const id = text('id', '47ee824fc910');
        const type = select('type', ['legacy', 'bip39', 'ledger'], 'bip39');
        const balance = number('balance', 100000);
        const fileExported = boolean('fileExported', true);
        const wordsExported = boolean('wordsExported', true);
        return {
            components: {Wallet},
            methods: {
                exportFile: action('export-file'),
                exportWords: action('export-words'),
                rename: action('rename'),
                changePassword: action('change-password'),
                logout: action('logout'),
            },
            data() {
                return {
                    wallet: {
                        id,
                        label,
                        accounts: [
                            {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                            {address: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK'},
                            {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                            {address: 'NQ19 YG54 46TX EHGQ D2R2 V8XA JX84 UFG0 S0MC'},
                        ],
                        contracts: [],
                        type: type === 'legacy' ? 1 : type === 'bip39' ? 2 : 3,
                        fileExported: fileExported,
                        wordsExported: wordsExported,
                        balance: balance * 1e5,
                    },
                };
            },
            template: `<Wallet :wallet="wallet"
                               @export-file="exportFile"
                               @export-words="exportWords"
                               @rename="rename"
                               @change-password="changePassword"
                               @logout="logout"
                            />`
        };
    })
    .add('WalletList', () => {
        const activeWalletId = select('Active Wallet', ['account_1', 'account_2', 'account_3', 'account_4'], 'account_1');
        return {
            components: {WalletList},
            methods: {
                walletSelected: action('wallet-selected'),
                exportFile: action('export-file'),
                exportWords: action('export-words'),
                rename: action('rename'),
                changePassword: action('change-password'),
                logout: action('logout'),
            },
            data() {
                return {
                    activeWalletId: activeWalletId,
                    wallets: [
                        {
                            id: 'account_1',
                            label: 'My old Account',
                            accounts: [
                                {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                            ],
                            type: 1, // LEGACY
                            fileExported: false,
                            wordsExported: true,
                            balance: 300000 * 1e5,
                        }, {
                            id: 'account_2',
                            label: 'Standard Account',
                            accounts: [
                                {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                                {address: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK'},
                                {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                            ],
                            type: 2, // BIP39
                            fileExported: true,
                            wordsExported: false,
                            balance: 101 * 1e5,
                        }, {
                            id: 'account_3',
                            label: 'Keyguard Account',
                            accounts: [
                                {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                                {address: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK'},
                                {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                            ],
                            type: 2, // BIP39
                            fileExported: false,
                            wordsExported: true,
                            balance: 101 * 1e5,
                        }, {
                            id: 'account_4',
                            label: 'Ledger Account',
                            accounts: [
                                {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                                {address: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK'},
                                {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                            ],
                            type: 3, // LEDGER
                            balance: 553452 * 1e5,
                        }
                    ]
                };
            },
            template: `<WalletList
                :wallets="wallets"
                :activeWalletId="activeWalletId"
                @wallet-selected="walletSelected"
                @export-file="exportFile"
                @export-words="exportWords"
                @rename="rename"
                @change-password="changePassword"
                @logout="logout"/>
            `,
        };
    })
    .add('WalletMenu', () => {
        const activeWalletId = select('Active Wallet', ['account_0', 'account_1', 'account_2', 'account_3', 'account_4'], 'account_3');
        return {
            components: {WalletMenu},
            methods: {
                walletSelected: action('wallet-selected'),
                exportFile: action('export-file'),
                exportWords: action('export-words'),
                rename: action('rename'),
                changePassword: action('change-password'),
                logout: action('logout'),
                settings: action('settings'),
                addAccount: action('add-account'),
            },
            data() {
                return {
                    activeWalletId: activeWalletId,
                    wallets: [
                        {
                            id: 'account_0',
                            label: 'NIM Activation',
                            accounts: [
                                {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                            ],
                            type: 1, // LEGACY
                            fileExported: false,
                            wordsExported: true,
                            balance: 300000 * 1e5,
                        }, {
                            id: 'account_1',
                            label: 'My first account',
                            accounts: [
                                {address: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE'},
                            ],
                            type: 1, // LEGACY
                            fileExported: false,
                            wordsExported: true,
                            balance: 300000 * 1e5,
                        }, {
                            id: 'account_2',
                            label: 'Oversized account label',
                            accounts: [
                                {address: 'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF'},
                                {address: 'NQ21 SM4X BC54 M72X H53H U0QH BRU2 KBM9 MU39'},
                            ],
                            type: 2, // BIP39
                            fileExported: true,
                            wordsExported: false,
                            balance: 202 * 1e5,
                        }, {
                            id: 'account_3',
                            label: 'My account',
                            accounts: [
                                {address: 'NQ36 V3GH CHUE RRDR 7619 HP76 465T CHQP 8UBC'},
                                {address: 'NQ51 S9JC PS9V HH2U 7TX7 7JM7 DF7L HP8P SNTR'},
                                {address: 'NQ67 E735 CV8L SB7C EEFC YMXR GY93 4DGV XNU0'},
                                {address: 'NQ75 FDH0 ESFS 5RU2 KHBE 38H5 AMPE 10EC N5UB'},
                                {address: 'NQ24 X1KN U7A9 QCQH EJYF YYB6 UCYG UAP5 UB5C'},
                                {address: 'NQ82 83XN EBQE V75B 8P23 SKBE YD3L 615U D8RG'},
                                {address: 'NQ82 83XN EBQE V75B 8P23 SKBE YD3L 615U D8RG'},
                            ],
                            type: 2, // BIP39
                            fileExported: false,
                            wordsExported: true,
                            balance: 1000000 * 1e5,
                        }, {
                            id: 'account_4',
                            label: 'Ledger Account',
                            accounts: [
                                {address: 'NQ27 CSF9 0677 EJHY NE4G 55EQ R84L 09E0 KJT3'},
                            ],
                            type: 3, // LEDGER
                            fileExported: false,
                            wordsExported: false,
                            balance: 553452 * 1e5,
                        }
                    ]
                };
            },
            template: windowTemplate(`<WalletMenu
                :wallets="wallets"
                :active-wallet-id="activeWalletId"
                @wallet-selected="walletSelected"
                @export-file="exportFile"
                @export-words="exportWords"
                @rename="rename"
                @change-password="changePassword"
                @logout="logout"
                @settings="settings"
                @add-account="addAccount"
            />`)
        };
    })
    .add('PaymentInfoLine', () => {
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        const origin = text('origin', 'https://shop.nimiq.com');
        const shopLogo = text('shopLogo', 'https://pbs.twimg.com/profile_images/1150268408287698945/x4f3ITmx_400x400.png');
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
                dataUrl: '',
            }),
            template: windowTemplate(`
                <QrCode ref="qr-code"
                    :data="data" :errorCorrection="errorCorrection" :radius="parseFloat(radius)" :fill="fill"
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
                <br>
                <button @click="toDataUrl">Export to Data Url</button>
                <div style="max-width: 500px; word-break: break-all">{{ dataUrl }}</div>
            `),
            methods: {
                async toDataUrl() {
                    this.dataUrl = await this.$refs['qr-code'].toDataUrl();
                }
            }
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
            components: {SmallPage, PageHeader, PageBody, PageFooter},
            template: windowTemplate(`
<small-page>
    <page-header :backArrow="true">
        Page header
        <p slot="more" class="nq-notice info">I am an informative notice!</p>
    </page-header>
    <page-body>
        <p>Some text in the page body.</p>
    </page-body>
    <page-footer>Page footer</page-footer>
</small-page>
`),
        };
    })
    .add('Timer', () => ({
        components: {Timer},
        data: () => ({
            startTime: 0,
            endTime: 0,
            timerEnded: false,
            theme: select('theme', Object.values(Timer.Themes), Timer.Themes.NORMAL),
        }),
        template: `
            <div>
                <div :class="{ 'nq-blue-bg': theme === 'inverse' }" style="display: flex; align-items: center; padding: 7rem 3rem 10rem 12rem">
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" @end="timerEnded = true" style="margin: 2rem"/>
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" style="width: 10rem; margin: 2rem"/>
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" style="width: 20rem; margin: 2rem"/>
                </div>
                <div v-if="startTime" style="margin: 1rem 2rem">Timer {{ timerEnded ? 'ended' : 'running' }}</div>
                <div style="display: flex; flex-wrap: wrap; max-width: 95rem;">
                    <button class="nq-button" @click="startTimer(15 * 1000)">Start 15s Timer</button>
                    <button class="nq-button" @click="startTimer(60 * 1000)">Start 60s Timer</button>
                    <button class="nq-button" @click="startTimer(90 * 1000)">Start 90s Timer</button>
                    <button class="nq-button" @click="startTimer(3 * 60 * 1000)">Start 3m Timer</button>
                    <button class="nq-button" @click="startTimer(15 * 60 * 1000)">Start 15m Timer</button>
                    <button class="nq-button" @click="startTimer(60 * 60 * 1000)">Start 1h Timer</button>
                </div>
            </div>
        `,
        methods: {
            startTimer(time) {
                const now = Date.now();
                this.startTime = now;
                this.endTime = now + time;
                this.timerEnded = false;
            },
        },
    }));

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
                shopLogoUrl: 'https://pbs.twimg.com/profile_images/1150268408287698945/x4f3ITmx_400x400.png',
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
                    :image="shopLogoUrl" @close="close" :editable="true"/>
                </small-page>
            `),
        };
    })
    .add('MigrationWelcome', () => {
        const link = text('Link', 'https://medium.com/nimiq-network');
        return {
            components: {MigrationWelcome},
            data() {
                return { link };
            },
            methods: {
                finished: action('finished'),
            },
            template: windowTemplate(`<migration-welcome :link="link" @finished="finished"></migration-welcome>`),
        };
    })
    .add('SendTx', () => {
        const valueIsReadonly = boolean('Value is readonly', false);
        const messageIsReadonly = boolean('Message is readonly', false);
        const value = number('Value', 1000009);
        const message = text('Message', '');
        const isLoading = boolean('Loading?', false);
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
        const wallet = object('Wallet', {
            id: 'helloworld',
            label: 'Keyguard Wallet',
            type: 2, // BIP39
            accounts: new Map([
                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM', {
                    userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                    label: 'Primary account',
                    balance: 12023110,
                    path: "44'/242'/0'/0'",
                }],
                ['NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1', {
                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                    label: 'HODL account',
                    balance: 2712415141213,
                    path: "44'/242'/0'/1'",
                }],
                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM_1', {
                    userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                    label: 'Primary account',
                    balance: 12023110,
                    path: "44'/242'/0'/0'",
                }],
                ['NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1_!', {
                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                    label: 'HODL account',
                    balance: 2712415141213,
                    path: "44'/242'/0'/1'",
                }],
                ['NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM_2', {
                    userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                    label: 'Primary account',
                    balance: 12023110,
                    path: "44'/242'/0'/0'",
                }],
                ['NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1_2', {
                    userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                    label: 'HODL account',
                    balance: 2712415141213,
                    path: "44'/242'/0'/1'",
                }],
            ]),
            contracts: [
                {
                    userFriendlyAddress: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                    label: 'My Vesting Contract',
                    balance: 777777777,
                },
            ],
        });
        return {
            components: { SendTx },
            data: () => ({
                contacts,
                wallet,
                value,
                valueIsReadonly,
                message,
                messageIsReadonly,
                isLoading,
            }),
            methods: {
                contactAdded: action('contactAdded'),
                sendTx: action('sendTx'),
                login: action('login'),
                scanQr: action('scanQr'),
                createCashlink: action('createCashlink'),
            },
            template:  windowTemplate(`<SendTx
                :contacts="contacts"
                :wallet="wallet"
                :validityStartHeight="987654"
                :value="value"
                :valueIsReadonly="valueIsReadonly"
                :message="message"
                :messageIsReadonly="messageIsReadonly"
                :is-loading="isLoading"
                @login="login"
                @scan-qr="scanQr"
                @send-tx="sendTx"
                @contact-added="contactAdded"
                @create-cashlink="createCashlink"
                />`),
        };
    });

