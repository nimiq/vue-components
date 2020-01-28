<template>
    <SmallPage class="send-tx" :class="{'overlay-open': contactsOpened || addContactOpened || displayedDetails || optionsOpened}">
        <transition name="transition-fade">
            <div v-if="!liveSender" key="choose-sender">
                <PageHeader>
                    Choose Sender
                </PageHeader>
                <AccountList
                    :accounts="wallet | listAccountsAndContracts"
                    :walletId="wallet.id"
                    :minBalance="1"
                    @account-selected="updateSender"
                />
            </div>

            <div v-else-if="!liveRecipient || addContactOpened" key="choose-recipient">
                <transition name="transition-fade">
                    <SmallPage class="overlay" v-if="liveRecipient && addContactOpened">
                        <AccountDetails
                            :address="liveRecipient.address"
                            :editable="liveRecipient.type !== constructor.RecipientType.OWN_ADDRESS"
                            placeholder="Name this contact..."
                            :label="liveRecipient.label"
                            @close="closeAddContact"
                            @changed="setLabel"
                            ref="accountDetails"
                        />
                        <PageFooter>
                            <button class="nq-button light-blue" @click="proceedToSetAmount">{{addContactButtonText}}</button>
                        </PageFooter>
                    </SmallPage>
                </transition>

                <transition name="transition-fade">
                    <SmallPage class="overlay" v-if="contactsOpened && !addContactOpened">
                        <PageHeader>
                            Select a contact
                        </PageHeader>
                        <ContactList :contacts="contacts" @select-contact="updateRecipient"/>
                        <CloseButton class="top-right" @click="contactsOpened = false"/>
                    </SmallPage>
                </transition>

                <PageHeader :backArrow="addressCount > 1" @back="backFromRecipient" class="blur-target">
                    Send a transaction
                    <a href="javascript:void(0)" class="scan-qr nq-blue" @click="scanQr">
                        <ScanQrCodeIcon />
                    </a>
                </PageHeader>

                <PageBody class="blur-target recipient-page">
                    <ContactShortcuts
                        :contacts="contacts"
                        @contact-selected="updateRecipient"
                        @contacts-opened="contacts.length > 0 ? contactsOpened = true : false"/>
                    <div>
                        <label class="nq-label">Enter address</label>
                        <AddressInput v-model="liveAddress" @address="updateRecipient" ref="address"/>
                    </div>
                </PageBody>

                <PageFooter class="blur-target">
                    <p class="nq-text">If recipient has no Account yet:</p>
                    <button class="nq-button-s" @click="createCashlink(liveSender)">Create a Cashlink</button>
                </PageFooter>
            </div>

            <div v-else key="set-amount">
                <transition name="transition-fade">
                    <SmallPage class="overlay" v-if="displayedDetails">
                        <AccountDetails
                            :address="displayedDetails === constructor.Details.SENDER ? liveSender.address : liveRecipient.address"
                            :editable="displayedDetails === constructor.Details.RECIPIENT && liveRecipient.type !== constructor.RecipientType.OWN_ADDRESS"
                            placeholder="Name this contact..."
                            :label="displayedDetails === constructor.Details.SENDER ? liveSender.label : liveRecipient.label"
                            :balance="displayedDetails === constructor.Details.SENDER ? liveSender.balance : null"
                            @close="closeDetails"
                            @changed="setLabel"
                            ref="accountDetails"
                        />
                        <PageFooter v-if="displayedDetails === constructor.Details.RECIPIENT && liveRecipient.type !== constructor.RecipientType.OWN_ADDRESS">
                            <button class="nq-button light-blue" @click="storeContactAndCloseOverlay()">Save Contact</button>
                        </PageFooter>
                    </SmallPage>
                </transition>

                <transition name="transition-fade">
                    <SmallPage class="overlay fee" v-if="optionsOpened">
                        <CloseButton class="top-right" @click="closeOptions"/>
                        <PageBody>
                            <h1 class="nq-h1">Speed up your transaction</h1>
                            <p class="nq-text">By adding a transation fee, you can influence how fast your transaction will be processed.</p>
                            <SelectBar ref="feeSetter" :options="constructor.FEE_OPTIONS" name="fee" :selectedValue="feeLunaPerByte" @changed="updateFeePreview" />
                            <Amount :amount="feePreview" :minDecimals="0" :maxDecimals="5" />
                        </PageBody>
                        <PageFooter>
                            <button class="nq-button light-blue" @click="setFee">Set fee</button>
                        </PageFooter>
                    </SmallPage>
                </transition>

                <PageHeader :backArrow="!sender || !recipient || !recipientIsReadonly" class="blur-target" @back="backFromAmount">
                    Set Amount
                    <a href="javascript:void(0)" class="nq-blue options-button" @click="optionsOpened = true" title="Open settings">
                        <SettingsIcon/>
                    </a>
                </PageHeader>

                <PageBody class="blur-target amount-page">
                    <div class="sender-and-recipient">
                        <a href="javascript:void(0);"  @click="displayedDetails = constructor.Details.SENDER">
                            <Account layout="column" :address="liveSender.address" :label="liveSender.label"/>
                        </a>
                        <div class="arrow-wrapper"><ArrowRightIcon class="nq-light-blue" /></div>
                        <a href="javascript:void(0);" @click="displayedDetails = constructor.Details.RECIPIENT">
                            <Account layout="column" :address="liveRecipient.address" :label="liveRecipient.label || 'Unnamed Contact'" :class="{invalid: !recipientValid}"/>
                        </a>
                    </div>
                    <AmountWithFee v-model="liveAmountAndFee" :available-balance="liveSender.balance" ref="amountWithFee"/>
                    <LabelInput class="message" :vanishing="true" placeholder="Add a public message..." :maxBytes="64" v-model="liveExtraData" ref="messageInput" />
                </PageBody>

                <PageFooter class="blur-target">
                    <button class="nq-button light-blue" :disabled="!isValid || isLoading" @click="sendTransaction">
                        <CircleSpinner v-if="showButtonLoader"/>{{buttonText}}
                    </button>
                </PageFooter>
            </div>
        </transition>
    </SmallPage>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import SmallPage from './SmallPage.vue';
import PageHeader from './PageHeader.vue';
import PageBody from './PageBody.vue';
import PageFooter from './PageFooter.vue';
import Account from './Account.vue';
import AccountDetails from './AccountDetails.vue';
import AddressInput from './AddressInput.vue';
import { WalletInfo, AccountInfo, ContractInfo } from './AccountSelector.vue';
import AccountList from './AccountList.vue';
import ContactList from './ContactList.vue';
import ContactShortcuts from './ContactShortcuts.vue';
import LabelInput from './LabelInput.vue';
import Amount from './Amount.vue';
import AmountWithFee from './AmountWithFee.vue';
import SelectBar from './SelectBar.vue';
import CircleSpinner from './CircleSpinner.vue';
import CloseButton from './CloseButton.vue';
import { ArrowRightIcon, ScanQrCodeIcon, SettingsIcon } from './Icons';
import { Utf8Tools, BrowserDetection } from '@nimiq/utils';

@Component({
    components: {
        SmallPage,
        PageHeader,
        PageBody,
        PageFooter,
        Account,
        AccountDetails,
        AccountList,
        AddressInput,
        Amount,
        AmountWithFee,
        ContactList,
        ContactShortcuts,
        LabelInput,
        ArrowRightIcon,
        ScanQrCodeIcon,
        SelectBar,
        CircleSpinner,
        SettingsIcon,
        CloseButton,
    },
    filters: {
        listAccountsAndContracts(wallet: WalletInfo): Array<AccountInfo|ContractInfo> {
            return [ ...wallet.accounts.values(), ...wallet.contracts ];
        },
    },
})
    class SendTx extends Vue {
        private static FEE_OPTIONS: SelectBar.SelectBarOption[] = [{
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
        }];

        @Prop(Array) public contacts!: Array<{ address: string, label: string }>;
        @Prop(Array) public addresses!: Array<{ address: string, label: string }>;
        @Prop(Object) public wallet!: WalletInfo;
        @Prop(Object) public sender?: {walletId: string, address: string};
        @Prop(Object) public recipient?: {address: string, label?: string};
        @Prop({type: Boolean, default: false}) public recipientIsReadonly!: boolean;
        @Prop({type: Boolean, default: false}) public isLoading!: boolean;
        @Prop({type: Number, default: 0}) public value!: number;
        @Prop({type: String, default: ''}) public message!: string;
        @Prop({type: Number, default: 0}) public validityStartHeight!: number;

        public $refs: {
            accountDetails?: AccountDetails,
            amountWithFee?: AmountWithFee,
            messageInput?: LabelInput,
            feeSetter?: SelectBar,
            address?: AddressInput,
        };

        public focus(dontFocusOnMobile = false) {
            if (dontFocusOnMobile && BrowserDetection.isMobile()) return;
            Vue.nextTick(() => { // Await updated DOM
                if (this.$refs.accountDetails) {
                    this.$refs.accountDetails.focus();
                } else if (this.$refs.address) {
                    this.$refs.address.focus();
                } else if (this.$refs.amountWithFee && (!this.liveAmountAndFee.amount || this.liveExtraData)) {
                    this.$refs.amountWithFee.focus();
                } else if (this.$refs.messageInput) {
                    this.$refs.messageInput.focus();
                }
            });
        }

        public clear() {
            this.liveSender = null;
            this.liveRecipient = null;
            this.displayedDetails = SendTx.Details.NONE;
            this.contactsOpened = false;
            this.optionsOpened = false;
            this.feeLunaPerByte = 0;
            this.liveExtraData = '';
            this.liveContactLabel = '';
            this.liveAmountAndFee = {
                amount: 0,
                fee: this.fee,
                isValid: false,
            };
        }

        private liveSender: {
            address: string,
            label: string,
            walletId: string,
            balance: number,
        } | null = null;
        private liveRecipient: {address: string, label?: string, type: SendTx.RecipientType} | null = null;
        private displayedDetails = SendTx.Details.NONE;
        private contactsOpened = false;
        private optionsOpened = false;
        private addContactOpened = false;
        private liveAddress = '';
        private feeLunaPerByte = 0;
        private feeLunaPerBytePreview = 0;
        private liveExtraData = '';
        private liveContactLabel = '';
        private liveAmountAndFee: {amount: number, fee: number, isValid: boolean} = {
            amount: 0,
            fee: this.fee,
            isValid: false,
        };

        @Watch('wallet', {immediate: true})
        private checkLiveSenderInWallet() {
            if (this.addressCount === 1) {
                this.setSender({
                    walletId: this.wallet.id,
                    address: this.wallet.accounts.values().next().value.userFriendlyAddress,
                });
                return;
            }

            if (!this.liveSender || this.sender) return;
            if (!this.wallet.accounts.has(this.liveSender.address)) {
                this.liveSender = null;
            }
        }

        @Watch('sender', {immediate: true})
        private setSender(sender: {walletId: string, address: string} | null) {
            if (!sender) {
                // this.liveSender = null;
                return;
            }

            const walletId = sender.walletId;
            const address = sender.address;

            const foundAddress = this.wallet.accounts.get(address) || this.wallet.contracts.find(
                (c) => c.userFriendlyAddress === address);

            if (!foundAddress) {
                this.liveSender = null;
                return;
            }

            this.liveSender = {
                address,
                label: foundAddress.label,
                walletId,
                balance: foundAddress.balance || 0,
            };

            this.focus(true);
        }

        private updateSender(walletId: string, address: string) {
            this.setSender({walletId, address});
        }

        @Watch('recipient', {immediate: true})
        private async setRecipient(recipient: {address: string, label?: string} | null) {
            if (!recipient) {
                // this.liveRecipient = null;
                return;
            }

            let recipientType = SendTx.RecipientType.UNKOWN;

            if (!recipient.label) {
                const foundContact = this.contacts.find((contact) => contact.address === recipient.address);
                const foundAddress = this.addresses.find((address) => address.address === recipient.address);
                if (foundContact) {
                    recipient.label = foundContact.label;
                    recipientType = SendTx.RecipientType.CONTACT;
                } else if (foundAddress) {
                    recipient.label = foundAddress.label;
                    recipientType = SendTx.RecipientType.OWN_ADDRESS;
                }
            }

            this.liveContactLabel = recipient.label || '';
            this.liveRecipient = {
                ...recipient,
                type: recipientType,
            };

            this.addContactOpened = true;
            this.focus(true);
        }

        private updateRecipient(address: string, label?: string) {
            this.setRecipient({address, label});
        }

        private proceedToSetAmount() {
            if (this.liveContactLabel && this.liveContactLabel !== this.liveRecipient!.label) {
                this.liveRecipient!.label = this.liveContactLabel;
                this.$emit('contact-added', this.liveRecipient!);
            }
            this.addContactOpened = false;

            if (this.liveSender) {
                this.focus(true);
            }
        }

        private backFromAmount() {
            if (!this.recipient || !this.recipientIsReadonly) {
                this.liveRecipient = null;
                this.liveAddress = '';
            } else if (!this.sender && this.addressCount > 1) {
                this.liveSender = null;
            }

            this.contactsOpened = false;
        }

        private backFromRecipient() {
            if (!this.sender) this.liveSender = null;
            else this.$emit('back');
        }

        private updateFeePreview(fee: number) {
            this.feeLunaPerBytePreview = fee;
        }

        private setFee() {
            this.optionsOpened = false;
            this.feeLunaPerByte = this.$refs!.feeSetter.value;
            this.liveAmountAndFee.fee = this.fee;
            this.focus(true);
        }

        @Watch('value', { immediate: true })
        private setValue(value: number) {
            if (!value) return;
            this.liveAmountAndFee.amount = value;
        }

        @Watch('message', { immediate: true })
        private setMessage(message: string) {
            if (!message) return;
            this.liveExtraData = message;
        }

        private async setLabel(label: string) {
            this.liveContactLabel = label;
        }

        private closeDetails() {
            this.displayedDetails = SendTx.Details.NONE;
            this.focus(true);
        }

        private closeOptions() {
            this.optionsOpened = false;
            this.focus(true);
        }

        private closeAddContact() {
            this.addContactOpened = false;
            this.liveRecipient = null;
            this.liveAddress = '';
            this.focus(true);
        }

        private storeContactAndCloseOverlay() {
            if (!this.liveContactLabel) {
                this.displayedDetails = SendTx.Details.NONE;
                return;
            }
            this.liveRecipient!.label = this.liveContactLabel;
            this.$emit('contact-added', this.liveRecipient);
            this.closeDetails();
        }

        private sendTransaction() {
            // needs to be SendTransactionRequest
            this.$emit('send-tx', {
                sender: this.liveSender!.address,
                recipient: this.liveRecipient!.address,
                recipientType: 0, // Nimiq.Account.Type.BASIC
                recipientLabel: this.liveRecipient!.label,
                value: this.liveAmountAndFee.amount,
                fee: this.fee,
                extraData: this.liveExtraData,
                validityStartHeight: this.validityStartHeight,
            });
        }

        private get addressCount(): number {
            return this.wallet.accounts.size + this.wallet.contracts.length;
        }

        private get fee(): number {
            return this.computeFee(this.feeLunaPerByte);
        }

        private get feePreview(): number {
            return this.computeFee(this.feeLunaPerBytePreview);
        }

        private computeFee(lunaPerByte: number): number {
            if (this.liveExtraData) {
                return lunaPerByte * (166 + Utf8Tools.stringToUtf8ByteArray(this.liveExtraData).byteLength);
            }
            return lunaPerByte * 138;
        }

        private get buttonText(): string {
            return !this.validityStartHeight
                ? 'Awaiting Consensus...'
                : this.isLoading
                    ? 'Sending Transaction...'
                    : 'Send Transaction';
        }

        private get addContactButtonText() {
            return this.liveContactLabel !== this.liveRecipient!.label
                ? 'Save & Set Amount'
                : 'Set Amount';
        }

        private get showButtonLoader(): boolean {
            return !this.validityStartHeight || this.isLoading;
        }

        private get recipientValid(): boolean {
            if (!this.liveSender || !this.liveRecipient) return false;
            const normalizedSender = this.liveSender.address.replace(/[\+ ]/g, '').toUpperCase();
            const normalizedRecipient = this.liveRecipient.address.replace(/[\+ ]/g, '').toUpperCase();
            return normalizedSender !== normalizedRecipient;
        }

        private get isValid(): boolean {
            return this.recipientValid
                && this.liveAmountAndFee.isValid
                && this.validityStartHeight > 0;
        }

        @Emit()
        // tslint:disable-next-line no-empty
        private login() {}

        @Emit()
        // tslint:disable-next-line no-empty
        private scanQr() {}

        @Emit()
        // tslint:disable-next-line no-empty
        private createCashlink(sender: {address: string, label: string, walletId: string}) {}

    }

namespace SendTx {
    export enum Details {
        NONE,
        SENDER,
        RECIPIENT,
    }

    export enum RecipientType {
        UNKOWN,
        CONTACT,
        OWN_ADDRESS,
    }
}

export default SendTx;
</script>

<style scoped>
    .send-tx {
        position: relative;
        overflow: hidden;
    }

    .send-tx > div {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity .3s;
        display: flex;
        flex-direction: column;
    }

    .account-list {
        /* Scrolling fade styling */
        overflow-y: auto;
        padding: 4rem 0;
        margin-top: -4rem;
        mask-image: linear-gradient(0deg , rgba(255,255,255,0), rgba(255,255,255, 1) 4rem, rgba(255,255,255,1) calc(100% - 4rem), rgba(255,255,255,0));
    }

    .recipient-page + .page-footer {
        align-items: center;
        padding: 0 4rem 3rem;
    }

    .send-tx .page-footer .nq-button {
        margin-top: 0;
    }

    .send-tx .page-header,
    .send-tx .page-footer {
        transition: opacity .3s;
        opacity: 1;
    }

    .send-tx .page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;
    }

    .amount-page {
        padding-top: 0;
        padding-bottom: 0;
    }

    .bottom-spacer {
        height: 2rem;
    }

    .send-tx .blur-target {
        transition: filter .4s, opacity .3s;
        filter: blur(0px);
        opacity: 1;

    }

    .send-tx .page-body .nq-label {
        display: block;
        text-align: center;
        margin-bottom: 3rem;
    }

    .send-tx .contact-list {
        /* width: 100%; */
        min-height: 0;
    }

    .transition-fade-enter,
    .transition-fade-leave-to {
        opacity: 0;
    }

    .overlay {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        margin: 0;
        background: rgba(255, 255, 255, .5);
        transition: opacity .4s;
    }

    .overlay.fee .page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .overlay.fee p {
        text-align: center;
        margin-bottom: 4rem;
        margin-top: .5rem;
    }

    .overlay.fee .amount {
        margin-top: 3rem;
    }

    .send-tx.overlay-open .blur-target {
        opacity: .5;
        filter: blur(20px);
    }

    .address-display {
        margin-top: 3rem;
    }

    .sender-and-recipient {
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-grow: 0;
    }

    .arrow-wrapper {
        font-size: 3rem;
        margin-top: 5.25rem;
    }

    .sender-and-recipient a {
        color: inherit;
        text-decoration: none;
        width: calc(50% - 1.1235rem);
    }

    .sender-and-recipient .account.invalid {
        color: var(--nimiq-red);
        font-weight: 600;
    }

    .sender-and-recipient .account .identicon {
        width: 9rem;
        height: 9rem;
    }

    .message {
        flex-grow: 1;
        font-size: 2.5rem;
    }

    .amount-with-fee {
        flex-grow: 1;
        border-top: .125rem solid var(--nimiq-highlight-bg);
        padding-top: 2rem;
        justify-content: center;
    }

    .scan-qr {
        position: absolute;
        right: 4rem;
        top: 4rem;
        opacity: .4;
        transition: opacity .2s ease;
    }

    .scan-qr:hover,
    .scan-qr:focus {
        opacity: .8;
    }

    .scan-qr svg {
        width: 4rem;
        height: 4rem;
    }

    .nq-button >>> .circle-spinner {
        margin-right: 1.5rem;
        margin-bottom: -0.375rem;
    }

    .options-button {
        position: absolute;
        top: 4rem;
        right: 4rem;
        opacity: .25;
        font-size: 3.625rem;
    }

    @media (max-width: 450px) {
        .scan-qr,
        .options-button {
            right: 3rem;
            top: 3rem;
        }
    }

    @media (max-width: 409px) {
        .contact-shortcuts >>> .account:nth-child(3) {
            display: none;
        }
    }
</style>
