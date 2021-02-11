<template>
    <div class="amount-with-fee">
        <AmountInput class="value" v-model="liveAmount" :class="{invalid: !isValid && liveAmount > 0, 'empty': !liveAmount}"  ref="amountInput" />
        <div class="fee-section nq-text-s">
            <div v-if="!isValid && liveAmount" class="nq-orange"><slot name="insufficient-balance-error">{{ $t('Insufficient balance') }}</slot></div>
            <div v-else-if="value.fee">
                + <Amount :amount="value.fee" :minDecimals="0" :maxDecimals="5" /> {{ $t('fee') }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import Amount from './Amount.vue';
import AmountInput from './AmountInput.vue';
import I18nMixin from '../i18n/I18nMixin';

@Component({
    name: 'AmountWithFee',
    components: {
        Amount,
        AmountInput,
    },
})
export default class AmountWithFee extends Mixins(I18nMixin) {
    @Prop({
        type: Object,
        default: () => ({amount: 0, fee: 0, isValid: false}),
    }) private value!: {amount: number, fee: number, isValid: boolean};
    @Prop({type: Number, default: 0}) private availableBalance!: number;

    private liveAmount: number = this.value.amount;

    public mounted() {
        this.watchAmountChange(this.liveAmount);
    }

    @Watch('isValid', {immediate: true})
    private watchAvailableAmountChange(value) {
        this.$emit('input', {amount: this.liveAmount, fee: this.value.fee, isValid: this.isValid});
    }

    @Watch('liveAmount', {immediate: true})
    private watchAmountChange(value) {
        this.$emit('input', {amount: this.liveAmount, fee: this.value.fee, isValid: this.isValid});
    }

    private get isValid(): boolean {
        return this.liveAmount > 0
            && this.liveAmount + this.value.fee <= this.availableBalance;
    }

    public focus() {
        (this.$refs.amountInput as AmountInput).focus();
    }

}
</script>

<style scoped>
    .amount-with-fee {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .value {
        display: flex;
        align-items: baseline;
    }

    .amount-input >>> form .nq-input {
        padding-top: 0;
        padding-bottom: 0;
    }

    .amount-input >>> form .nq-input:focus-within:hover,
    .amount-input.empty >>> form .nq-input:hover {
        --border-color: rgb(5, 130, 202, 0.3); /* Based on Nimiq Light Blue */
    }
    
    .amount-input.invalid >>>  form .nq-input {
        --border-color: rgb(252, 135, 2, 0.3); /* Based on Nimiq Orange */

    }

    .amount-input.invalid >>> form .nq-input:hover {
        --border-color: rgb(252, 135, 2, 0.4); /* Based on Nimiq Orange */
    }

    .amount-input.invalid >>> input,
    .amount-input.invalid >>> .nim {
        color: var(--nimiq-orange);
    }

    .fee-section {
        color: rgba(31, 35, 72, 0.5); /* Based on Nimiq Blue */
        min-height: 2rem;
    }
</style>
