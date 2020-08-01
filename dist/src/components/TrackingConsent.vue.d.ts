import { Vue } from 'vue-property-decorator';
interface Consent {
    allowsUsageData?: boolean;
}
/**
 * TrackinConsent Component - used to setup Matomo tracking in a vue-based project
 */
declare class TrackingConsent extends Vue {
    private static _instances;
    text: {
        main: string;
        yes: string;
        no: string;
        browserOnly: string;
    };
    theme: string;
    /** API reference: https://developer.matomo.org/guides/tracking-javascript#configuration-of-the-tracker-object */
    options: {
        setSiteId: number;
        setTrackerUrl?: string;
        [k: string]: null | boolean | number | string | string[];
    };
    trackingScriptUrl: string;
    uiAllowed: boolean;
    ignoreDoNotTrack: boolean;
    cookieOptions: {
        domain: string;
        expirationDays: number;
        secure?: boolean;
        sameSite?: 'lax' | 'strict' | 'none';
    };
    geoIpServer: string | null;
    private uiRequired;
    private isOutsideEEA;
    static get _paq(): any[];
    static get _mtm(): any[];
    /**
     * consent getter - return the parsed content of the consent cookie that store the user's choice about data sharing
     * @return {Consent} An object containing one boolean property: allowsUsageData
     */
    static get consent(): Consent;
    static get allowsUsageData(): boolean;
    static get isOutsideEEA(): boolean;
    /**
     * trackEvent - allow you to track custom interaction on the website/webapp.
     *
     * This method won't do anything if the user denied to share usage data.
     *
     * Docs: https://matomo.org/docs/event-tracking/
     */
    static trackEvent(category: string, action: string, name?: string, value?: string | number): void;
    /**
     * execFunction - allow you to execute a function in matomo's scope, where `this` is Matomo's tracker object
     *
     * Docs: https://developer.matomo.org/guides/tracking-javascript-guide
     * API ref: https://developer.matomo.org/guides/tracking-javascript
     */
    static execFunction(fn: (self: any) => any): Promise<unknown>;
    /**
     * trackPageView - allow you to track a new page view. Usefull for single-page apps that use history manipulation
     *
     * @param {number} generationTimeMs - Time that took the new route to load. Usefull if lazy-loading routes
     */
    static trackPageView(options?: {
        generationTimeMs?: number;
        customUrl?: string;
    }): void;
    private static _setCookie;
    private static _getCookie;
    /** denyConsent - deny sharing usage & browser data and opt out of matomo tracking */
    denyConsent(): void;
    /** allowUsageData - allow sharing usage & browser data */
    allowUsageData(): void;
    private created;
    private destroyed;
    private _checkUiRequired;
    private _onVisibilityChange;
    private _setConsent;
    private _initMatomo;
}
declare namespace TrackingConsent {
    enum Themes {
        LIGHT = "light",
        DARK = "dark"
    }
    /**
     * Old matomo tracking implementations were using localStorage instead of cookies to store consent.
     * But unfortunately, some implementations were using the first key, and some the second one.
     * So we're checking both keys for existing consent for the sake of backward compatibility.
     */
    const LOCALSTORAGE_KEYS: string[];
    const COOKIE_STORAGE_KEY = "tracking-consent";
    const DEFAULT_COOKIE_DOMAIN: string;
    const DEFAULT_COOKIE_EXPIRATION_DAYS: number;
    const DEFAULT_MATOMO_URL = "//stats.nimiq-network.com/";
    const DEFAULT_TRACKER_URL: string;
    const DEFAULT_TRACKING_SCRIPT_URL: string;
    const DEFAULT_GEOIP_SERVER_URL = "https://geoip.nimiq-network.com:8443/v1/locate";
}
export default TrackingConsent;
