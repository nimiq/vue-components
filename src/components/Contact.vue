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

<script>
/* global Vue */
import Identicon from './Identicon.vue';
import Address from './Address.vue';

import ValidationUtils from '@nimiq/secure-utils/validation-utils/validation-utils.js';

export default {
    name: 'Contact',
    props: ['address', 'label', 'showOptions'],
    data() {
        return {
            // Local state
            isEditing: false,
            workingLabel: '',
            workingAddress: '',
        };
    },
    computed: {
        isInputValid() {
            return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
        },
    },
    methods: {
        select() {
            if (this.isEditing) return;
            this.$emit('select', this.address);
        },
        edit() {
            this.workingLabel = this.label;
            this.workingAddress = this.address;
            this.isEditing = true;

            // Wait for DOM to update
            Vue.nextTick(() => this.$refs.labelInput.select() && this.$refs.labelInput.focus());
        },
        save() {
            const address = this.workingAddress.replace(/ /g, '').replace(/.{4}/g, '$& ').trim();
            const label = this.workingLabel.trim();
            if (this.address !== address || this.label !== label) {
                this.$emit('change', {label: this.label, address: this.address}, {label, address});
            }
            this.abort();
        },
        abort() {
            this.isEditing = false;
        },
        remove() {
            const confirmRemove = confirm(`Delete this contact: ${this.label} (${this.address})?`);
            if (confirmRemove) this.$emit('delete', this.address);
        },
    },
    components: {
        Identicon,
        Address,
    },
};
</script>

<style>
    /* @import '/libraries/nimiq-style/material-icons/material-icons.css'; */

    .contact {
        display: flex;
        max-width: 490px;
        padding: 8px 16px;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
        cursor: pointer;
        position: relative;
        border-radius: 4px;
    }

    .contact .identicon {
        width: 80px;
        min-width: 50px;
        height: 71px;
    }

    .contact .info {
        text-align: left;
        width: 100%;
        padding-left: 16px;
        max-width: calc(100% - 88px);
    }

    .contact .label {
        display: block;
        font-weight: bold;
        margin-bottom: 2px;
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
        font-size: 14px;
    }

    .contact .bottom {
        text-align: right;
        margin-top: 4px;
    }

    .contact .bottom button {
        padding: 0 7px;
        min-height: 0;
        height: 29px;
        width: 29px;
        margin-bottom: 0;
        margin-left: 4px;
        background: white;
        opacity: 0.75;
        border-radius: 28px;
        color: #3b3b3b;
        border: 1px solid #3b3b3b;
    }

    .contact .bottom button:hover {
        opacity: 1;
    }

    .contact .bottom button .material-icons {
        font-size: 21px;
        position: relative;
        left: -4px;
        top: -6px;
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
            padding: 8px 0;
        }
    }
</style>
