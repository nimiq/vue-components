<template>
    <div class="info-line nq-label">
        <div class="description">
            Payment to <span class="origin">{{ originDomain }}</span>
        </div>
        <Amount :amount="this.amount + this.networkFee"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Amount from './Amount.vue';

    @Component({components: {Amount}})
    export default class PaymentInfoLine extends Vue {
        @Prop(Number) public amount!: number;
        @Prop(Number) public networkFee!: number;
        @Prop(Boolean) public networkFeeEditable!: boolean;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
        @Prop(String) public origin!: string;

        private get originDomain() {
            return this.origin.split('://')[1];
        }
    }
</script>

<style scoped>
    /** Nimiq Style **/
    .nq-label {
        font-size: calc(1.75 * var(--nimiq-size, 8px));
        line-height: 0.857;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.107em;
        margin: calc(1 * var(--nimiq-size, 8px)) 0;
        opacity: 0.7;
    }
    /** END Nimiq Style **/

    .info-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        margin: calc(2 * var(--nimiq-size, 8px)) calc(1.25 * var(--nimiq-size, 8px));
        width: 100%;
        max-width: calc(56.25 * var(--nimiq-size, 8px)); /* 450px */
        flex-shrink: 0;
        font-size: calc(1.5 * var(--nimiq-size, 8px));
        font-weight: normal;
    }

    .amount {
        font-weight: bold;
    }
</style>
