<template>
    <div class="account-ring">
        <div v-for="n in 6" class="account" :key="n">
            <Identicon :address="addresses[n - 1]" :class="{ 'pop-in': animate && addresses.length >= n }"></Identicon>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from './Identicon.vue';

@Component({components: { Identicon }})
export default class AccountRing extends Vue {
    @Prop({ default: () => [], type: Array })
    public addresses!: string[];

    @Prop({ default: false, type: Boolean })
    public animate!: boolean;
}
</script>

<style scoped>
    .account-ring {
        position: relative;
        width: 11.25rem;
        --hex-size: 35.556%;
        --hex-height: calc(var(--hex-size) * (24 / 27));
        --gap-x: calc(var(--hex-size) / 12);
        --gap-y: calc(var(--gap-x) * .9);
    }

    /* for setting height automatically depending on width */
    .account-ring::before {
        content: '';
        padding-top: 100%;
        display: block;
    }

    .account {
        width: var(--hex-size);
        height: var(--hex-size);
        position: absolute;
    }

    .account .identicon {
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .pop-in {
        animation: pop-in 0.5s cubic-bezier(.73,2.08,.48,1) backwards;
    }

    @keyframes pop-in {
        from { transform: scale(0); }
        to   { transform: scale(1); }
    }
    .account:nth-child(1) {
        left: calc(50% - 1.25 * var(--hex-size) - var(--gap-x));
        top: calc(50% - 1 * var(--hex-height) - 0.5 * var(--gap-y));
    }
    .account:nth-child(2) {
        left: calc(50% - 1.25 * var(--hex-size) - var(--gap-x));
        top: calc(50% + 0.5 * var(--gap-y));
    }
    .account:nth-child(3) {
        left: calc(50% - 0.5 * var(--hex-size));
        top: calc(50% + 0.5 * var(--hex-height) + var(--gap-y));
    }
    .account:nth-child(4) {
        left: calc(50% + 0.25 * var(--hex-size) + var(--gap-x));
        top: calc(50% + 0.5 * var(--gap-y));
    }
    .account:nth-child(5) {
        left: calc(50% + 0.25 * var(--hex-size) + var(--gap-x));
        top: calc(50% - 1 * var(--hex-height) - 0.5 * var(--gap-y));
    }
    .account:nth-child(6) {
        left: calc(50% - 0.5 * var(--hex-size));
        top: calc(50% - 1.5 * var(--hex-height) - var(--gap-y));
    }

    .account:nth-child(1) .pop-in { animation-delay: 500ms; }
    .account:nth-child(2) .pop-in { animation-delay: 550ms; }
    .account:nth-child(3) .pop-in { animation-delay: 600ms; }
    .account:nth-child(4) .pop-in { animation-delay: 650ms; }
    .account:nth-child(5) .pop-in { animation-delay: 700ms; }
    .account:nth-child(6) .pop-in { animation-delay: 750ms; }
</style>
