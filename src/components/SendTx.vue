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
                @contacts-opened="contactsOpened = true"/>
            <label class="nq-label">Enter address</label>
            <AddressInput class="address-input" @address-entered="setRecipient" />
        </PageBody>

        <PageFooter>
            <p class="nq-text">Address unavailable?</p>
            <button class="nq-button-s" @click="createCashlink">Create a Cashlink</button>
            <a href="javascript:void(0)" class="scan-qr nq-blue" @click="scanQr">
                <ScanQrCodeIcon />
            </a>
        </PageFooter>
    </SmallPage>

    <SmallPage v-else class="send-tx">
        <SmallPage class="overlay" v-if="!recipient.label  && !detailsClosed">
            <AccountDetails
                :address="recipient.address"
                :editable="true"
                @close="storeContactAndCloseOverlay(false)"
                @changed="setLabel"
                />
            <PageFooter>
                <button class="nq-button light-blue" @click="storeContactAndCloseOverlay(true)">Set amount</button>
            </PageFooter>
        </SmallPage>

        <SmallPage class="overlay fee" v-if="optionsOpened">
            <a href="javascript:void(0)" class="nq-button-s cancel-circle" @click="optionsOpened = false">
                <CloseIcon/>
            </a>
            <PageBody>
                <h1 class="nq-h1">Speed up your transaction</h1>
                <p class="nq-text">By adding a transation fee, you can influence how fast your transaction will be processed.</p>
                <SelectBar ref="fee" :options="OPTIONS" name="fee" :selectedValue="fee" />
            </PageBody>
            <PageFooter>
                <button class="nq-button light-blue" @click="setFee">Set fee</button>
            </PageFooter>
        </SmallPage>

        <PageHeader :backArrow="true" @back="recipient = null; detailsClosed = false; contactsOpened = false;">
            Set Amount
            <a href="javascript:void(0)" class="nq-blue options-button" @click="optionsOpened = true">
                <SettingsIcon/>
            </a>
        </PageHeader>

        <PageBody>
            <div class="sender-and-recipient">
                <Account layout="column" :address="sender.address" :label="sender.label" />
                <div class="arrow-wrapper"><ArrowRightIcon class="nq-light-blue" /></div>
                <Account layout="column" :address="recipient.address" :label="recipient.label || 'Unnamed Contact'" />
            </div>
            <ValueInput class="value" :vanishing="true" placeholder="0.00" :maxFontSize="8" @changed="setValue" ref="valueInput" />
            <LabelInput :vanishing="true" placeholder="Add a public message..." :maxBytes="64" @changed="setMessage" />
        </PageBody>

        <PageFooter>
            <button class="nq-button light-blue" :disabled="value === null" @click="sendTransaction">Send transaction</button>
        </PageFooter>
    </SmallPage>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
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
import ValueInput from './ValueInput.vue';
import SelectBar from './SelectBar.vue';
import { ArrowRightIcon, CloseIcon, ScanQrCodeIcon, SettingsIcon } from './Icons';

@Component({components: {
    SmallPage,
    PageHeader,
    PageBody,
    PageFooter,
    Account,
    AccountDetails,
    AccountSelector,
    AddressInput,
    ContactList,
    ContactShortcuts,
    LabelInput,
    ValueInput,
    ArrowRightIcon,
    CloseIcon,
    ScanQrCodeIcon,
    SelectBar,
    SettingsIcon,
}})
    export default class SendTx extends Vue {
        @Prop(Array) public contacts!: Array<{ address: string, label: string }>;
        @Prop(Array) public wallets!: WalletInfo[];
        @Prop({type: Object, default: null}) public preselectedSender: {walletId: string, address: string};

        private sender: {address: string, label: string, walletId} = null;
        private recipient: {address: string, label: string} = null;
        private detailsClosed = false;
        private contactsOpened = false;
        private optionsOpened = false;
        private fee = 0;
        private value: number = null;
        private extraData = '';
        private label = '';

        private setSender(walletId: string, address: string) {
            const wallet = this.wallets.find((value, index) => value.id === walletId);
            this.sender = {address, label: wallet.label, walletId};
        }

        private async setRecipient(address: string, label: string) {
            if (!label) {
                const foundContact = this.contacts.find((contact) => contact.address === address);
                if (foundContact) {
                    label = foundContact.label;
                }
            }
            this.recipient = {address, label};
            if (label) {
                await Vue.nextTick(); // Await updated DOM
                (this.$refs.valueInput as ValueInput).focus();
            }
        }

        private setFee() {
            this.optionsOpened = false;
            this.fee = (this.$refs.fee as SelectBar).value;
        }

        private setValue(value: string) {
            if (value === '') {
                this.value = null;
                return;
            }
            this.value = parseFloat(value);
        }

        private setMessage(value) {
            this.extraData = value;
        }

        private async setLabel(label: string) {
            this.label = label;
            await Vue.nextTick(); // Await updated DOM
            (this.$refs.valueInput as ValueInput).focus();
        }

        private async created() {
            if (this.preselectedSender) {
                this.setSender(this.preselectedSender.walletId, this.preselectedSender.address);
            }
        }

        private storeContactAndCloseOverlay(storeContact: boolean) {
            if (storeContact) {
                this.recipient.label = this.label;
                this.$emit('contact-added', this.recipient);
            }
            this.detailsClosed = true;
        }

        private sendTransaction() {
            this.$emit('send-tx', this.sender, this.recipient, this.value, this.extraData, this.fee);
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
                }],
            };
        }

        @Emit()
        // tslint:disable-next-line no-empty
        private login() {}

        @Emit()
        // tslint:disable-next-line no-empty
        private scanQr() {}

        @Emit()
        // tslint:disable-next-line no-empty
        private createCashlink() {}

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

    .send-tx .page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
        align-items: center;
        height: 12.5rem;
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

    .overlay .cancel-circle {
        font-size: 3rem;
        position: absolute;
        top: 2rem;
        right: 2rem;
        padding: 0;
        height: unset;
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

    .sender-and-recipient .account {
        width: calc(50% - 1.1235rem);
    }

    .sender-and-recipient .account .identicon {
        width: 9rem;
        height: 9rem;
    }

    .scan-qr {
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        opacity: .4;
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
