<template>
    <div
        id="tracking-consent"
        class="tracking-consent-banner nq-shadow"
        :class="theme"
        v-if="!consentKnown"
    >
        {{ text.main }} ❤️
        <div class="button-group">
            <button
                class="nq-button-pill light-blue"
                @click="allowsConsent"
            >{{ text.yes }}</button>
            <button
                class="nq-button-s"
                @click="denyConsent"
                :class="{ inverse: theme === 'dark' }"
            >{{ text.no }}</button>
            <button
                class="nq-button-s"
                @click="allowsBrowserData"
                :class="{ inverse: theme === 'dark' }"
            >{{ text.browserOnly }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Consents {
    allowsBrowserData?: boolean;
    allowsUsageData?: boolean;
}

@Component
class TrackingConsent extends Vue {
    @Prop({
        type: Object,
        default:  () => ({
            main: 'Help Nimiq improve by sharing anonymized usage data. Thank you!',
            yes: 'Yes',
            no: 'No',
            browserOnly: 'Browser-info only',
        }),
        validator: (value) => (
            value && typeof value === 'object' &&
            value.no && typeof value.no === 'string' && value.no.length &&
            value.yes && typeof value.yes === 'string' && value.yes.length &&
            value.main && typeof value.main === 'string' && value.main.length &&
            value.browserOnly && typeof value.browserOnly === 'string' && value.browserOnly.length
        ),
    })
    private text: {
        main: string,
        yes: string,
        no: string,
        browserOnly: string,
    };

    @Prop({
        type: String,
        default: 'light',
        validator: (theme) => ['dark', 'light'].includes(theme),
    })
    private theme: string;

    @Prop({
        type: String,
        default: 'nimiq.com',
    })
    private domain: string;

    @Prop({
        type: Object,
        default: () => ({
            setTrackerUrl: TrackingConsent.MATOMO_URL + 'nimiq.php',
        }),
    })
    private options: {
        setSiteId: string, // 3 for safe.nimiq.com ?
        setTrackerUrl: string
        addDownloadExtensions?: string,
        trackPageView?: boolean,
        enableLinkTracking?: boolean,
        [k: string]: string | boolean,
    };

    @Prop({
        type: String,
        default: 'nimiq.js',
    })
    private tagManagerScript: string;

    private consentKnown: boolean = false;
    private _storage: Consents;

    private async mounted() {
        if (!window.startTime) {
            window.startTime = (new Date().getTime());
        }

        if (this.consents.allowsBrowserData || this.consents.allowsUsageData) {
            this._initMatomo();
        }

        const geoIpResponse = await fetch(TrackingConsent.GEOIP_SERVER);
        if (geoIpResponse.status !== 200) {
            throw new Error('Failed to contact geoip server');
        }
        const geoIpInfo = await geoIpResponse.json();
        if (geoIpInfo.continent !== 'EU') {
            this.allowsConsent();
        }
    }

    public get consents(): Consents {
        if (this._storage) {
            return this._storage;
        }

        const cookie = this._getCookie(TrackingConsent.STORAGE_KEYS.MAIN);
        if (cookie) {
            this._storage = JSON.parse(cookie);
            return this._storage;
        }

        const localStoredConsent =
            localStorage.getItem(TrackingConsent.STORAGE_KEYS.MAIN) ||
            localStorage.getItem(TrackingConsent.STORAGE_KEYS.SECOND);

        if (localStoredConsent) {
            this._storage = JSON.parse(localStoredConsent);
            this._setCookie(TrackingConsent.STORAGE_KEYS.MAIN, localStoredConsent);
            localStorage.removeItem(TrackingConsent.STORAGE_KEYS.MAIN);
            localStorage.removeItem(TrackingConsent.STORAGE_KEYS.SECOND);
            return this._storage;
        }

        return {};
    }

    public trackEvent(
        category: string,
        action: string,
        name?: string,
        value?: string | number,
    ): void {
        const _paq = window.paq || [];
        const obj: Array<string | number> = [category, action];

        if (name) {
            obj.push(name);
        }
        if (value) {
            obj.push(value);
        }

        _paq.push(obj);
    }

    private denyConsent(): void {
        this._setConsent({ allowsUsageData: false, allowsBrowserData: false });
    }

    private allowsConsent(): void {
        this._setConsent({ allowsUsageData: true, allowsBrowserData: true });
        this._initMatomo();
    }

    private allowsBrowserData(): void {
        this._setConsent({ allowsBrowserData: true });
        this._initMatomo();
    }

    private _setConsent(consent: Consents): void {
        this._setCookie(TrackingConsent.STORAGE_KEYS.MAIN, JSON.stringify(consent));
        this.consentKnown = true;
    }

    private _initMatomo() {
        // initialize matomo
        const _paq = window._paq || [];
        const _mtm = window._mtm || [];

        // set mtm start
        _mtm.push({
            'mtm.startTime': window.startTime,
            'event': 'mtm.Start',
        });

        // Get referrer from localstorage
        const referrer = localStorage.getItem('referrer');
        if (referrer) {
            _paq.push(['setReferrerUrl', decodeURIComponent(referrer)]);
            localStorage.removeItem('referrer');
        }

        // Cycle through options and set them
        Object.keys(this.options).forEach((k) => {
            const option = this.options[k];

            if (option) {
                _paq.push(typeof option === 'boolean' ? [k] : [k, option]);
            }
        });

        // append script
        (function() {
            const g = document.createElement('script');
            const s = document.getElementsByTagName('script')[0];
            g.type = 'text/javascript'; g.async = true; g.defer = true;
            g.src = TrackingConsent.MATOMO_URL + this.tagManagerScript;
            s.parentNode.insertBefore(g, s);
        })();
    }

    private _setCookie(
        cookieName: string,
        cookieValue: string,
        expirationDays?: number,
    ): void {
        const cookie = [cookieName + '=' + cookieValue];

        if (expirationDays) {
            const date = new Date();
            date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));

            cookie.push(';expires=' + date.toUTCString());
        }

        cookie.push('path=/');
        cookie.push('domain=' + this.domain);

        document.cookie = cookie.join(';');
    }

    private _getCookie(cookieName: string): string {
        return document.cookie.split('; ').map((c) => {
            const i = c.indexOf('=');
            const key = c.substring(0, i);
            const value = c.substring(i);

            return [key, value];
        }).reduce((acc, cur) => (acc[cur[0]] = cur[1], acc), {})[cookieName] || '';
    }
}

namespace TrackingConsent { // tslint:disable-line:no-namespace
    export enum STORAGE_KEYS {
        MAIN = 'tracking-consent',
        SECOND = 'tracking-consensus',
    }

    export const GEOIP_SERVER = 'https://geoip.nimiq-network.com:8443/v1/locate';
    export const MATOMO_URL = '//stats.nimiq-network.com/';
}

export default TrackingConsent;
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

    .button-group button:not(:first-child) {
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
