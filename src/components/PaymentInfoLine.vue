<template>
    <div class="info-line">
        <div class="amounts">
            <UniversalAmount class="amount nq-light-blue"
                :amount="cryptoAmount.amount"
                :decimals="cryptoAmount.digits"
                :minDecimals="0"
                :maxDecimals="4"
                :currency="cryptoAmount.currency"/>
            <UniversalAmount v-if="fiatAmount" class="fiat-amount nq-blue"
                :amount="fiatAmount.amount"
                :decimals="fiatAmount.digits"
                :minDecimals="fiatAmount.digits"
                :maxDecimals="fiatAmount.digits"
                :currency="fiatAmount.currency"/>
        </div>
        <div class="arrow-runway">
            <ArrowRightSmallIcon/>
        </div>
        <a href="javascript:void(0)" class="description" @click="merchantInfoClicked">
            <Account :address="address" :image="shopLogoUrl" :label="originDomain" />
            <div v-if="!startTime || !expires" class="info-circle-container">
                <InfoCircleIcon class="info-circle"/>
            </div>
        </a>
        <Timer v-if="startTime && expires" ref="timer" :startTime="startTime" :endTime="expires" />
    </div>
</template>

<script lang="ts">
// this imports only the type without bundling the library
type BigInteger = import ('big-integer').BigInteger;

import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import Account from './Account.vue';
import Timer from './Timer.vue';
import UniversalAmount from './UniversalAmount.vue';
import { InfoCircleIcon, ArrowRightSmallIcon } from './Icons';

interface AmountInfo {
    amount: number | bigint | BigInteger; // in the smallest unit
    currency: string;
    digits: number;
}

function amountInfoValidator(value: any) {
    return 'amount' in value && 'currency' in value && 'digits' in value
        && (typeof value.amount === 'number' || typeof value.amount === 'bigint'
            || (value.amount && value.amount.constructor && value.amount.constructor.name.endsWith('Integer')))
        && typeof value.currency === 'string'
        && typeof value.digits === 'number' && Number.isInteger(value.digits);
}

@Component({components: {Account, Timer, UniversalAmount, InfoCircleIcon, ArrowRightSmallIcon}})
export default class PaymentInfoLine extends Vue {
    private get originDomain() {
        return this.origin.split('://')[1];
    }

    @Prop({type: Object, validator: amountInfoValidator}) public cryptoAmount!: AmountInfo;
    @Prop({type: Object, validator: amountInfoValidator}) public fiatAmount?: AmountInfo;
    @Prop(String) private origin!: string;
    @Prop(String) private address?: string;
    @Prop(String) private shopLogoUrl?: string;
    @Prop(Number) private startTime?: number;
    @Prop(Number) private expires?: number;

    public async setTime(time: number) {
        await this.$nextTick(); // let vue update in case the timer was just added
        if (!this.$refs.timer) return;
        (this.$refs.timer as Timer).synchronize(time);
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private merchantInfoClicked() {}
}
</script>

<style scoped>
    .info-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        margin: 2rem 2.5rem 1rem 2.5rem;
        flex-shrink: 0;
        font-size: 2rem;
        line-height: 1.5;
        font-weight: normal;
    }

    .amounts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: .125rem;
    }

    .amount {
        font-weight: bold;
    }

    .fiat-amount {
        font-size: 1.625rem;
        line-height: 1;
        font-weight: 600;
        opacity: .6;
    }

    .arrow-runway {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .arrow-runway .nq-icon {
        opacity: 0;
        font-size: 2rem;
        animation: arrow-shooting 2.7s cubic-bezier(.2,.5,.75,.5) infinite;
    }

    @keyframes arrow-shooting {
        0%   { transform: translate3D(-3.5rem, 0, 0); }
        15%  { transform: translate3D(-3.5rem, 0, 0); opacity: 0; }
        30%  { opacity: .2; }
        70%  { opacity: .2; }
        85%  { transform: translate3D(3rem, 0, 0); opacity: 0; }
        100% { transform: translate3D(3rem, 0, 0); }
    }

    .description {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: inherit;
        text-decoration: none;
        outline: none;
    }

    .description:hover,
    .description:focus {
        text-decoration: none;
    }

    .account {
        padding: 0;
        width: auto !important;
    }

    .account >>> .identicon {
        min-width: unset;
        width: 3.375rem;
        height: 3.375rem;
        margin-right: 0;
    }

    .account >>> .label {
        margin-bottom: .25rem;
        transition: opacity .3s ease;
        font-weight: unset;
        opacity: 1 !important;
        /* Remove gradient-fade-out and use text-overflow instead */
        mask-image: unset;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: fade;
    }

    .info-circle-container {
        position: relative;
        opacity: 0.3;
        margin-left: 1rem;
        transition: opacity .3s ease;
    }

    .info-circle-container .nq-icon {
        display: block;
    }

    .description:hover .account >>> .label,
    .description:focus .account >>> .label {
        opacity: .7;
    }

    .description:hover .info-circle-container,
    .description:focus .info-circle-container {
        opacity: 1;
    }

    .info-circle-container::after {
        content: "";
        position: absolute;
        left: -0.625rem;
        top: -0.625rem;
        right: -0.625rem;
        bottom: -0.625rem;
        border: 0.25rem solid rgba(5, 130, 202, 0.5); /* Based on Nimiq Light Blue */
        border-radius: 50%;
        opacity: 0;
    }

    .description:focus .info-circle-container::after {
        opacity: 1;
    }

    .timer {
        margin-left: .5rem;
    }
</style>
