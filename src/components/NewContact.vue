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

    import { ValidationUtils } from '@nimiq/utils';

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
        // tslint:disable-next-line no-empty
        private set(label: string, address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private abort() {}

        private isInputValid() {
            return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
        }

        private save() {
            // Update or set contact info
            this.set(this.workingLabel, this.workingAddress);

            // TODO: this.$toast.success('Contact saved.');

            this.edit();
        }
    }
</script>

<!-- Uses the styles of Contact.vue -->
