import { Vue } from 'vue-property-decorator';
interface Consent {
    allowsBrowserData?: boolean;
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
    };
    geoIpServer: string;
    private uiRequired;
    static get _paq(): any[];
    static get _mtm(): any[];
    /**
     * consent getter - return the parsed content of the consent cookie that store the user's choice about data sharing
     * @return {Consent} An object containing two boolean properties: allowsBrowserData & allowsUsageData
     */
    static get consent(): Consent;
    static get allowsUsageData(): boolean;
    static get allowsBrowserData(): boolean;
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
    static execFunction(fn: () => void): void;
    private static _setCookie;
    private static _getCookie;
    /** denyConsent - deny sharing usage & browser data and opt out of matomo tracking */
    denyConsent(): void;
    /** allowUsageData - allow sharing usage & browser data */
    allowUsageData(): void;
    /** allowBrowserData - allow sharing browser data, but not usage data */
    allowBrowserData(): void;
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
    const LOCALSTORAGE_KEYS: string[];
    const COOKIE_STORAGE_KEY = "tracking-consent";
    const DEFAULT_COOKIE_DOMAIN: string;
    const DEFAULT_COOKIE_EXPIRATION_DAYS: number;
    const DEFAULT_MATOMO_URL = "//stats.nimiq-network.com/";
    const DEFAULT_TRACKER_URL: string;
    const DEFAULT_TRACKING_URL: string;
}
export default TrackingConsent;
