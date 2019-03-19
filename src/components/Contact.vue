<template>
    <div class="contact" @click="select">
        <Identicon :address="isEditing ? workingAddress : address" :class="{ 'small': !isEditing && !showOptions }"/>

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

    import { ValidationUtils } from '@nimiq/utils';

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
        align-items: center;
        max-width: 61.25rem;
        padding: 1rem 2rem;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        cursor: pointer;
        position: relative;
        border-radius: 0.5rem;
    }

    .contact .identicon {
        width: 10rem;
        min-width: 6.25rem;
        height: 8.875rem;
    }

    .contact .identicon.small {
        height: 6rem;
    }

    .contact .info {
        text-align: left;
        width: 100%;
        padding-left: 2rem;
        --width-subtraction: 11rem;
        max-width: calc(100% - var(--width-subtraction));
    }

    .contact .label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.25rem;
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
        font-size: 1.75rem;
    }

    .contact .bottom {
        text-align: right;
        margin-top: 0.5rem;
    }

    .contact .bottom button {
        padding: 0 0.875rem;
        min-height: 0;
        height: 3.625rem;
        width: 3.625rem;
        margin-bottom: 0;
        margin-left: 0.5rem;
        background: white;
        opacity: 0.75;
        border-radius: 3.5rem;
        color: #3b3b3b;
        border: 1px solid #3b3b3b;
    }

    .contact .bottom button:hover {
        opacity: 1;
    }

    .contact .bottom button .material-icons {
        font-size: 2.625rem;
        position: relative;
        left: -0.5rem;
        top: -0.75rem;
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
            padding: 1rem 0;
        }
    }
</style>
