<template>
    <div class="contact" @click="select">
        <Identicon :address="isEditing ? workingAddress : address" :class="{ 'small': !isEditing && !showOptions }"/>

        <div class="info" v-if="!isEditing">
            <span class="label">{{ label }}</span>
            <Address :address="address"/>

            <div class="bottom" v-if="showOptions">
                <button class="nq-button-s" @click.stop="edit" title="Edit contact">
                    <i class="material-icons">edit</i>
                </button>
                <button class="nq-button-s red" @click.stop="remove" title="Delete contact">
                    <i class="material-icons">delete</i>
                </button>
            </div>
        </div>

        <div class="info" v-if="isEditing">
            <input type="text" class="nq-input label" placeholder="Name" ref="labelInput" v-model="workingLabel">
            <input type="text" class="nq-input address-input" placeholder="Address" v-model="workingAddress">

            <div class="bottom">
                <button class="nq-button-s" @click.stop="save" :disabled="!isInputValid()"
                        title="Save changes">
                    <i class="material-icons">check</i>
                </button>
                <button class="nq-button-s" @click.stop="abort" title="Abort">
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
    /* Needs to be unscoped to allow the NewContact component to use these styles, too. */

    /* @import '/libraries/nimiq-style/material-icons/material-icons.css'; */

    .contact {
        display: flex;
        align-items: flex-start;
        max-width: 61.25rem;
        padding: 1rem 2rem;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        cursor: pointer;
        position: relative;
        border-radius: 0.5rem;
    }

    .contact .identicon {
        width: 8rem;
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
        --width-subtraction: 8rem;
        max-width: calc(100% - var(--width-subtraction));
    }

    .contact .label {
        font-size: 2rem;
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0.7;
        transition: opacity .3s var(--nimiq-ease);
    }

    .contact:hover .label {
        opacity: 1;
    }

    .contact .address {
        overflow: hidden;
        /* text-overflow: ellipsis; */
        pointer-events: none;
        padding: 0;
        min-width: auto;
        font-weight: normal;
        opacity: 0.4;
        mask-image: linear-gradient(90deg , rgba(255,255,255,1), rgba(255,255,255,1) calc(100% - 4rem), rgba(255,255,255,0));
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
        height: 3.625rem;
        width: 3.625rem;
        margin-left: 0.5rem;
    }

    .contact .bottom button .material-icons {
        font-size: 2.625rem;
        position: relative;
        left: -0.5rem;
        top: -0.75rem;
    }

    @media (max-width: 480px) {
        .contact {
            padding: 1rem 0;
        }
    }
</style>
