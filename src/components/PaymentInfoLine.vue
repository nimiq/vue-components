<template>
    <div class="info-line">
        <Amount :amount="this.amount + this.fee" :decimals="decimals"/>
        <div class="arrow-runway">
            <i class="nq-icon arrow-right"></i>
        </div>
        <a href="javascript:void(0)" class="description" @click="merchantInfoClicked">
            <div v-if="shopLogoUrl && showShopLogo" class="shop-logo">
                <div class="cover"></div>
                <img class="logo" :src="shopLogoUrl" @error="showShopLogo = false">
            </div>
            <Identicon v-else :address="address"/>
            <span class="origin">{{ originDomain }}</span>
            <i class="nq-icon info-circle"></i>
        </a>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import Amount from './Amount.vue';
import Identicon from './Identicon.vue';

@Component({components: {Amount, Identicon}})
export default class PaymentInfoLine extends Vue {

    private get originDomain() {
        return this.origin.split('://')[1];
    }
    @Prop({type: Number, default: 2, validator(value) { return value >= 0 && value <= 5; }}) public decimals!: number;
    @Prop(Number) private amount!: number;
    @Prop(Number) private fee!: number;
    @Prop(String) private origin!: string;
    @Prop(String) private address?: string;
    @Prop(String) private shopLogoUrl?: string;

    private showShopLogo: boolean = true;

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

    .shop-logo,
    .identicon {
        min-width: unset;
        width: 3.375rem;
        height: 3.375rem;
        margin-top: -0.25rem;
        margin-bottom: -0.125rem;
        margin-right: 1rem;
    }

    .shop-logo {
        position: relative;
    }

    .shop-logo img {
        width: 100%;
        height: 100%;
    }

    .shop-logo .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        background-size: contain;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 27 27"><path fill="%231F2348" opacity=".2" d="M19.1,3c0.4,0,0.9,0.2,1.1,0.6l5.6,9.8c0.2,0.4,0.2,0.9,0,1.3l-5.6,9.8C20,24.8,19.6,25,19.1,25H7.9 c-0.4,0-0.9-0.2-1.1-0.6l-5.6-9.7c-0.2-0.4-0.2-0.9,0-1.3l5.6-9.8C7,3.2,7.4,3,7.9,3H19.1 M19.1,2H7.9C7.1,2,6.3,2.4,5.9,3.1 l-5.6,9.8c-0.4,0.7-0.4,1.6,0,2.2l5.6,9.8C6.3,25.6,7.1,26,7.9,26h11.3c0.8,0,1.5-0.4,1.9-1.1l5.6-9.8c0.4-0.7,0.4-1.6,0-2.2 l-5.6-9.8C20.7,2.4,19.9,2,19.1,2L19.1,2z"/><path fill="white" d="M21.1,24.9c-0.4,0.7-1.1,1.1-1.9,1.1H7.9c-0.8,0-1.5-0.4-1.9-1.1l-5.6-9.8C0.1,14.8,0,14.4,0,14v13h27V14 c0,0.4-0.1,0.8-0.3,1.1L21.1,24.9z"/><path fill="white" d="M0,0v14c0-0.4,0.1-0.8,0.3-1.1l5.6-9.8C6.3,2.4,7.1,2,7.9,2h11.3c0.8,0,1.5,0.4,1.9,1.1l5.6,9.8 c0.2,0.3,0.3,0.7,0.3,1.1V0H0z"/></svg>');
    }

    .origin {
        margin-top: -0.25rem;
        transition: opacity .3s ease;
    }

    .info-circle {
        opacity: 0.3;
        margin-left: 1rem;
        transition: opacity .3s ease;
    }

    .description:hover .origin,
    .description:focus .origin {
        opacity: .7;
    }

    .description:hover .info-circle,
    .description:focus .info-circle {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: 1;
    }
</style>
