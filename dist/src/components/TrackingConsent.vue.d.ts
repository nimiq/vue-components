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
    options: {
        setSiteId: number;
        setTrackerUrl?: string;
        addDownloadExtensions?: string;
        trackPageView?: boolean;
        enableLinkTracking?: boolean;
        [k: string]: number | string | boolean;
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
     * Docs: https://matomo.org/docs/event-tracking/
     */
    static trackEvent(category: string, action: string, name?: string, value?: string | number): void;
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
    const localstorageKeys: string[];
    const COOKIE_STORAGE_KEY = "tracking-consent";
    const DEFAULT_MATOMO_URL = "//stats.nimiq-network.com/";
    const DEFAULT_TRACKER_URL: string;
    const DEFAULT_TRACKING_URL: string;
}
export default TrackingConsent;
