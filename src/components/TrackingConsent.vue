<template>
    <div
        id="tracking-consent"
        class="tracking-consent-banner nq-shadow"
        :class="theme"
    >
        {{ text.main }} ❤️
        <div class="button-group">
            <button
                class="nq-button-s"
                :class="{ inverse: theme === 'dark' }"
            >{{ text.no }}</button>
            <button
                class="nq-button-pill light-blue"
            >{{ text.yes }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const STORAGE_KEYS = ['tracking-consent', 'tracking-consensus'];

@Component
export default class TrackingConsent extends Vue {
    @Prop({
        type: Object,
        default:  () => ({
            main: 'Help Nimiq improve by sharing anonymized usage data. Thank you!',
            yes: 'Yes',
            no: 'No',
        }),
        validator: (value) => (
            value && typeof value === 'object' &&
            value.main && typeof value.main === 'string' && value.main.length &&
            value.yes && typeof value.yes === 'string' && value.yes.length &&
            value.no && typeof value.no === 'string' && value.no.length
        ),
    })
    private text!: {
        main: string,
        yes: string,
        no: string,
    };

    @Prop({
        type: String,
        default: 'light',
        validator: (theme) => ['dark', 'light'].includes(theme),
    })
    public theme!: string;
}
</script>

<style scoped>
    .tracking-consent-banner {
        position: fixed;
        bottom: 2rem;
        z-index: 900;

        padding: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 1rem;
        font-size: 2rem;
    }

    .tracking-consent-banner.light {
        background: white;
        color: var(--nimiq-blue);
    }

    .tracking-consent-banner.dark {
        background: var(--nimiq-blue);
        color: white;
    }

    .button-group {
        margin-left: 3rem;
        display: flex;
    }

    .button-group button:nth-child(2) {
        margin-left: 1rem;
    }

    @media (max-width: 860px) {
        .tracking-consent-banner {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            bottom: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            padding: 2.5rem;
        }

        .button-group {
            margin-left: 0;
            margin-top: 16px;
        }
    }
</style>
