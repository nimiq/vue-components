<template>
    <SmallPage v-if="!liveSender" class="send-tx">
        <PageHeader>
            Choose Sender
        </PageHeader>
        <AccountSelector :wallets="wallets" :minBalance="1" @account-selected="updateSender" @login="login" />
    </SmallPage>

    <SmallPage v-else-if="!liveRecipient" class="send-tx" :class="{'overlay-open': contactsOpened}">
        <transition name="transition-fade">
            <SmallPage class="overlay" v-if="contactsOpened">
                <PageHeader :backArrow="true" @back="contactsOpened = false">
                    Select a contact
                </PageHeader>
                <PageBody class="contacts">
                    <ContactList :contacts="contacts" @select-contact="updateRecipient"/>
                </PageBody>
            </SmallPage>
        </transition>

        <PageHeader :backArrow="!sender" @back="liveSender = null" class="blur-target">
            Send Transaction
        </PageHeader>

        <PageBody class="blur-target">
            <ContactShortcuts
                :contacts="contacts"
                @contact-selected="updateRecipient"
                @contacts-opened="contacts.length > 0 ? contactsOpened = true : false"/>
            <label class="nq-label">Enter address</label>
            <AddressInput @address="updateRecipient" />
        </PageBody>

        <PageFooter class="blur-target">
            <p class="nq-text">Address unavailable?</p>
            <button class="nq-button-s" @click="createCashlink(liveSender)">Create a Cashlink</button>
            <a href="javascript:void(0)" class="scan-qr nq-blue" @click="scanQr">
                <ScanQrCodeIcon />
            </a>
        </PageFooter>
    </SmallPage>

    <SmallPage v-else class="send-tx" :class="{'overlay-open': displayedDetails || optionsOpened}">
        <transition name="transition-fade">
            <SmallPage class="overlay" v-if="displayedDetails">
                <AccountDetails
                    :address="displayedDetails === Details.SENDER ? liveSender.address : liveRecipient.address"
                    :editable="displayedDetails === Details.RECIPIENT"
                    placeholder="Name this contact..."
                    :label="displayedDetails === Details.SENDER ? liveSender.label : liveRecipient.label"
                    :walletLabel="displayedDetails === Details.SENDER ? liveSender.walletLabel : null"
                    :balance="displayedDetails === Details.SENDER ? liveSender.balance : null"
                    @close="displayedDetails = Details.NONE"
                    @changed="setLabel"
                    ref="accountDetails"
                />
                <PageFooter v-if="displayedDetails === Details.RECIPIENT">
                    <button class="nq-button light-blue" @click="storeContactAndCloseOverlay()">Save Contact</button>
                </PageFooter>
            </SmallPage>
        </transition>

        <transition name="transition-fade">
            <SmallPage class="overlay fee" v-if="optionsOpened">
                <a href="javascript:void(0)" class="nq-button-s cancel-circle" @click="optionsOpened = false">
                    <CloseIcon/>
                </a>
                <PageBody>
                    <h1 class="nq-h1">Speed up your transaction</h1>
                    <p class="nq-text">By adding a transation fee, you can influence how fast your transaction will be processed.</p>
                    <SelectBar ref="feeSetter" :options="FEE_OPTIONS" name="fee" :selectedValue="feeLunaPerByte" @changed="updateFeePreview" />
                    <Amount :amount="feePreview" :minDecimals="2" :maxDecimals="5" />
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
                <a href="javascript:void(0);"  @click="displayedDetails = Details.SENDER">
                    <Account layout="column" :address="liveSender.address" :label="liveSender.label"/>
                </a>
                <div class="arrow-wrapper"><ArrowRightIcon class="nq-light-blue" /></div>
                <a href="javascript:void(0);" @click="displayedDetails = Details.RECIPIENT">
                    <Account layout="column" :address="liveRecipient.address" :label="liveRecipient.label || 'Unnamed Contact'" :class="{invalid: !recipientValid}"/>
                </a>
            </div>
            <Amount v-if="value" class="value readonly" :class="{invalid: !balanceValid}" :amount="value" :minDecimals="2" :maxDecimals="5" />
            <AmountInput v-else class="value" :class="{invalid: !balanceValid}" v-model="liveValue" ref="valueInput" />
            <div v-if="fee" class="fee-section nq-text-s">
                + <Amount :amount="fee" :minDecimals="2" :maxDecimals="5" /> fee
            </div>
            <div v-if="message" class="label">{{liveExtraData}}</div>
            <LabelInput v-else :vanishing="true" placeholder="Add a public message..." :maxBytes="64" v-model="liveExtraData" ref="messageInput" />
        </PageBody>

        <PageFooter class="blur-target">
            <button class="nq-button light-blue" :disabled="!isValid" @click="sendTransaction">{{buttonText}}</button>
        </PageFooter>
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
import AccountSelector, { WalletInfo } from './AccountSelector.vue';
import ContactList from './ContactList.vue';
import ContactShortcuts from './ContactShortcuts.vue';
import LabelInput from './LabelInput.vue';
import Amount from './Amount.vue';
import AmountInput from './AmountInput.vue';
import SelectBar, { SelectBarOption } from './SelectBar.vue';
import { ArrowRightIcon, CloseIcon, ScanQrCodeIcon, SettingsIcon } from './Icons';
import { Utf8Tools } from '@nimiq/utils';

enum Details {
    NONE,
    SENDER,
    RECIPIENT,
}

@Component({components: {
    SmallPage,
    PageHeader,
    PageBody,
    PageFooter,
    Account,
    AccountDetails,
    AccountSelector,
    AddressInput,
    Amount,
    AmountInput,
    ContactList,
    ContactShortcuts,
    LabelInput,
    ArrowRightIcon,
    CloseIcon,
    ScanQrCodeIcon,
    SelectBar,
    SettingsIcon,
}})
    export default class SendTx extends Vue {
        @Prop(Array) public contacts!: Array<{ address: string, label: string }>;
        @Prop(Array) public wallets!: WalletInfo[];
        @Prop(Object) public sender?: {walletId: string, address: string};
        @Prop(Object) public recipient?: {address: string, label?: string};
        @Prop({type: Boolean, default: false}) public recipientIsReadonly!: boolean;
        @Prop({type: Boolean, default: false}) public isLoading!: boolean;
        @Prop({type: Number, default: 0}) public value!: number;
        @Prop({type: String, default: ''}) public message!: string;
        @Prop({type: Number, default: 0}) public validityStartHeight!: number;

        private liveSender: {
            address: string,
            label: string,
            walletId: string,
            walletLabel: string,
            balance: number,
        } | null = null;
        private liveRecipient: {address: string, label?: string} | null = null;
        private displayedDetails = Details.NONE;
        private contactsOpened = false;
        private optionsOpened = false;
        private feeLunaPerByte = 0;
        private feeLunaPerBytePreview = 0;
        private liveValue: number = 0;
        private liveExtraData = '';
        private liveContactLabel = '';

        public clear() {
            this.liveSender = null;
            this.liveRecipient = null;
            this.displayedDetails = Details.NONE;
            this.contactsOpened = false;
            this.optionsOpened = false;
            this.feeLunaPerByte = 0;
            this.liveValue = 0;
            this.liveExtraData = '';
            this.liveContactLabel = '';
        }

        @Watch('sender', {immediate: true})
        private setSender(sender: {walletId: string, address: string} | null) {
            if (!sender) {
                // this.liveSender = null;
                return;
            }

            const walletId = sender.walletId;
            const address = sender.address;

            const wallet = this.wallets.find((walletToCheck) => walletToCheck.id === walletId);
            if (!wallet) return;
            const foundAddress = wallet.accounts.get(address);
            if (!foundAddress) return;

            this.liveSender = {
                address,
                label: foundAddress.label,
                walletId,
                walletLabel: wallet.label,
                balance: foundAddress.balance || 0,
            };
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

            if (!recipient.label) {
                const foundContact = this.contacts.find((contact) => contact.address === recipient.address);
                // TODO: Search other accounts
                if (foundContact) {
                    recipient.label = foundContact.label;
                }
            }

            this.liveContactLabel = recipient.label || '';
            this.liveRecipient = recipient;

            if (this.liveSender) {
                if (!this.value) {
                    await Vue.nextTick(); // Await updated DOM
                    (this.$refs.valueInput as AmountInput).focus();
                } else if (!this.message) {
                    await Vue.nextTick(); // Await updated DOM
                    (this.$refs.messageInput as LabelInput).focus();
                }
            }
        }

        private updateRecipient(address: string, label?: string) {
            this.setRecipient({address, label});
        }

        private backFromAmount() {
            if (!this.recipient) this.liveRecipient = null;
            else if (!this.sender) this.liveSender = null;

            this.contactsOpened = false;
        }

        private updateFeePreview(fee: number) {
            this.feeLunaPerBytePreview = fee;
        }

        private setFee() {
            this.optionsOpened = false;
            this.feeLunaPerByte = (this.$refs.feeSetter as SelectBar).value;
        }

        @Watch('value', { immediate: true })
        private setValue(value: number) {
            if (!value) return;
            this.liveValue = value;
            this.checkBalance();
        }

        @Watch('sender.balance')
        private checkBalance() {
            if (this.liveSender && this.liveSender.balance && this.liveValue + this.fee > this.liveSender.balance) {
                console.log('Insufficient Balance');
            }
        }

        @Watch('message', { immediate: true })
        private setMessage(message: string) {
            if (!message) return;
            this.liveExtraData = message;
        }

        private async setLabel(label: string) {
            this.liveContactLabel = label;
            await Vue.nextTick(); // Await updated DOM
            if (!this.value) {
                (this.$refs.valueInput as AmountInput).focus();
            } else if (!this.message) {
                (this.$refs.messageInput as LabelInput).focus();
            }
        }

        private storeContactAndCloseOverlay() {
            if (!this.liveContactLabel) {
                this.displayedDetails = Details.NONE;
                return;
            }
            this.liveRecipient!.label = this.liveContactLabel;
            this.$emit('contact-added', this.liveRecipient);
            this.displayedDetails = Details.NONE;
        }

        private sendTransaction() {
            // needs to be SendTransactionRequest
            this.$emit('send-tx', {
                sender: this.liveSender!.address,
                recipient: this.liveRecipient!.address,
                recipientType: 0, // Nimiq.Account.Type.BASIC
                value: this.liveValue,
                fee: this.fee,
                extraData: this.liveExtraData,
                validityStartHeight: this.validityStartHeight,
            });
        }

        private data() {
            return {
                FEE_OPTIONS: [{
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
                }] as SelectBarOption[],
                Details,
            };
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

        private get recipientValid(): boolean {
            if (!this.liveSender || !this.liveRecipient) return false;
            const normalizedSender = this.liveSender.address.replace(/[\+ ]/g, '').toUpperCase();
            const normalizedRecipient = this.liveRecipient.address.replace(/[\+ ]/g, '').toUpperCase();
            return normalizedSender !== normalizedRecipient;
        }

        private get balanceValid(): boolean {
            return !this.liveSender || this.liveValue + this.feeLunaPerByte <= this.liveSender.balance;
        }

        private get isValid(): boolean {
            return this.liveValue > 0
                && this.recipientValid
                && this.balanceValid
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
</script>

<style scoped>
    .send-tx {
        position: relative;
    }

    .send-tx .page-footer {
        align-items: center;
        padding: 0 4rem 3rem;
    }

    .send-tx .page-footer .nq-button {
        margin: 0 0 1rem;
        width: 100%;
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
    }

    .amount-page {
        padding-top: 0;
    }

    .send-tx .blur-target {
        transition: filter .4s, opacity .3s;
        filter: blur(0px);
        opacity: 1;

    }

    .send-tx .page-body > .nq-label {
        margin-top: 6rem;
        margin-bottom: 3rem;
    }

    .send-tx .contacts {
        justify-content: flex-start;
    }

    .send-tx .contact-list {
        width: 100%;
    }

    .send-tx .value {
        display: flex;
        align-items: baseline;
        height: 14.5rem; /* 12.5rem height + 2rem padding */
        border-top: .125rem solid var(--nimiq-highlight-bg);
        margin-top: 1rem;
        padding-top: 2rem;
    }

    .value.readonly {
        font-size: 8rem;
        color: var(--nimiq-light-blue);
        height: 12rem;
    }

    .value.readonly >>> .nim {
        padding-left: 1rem;
        font-size: 0.5em;
        font-weight: 700;
        line-height: 4.5rem;
    }

    .address-input {
        width: 28rem;
        height: 14.5rem;
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

    .overlay .cancel-circle {
        font-size: 3rem;
        position: absolute;
        z-index: 1;
        top: 2rem;
        right: 2rem;
        padding: 0;
        height: unset;
        background: none;
    }

    .send-tx.overlay-open .blur-target {
        opacity: .5;
        filter: blur(20px);
    }

    .cancel-circle .nq-icon {
        opacity: .2;
        transition: opacity .3s cubic-bezier(0.25, 0, 0, 1);
    }

    .cancel-circle:hover .nq-icon,
    .cancel-circle:active .nq-icon,
    .cancel-circle:focus .nq-icon {
        opacity: .4;
    }

    .address-display {
        margin-top: 3rem;
    }

    .sender-and-recipient {
        display: flex;
        align-items: flex-start;
        width: 100%;
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

    .amount-input.invalid >>> input,
    .amount-input.invalid >>> .nim {
        color: var(--nimiq-red) !important;
    }

    .fee-section {
        opacity: 0.5;
    }

    .scan-qr {
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        opacity: .4;
        transition: opacity .2s ease;
    }

    .scan-qr:hover,
    .scan-qr:focus {
        opacity: .8;
    }

    .scan-qr svg {
        width: 5rem;
        height: 5rem;
    }

    .options-button {
        position: absolute;
        top: 4rem;
        right: 4rem;
        opacity: .25;
        font-size: 3.625rem;
    }
</style>
