<template>
    <div class="info-line" :class="{ 'inverse-theme': theme === constructor.Themes.INVERSE }">
        <div class="amounts"
            @mouseenter="$refs['price-tooltip'] && $refs['price-tooltip'].show()"
            @mouseleave="$refs['price-tooltip'] && $refs['price-tooltip'].hide()">
            <Amount
                :currency="cryptoAmount.currency"
                :amount="cryptoAmount.amount"
                :currencyDecimals="cryptoAmount.decimals"
                :minDecimals="0"
                :maxDecimals="Math.min(4, cryptoAmount.decimals)"
                @click.native="$refs['price-tooltip'] && $refs['price-tooltip'].toggle()"
            />
            <Tooltip ref="price-tooltip"
                v-if="fiatAmount"
                :container="$parent"
                preferredPosition="bottom left"
                :margin="{ left: 8 }"
                :styles="{
                    minWidth: '27.75rem',
                    padding: '2rem',
                    lineHeight: 1.3,
                }"
                :theme="theme"
                @show="updateReferenceRate"
                class="price-tooltip"
            >
                <template v-slot:trigger>
                    <FiatAmount :currency="fiatAmount.currency" :amount="fiatAmount.amount" />
                </template>
                <template v-slot:default>
                    <div class="price-breakdown">
                        <label>Order amount</label>
                        <FiatAmount :currency="fiatAmount.currency" :amount="fiatAmount.amount" />
                        <template v-if="merchantFee !== undefined && merchantFee !== null">
                            <label>Merchant fee</label>
                            <div>+{{ formattedMerchantFee }}</div>
                        </template>
                        <label :class="{ 'nq-orange': rateDeviation <= -constructor.RATE_DEVIATION_THRESHOLD }">
                            Effective rate
                        </label>
                        <div :class="{ 'nq-orange': rateDeviation <= -constructor.RATE_DEVIATION_THRESHOLD }">
                            <FiatAmount :currency="fiatAmount.currency" :amount="effectiveRate"
                                :maxRelativeDeviation=".0001"
                            />
                            / {{ cryptoAmount.currency.toUpperCase() }}
                        </div>
                    </div>
                    <div v-if="Math.abs(rateDeviation) >= constructor.RATE_DEVIATION_THRESHOLD"
                        :class="{ 'nq-orange': rateDeviation <= -constructor.RATE_DEVIATION_THRESHOLD }"
                        class="rate-info info"
                    >
                        Compared to coingecko.com, this rate is {{ formattedRateDeviation }}
                        {{ rateDeviation < 0 ? 'worse' : 'better' }}.
                    </div>
                    <div class="free-service-info info">Nimiq provides this service free of charge.</div>
                    <hr>
                    <div class="total">
                        <label>Total</label>
                        <Amount
                            :currency="cryptoAmount.currency"
                            :amount="cryptoAmount.amount"
                            :currencyDecimals="cryptoAmount.decimals"
                            :minDecimals="0"
                            :maxDecimals="Math.min(8, cryptoAmount.decimals)"
                            showApprox
                        />
                    </div>
                    <div v-if="networkFee === undefined || networkFee === null || Number(networkFee) !== 0"
                        class="network-fee-info info"
                    >
                        +
                        <template v-if="!isFormattedNetworkFeeZero">
                            ~<Amount
                                :currency="cryptoAmount.currency"
                                :amount="networkFee"
                                :currencyDecimals="cryptoAmount.decimals"
                                :minDecimals="0"
                                :maxDecimals="Math.min(6, cryptoAmount.decimals)"
                            />
                        </template>
                        network fee
                    </div>
                </template>
            </Tooltip>
        </div>
        <div class="arrow-runway">
            <ArrowRightSmallIcon/>
        </div>
        <Account :address="address" :image="shopLogoUrl" :label="originDomain" />
        <Timer
            v-if="startTime && endTime"
            ref="timer"
            :startTime="startTime"
            :endTime="endTime"
            :theme="theme"
            :tooltipProps="{
                container: $parent,
                margin: { right: 8 },
            }"
        />
    </div>
</template>

<script lang="ts">
// this imports only the type without bundling the library
type BigInteger = import ('big-integer').BigInteger;

import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { FiatApiSupportedFiatCurrency, FiatApiSupportedCryptoCurrency, getExchangeRates } from '@nimiq/utils';
import Account from './Account.vue';
import Timer from './Timer.vue';
import Amount, { amountValidator } from './Amount.vue';
import FiatAmount from './FiatAmount.vue';
import Tooltip from './Tooltip.vue';
import { ArrowRightSmallIcon } from './Icons';

interface CryptoAmountInfo {
    amount: number | bigint | BigInteger; // in the smallest unit
    currency: string;
    decimals: number;
}

interface FiatAmountInfo {
    amount: number; // in the base unit, e.g. Euro
    currency: string;
}

function cryptoAmountInfoValidator(value: any) {
    return 'amount' in value && 'currency' in value && 'decimals' in value
        && amountValidator(value.amount)
        && typeof value.currency === 'string'
        && typeof value.decimals === 'number' && Number.isInteger(value.decimals);
}

function fiatAmountInfoValidator(value: any) {
    return 'amount' in value && 'currency' in value
        && typeof value.amount === 'number'
        && typeof value.currency === 'string';
}

@Component({components: {Account, Timer, Amount, FiatAmount, Tooltip, ArrowRightSmallIcon}})
class PaymentInfoLine extends Vue {
    private static readonly REFERENCE_RATE_UPDATE_INTERVAL = 60000; // every minute
    private static readonly RATE_DEVIATION_THRESHOLD = .05;

    @Prop({type: Object, required: true, validator: cryptoAmountInfoValidator}) public cryptoAmount!: CryptoAmountInfo;
    @Prop({type: Object, validator: fiatAmountInfoValidator}) public fiatAmount?: FiatAmountInfo;
    // Note that merchantFee and networkFee have no effect if fiatAmount is not set, as the tooltip in which they appear
    // is only visible when fiatAmount is set. As the fiatAmount was only introduced in the v2 checkout request in the
    // Hub, the tooltip and merchantFee and networkFee are thus never visible for v1 checkout requests. This should be
    // ok though as the merchantFee also only exists in v2 and the free-service-info doesn't make too much sense for
    // nimiq.shop or the nimiq voting app which are currently the main apps using the v1 checkout.
    @Prop({validator: amountValidator}) public merchantFee?: number | bigint | BigInteger;
    @Prop({validator: amountValidator}) public networkFee?: number | bigint | BigInteger;
    @Prop({type: String, required: true}) public origin!: string;
    @Prop(String) public address?: string;
    @Prop(String) public shopLogoUrl?: string;
    @Prop(Number) public startTime?: number;
    @Prop(Number) public endTime?: number;
    @Prop({
        type: String,
        validator: (value: any) => Object.values(PaymentInfoLine.Themes).includes(value),
        default: 'normal',
    })
    public theme!: string;
    private referenceRate: number | null = null;
    private referenceRateUpdateTimeout: number = -1;

    private created() {
        this.updateReferenceRate();
    }

    private destroyed() {
        window.clearTimeout(this.referenceRateUpdateTimeout);
    }

    public async setTime(time: number) {
        await this.$nextTick(); // let vue update in case the timer was just added
        if (!this.$refs.timer) return;
        (this.$refs.timer as Timer).synchronize(time);
    }

    private get originDomain() {
        return this.origin.split('://')[1];
    }

    private get effectiveRate() {
        if (!this.fiatAmount) return null;
        // Fiat/crypto rate. Higher fiat/crypto rate means user is paying less crypto for the requested fiat amount
        // and is therefore better for the user. Note: precision loss should be acceptable here.
        return this.fiatAmount.amount / (Number(this.cryptoAmount.amount) / (10 ** this.cryptoAmount.decimals));
    }

    private get formattedMerchantFee() {
        if (this.merchantFee === null || this.merchantFee === undefined) return null;
        // Note: precision loss should be acceptable here
        const merchantFee = Number(this.merchantFee);
        const merchantFeePercent = (merchantFee / (Number(this.cryptoAmount.amount) - merchantFee)) * 100;
        // Round to two decimals. Always ceil to avoid displaying a lower fee than charged.
        return `${Math.ceil(merchantFeePercent * 100) / 100}%`;
    }

    private get isFormattedNetworkFeeZero() {
        if (this.networkFee === null || this.networkFee === undefined) return true;
        // Note: While we use the Amount component which does formatting itself, we manually format here to check
        // whether the formatted value is 0. Precision loss should be acceptable here.
        const networkFeeBaseCurrency = Number(this.networkFee) / (10 ** this.cryptoAmount.decimals);
        // Round to maxDecimals used above in the template
        const maxDecimals = Math.min(6, this.cryptoAmount.decimals);
        const roundingFactor = 10 ** maxDecimals;
        return Math.round(networkFeeBaseCurrency * roundingFactor) / roundingFactor === 0;
    }

    private get rateDeviation() {
        // Compare fiat/crypto rates. Positive rate deviation (i.e. higher effective rate) is better for the user.
        if (this.effectiveRate === null || this.referenceRate === null) return null;
        return (this.effectiveRate - this.referenceRate) / this.referenceRate;
    }

    private get formattedRateDeviation() {
        if (this.rateDeviation === null) return null;
        // Converted to absolute percent, rounded to one decimal
        return `${Math.round(Math.abs(this.rateDeviation) * 100 * 10) / 10}%`;
    }

    @Watch('cryptoAmount.currency')
    @Watch('fiatAmount.currency')
    private async updateReferenceRate() {
        window.clearTimeout(this.referenceRateUpdateTimeout);
        const cryptoCurrency = this.cryptoAmount.currency.toLowerCase() as FiatApiSupportedCryptoCurrency;
        const fiatCurrency = this.fiatAmount
            ? this.fiatAmount.currency.toLowerCase() as FiatApiSupportedFiatCurrency
            : null;
        if (!this.fiatAmount
            || !Object.values(FiatApiSupportedFiatCurrency).includes(fiatCurrency)
            || !Object.values(FiatApiSupportedCryptoCurrency).includes(cryptoCurrency)
        ) {
            this.referenceRate = null;
            return;
        }

        const { [cryptoCurrency]: { [fiatCurrency]: referenceRate }} =
            await getExchangeRates([cryptoCurrency], [fiatCurrency]);
        this.referenceRate = referenceRate || null;

        this.referenceRateUpdateTimeout = window.setTimeout(
            () => this.updateReferenceRate(),
            PaymentInfoLine.REFERENCE_RATE_UPDATE_INTERVAL,
        );
    }
}

namespace PaymentInfoLine { // tslint:disable-line no-namespace
    export enum Themes {
        NORMAL = 'normal',
        INVERSE = 'inverse',
    }
}

export default PaymentInfoLine;
</script>

<style scoped>
    .info-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        margin: 1.75rem 2.5rem 1rem 2.375rem;
        flex-shrink: 0;
        font-size: 2rem;
        line-height: 1.5;
        font-weight: normal;
    }

    .amounts {
        display: flex;
        flex-direction: column;
        margin-bottom: .125rem;
        cursor: default;
    }

    .amounts > .amount {
        color: var(--nimiq-light-blue);
        font-weight: bold;
    }

    .inverse-theme .amounts > .amount {
        color: var(--nimiq-light-blue-on-dark, var(--nimiq-light-blue));
    }

    .amounts .trigger .fiat-amount {
        margin-top: .25rem;
        color: var(--nimiq-blue);
        font-size: 1.625rem;
        line-height: 1;
        font-weight: 600;
        opacity: .6;
    }

    .price-tooltip label {
        font-weight: normal;
    }

    .price-tooltip .price-breakdown {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 1rem;
        row-gap: 1.5rem;
        white-space: nowrap;
    }

    .price-tooltip .price-breakdown label + * {
        justify-self: end;
    }

    .price-tooltip .info {
        font-size: 1.5rem;
        opacity: .5;
    }

    .price-tooltip .rate-info {
        margin-top: .5rem;
    }

    .price-tooltip .rate-info.nq-orange {
        opacity: 1;
    }

    .price-tooltip .free-service-info {
        width: 85%;
        margin-top: 1.5rem;
        color: var(--nimiq-green);
        opacity: 1;
    }

    .price-tooltip hr {
        margin: 2rem -1rem 1.5rem;
        border: unset;
        border-top: 1px solid currentColor;
        opacity: .2;
    }

    .price-tooltip .total {
        /* The total row is on purpose not part of the grid as the label is shorter and the value longer */
        display: flex;
        justify-content: space-between;
    }

    .price-tooltip .total .amount {
        font-weight: bold;
    }

    .price-tooltip .network-fee-info {
        margin-top: .5rem;
        margin-bottom: -.25rem;
        text-align: right;
        white-space: nowrap;
    }

    .price-tooltip .network-fee-info .amount {
        margin-left: -.5ch;
    }

    .arrow-runway {
        flex-grow: 1;
        min-width: 3rem;
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

    .account {
        padding: 0;
        width: auto !important;
        flex-shrink: 1;
    }

    .account >>> .identicon {
        min-width: unset;
        width: 3.375rem;
        height: 3.375rem;
        margin-right: 0;
    }

    .account >>> .account-image {
        border-radius: .5rem;
        width: 3rem;
        height: 3rem;
        margin-top: 0;
        margin-bottom: 0;
    }

    .account >>> .label {
        padding-left: .75rem;
        margin-bottom: .25rem;
        font-weight: unset;
        opacity: 1 !important;
        /* Remove gradient-fade-out and use text-overflow instead */
        mask-image: unset;
        white-space: nowrap;
        text-overflow: fade;
    }

    .timer {
        margin: auto -.5rem auto 1rem;
        flex-shrink: 0;
    }

    .inverse-theme .amounts .trigger .fiat-amount,
    .inverse-theme .arrow-runway .nq-icon,
    .inverse-theme .account >>> .label {
        color: white;
    }
</style>
