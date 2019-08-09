<template>
    <SmallPage v-if="!sender" class="send-tx">
        <PageHeader>
            Choose Sender
        </PageHeader>
        <AccountSelector :wallets="wallets" @account-selected="setSender" @login="login" />
    </SmallPage>

    <SmallPage v-else-if="!recipient" class="send-tx">
        <SmallPage class="overlay" v-if="contactsOpened">
            <PageHeader :backArrow="true" @back="contactsOpened = false">
                Select a contact
            </PageHeader>
            <PageBody class="contacts">
                <ContactList :contacts="contacts" @select-contact="setRecipient"/>
            </PageBody>
        </SmallPage>

        <PageHeader :backArrow="!preselectedSender" @back="sender = null">
            Send Transaction
        </PageHeader>

        <PageBody>
            <ContactShortcuts
                :contacts="contacts"
                @contact-selected="setRecipient"
                @contacts-opened="contacts.length > 0 ? contactsOpened = true : false"/>
            <label class="nq-label">Enter address</label>
            <AddressInput class="address-input" @address-entered="setRecipient" />
        </PageBody>

        <PageFooter>
            <p class="nq-text">Address unavailable?</p>
            <button class="nq-button-s" @click="createCashlink(sender)">Create a Cashlink</button>
            <a href="javascript:void(0)" class="scan-qr nq-blue" @click="scanQr">
                <ScanQrCodeIcon />
            </a>
        </PageFooter>
    </SmallPage>

    <SmallPage v-else class="send-tx">
        <SmallPage class="overlay" v-if="details !== Details.CLOSED">
            <AccountDetails
                :address="details === Details.SENDER ? sender.address : recipient.address"
                :editable="details === Details.RECIPIENT"
                :label="details === Details.SENDER ? sender.label : recipient.label"
                @close="details = Details.CLOSED"
                @changed="setLabel"
            />
            <PageFooter>
                <button class="nq-button light-blue" @click="storeContactAndCloseOverlay()">Save Contact</button>
            </PageFooter>
        </SmallPage>

        <SmallPage class="overlay fee" v-if="optionsOpened">
            <a href="javascript:void(0)" class="nq-button-s cancel-circle" @click="optionsOpened = false">
                <CloseIcon/>
            </a>
            <PageBody>
                <h1 class="nq-h1">Speed up your transaction</h1>
                <p class="nq-text">By adding a transation fee, you can influence how fast your transaction will be processed.</p>
                <SelectBar ref="feeSetter" :options="OPTIONS" name="fee" :selectedValue="feeLunaPerByte" @changed="updateFeePreview" />
                <Amount :amount="feePreview" :minDecimals="2" :maxDecimals="5" />
            </PageBody>
            <PageFooter>
                <button class="nq-button light-blue" @click="setFee">Set fee</button>
            </PageFooter>
        </SmallPage>

        <PageHeader :backArrow="true" @back="recipient = null; detailsClosed = Details.CLOSED; contactsOpened = false;">
            Set Amount
            <a href="javascript:void(0)" class="nq-blue options-button" @click="optionsOpened = true">
                <SettingsIcon/>
            </a>
        </PageHeader>

        <PageBody>
            <div class="sender-and-recipient">
                <a href="javascript:void(0);"  @click="details = Details.SENDER">
                    <Account layout="column" :address="sender.address" :label="sender.label"/>
                </a>
                <div class="arrow-wrapper"><ArrowRightIcon class="nq-light-blue" /></div>
                <a href="javascript:void(0);"  @click="details = Details.RECIPIENT">
                    <Account layout="column" :address="recipient.address" :label="recipient.label || 'Unnamed Contact'"/>
                </a>
            </div>
            <AmountInput class="value" @changed="setValue" ref="valueInput" />
            <div v-if="fee" class="fee-section nq-text-s">
                + <Amount :amount="fee" :minDecimals="2" :maxDecimals="5" /> fee
            </div>
            <LabelInput :vanishing="true" placeholder="Add a public message..." :maxBytes="64" @changed="setMessage" />
        </PageBody>

        <PageFooter>
            <button class="nq-button light-blue" :disabled="value === 0" @click="sendTransaction">{{buttonText}}</button>
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
    CLOSED,
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
        @Prop(Object) public preselectedSender?: {walletId: string, address: string};
        @Prop(Object) public preselectedRecipient?: {address: string, label: string};
        @Prop({type: Boolean, default: false}) public isLoading;
        @Prop({type: Number, default: 0}) public preselectedValue!: number;
        @Prop({type: String, default: ''}) public preselectedMessage!: string;


        private sender: {address: string, label: string, walletId: string, balance: number} | null = null;
        private recipient: {address: string, label: string} | null = null;
        private details = Details.CLOSED;
        private contactsOpened = false;
        private optionsOpened = false;
        private feeLunaPerByte = 0;
        private feeLunaPerBytePreview = 0;
        private value: number = 0;
        private extraData = '';
        private label = '';

        private async mounted() {
            if (this.preselectedSender) {
                this.setSender(this.preselectedSender.walletId, this.preselectedSender.address);
            }
            if (this.preselectedRecipient) {
                this.setRecipient(this.preselectedRecipient.address, this.preselectedRecipient.label);
            }
            this.value = this.preselectedValue;
            this.extraData = this.preselectedMessage;
        }

        private setSender(walletId: string, address: string) {
            const wallet = this.wallets.find((walletToCheck) => walletToCheck.id === walletId);
            if (!wallet) return;
            const foundAddress = wallet.accounts.get(address);
            if (!foundAddress) return;
            this.sender = {
                address,
                label: foundAddress.label,
                walletId,
                balance: foundAddress.balance || 0,
            };
        }

        private async setRecipient(address: string, label: string) {
            if (!label) {
                const foundContact = this.contacts.find((contact) => contact.address === address);
                if (foundContact) {
                    label = foundContact.label;
                } else {
                    this.details = Details.RECIPIENT;
                }
            }
            this.label = label;
            this.recipient = {address, label};
            if (label) {
                await Vue.nextTick(); // Await updated DOM
                (this.$refs.valueInput as AmountInput).focus();
            }
        }

        private updateFeePreview(fee: number) {
            this.feeLunaPerBytePreview = fee;
        }

        private setFee() {
            this.optionsOpened = false;
            this.feeLunaPerByte = (this.$refs.feeSetter as SelectBar).value;
        }

        private setValue(value: number) {
            this.value = value;
            this.checkBalance();
        }

        @Watch('sender.balance')
        private checkBalance() {
            if (this.sender && this.sender.balance && this.value + this.fee > this.sender.balance) {
                console.log('Insufficient Balance');
            }
        }

        private setMessage(message: string) {
            this.extraData = message;
        }

        private async setLabel(label: string) {
            this.label = label;
            await Vue.nextTick(); // Await updated DOM
            (this.$refs.valueInput as AmountInput).focus();
        }

        private storeContactAndCloseOverlay() {
            this.recipient!.label = this.label;
            this.$emit('contact-added', this.recipient);
            this.details = Details.CLOSED;
        }

        private sendTransaction() {
            // needs to be SendTransactionRequest
            this.$emit('send-tx', {
                sender: this.sender.address,
                recipient: this.recipient.address,
                recipientType: 0, // Nimiq.Account.Type.BASIC
                value: this.value,
                fee: this.fee,
                extraData: this.extraData,
            });
        }

        private data() {
            return {
                OPTIONS: [{
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
            if (this.extraData) {
                return this.feeLunaPerByte * (166 + Utf8Tools.stringToUtf8ByteArray(this.extraData).byteLength);
            }
            return this.feeLunaPerByte * 138;
        }

        private get feePreview(): number {
            if (this.extraData) {
                return this.feeLunaPerBytePreview * (166 + Utf8Tools.stringToUtf8ByteArray(this.extraData).byteLength);
            }
            return this.feeLunaPerBytePreview * 138;
        }

        private get buttonText(): string {
            return this.isLoading ? 'Sending Trasnaction' : 'Send Transaction';
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
        justify-content: space-around;
        transition: filter .4s, opacity .3s;
        opacity: 1;
        -webkit-filter: blur(0px);
        -moz-filter: blur(0px);
        -o-filter: blur(0px);
        -ms-filter: blur(0px);
        filter: blur(0px);
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

    .address-input {
        width: 28rem;
        height: 14.5rem;
    }

    .overlay {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        margin: 0;
        background: rgba(255, 255, 255, .5);
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
    }

    .send-tx .overlay ~ .page-body {
        opacity: .5;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
    }

    .send-tx .overlay ~ .page-header,
    .send-tx .overlay ~ .page-footer {
        opacity: .05;
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
        align-items: center;
        width: 100%;
    }

    .arrow-wrapper {
        font-size: 3rem;
        margin-top: -3.25rem;
    }

    .sender-and-recipient a {
        color: inherit;
        text-decoration: none;
        width: calc(50% - 1.1235rem);
    }

    .sender-and-recipient .account .identicon {
        width: 9rem;
        height: 9rem;
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
