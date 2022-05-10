<template>
    <div class="amount-with-fee">
        <AmountInput class="value" v-model="liveAmount" :class="{invalid: !isValid && liveAmount > 0}"  ref="amountInput" />
        <div class="fee-section nq-text-s">
            <div v-if="!isValid && liveAmount" class="nq-red"><slot name="insufficient-balance-error">{{ $t('Insufficient balance') }}</slot></div>
            <div v-else>
                <span v-if="fiatAmount !== null && fiatCurrency" class="fiat">
                    ~<FiatAmount :amount="fiatAmount" :currency="fiatCurrency" />
                </span>
                <span v-if="value.fee" class="fee">
                    + <Amount :amount="value.fee" :minDecimals="0" :maxDecimals="5" /> {{ $t('fee') }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import { FiatApiSupportedFiatCurrency } from '@nimiq/utils';
import Amount from './Amount.vue';
import AmountInput from './AmountInput.vue';
import FiatAmount from './FiatAmount.vue';
import I18nMixin from '../i18n/I18nMixin';

@Component({
    name: 'AmountWithFee',
    components: {
        Amount,
        AmountInput,
        FiatAmount,
    },
})
export default class AmountWithFee extends Mixins(I18nMixin) {
    @Prop({
        type: Object,
        default: () => ({amount: 0, fee: 0, isValid: false}),
    }) private value!: {amount: number, fee: number, isValid: boolean};
    @Prop({type: Number, default: 0}) private availableBalance!: number;
    @Prop(Number) private fiatAmount: number | null;
    @Prop(String) private fiatCurrency: FiatApiSupportedFiatCurrency | null;

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

    .amount-input >>> input {
        padding-top: 0;
        padding-bottom: 0;
    }

    .amount-input.invalid >>> input,
    .amount-input.invalid >>> .nim {
        border-color: rgb(216, 65, 51, 0.2); /* Based on Nimiq Red */
        color: var(--nimiq-red) !important;
    }

    .fee-section {
        color: rgba(31, 35, 72, 0.5);
        min-height: 2rem;
    }

    .fiat {
        display: inline-flex;
    }
</style>
