<template>
    <div class="info-line" :class="{ 'inverse-theme': theme === constructor.Themes.INVERSE }">
        <div class="amounts"
            @mouseenter="$refs['price-tooltip'] && $refs['price-tooltip'].show()"
            @mouseleave="$refs['price-tooltip'] && $refs['price-tooltip'].hide()"
            @click="$refs['price-tooltip'] && Date.now() - lastTooltipToggle > 200 && $refs['price-tooltip'].toggle()"
        >
            <Amount
                :currency="cryptoAmount.currency"
                :amount="cryptoAmount.amount"
                :currencyDecimals="cryptoAmount.decimals"
                :minDecimals="0"
                :maxDecimals="Math.min(4, cryptoAmount.decimals)"
            />
            <Tooltip ref="price-tooltip"
                v-if="fiatAmount"
                :container="$parent"
                preferredPosition="bottom left"
                :margin="{ left: 8 }"
                :styles="{
                    minWidth: '37rem',
                    padding: '2rem',
                    lineHeight: 1.3,
                }"
                :theme="theme"
                @show="onPriceTooltipToggle(true)"
                @hide="onPriceTooltipToggle(false)"
                @click.native.stop
                class="price-tooltip"
            >
                <template #trigger>
                    <AlertTriangleIcon v-if="isBadRate" />
                    <FiatAmount :currency="fiatAmount.currency" :amount="fiatAmount.amount" />
                </template>
                <template #default>
                    <div class="price-breakdown">
                        <label>{{ $t('Order amount') }}</label>
                        <FiatAmount :currency="fiatAmount.currency" :amount="fiatAmount.amount" />
                        <template v-if="vendorMarkup || vendorMarkup === 0">
                            <label v-if="vendorMarkup >= 0">{{ $t('Vendor crypto markup') }}</label>
                            <label v-else>{{ $t('Vendor crypto discount') }}</label>
                            <div>{{ formattedVendorMarkup }}</div>
                        </template>
                        <label :class="{ 'nq-orange': isBadRate }">
                            {{ $t('Effective rate') }}
                        </label>
                        <div :class="{ 'nq-orange': isBadRate }">
                            <FiatAmount :currency="fiatAmount.currency" :amount="effectiveRate"
                                :maxRelativeDeviation=".0001"
                            />
                            / {{ cryptoAmount.currency.toUpperCase() }}
                        </div>
                    </div>
                    <div v-if="rateInfo()"
                        :class="{ 'nq-orange': isBadRate }"
                        class="rate-info info"
                    >
                        {{ rateInfo() }}
                    </div>
                    <div class="free-service-info info">{{ $t('Nimiq provides this service free of charge.') }}</div>
                    <hr>
                    <div class="total">
                        <label>{{ $t('Total') }}</label>
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
                        <I18n v-if="!isFormattedNetworkFeeZero" path="{amount} suggested network fee">
                            <template #amount>
                                <Amount
                                    :currency="cryptoAmount.currency"
                                    :amount="networkFee"
                                    :currencyDecimals="cryptoAmount.decimals"
                                    :minDecimals="0"
                                    :maxDecimals="Math.min(6, cryptoAmount.decimals)"
                                />
                            </template>
                        </I18n>
                        <template v-else>{{ $t('network fee') }}</template>
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

import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import { FiatApiSupportedFiatCurrency, FiatApiSupportedCryptoCurrency, getExchangeRates } from '@nimiq/utils';
import Account from './Account.vue';
import Timer from './Timer.vue';
import Amount, { amountValidator } from './Amount.vue';
import FiatAmount from './FiatAmount.vue';
import Tooltip from './Tooltip.vue';
import { AlertTriangleIcon, ArrowRightSmallIcon } from './Icons';
import I18nMixin from '../i18n/I18nMixin';
import I18n from '../i18n/I18n.vue';

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

@Component({
    name: 'PaymentInfoLine',
    components: {
        Account,
        Timer,
        Amount,
        FiatAmount,
        Tooltip,
        AlertTriangleIcon,
        ArrowRightSmallIcon,
        I18n,
    },
})
class PaymentInfoLine extends Mixins(I18nMixin) {
    private static readonly REFERENCE_RATE_UPDATE_INTERVAL = 60000; // every minute
    private static readonly RATE_DEVIATION_THRESHOLD = .1;

    @Prop({type: Object, required: true, validator: cryptoAmountInfoValidator}) public cryptoAmount!: CryptoAmountInfo;
    @Prop({type: Object, validator: fiatAmountInfoValidator}) public fiatAmount?: FiatAmountInfo;
    // Note that vendorMarkup and networkFee have no effect if fiatAmount is not set, as the tooltip in which they
    // appear is only visible when fiatAmount is set. As the fiatAmount was only introduced in the v2 checkout request
    // in the Hub, the tooltip and vendorMarkup and networkFee are thus never visible for v1 checkout requests. This
    // should be ok though as the vendorMarkup also only exists in v2 and the free-service-info doesn't make too much
    // sense for nimiq.shop or the nimiq voting app which are currently the main apps using the v1 checkout.
    @Prop({ type: Number, validator: (value: unknown) => value > -1 }) public vendorMarkup?: number;
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
    private lastTooltipToggle: number = -1;

    protected created() {
        this.updateReferenceRate();
    }

    protected destroyed() {
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

    private get formattedVendorMarkup() {
        if (typeof this.vendorMarkup !== 'number') return null;
        // Convert to percent and round to two decimals. Always ceil to avoid displaying a lower fee than charged or
        // larger discount than applied. Subtract a small epsilon to avoid that numbers get rounded up as a result of
        // floating point imprecision after multiplication. Otherwise formatting for example .07 would result in 7.01%.
        return `${this.vendorMarkup >= 0 ? '+' : ''}${Math.ceil(this.vendorMarkup * 100 * 100 - 1e-10) / 100}%`;
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
        // Compare rates. Convert them from fiat/crypto to crypto/fiat as the user will be paying crypto in the end and
        // the flipped rates can therefore be compared more intuitively. Negative rate deviation is better for the user.
        if (this.effectiveRate === null || this.referenceRate === null) return null;
        const flippedEffectiveRate = 1 / this.effectiveRate;
        const flippedReferenceRate = 1 / this.referenceRate;
        return (flippedEffectiveRate - flippedReferenceRate) / flippedReferenceRate;
    }

    private get isBadRate() {
        if (this.rateDeviation === null) return false;
        return this.rateDeviation >= PaymentInfoLine.RATE_DEVIATION_THRESHOLD
            || (this.vendorMarkup
                && this.vendorMarkup < 0 // verify promised discount
                && this.rateDeviation >= this.vendorMarkup + PaymentInfoLine.RATE_DEVIATION_THRESHOLD
            );
    }

    private get formattedRateDeviation() {
        if (this.rateDeviation === null) return null;
        // Converted to absolute percent, rounded to one decimal
        return `${Math.round(Math.abs(this.rateDeviation) * 100 * 10) / 10}%`;
    }

    private rateInfo() {
        // Note: this method is not a getter / computed property to update on language changes
        if (this.rateDeviation === null
            || (Math.abs(this.rateDeviation) < PaymentInfoLine.RATE_DEVIATION_THRESHOLD && !this.isBadRate)) {
            return null;
        }
        if (this.rateDeviation < 0 && this.isBadRate) {
            // False discount
            return this.$t(
                'Your actual discount is approx. {formattedRateDeviation} compared '
                + 'to the current market rate (coingecko.com).',
                { formattedRateDeviation: this.formattedRateDeviation },
            );
        }

        if (this.rateDeviation > 0) {
            return this.$t(
                'You are paying approx. {formattedRateDeviation} more '
                + 'than at the current market rate (coingecko.com).',
                { formattedRateDeviation: this.formattedRateDeviation },
            );
        } else {
            return this.$t(
                'You are paying approx. {formattedRateDeviation} less '
                + 'than at the current market rate (coingecko.com).',
                { formattedRateDeviation: this.formattedRateDeviation },
            );
        }

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

    private onPriceTooltipToggle(isShow: boolean) {
        this.lastTooltipToggle = Date.now(); // record last toggle to avoid second toggle on click just after mouseover
        if (!isShow) return;
        this.updateReferenceRate();
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

    .amounts .trigger .nq-icon {
        font-size: 1.625rem;
        color: var(--nimiq-orange);
        vertical-align: middle;
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
        column-gap: 2rem;
        row-gap: 1.5rem;
        white-space: nowrap;
    }

    .price-tooltip .price-breakdown label + * {
        justify-self: end;
    }

    .price-tooltip .info {
        font-size: 1.625rem;
        opacity: .5;
    }

    .price-tooltip .rate-info {
        margin-top: .5rem;
    }

    .price-tooltip .rate-info.nq-orange {
        opacity: 1;
    }

    .price-tooltip .free-service-info {
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
