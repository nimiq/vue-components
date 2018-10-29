<template>
    <div class="contact" @click="select">
        <Identicon :address="isEditing ? workingAddress : address"/>

        <div class="info" v-if="!isEditing">
            <span class="label">{{ label }}</span>
            <Address :address="address"/>

            <div class="bottom" v-if="showOptions">
                <button class="small secondary" @click.stop="edit" title="Edit contact">
                    <i class="material-icons">edit</i>
                </button>
                <button class="small secondary remove" @click.stop="remove" title="Delete contact">
                    <i class="material-icons">delete</i>
                </button>
            </div>
        </div>

        <div class="info" v-if="isEditing">
            <input type="text" class="label" placeholder="Name" ref="labelInput" v-model="workingLabel">
            <input type="text" class="address-input" placeholder="Address" v-model="workingAddress">

            <div class="bottom">
                <button class="small secondary save" @click.stop="save" :disabled="!isInputValid()"
                        title="Save changes">
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
    import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
    import Identicon from './Identicon.vue';
    import Address from './Address.vue';

    import ValidationUtils from '@nimiq/secure-utils/validation-utils/validation-utils.js';

    @Component({components: {Identicon, Address}})
    export default class Contact extends Vue {
        @Prop(String) public address!: string;
        @Prop(String) public label!: string;
        @Prop(Boolean) public showOptions?: boolean;
        @Prop(Number) public abortTrigger?: number;

        private isEditing: boolean = false;
        private workingLabel: string = '';
        private workingAddress: string = '';

        private isInputValid() {
            return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
        }

        private select() {
            if (this.isEditing) return;
            this.$emit('select', this.address);
        }

        private edit() {
            this.workingLabel = this.label;
            this.workingAddress = this.address;
            this.isEditing = true;

            // Wait for DOM to update
            Vue.nextTick(() => {
                const labelInput: HTMLInputElement = this.$refs.labelInput as HTMLInputElement;
                labelInput.select();
                labelInput.focus();
            });
        }

        private save() {
            const label = this.workingLabel.trim();
            if (this.address !== this.workingAddress || this.label !== label) {
                this.$emit('change', {label: this.label, address: this.address}, {label, address: this.workingAddress});
            }
            this.abort();
        }

        @Watch('abortTrigger')
        private abort() {
            this.isEditing = false;
        }

        private remove() {
            const confirmRemove = confirm(`Delete this contact: ${this.label} (${this.address})?`);
            if (confirmRemove) this.$emit('delete', this.address);
        }
    }
</script>

<style>
    /* @import '/libraries/nimiq-style/material-icons/material-icons.css'; */

    .contact {
        display: flex;
        max-width: calc(61.25 * var(--nimiq-size, 8px));
        padding: calc(1 * var(--nimiq-size, 8px)) calc(2 * var(--nimiq-size, 8px));
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        cursor: pointer;
        position: relative;
        border-radius: calc(0.5 * var(--nimiq-size, 8px));
    }

    .contact .identicon {
        width: calc(10 * var(--nimiq-size, 8px));
        min-width: calc(6.25 * var(--nimiq-size, 8px));
        height: calc(8.875 * var(--nimiq-size, 8px));
    }

    .contact .info {
        text-align: left;
        width: 100%;
        padding-left: calc(2 * var(--nimiq-size, 8px));
        --width-subtraction: calc(11 * var(--nimiq-size, 8px));
        max-width: calc(100% - var(--width-subtraction));
    }

    .contact .label {
        display: block;
        font-weight: bold;
        margin-bottom: calc(0.25 * var(--nimiq-size, 8px));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .contact .address {
        overflow: hidden;
        text-overflow: ellipsis;
        pointer-events: none;
        padding: 0;
        min-width: auto;
        font-weight: normal;
        opacity: 0.6;
    }

    .contact input {
        width: 100% !important;
    }

    .contact input,
    .contact input::placeholder {
        text-align: left !important;
    }

    .contact input.address-input {
        font-size: calc(1.75 * var(--nimiq-size, 8px));
    }

    .contact .bottom {
        text-align: right;
        margin-top: calc(0.5 * var(--nimiq-size, 8px));
    }

    .contact .bottom button {
        padding: 0 calc(0.875 * var(--nimiq-size, 8px));
        min-height: 0;
        height: calc(3.625 * var(--nimiq-size, 8px));
        width: calc(3.625 * var(--nimiq-size, 8px));
        margin-bottom: 0;
        margin-left: calc(0.5 * var(--nimiq-size, 8px));
        background: white;
        opacity: 0.75;
        border-radius: calc(3.5 * var(--nimiq-size, 8px));
        color: #3b3b3b;
        border: 1px solid #3b3b3b;
    }

    .contact .bottom button:hover {
        opacity: 1;
    }

    .contact .bottom button .material-icons {
        font-size: calc(2.625 * var(--nimiq-size, 8px));
        position: relative;
        left: calc(-0.5 * var(--nimiq-size, 8px));
        top: calc(-0.75 * var(--nimiq-size, 8px));
    }

    .contact .bottom button.remove {
        color: var(--error-color);
        border-color: var(--error-color);
    }

    .contact .bottom button.remove .material-icons {
        color: var(--error-color);
    }

    @media (max-width: 480px) {
        .contact {
            padding: calc(1 * var(--nimiq-size, 8px)) 0;
        }
    }
</style>
