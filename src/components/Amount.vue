<template>
    <span :class="showApprox && isApprox(amount) ? 'amount approx' : 'amount'">{{ amountToString() }} <span class="nim">NIM</span></span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Amount extends Vue {
        @Prop(Number) public amount!: number;
        @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
        @Prop({type: Boolean, default: false}) public showApprox!: boolean;

        private amountToString() {
            const roundingFactor = Math.pow(10, this.decimals);
            const value = Math.floor((this.amount / 100000) * roundingFactor) / roundingFactor;
            const result = value.toFixed(this.decimals);
            if (Math.abs(value) < 10000) return result;
            // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one
            const regexp = this.decimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
            return result.replace(regexp, '$1\u2009');
        }

        private isApprox() {
            const roundedNum = Number.parseFloat((this.amount / 100000).toFixed(this.decimals));
            return roundedNum.toFixed(5) !== (this.amount / 100000).toFixed(5);
        }
    }
</script>

<style scoped>
    .amount {
        white-space: nowrap;
    }
    .amount.approx:before {
        content: '~ ';
        opacity: 0.5;
    }
    .amount .nim {
        font-size: 60%;
    }
</style>
