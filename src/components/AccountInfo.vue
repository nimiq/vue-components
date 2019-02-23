<template>
    <div class="account-info">
        <a href="javascript:void(0)" class="nq-icon cancel-circle" @click="close"></a>
        <div v-if="shopLogoUrl && showShopLogo" class="shop-logo">
            <div class="cover"></div>
            <img class="logo" :src="shopLogoUrl" @error="showShopLogo = false">
        </div>
        <Identicon v-else :address="address"/>
        <div v-if="label || originDomain || walletLabel" class="labels">
            <div v-if="label || originDomain" class="label">{{ label || originDomain }}</div>
            <div v-if="walletLabel" class="wallet-label nq-label">{{ walletLabel }}</div>
        </div>
        <Amount v-if="balance !== undefined" :amount="balance" :decimals="2"/>
        <AddressDisplay :address="address"/>

        <svg width="0" height="0" viewBox="0 0 146.0 146.0">
            <defs>
                <clipPath id="nimiq-rounded-hexagon" clipPathUnits="objectBoundingBox" transform="scale(0.006849315068 0.006849315068)">
                    <path d="M 44.060547,8 C 38.556215,8 33.46353,10.940381 30.707031,15.708984 L 2.0605469,65.291016 c -2.74702868,4.768904 -2.74702868,10.649064 0,15.417968 L 30.701172,130.29102 C 33.449256,135.06056 38.546656,138 44.054688,138 H 101.3418 c 5.50812,0 10.60514,-2.93949 13.35351,-7.70898 v -0.002 l 28.64063,-49.578122 v -0.002 c 2.75485,-4.768341 2.75485,-10.649627 0,-15.417968 v -0.002 L 114.69531,15.710938 C 111.94712,10.940605 106.85041,8 101.3418,8 Z">
                    </path>
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Identicon from './Identicon.vue';
import Amount from './Amount.vue';
import AddressDisplay from './AddressDisplay.vue';

@Component({components: {Identicon, Amount, AddressDisplay}})
export default class AccountInfo extends Vue {
    @Prop(String) private address!: string;
    @Prop(String) private shopLogoUrl?: string;
    @Prop(String) private label?: string;
    @Prop(String) private origin?: string;
    @Prop(String) private walletLabel?: string;
    @Prop(Number) private balance?: number;

    private showShopLogo: boolean = true;

    private get originDomain() {
        return this.origin ? this.origin.split('://')[1] : '';
    }

    @Emit()
    // tslint:disable-next-line no-empty
    private close() {}
}
</script>

<style scoped>
    /* Nimiq Style */
    .nq-label {
        font-size: calc(1.75 * var(--nimiq-size, 8px));
        line-height: 0.857;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.107em;
        margin: calc(1 * var(--nimiq-size, 8px)) 0;
        opacity: 0.7;
    }

    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.cancel-circle {
        background-image: url('data:image/svg+xml,<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.80761 9.80762C14.8761 4.7391 23.1239 4.7391 28.1924 9.80762C33.2609 14.8761 33.2609 23.1239 28.1924 28.1924C23.1239 33.2609 14.8761 33.2609 9.80761 28.1924C4.73909 23.1239 4.73909 14.8761 9.80761 9.80762ZM19 17.5858L22.5355 14.0503L23.9497 15.4645L20.4142 19L23.9497 22.5355L22.5355 23.9498L19 20.4142L15.4645 23.9498L14.0503 22.5355L17.5858 19L14.0503 15.4645L15.4645 14.0503L19 17.5858Z" fill="%23101531"/></svg>');
    }
    /* END Nimiq Style */

    .account-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        border-radius: calc(1 * var(--nimiq-size, 8px));
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .cancel-circle {
        width: calc(3 * var(--nimiq-size, 8px));
        height: calc(3 * var(--nimiq-size, 8px));
        background-size: 135%;
        position: absolute;
        top: calc(2 * var(--nimiq-size, 8px));
        right: calc(2 * var(--nimiq-size, 8px));
        opacity: 0.2;
        transition: opacity .3s ease, transform .45s ease;
    }

    .cancel-circle::after {
        /* enlarged click area */
        content: '';
        display: block;
        position: absolute;
        top: calc(-1.5 * var(--nimiq-size, 8px));
        right: calc(-1.5 * var(--nimiq-size, 8px));
        bottom: calc(-1.5 * var(--nimiq-size, 8px));
        left: calc(-1.5 * var(--nimiq-size, 8px));
    }

    .cancel-circle:focus,
    .cancel-circle:hover {
        opacity: .4;
        /* transform: scale(1.06); */
    }

    .cancel-circle:focus {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: .7;
        outline: none;
    }

    .identicon,
    .shop-logo {
        width: calc(18.25 * var(--nimiq-size, 8px));
        height: calc(18.25 * var(--nimiq-size, 8px));
        margin-bottom: calc(3 * var(--nimiq-size, 8px));
    }

    .shop-logo {
        position: relative;
    }

    .shop-logo img {
        width: 100%;
        height: 100%;
        clip-path: url(#nimiq-rounded-hexagon);
    }

    .shop-logo .cover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: 0 center;
        background-size: 100%;
        background-size: contain;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="146" height="146"><path d="M113.829 16.20974L142.47 65.7903c2.578 4.461 2.578 9.9584 0 14.4194L113.829 129.79c-2.57 4.461-7.335 7.21-12.488 7.21H44.0555c-5.1529 0-9.918-2.749-12.4877-7.21L2.92725 80.2097c-2.56966698-4.461-2.56966698-9.9584 0-14.4194L31.5723 16.20974C34.151 11.74872 38.9116 9 44.06 9h57.281c5.153 0 9.918 2.74872 12.488 7.20974z" clip-rule="evenodd" stroke="%231f2348" stroke-width="2" opacity=".2"/></svg>');
        z-index: 1;
    }

    .labels {
        text-align: center;
    }

    .label {
        font-size: calc(3 * var(--nimiq-size, 8px));
        font-weight: 600;
        line-height: 1;
    }

    .label + .wallet-label {
        margin-top: calc(1.5 * var(--nimiq-size, 8px));
    }

    .amount {
        font-size: calc(3 * var(--nimiq-size, 8px));
        margin-top: calc(2 * var(--nimiq-size, 8px));
    }

    .address-display {
        margin-top: calc(7 * var(--nimiq-size, 8px));
    }

    .labels + .address-display {
        margin-top: calc(9 * var(--nimiq-size, 8px));
    }
</style>
