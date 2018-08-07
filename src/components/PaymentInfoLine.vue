<template>
    <div class="info-line">
        <div class="description">
            Payment to <span class="origin">{{ origin }}</span>
        </div>
        <div class="amount">
            <AmountWithDetails :amount="amount"
                               :networkFee="networkFee"
                               :networkFeeEditable="networkFeeEditable"
                               :decimals="decimals"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import AmountWithDetails from './AmountWithDetails.vue';

    @Component({components: {AmountWithDetails}})
    export default class PaymentInfoLine extends Vue {
        @Prop(Number) public amount!: number;
        @Prop(Number) public networkFee!: number;
        @Prop(Boolean) public networkFeeEditable!: boolean;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
        @Prop(String) public origin!: string;
    }
</script>

<style scoped>
    .info-line {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0 auto;
    }

    .info-line .origin {
        font-weight: bold;
    }

    .info-line .amount {
        text-align: right;
    }
    
    @media (min-width: 490px) {
        .info-line {
            max-width: 27rem;
        }
    }
</style>
