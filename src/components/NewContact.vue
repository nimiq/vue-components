<template>
    <div class="contact">
        <Identicon :address="workingAddress"/>

        <div class="info">
            <input type="text" class="label" placeholder="Name" ref="labelInput" v-model="workingLabel">
            <input type="text" class="address-input" placeholder="Address" v-model="workingAddress">

            <div class="bottom">
                <button class="small secondary save" @click.stop="save" :disabled="!isInputValid" title="Save changes">
                    <i class="material-icons">check</i>
                </button>
                <button class="small secondary" @click.stop="abort" title="Abort">
                    <i class="material-icons">close</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from 'vue-property-decorator';
    import Identicon from './Identicon.vue';
    import Address from './Address.vue';

    import ValidationUtils from '@nimiq/secure-utils/validation-utils/validation-utils.js';

    @Component({components: {Identicon, Address}})
    export default class NewContact extends Vue {
        private workingLabel: string = '';
        private workingAddress: string = '';

        public edit() {
            this.workingLabel = '';
            this.workingAddress = '';
            const labelInput: HTMLInputElement = this.$refs.labelInput as HTMLInputElement;
            labelInput.focus();
        }

        @Emit()
        // tslint:disable-next-line
        private setContactAction(label: string, address: Nimiq.Address) {
        }

        @Emit()
        // tslint:disable-next-line
        private abortAction() {
        }

        private isInputValid() {
            return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
        }

        private save() {
            const address = Nimiq.Address.fromUserFriendlyAddress(this.workingAddress);

            // Update or set contact info
            this.setContactAction(this.workingLabel, address);

            // TODO: this.$toast.success('Contact saved.');

            this.edit();
        }

        private abort() {
            this.abortAction();
        }
    }
</script>

<style>
    /* Uses the styles of Contact.vue */
</style>
