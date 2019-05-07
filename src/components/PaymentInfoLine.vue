<template>
    <div class="info-line">
        <Amount :amount="amount + fee" :decimals="decimals" />
        <div class="arrow-runway">
            <ArrowRightIcon/>
        </div>
        <a href="javascript:void(0)" class="description" @click="merchantInfoClicked">
            <Account :address="address" :image="shopLogoUrl" :label="originDomain" />
            <InfoCircleIcon class="info-circle"/>
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import Amount from './Amount.vue';
import Account from './Account.vue';
import { InfoCircleIcon, ArrowRightIcon } from './Icons';

@Component({components: {Amount, Account, InfoCircleIcon, ArrowRightIcon}})
export default class PaymentInfoLine extends Vue {

    private get originDomain() {
        return this.origin.split('://')[1];
    }
    @Prop({type: Number, default: 2}) public decimals!: number;
    @Prop(Number) private amount!: number;
    @Prop(Number) private fee!: number;
    @Prop(String) private origin!: string;
    @Prop(String) private address?: string;
    @Prop(String) private shopLogoUrl?: string;

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
        margin: 2.5rem 2.5rem 1rem 2.5rem;
        flex-shrink: 0;
        font-size: 2rem;
        line-height: 1.5;
        font-weight: normal;
    }

    .amount {
        font-weight: bold;
        color: #0582CA;
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
        animation: arrow-shooting 2s ease-in-out infinite;
        /* opacity: 0.3;     */
    }

    @keyframes arrow-shooting {
        from { transform: translateX(-2rem); }
        10% { opacity: 0; }
        50% { opacity: 0.3; }
        90% { opacity: 0; }
        to { transform: translateX(2rem); }
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
        margin-top: -0.25rem;
        margin-bottom: -0.125rem;
        margin-right: 1rem;
    }

    .account >>> .label {
        padding-left: 0;
        transition: opacity .3s ease;
        font-weight: unset;
        opacity: 1;
    }

    .description .nq-icon {
        opacity: 0.3;
        margin-left: 1rem;
        transition: opacity .3s ease;
    }

    .description:hover .account >>> .label,
    .description:focus .account >>> .label {
        opacity: .7;
    }

    .description:hover .nq-icon,
    .description:focus .nq-icon {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: 1;
    }
</style>
