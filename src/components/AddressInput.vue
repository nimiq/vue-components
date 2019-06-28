<template>
    <textarea class="address-input" v-model="address"></textarea>
</template>

<script lang="ts">
import { ValidationUtils } from '../../node_modules/@nimiq/utils';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
    export default class AddressInput extends Vue {
        private address: string = '';

        @Watch('address', {immediate: true})
        private checkValidity() {
            if (ValidationUtils.isValidAddress(this.address)) {
                this.$emit('address-entered', this.address);
            }
        }
    }
</script>

<style>
    .address-input {
        width: 100%;
    }
</style>
