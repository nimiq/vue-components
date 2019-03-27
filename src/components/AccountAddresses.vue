<template>
    <div class="wallet-identifier">
        <div v-for="n in 6" class="account" :key="n" :class="{ placeholder: n > addresses.length, 'pop-in': animate }">
            <Identicon v-if="n <= addresses.length" :address="addresses[n - 1]"></Identicon>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from './Identicon.vue';

@Component({components: { Identicon }})
export default class WalletIdentifier extends Vue {
    @Prop({ default: () => [], type: Array })
    public addresses!: string[];

    @Prop({ default: false, type: Boolean })
    public animate!: boolean;
}
</script>

<style scoped>
    .wallet-identifier {
        position: relative;
        --hex-width: 4rem;
        --hex-height: calc(var(--hex-width) * (24 / 27)); /* from placeholder viewBox="0 0 27 24" */
        --gap-x: calc(var(--hex-width) / 12);
        --gap-y: calc(var(--gap-x) * .9);
        min-height: calc(3 * var(--hex-height) + 2 * var(--gap-y));
        min-width: calc(2.5 * var(--hex-width) + 2 * var(--gap-x));
    }

    .account {
        width: var(--hex-width);
        height: var(--hex-height);
        position: absolute;
    }

    .account .identicon {
        width: 100%;
        height: 100%;
    }

    .placeholder {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 24" width="100%" height="100%"><path d="M26.6991 10.875L21.0741 1.125C20.6691 0.4275 19.9266 0 19.1241 0H7.87414C7.07164 0 6.32914 0.4275 5.92789 1.125L0.302891 10.875C-0.0983594 11.5725 -0.0983594 12.4275 0.302891 13.125L5.92789 22.875C6.32914 23.5725 7.07164 24 7.87414 24H19.1241C19.9266 24 20.6691 23.5725 21.0704 22.875L26.6954 13.125C27.1004 12.4275 27.1004 11.5725 26.6991 10.875Z"></path></svg>') center no-repeat content-box;
        opacity: 0.1;
        color: var(--nq-blue);
        padding: calc(var(--hex-width) / 30) calc(var(--hex-width) / 22.5);
    }

    .pop-in {
        animation: pop-in 0.5s cubic-bezier(.73,2.08,.48,1) backwards;
    }

    @keyframes pop-in {
        from { transform: scale(0); }
        to   { transform: scale(1.15); }
    }

    .account:nth-child(1) {
        left: calc(50% - 0.5 * var(--hex-width));
        top: calc(50% - 1.5 * var(--hex-height) - var(--gap-y));
    }
    .account:nth-child(2) {
        left: calc(50% - 1.25 * var(--hex-width) - var(--gap-x));
        top: calc(50% - 1 * var(--hex-height) - 0.5 * var(--gap-y));
    }
    .account:nth-child(3) {
        left: calc(50% - 1.25 * var(--hex-width) - var(--gap-x));
        top: calc(50% + 0.5 * var(--gap-y));
    } 
    .account:nth-child(4) {
        left: calc(50% - 0.5 * var(--hex-width));
        top: calc(50% + 0.5 * var(--hex-height) + var(--gap-y));
    }
    .account:nth-child(5) {
        left: calc(50% + 0.25 * var(--hex-width) + var(--gap-x));
        top: calc(50% + 0.5 * var(--gap-y));
    }
    .account:nth-child(6) {
        left: calc(50% + 0.25 * var(--hex-width) + var(--gap-x));
        top: calc(50% - 1 * var(--hex-height) - 0.5 * var(--gap-y));
    }

    .account:nth-child(1).pop-in { animation-delay: 500ms; }
    .account:nth-child(2).pop-in { animation-delay: 550ms; }
    .account:nth-child(3).pop-in { animation-delay: 600ms; }
    .account:nth-child(4).pop-in { animation-delay: 650ms; }
    .account:nth-child(5).pop-in { animation-delay: 700ms; }
    .account:nth-child(6).pop-in { animation-delay: 750ms; }
</style>
