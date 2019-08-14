<template>
    <div class="amount-with-fee">
        <AmountInput class="value" v-model="liveAmount" :class="{invalid: !isValid && liveAmount > 0}"  ref="amountInput" />
        <div class="fee-section nq-text-s">
            <div v-if="!isValid && liveAmount" class="nq-red"><slot name="insufficient-balance-error">Insufficient balance</slot></div>
            <div v-else-if="value.fee">
                + <Amount :amount="value.fee" :minDecimals="0" :maxDecimals="5" /> fee
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import Amount from './Amount.vue';
import AmountInput from './AmountInput.vue';

@Component({components: {
    Amount,
    AmountInput,
}})
export default class AmountWithFee extends Vue {
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
</style>