<template>
    <span class="amount-with-details">
        <span class="drop-link" @click="toggleDetails">
            <Amount class="total-amount" :amount="amount + networkFee" :decimals="decimals"/>
            <span v-if="!showDetails">⏷</span>
            <span v-if="showDetails">⏶</span>
        </span>
        <div class="info-box" v-if="showDetails">
            <div class="info-rows">
                <div class="item-description">Transferred amount:</div>
                <div class="item-value"><Amount :amount="amount" :decimals="decimals" showApprox/></div>
                <div class="item-options"></div>
                <div class="item-description fee">Network fee:</div>
                <div class="item-value"><Amount :amount="networkFee" :decimals="decimals" showApprox/></div>
                <div class="item-options"><span class="icon" v-if="networkFeeEditable">edit</span></div>
            </div>
            <div class="total-sum info-rows">
                <span class="item-description">Total amount:</span>
                <Amount class="total-amount" :amount="amount + networkFee" :decimals="decimals" showApprox/>
            </div>
        </div>
    </span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Amount from './Amount.vue';
    
    @Component({components: {Amount}})
    export default class AmountWithDetails extends Vue {
        @Prop(Number) public amount!: number;
        @Prop(Number) public networkFee!: number;
        @Prop({type: Boolean, default: false}) public networkFeeEditable!: boolean;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;

        private showDetails = false;
        private isEditing = false;

        public toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
</script>

<style scoped>
    .amount-with-details {
        text-align: right;
        position: relative;
    }

    .amount-with-details .drop-link {
        display: inline-block;
        border-bottom: 1px solid transparent;
        padding-left: 0.2rem;
        margin: 0.1rem;
        cursor: pointer;
        opacity: 0.95;
    }
    
    .amount-with-details .drop-link:focus, .amount-with-details .drop-link:active {
        border-color: black;
    }

    .amount-with-details .drop-link:hover {
        border-color: #666;
        opacity: 0.8;
    }
    
    .amount-with-details .info-box {
        position: absolute;
        background: #fefefe;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
        border-radius: 0.5rem;
        padding: 0.5rem;
        right: 0;
        white-space: nowrap;
        margin-top: 0.2rem;
        color: #111;
        z-index: 100;
    }

    .amount-with-details .info-box .info-rows {
        display: grid;
        grid-template-columns: 9rem auto 12px;
    }
    
    .amount-with-details .info-box .item-value {
        text-align: right;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
    }
    
    .amount-with-details .info-box .fee {
        font-style: italic;
    }
    
    .amount-with-details .info-box .total-sum {
        background: #eee;
        margin: 0 -0.5rem -0.5rem -0.5rem;
        padding: 0.5rem;
        border-radius: 0 0 0.5rem 0.5rem;
        font-weight: bold;
    }

    .amount-with-details .info-box .total-sum .item-value {
        padding-bottom: 0;
    }
</style>
