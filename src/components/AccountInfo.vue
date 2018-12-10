<template>
    <div class="account-info">
        <Identicon :address="address"/>
        <div v-if="label || walletLabel" class="labels">
            <div v-if="label" class="label">{{ label }}</div>
            <div v-if="walletLabel" class="wallet-label nq-label">{{ walletLabel }}</div>
        </div>
        <Amount v-if="balance !== undefined" :amount="balance" :decimals="2"/>
        <AddressDisplay :address="address"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from './Identicon.vue';
import Amount from './Amount.vue';
import AddressDisplay from './AddressDisplay.vue';

@Component({components: {Identicon, Amount, AddressDisplay}})
export default class AccountInfo extends Vue {
    @Prop(String) private address!: string;
    @Prop(String) private label?: string;
    @Prop(String) private walletLabel?: string;
    @Prop(Number) private balance?: number;
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
    /* END Nimiq Style */

    .account-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    .identicon {
        width: 144px;
        height: 144px;
        margin-bottom: 4rem;
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
        margin-bottom: 7rem;
    }
</style>
