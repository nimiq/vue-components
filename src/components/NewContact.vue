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

<script>
import Identicon from './Identicon.vue'
import Address from './Address.vue'

import ValidationUtils from '../../../../libraries/secure-utils/validation-utils/validation-utils.js'

export default {
    name: 'NewContact',
    props: ['setContactAction', 'abortAction'],
    data: function() {
        return {
            // Local state
            workingLabel: '',
            workingAddress: ''
        }
    },
    computed: {
        isInputValid() {
            return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress)
        }
    },
    methods: {
        edit() {
            this.workingLabel = ''
            this.workingAddress = ''
            this.$refs.labelInput.focus()
        },
        save() {
            const address = this.workingAddress.replace(/ /g, '').replace(/.{4}/g, '$& ').trim().toUpperCase()

            // Update or set contact info
            this.setContactAction(this.workingLabel, address)

            this.$toast.success('Contact saved.')

            this.edit()
        },
        abort() {
            this.abortAction()
        }
    },
    components: {
        Identicon,
        Address
    }
}
</script>

<style>
    /* Uses the styles of Contact.vue */
</style>
