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
        console.log(this.origin);
        return this.origin ? this.origin.split('://')[1] : '';
    }

    @Emit()
    // tslint:disable-next-line no-empty
    close() {};
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
        border-radius: 1rem;
        width: 100%;
        height: 100%;
    }

    .cancel-circle {
        width: 3rem;
        height: 3rem;
        background-size: 135%;
        position: absolute;
        top: 2rem;
        right: 2rem;
        opacity: 0.16;
    }

    .cancel-circle::after {
        content: '';
        display: block;
        position: absolute;
        top: -1rem;
        right: -1rem;
        bottom: -1rem;
        left: -1rem;
    }

    .cancel-circle:focus,
    .cancel-circle:hover {
        opacity: 0.25;
    }

    .identicon,
    .shop-logo {
        width: 146px;
        height: 146px;
        margin-bottom: 3rem;
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
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="146" height="146"><path d="M0 0v73c0-2.662266.68703254-5.324533 2.0605469-7.708984L30.707031 15.708984C33.46353 10.940381 38.556215 8 44.060547 8H101.3418c5.50861 0 10.60532 2.940604 13.35351 7.710938l28.64063 49.578124v.001954c2.75485 4.768341 2.75485 10.649627 0 15.417968v.001954l-28.64063 49.578122v.00196C111.94694 135.06051 106.84992 138 101.3418 138H44.054688c-5.508033 0-10.605432-2.93944-13.353516-7.70898L2.0605469 80.708984C.68703254 78.324533 0 75.662266 0 73v73h146V0H0z" fill="white"/><path d="M113.829 16.20974L142.47 65.7903c2.578 4.461 2.578 9.9584 0 14.4194L113.829 129.79c-2.57 4.461-7.335 7.21-12.488 7.21H44.0555c-5.1529 0-9.918-2.749-12.4877-7.21L2.92725 80.2097c-2.56966698-4.461-2.56966698-9.9584 0-14.4194L31.5723 16.20974C34.151 11.74872 38.9116 9 44.06 9h57.281c5.153 0 9.918 2.74872 12.488 7.20974z" clip-rule="evenodd" stroke="%231f2348" stroke-width="2" opacity=".2"/></svg>');
    }

    .labels {
        text-align: center;
    }

    .label {
        font-size: 24px;
        font-weight: 600;
        line-height: 1;
    }

    .label + .wallet-label {
        margin-top: 12px;
    }

    .amount {
        font-size: 24px;
        margin-top: 2rem;
    }

    .address-display {
        margin-top: 7rem;
    }

    .labels + .address-display {
        margin-top: 9rem;
    }
</style>
