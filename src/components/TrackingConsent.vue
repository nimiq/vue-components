<template>
    <div class="tracking-consent"
        :class="[ theme ]"
        v-if="uiRequired && uiAllowed"
    >
        <div class="content nq-shadow">
            {{ text.main }}
            <div class="button-group">
                <button
                    class="nq-button-pill light-blue"
                    @click="allowUsageData"
                >{{ text.yes }}</button>
                <button
                    class="nq-button-s"
                    @click="denyConsent"
                    :class="{ inverse: theme === constructor.Themes.DARK }"
                >{{ text.no }}</button>
                <button
                    class="nq-button-s"
                    @click="allowBrowserData"
                    :class="{ inverse: theme === constructor.Themes.DARK }"
                >{{ text.browserOnly }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import I18nMixin from '../i18n/I18nMixin';

interface Consent {
    allowsBrowserData?: boolean;
    allowsUsageData?: boolean;
}
/**
 * TrackinConsent Component - used to setup Matomo tracking in a vue-based project
 */
@Component
class TrackingConsent extends Vue {
    private static _instances: Set<TrackingConsent> = new Set();

    @Prop({
        type: Object,
        default:  () => ({
            get main() {
                return I18nMixin.$t(
                    'TrackingConsent',
                    'Help Nimiq improve by sharing anonymized usage data. Thank you! ❤️',
                );
            },
            get yes() { return I18nMixin.$t('TrackingConsent', 'Yes'); },
            get no() { return I18nMixin.$t('TrackingConsent', 'No'); },
            browserOnly: 'Browser-info only',
        }),
        validator: (text) => (
            text && typeof text === 'object' &&
            text.no && typeof text.no === 'string' && text.no.length &&
            text.yes && typeof text.yes === 'string' && text.yes.length &&
            text.main && typeof text.main === 'string' && text.main.length &&
            text.browserOnly && typeof text.browserOnly === 'string' && text.browserOnly.length
        ),
    })
    public text: {
        main: string,
        yes: string,
        no: string,
        browserOnly: string,
    };

    @Prop({
        type: String,
        default: 'light',
        validator: (theme) => Object.values(TrackingConsent.Themes).includes(theme),
    })
    public theme: string;

    @Prop({
        type: Object,
        default: () => ({
            setSiteId: 1,
            setTrackerUrl: TrackingConsent.DEFAULT_TRACKER_URL,
        }),
    })
    public options: {
        setSiteId: number,
        setTrackerUrl?: string
        addDownloadExtensions?: string,
        trackPageView?: boolean,
        enableLinkTracking?: boolean,
        [k: string]: number | string | boolean,
    };

    @Prop({
        type: String,
        default: () => TrackingConsent.DEFAULT_TRACKING_URL,
    })
    public trackingScriptUrl: string;

    @Prop({
        type: Boolean,
        default: true,
    })
    public uiAllowed: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    public ignoreDoNotTrack: boolean;

    @Prop({
        type: Object,
        default: () => ({
            domain: document.location.hostname,
            expirationDays: 365 * 20,
        }),
        validator: ({ expirationDays }) => expirationDays >= 0,
    })
    public cookieOptions: {
        domain: string,
        expirationDays: number,
    };

    @Prop({
        type: String,
        default: 'https://geoip.nimiq-network.com:8443/v1/locate',
    })
    public geoIpServer: string;

    private uiRequired: boolean = false;

    public static get _paq() {
        if (!window._paq || !Array.isArray(window._paq)) {
            window._paq = [];
        }
        return window._paq;
    }

    public static get _mtm() {
        if (!window._mtm || !Array.isArray(window._mtm)) {
            window._mtm = [];
        }
        return window._mtm;
    }

    /**
     * consent getter - return the parsed content of the consent cookie that store the user's choice about data sharing
     * @return {Consent} An object containing two boolean properties: allowsBrowserData & allowsUsageData
     */
    public static get consent(): Consent {
        const cookie = TrackingConsent._getCookie(TrackingConsent.COOKIE_STORAGE_KEY);

        if (cookie) {
            return JSON.parse(cookie);
        }

        return {};
    }

    public static get allowsUsageData(): boolean {
        return TrackingConsent.consent.allowsUsageData;
    }

    public static get allowsBrowserData(): boolean {
        return TrackingConsent.consent.allowsBrowserData;
    }

    /**
     * trackEvent - allow you to track custom interaction on the website/webapp.
     *
     * Docs: https://matomo.org/docs/event-tracking/
     */
    public static trackEvent(
        category: string,
        action: string,
        name?: string,
        value?: string | number,
    ) {
        if (!TrackingConsent.allowsUsageData) return;

        const obj: Array<string | number> = ['trackEvent', category, action];

        if (name) {
            obj.push(name);
        }
        if (value) {
            obj.push(value);
        }

        TrackingConsent._paq.push(obj);
    }

    /**
     * execFunction - allow you to execute a function in matomo's scope, where `this` is Matomo's tracker object
     *
     * Docs: https://developer.matomo.org/guides/tracking-javascript-guide
     * API ref: https://developer.matomo.org/guides/tracking-javascript
     */
    public static execFunction(fn: () => void) {
        TrackingConsent._paq.push([fn]);
    }

    private static _setCookie(
        cookieName: string,
        cookieValue: string,
        options: {
            expirationDays: number,
            domain: string,
        },
    ) {
        const cookie = [cookieName + '=' + cookieValue];

        if (options) {
            if (options.expirationDays) {
                cookie.push('max-age=' + options.expirationDays * 24 * 60 * 60);
            }
            if (options.domain) {
                cookie.push('domain=' + options.domain);
            }
        }

        cookie.push('path=/');
        document.cookie = cookie.join(';');
    }

    private static _getCookie(cookieName: string): string | null {
        const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`));
        return match && match[2];
    }

    /** denyConsent - deny sharing usage & browser data and opt out of matomo tracking */
    public denyConsent() {
        TrackingConsent._paq.push(['optUserOut']);
        this._setConsent({ allowsUsageData: false, allowsBrowserData: false });
    }

    /** allowUsageData - allow sharing usage & browser data */
    public allowUsageData() {
        TrackingConsent._paq.push(['forgetUserOptOut']);
        this._setConsent({ allowsUsageData: true, allowsBrowserData: true });
        this._initMatomo();
    }

    /** allowBrowserData - allow sharing browser data, but not usage data */
    public allowBrowserData() {
        TrackingConsent._paq.push(['forgetUserOptOut']);
        this._setConsent({ allowsBrowserData: true, allowsUsageData: false });
        this._initMatomo();
    }

    private created() {
        /* initialize startTime for the tracking script */
        if (!window.startTime) {
            window.startTime = (new Date().getTime());
        }

        /* Check for consent changes on tab / window focus */
        window.addEventListener('focus', this._onVisibilityChange);

        /* Add to the TrackingConsent instances list */
        TrackingConsent._instances.add(this);

        /* Check old consent preferences if there's any */
        const localStoredConsent =
            localStorage.getItem(TrackingConsent.localstorageKeys[0]) ||
            localStorage.getItem(TrackingConsent.localstorageKeys[1]);

        if (localStoredConsent) {
            localStorage.removeItem(TrackingConsent.localstorageKeys[0]);
            localStorage.removeItem(TrackingConsent.localstorageKeys[1]);

            this._setConsent(JSON.parse(localStoredConsent));
        }

        /* check if the UI is required */
        this._checkUiRequired();
    }

    private destroyed() {
        /* Remove the event watching for consent changes on tab / window focus */
        window.removeEventListener('focus', this._onVisibilityChange);

        /* Remove from the TrackingConsent instances list */
        TrackingConsent._instances.delete(this);
    }

    private async _checkUiRequired() {
        /* check whether the user has the "do not track" browser option enabled or not  */
        if (navigator.doNotTrack === '1' && !this.ignoreDoNotTrack) {
            this.uiRequired = false;
            return;
        }

        /* Check consent preferences if there's any */
        if (TrackingConsent.allowsBrowserData || TrackingConsent.allowsUsageData) {
            this.uiRequired = false;
            this._initMatomo();
            return;
        } else if (
            TrackingConsent.allowsBrowserData === false &&
            TrackingConsent.allowsUsageData === false
        ) {
            this.uiRequired = false;
            return;
        }

        /* Automatically track stats if user is not in the EU continent  */
        const geoIpResponse = await fetch(this.geoIpServer);
        if (geoIpResponse.status !== 200) {
            console.warn('TrackingConsent: Failed to contact geoip server');
            return;
        }
        const geoIpInfo = await geoIpResponse.json();
        if (geoIpInfo.continent !== 'EU' && !['NO', 'LI', 'IS'].includes(geoIpInfo.country)) { /* EU / EEA */
            this.uiRequired = false;
            this._initMatomo();
            return;
        }

        this.uiRequired = true;
    }

    private _onVisibilityChange() {
        if (document.visibilityState === 'visible') {
            this._checkUiRequired();
        }
    }

    private _setConsent(consent: Consent) {
        TrackingConsent._setCookie(
            TrackingConsent.COOKIE_STORAGE_KEY,
            JSON.stringify(consent),
            this.cookieOptions,
        );
        this.uiRequired = false;

        /* update other TrackingConsent instances */
        TrackingConsent._instances.forEach((instance) => {
            instance.uiRequired = false;
        });
    }

    private _initMatomo() {
        /* Check whether matomo is already initialized */
        if (document.querySelector('script[matomo]')) {
            console.warn('TrackingConsent: Matomo already initialized.');
            return;
        }

        /* set mtm startTime */
        TrackingConsent._mtm.push({
            'mtm.startTime': window.startTime,
            'event': 'mtm.Start',
        });

        /* Get referrer from localstorage */
        const referrer = localStorage.getItem('referrer');
        if (referrer) {
            TrackingConsent._paq.push(['setReferrerUrl', decodeURIComponent(referrer)]);
            localStorage.removeItem('referrer');
        }

        /* set setTrackerUrl to default value if not set */
        if (!this.options.setTrackerUrl) {
            this.options.setTrackerUrl = TrackingConsent.DEFAULT_TRACKER_URL;
        }

        /* Cycle through options and set them */
        Object.keys(this.options).forEach((k) => {
            const option = this.options[k];

            if (option) {
                TrackingConsent._paq.push(typeof option === 'boolean' ? [k] : [k, option]);
            }
        });

        /* append script */
        const script = document.createElement('script');
        const nextScript = document.getElementsByTagName('script')[0];
        script.type = 'text/javascript';
        script.async = script.defer = true;
        script.src = this.trackingScriptUrl;
        script.setAttribute('matomo', '');
        nextScript.parentNode.insertBefore(script, nextScript);
    }
}

namespace TrackingConsent { // tslint:disable-line:no-namespace
    export enum Themes {
        LIGHT = 'light',
        DARK = 'dark',
    }

    export const localstorageKeys = [
        'tracking-consent',
        'tracking-consensus',
    ];

    export const COOKIE_STORAGE_KEY = 'tracking-consent';
    export const DEFAULT_MATOMO_URL = '//stats.nimiq-network.com/';

    export const DEFAULT_TRACKER_URL = DEFAULT_MATOMO_URL + 'matomo.php';
    export const DEFAULT_TRACKING_URL = DEFAULT_MATOMO_URL + 'matomo.js';
}

export default TrackingConsent;
</script>

<style scoped>
    .tracking-consent {
        position: fixed;
        bottom: 2rem;
        z-index: 900;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1.5rem;

        border-radius: 1rem;
        font-size: 2rem;
    }

    .light .content {
        background: white;
        color: var(--nimiq-blue);
    }

    .dark .content {
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
        .content {
            flex-direction: column;
            align-items: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            padding: 2.5rem;
        }

        .tracking-consent {
            bottom: 0;
        }

        .button-group {
            margin-left: 0;
            margin-top: 16px;
        }
    }
</style>
