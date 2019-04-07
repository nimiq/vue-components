<template>
    <div class="info-line">
        <Amount :amount="amount + fee" :decimals="decimals" />
        <div class="arrow-runway">
            <i class="nq-icon arrow-right"></i>
        </div>
        <a href="javascript:void(0)" class="description" @click="merchantInfoClicked">
            <Account :address="address" :image="shopLogoUrl" :label="originDomain" />
            <i class="nq-icon info-circle"></i>
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import Amount from './Amount.vue';
import Account from './Account.vue';

@Component({components: {Amount, Account}})
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
    /* Nimiq Style */
    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.info-circle {
        background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="7.83301" x2="8" y2="11.333" stroke="%231F2348" stroke-linecap="round"/><circle cx="8" cy="4.75" r="0.5" fill="%231F2348" stroke="%231F2348" stroke-width="0.5"/><circle cx="8" cy="8" r="7.5" stroke="%231F2348"/></svg>');
    }

    .nq-icon.arrow-right {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 18" height="18" width="23"><path d="m 1.014242,9.04854 19.00211,-2.8e-4" stroke="%231F2348" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M 14.015222,16.001 21.014732,8.99951 14.015222,2" stroke="%231F2348" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
    /* END Nimiq Style */

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
        overflow: hidden;
    }

    .arrow-right {
        opacity: 0;
        width: 100%;
        background-size: 2rem;
        /* animation: arrow-shooting 2s ease-in-out infinite; */
        opacity: 0.3;
        background-position: center;
    }

    @keyframes arrow-shooting {
        from { transform: translateX(calc(20% - 1rem)); }
        10% { opacity: 0; }
        50% { opacity: 0.3; }
        90% { opacity: 0; }
        to { transform: translateX(calc(80% - 1rem)); }
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

    .info-circle {
        opacity: 0.3;
        margin-left: 1rem;
        transition: opacity .3s ease;
    }

    .description:hover .account >>> .label,
    .description:focus .account >>> .label {
        opacity: .7;
    }

    .description:hover .info-circle,
    .description:focus .info-circle {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: 1;
    }
</style>
