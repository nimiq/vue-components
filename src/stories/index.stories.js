import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, number, text, object, select, withKnobs} from '@storybook/addon-knobs';

import '@nimiq/style/nimiq-style.min.css';

import Account from '../components/Account.vue';
import AccountDetails from '../components/AccountDetails.vue';
import AccountList from '../components/AccountList.vue';
import AccountSelector from '../components/AccountSelector.vue';
import AddressDisplay from '../components/AddressDisplay.vue';
import AddressInput from '../components/AddressInput.vue';
import AccountRing from '../components/AccountRing.vue';
import Amount from '../components/Amount.vue';
import AmountInput from '../components/AmountInput.vue';
import AmountWithFee from '../components/AmountWithFee.vue';
import BottomOverlay from '../components/BottomOverlay.vue';
import Carousel from '../components/Carousel.vue';
import CircleSpinner from '../components/CircleSpinner.vue';
import CloseButton from '../components/CloseButton.vue';
import Copyable from '../components/Copyable.vue';
import CopyableField from '../components/CopyableField.vue';
import FiatAmount from '../components/FiatAmount.vue';
import Identicon from '../components/Identicon.vue';
import LabelInput from '../components/LabelInput.vue';
import Wallet from '../components/Wallet.vue';
import PaymentInfoLine from '../components/PaymentInfoLine.vue';
import QrCode from '../components/QrCode.vue';
import QrScanner from '../components/QrScanner.vue';
import SelectBar from '../components/SelectBar.vue';
import SmallPage from '../components/SmallPage.vue';
import Timer from '../components/Timer.vue';
import Tooltip from '../components/Tooltip.vue';
import PageHeader from '../components/PageHeader.vue';
import PageBody from '../components/PageBody.vue';
import PageFooter from '../components/PageFooter.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
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
        const amount = number('amount (smallest unit)', 654321);

        let minDecimals = parseInt(text('minDecimals', '2'));
        if (Number.isNaN(minDecimals)) minDecimals = undefined;

        let maxDecimals = parseInt(text('maxDecimals', '5'));
        if (Number.isNaN(maxDecimals)) maxDecimals = undefined;

        let decimals = parseFloat(text('decimals', ''));
        if (Number.isNaN(decimals)) decimals = undefined;

        let currencyDecimalCount = parseInt(text('Currency decimal count', ''));
        if (Number.isNaN(currencyDecimalCount)) currencyDecimalCount = undefined;

        let currency = text('Currency', '');
        if (currency === '') currency = undefined;

        const showApprox = boolean('showApprox', false);

        return {
            components: {Amount},
            data: () => ({ amount, minDecimals, maxDecimals, decimals, currency, currencyDecimalCount, showApprox }),
            template: `<Amount :amount="amount" :minDecimals="minDecimals" :maxDecimals="maxDecimals"
                :decimals="decimals" :showApprox="showApprox" :currency="currency" :totalDecimals="currencyDecimalCount" />`,
        };
    })
    .add('AmountInput', () => {
        const value = number('Value', 0);
        const decimals = number('Decimals', 5);
        return {
            components: { AmountInput },
            data() {
                return {
                    value,
                    decimals,
                };
            },
            methods: {
                input: action('input'),
            },
            template: `<AmountInput :value="value" :decimals="decimals" @input="input"/>`,
        };
    })
    .add('FiatAmount', () => {
        const amount = number('amount', 12345.67);
        const currency = text('currency', 'eur');
        const maxRelativeDeviation = number('maxRelativeDeviation', .1);
        const locale = text('locale', navigator.language);
        const hideDecimals = boolean('hideDecimals', false);

        return {
            components: {FiatAmount},
            data: () => ({ amount, currency, maxRelativeDeviation, locale, hideDecimals }),
            template: `<FiatAmount :amount="amount" :currency="currency" :maxRelativeDeviation="maxRelativeDeviation"
                :locale="locale" :hideDecimals="hideDecimals" />`,
        };
    })
    .add('Icons', () => ({
        components: { ...Icons, Tooltip },
        functional: true,
        render: (createElement) => {
            const icons = Object.entries(Icons).map(([name, icon]) => createElement(Tooltip, {
                props: {
                    container: { $el: document.body },
                    preferredPosition: 'bottom right',
                    styles: {
                        pointerEvents: 'none',
                    },
                },
                style: { margin: '4px' },
                scopedSlots: {
                    trigger: () => createElement(icon),
                    default: () => name,
                }
            }));
            return createElement('div', {
                style: {
                    fontSize: '40px',
                    padding: '16px',
                }
            }, icons);
        },
    }))
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
        const disabled = boolean('Disabled', false);
        const value = text('Value', '');
        return {
            components: {LabelInput},
            data() {
                return {
                    value,
                    disabled,
                };
            },
            methods: {
                changed: action('changed'),
                input: action('input'),
            },
            template: `<LabelInput @changed="changed" @input="input" v-model="value" :disabled="disabled"/>`,
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
    })
    .add('Tooltip', () => {
        const useContainer = boolean('Use container', true);
        const preferredPosition = text('preferredPosition', 'top right');
        const margin = object('margin (json)', {});
        const autoWidth = boolean('autoWidth', false);
        const disabled = boolean('disabled', false);
        const theme = select('theme', Object.values(Tooltip.Themes), Tooltip.Themes.NORMAL);
        const styles = object('styles (json)', {});
        const fontSize = number('External font size (rem)', 3);
        return {
            data() {
                return {
                    useContainer,
                    preferredPosition,
                    margin,
                    autoWidth,
                    disabled,
                    theme,
                    styles,
                    fontSize,
                    refsLoaded: false,
                    shown: false,
                };
            },
            computed: {
                container() {
                    if(this.refsLoaded)
                        return this.$refs.container;
                    else return null;
                },
            },
            mounted() {
                this.refsLoaded = true;
            },
            components: { SmallPage, PageHeader, PageBody, Tooltip, Account },
            template: windowTemplate`<SmallPage :class="{ 'nq-blue-bg': theme === 'inverse' }">
                            <PageHeader>Test</PageHeader>
                            <PageBody ref="container" style="overflow-y: scroll; background: rgba(127,127,127,.1)">
                                <div style="height:320px"></div>
                                <div style="max-width: 100%; display: flex; align-items: center;">
                                    <button class="nq-button-s" :class="[theme]" @click="$refs.tooltip.show()">
                                        Show
                                    </button>
                                    &nbsp;or&nbsp;
                                    <button class="nq-button-s" :class="[theme]" @click="$refs.tooltip.hide()">
                                        hide
                                    </button>
                                    &nbsp;or hover me:&nbsp;
                                    <Tooltip ref="tooltip"
                                        :container="useContainer ? container : undefined"
                                        :preferredPosition="preferredPosition"
                                        :margin="margin"
                                        :autoWidth="autoWidth"
                                        :disabled="disabled"
                                        :theme="theme"
                                        :styles="styles"
                                        :style="{ fontSize: fontSize + 'rem' }"
                                        @show="shown = true"
                                        @hide="shown = false">
                                        <div style="font-size: 2rem; min-width: 25rem">
                                            This is the Tooltip I was talking about.
                                            <Account address="NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM" />
                                        </div>
                                    </Tooltip>
                                </div>
                                <div>
                                    Shown: {{shown}}
                                </div>
                                <div style="height:3000px"></div>
                            </PageBody>
                        </SmallPage>`,
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
        const disabledAddress = text('blacklist address', 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1');
        const tooltipProps = object('tooltipProps (json)', {});
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
                    disabledAddress,
                    minBalance,
                    decimals,
                    editable,
                    disableContracts,
                    disabled,
                    tooltipProps,
                };
            },
            template: `<AccountList @account-selected="accountSelected" :accounts="accounts" walletId="helloworld1"
                :minBalance="minBalance" :decimals="decimals" :editable="editable" :disableContracts="disableContracts"
                :disabled="disabled" :disabledAddresses="[disabledAddress]" :tooltipProps="tooltipProps" />`
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
        const highlightBitcoinAccounts = boolean('highlightBitcoinAccounts', true);
        const allowLogin = boolean('allowLogin', true);
        const disabledAddress = text('blacklist address', 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1');

        const demoData = {
            wallets: [
                {
                    id: 'bip39-wallet-id',
                    label: 'Keyguard Wallet',
                    type: 2, // BIP39
                    accounts: [
                        {
                            userFriendlyAddress: 'NQ55 VDTM 6PVTN672 SECN JKVD 9KE4 SD91 PCCM',
                            label: 'Primary account',
                            balance: 12023110,
                            path: "m/44'/242'/0'/0'",
                        },
                        {
                            userFriendlyAddress: 'NQ33 DH76 PHUKJ41Q LX3A U4E0 M0BM QJH9 QQL1',
                            label: 'HODL account',
                            balance: 2712415141213,
                            path: "m/44'/242'/0'/1'",
                        },
                    ],
                    contracts: [
                        {
                            userFriendlyAddress: 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE',
                            label: 'My Vesting Contract',
                            balance: 777777777,
                        },
                    ],
                    btcXPub: 'zpub...',
                },
            ],
            minBalance,
            decimals,
            disableContracts,
            disableLegacyAccounts,
            disableBip39Accounts,
            disableLedgerAccounts,
            highlightBitcoinAccounts,
            allowLogin,
            disabledAddress
        };

        if (demoType === 'multiple-accounts') {
            demoData.wallets.unshift({
                id: 'ledger-wallet-id',
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
                btcXPub: 'zpub...',
            });
            demoData.wallets.unshift({
                id: 'legacy-wallet-id',
                label: 'Legacy Wallet',
                type: 1, // LEGACY
                accounts: [
                    {
                        userFriendlyAddress: 'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK',
                        label: 'My Ledger Account',
                        balance: 876543210,
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
                :disableLedgerAccounts="disableLedgerAccounts" :highlightBitcoinAccounts="highlightBitcoinAccounts"
                :allowLogin="allowLogin" :disabledAddresses="[disabledAddress]" />`
        };
    })
    .add('AddressDisplay', () => {
        const address = text('address', 'NQ12 3ASK LDJF ALKS DJFA KLSD FJAK LSDJ FDRE');
        const copyable = boolean('copyable', false);
        return {
            data: () => ({ address, copyable }),
            components: {AddressDisplay},
            template: `<AddressDisplay :address="address" :copyable="copyable"
                style="margin-top: 7rem; margin-left: 2rem;" />`,
        };
    })
    .add('AddressInput', () => {
        const allowDomains = boolean('Allow Domains', true);
        return {
            components: {AddressInput},
            data() {
                return {
                    address: '',
                    lastValidAddress: null,
                    allowDomains,
                };
            },
            methods: {
                input: action('input'),
                paste: action('paste'),
            },
            template: `<div>
                <AddressInput v-model="address" :allowDomains="allowDomains" @input="input" @address="lastValidAddress = $event" @paste="paste" />
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
    .add('AmountWithFee',() => {
        const maxBalance = number('Maximum balance', 102000000);
        const amountAndFee = object('Amount and Fee', {amount: 100000, fee: 0, isValid: true});

        return {
            data() {
                return {
                    maxBalance,
                    amountAndFee,
                }
            },
            components: {AmountWithFee},
            template: `<div style="padding-left: 20rem"><AmountWithFee :available-balance="maxBalance" v-model="amountAndFee" /></div>`,
        }
    })
    .add('BottomOverlay', () => {
        const theme = select('theme', ['dark', 'light', 'green'], 'dark');
        const showCloseButton = boolean('Show Close Button', true);
        return {
            components: {BottomOverlay},
            data: () => ({ theme, showCloseButton }),
            methods: {
                close: action('close'),
            },
            template: `
                <BottomOverlay :theme="theme" v-on="showCloseButton ? { close } : {}">
                    I'm a BottomOverlay and can contain arbitrary content.
                    Test me on different screen sizes.
                </BottomOverlay>
            `,
        }
    })
    .add('Carousel', () => {
        return {
            components: {Carousel, SmallPage},
            data: () => ({
                entryCount: 3,
                hideBackgroundEntries: false,
                disabled: false,
                selected: 'Card-1',
            }),
            computed: {
                entries() {
                    return new Array(parseInt(this.entryCount)).fill('Card-').map((v, i) => `${v}${i}`);
                }
            },
            template: `
                <div>
                    <Carousel :entries="entries" :selected="selected" @select="selected = $event"
                        :hideBackgroundEntries="hideBackgroundEntries" :disabled="disabled">
                        <template v-for="entry in entries" v-slot:[entry]>
                            <SmallPage style="margin: 0; width: 50rem">{{ entry }}</SmallPage>
                        </template>
                    </Carousel>
                    <div style="text-align: center; margin-top: 8rem;">
                        <label>
                            <input type="number" min="1" step="1" v-model="entryCount" style="width: 5.5rem"> Items
                        </label>
                        <label>
                            <input type="checkbox" v-model="disabled"> Disabled
                        </label>
                        <label>
                            <input type="checkbox" v-model="hideBackgroundEntries"> Hide Background Entries
                        </label>
                        <div>
                            Selected: <input v-model="selected">
                        </div>
                    </div>
                </div>
                `,
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
    .add('Copyable', () => ({
        components: { Copyable },
        template: `
            <div>
                <Copyable ref="copyable" style="margin-top: 7rem;">I'm a text you can copy.</Copyable>
                <Copyable>
                    I'm a copyable text<br>with <b>child nodes</b>.
                </Copyable>
                <Copyable text="Surprise!!!">When you click me you get a surprise!</Copyable>
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
        const small = boolean('small', false);

        return {
            components: {CopyableField},
            data: () => ({ label, value, small }),
            template: `
                <CopyableField
                    :label="label"
                    :value="value"
                    :small="small"
                    style="color: white; background: var(--nimiq-blue-bg); width: 50rem"
                />
            `,
        };
    })
    .add('Wallet (deprecated)', () => {
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
    .add('PaymentInfoLine', () => {
        const theme = select('theme', Object.values(PaymentInfoLine.Themes), PaymentInfoLine.Themes.NORMAL);
        const cryptoAmount = {
            amount: number('cryptoAmount.amount', 199862),
            currency: text('cryptoAmount.currency', 'NIM'),
            decimals: number('cryptoAmount.decimals', 5),
        };
        let fiatAmount = {
            amount: number('fiatAmount.amount (-1 for unset)', -1),
            currency: text('fiatAmount.currency', 'EUR'),
        };
        if (fiatAmount.amount < 0) fiatAmount = null;
        let vendorMarkup = number('vendor markup (-1 for unset)', -1);
        if (vendorMarkup === -1) vendorMarkup = null;
        let networkFee = number('network fee (-1 for unset)', -1);
        if (networkFee === -1) networkFee = null;
        const origin = text('origin', 'https://shop.nimiq.com');
        const address = text('address', 'NQ07 0000 00000000 0000 0000 0000 0000 0000');
        const shopLogo = text('shopLogo', 'https://pbs.twimg.com/profile_images/1150268408287698945/x4f3ITmx_400x400.png');
        let startTime = number('startTime', Date.now());
        let endTime = number('endTime (-1 for unset)', -1);
        if (endTime === -1) endTime = null;

        return {
            components: {PaymentInfoLine},
            data: () => ({
                cryptoAmount, fiatAmount, vendorMarkup, networkFee, origin, address, shopLogo, startTime, endTime, theme
            }),
            template: `<div style="max-width: 420px" :class="{ 'nq-blue-bg': theme === 'inverse' }">
                <PaymentInfoLine :cryptoAmount="cryptoAmount" :fiatAmount="fiatAmount"
                :vendorMarkup="vendorMarkup" :networkFee="networkFee"
                :origin="origin" :address="address" :shopLogoUrl="shopLogo" :startTime="startTime" :endTime="endTime"
                :theme="theme"/>
            </div>`,
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
            alwaysShowTime: boolean('alwaysShowTime', true),
            tooltipProps: object('tooltipProps (json)', {}),
            maxUnit: select('maxUnit', [undefined, 'second', 'minute', 'hour', 'day'], undefined),
        }),
        template: `
            <div>
                <div :class="{ 'nq-blue-bg': theme === 'inverse' || theme === 'white' }" style="display: flex; align-items: center; padding: 7rem 3rem 10rem 12rem">
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" :alwaysShowTime="alwaysShowTime"
                        :tooltipProps="tooltipProps" @end="timerEnded = true" style="margin: 2rem" :maxUnit="maxUnit"/>
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" :alwaysShowTime="alwaysShowTime"
                        :tooltipProps="tooltipProps" style="width: 10rem; margin: 2rem" :maxUnit="maxUnit"/>
                    <Timer :startTime="startTime" :endTime="endTime" :theme="theme" :alwaysShowTime="alwaysShowTime"
                        :tooltipProps="tooltipProps" style="width: 20rem; margin: 2rem" :maxUnit="maxUnit"/>
                </div>
                <div v-if="startTime" style="margin: 1rem 2rem">Timer {{ timerEnded ? 'ended' : 'running' }}</div>
                <div style="display: flex; flex-wrap: wrap; max-width: 95rem;">
                    <button class="nq-button" @click="startTimer(15 * 1000)">Start 15s Timer</button>
                    <button class="nq-button" @click="startTimer(60 * 1000)">Start 60s Timer</button>
                    <button class="nq-button" @click="startTimer(90 * 1000)">Start 90s Timer</button>
                    <button class="nq-button" @click="startTimer(3 * 60 * 1000)">Start 3m Timer</button>
                    <button class="nq-button" @click="startTimer(15 * 60 * 1000)">Start 15m Timer</button>
                    <button class="nq-button" @click="startTimer(60 * 60 * 1000)">Start 1h Timer</button>
                    <button class="nq-button" @click="startTimer(2 * 60 * 60 * 1000)">Start 2h Timer</button>
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
    });
