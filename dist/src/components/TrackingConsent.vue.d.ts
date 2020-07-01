import { Vue } from 'vue-property-decorator';
interface Consent {
    allowsBrowserData?: boolean;
    allowsUsageData?: boolean;
}
declare class TrackingConsent extends Vue {
    text: {
        main: string;
        yes: string;
        no: string;
        browserOnly: string;
    };
    theme: string;
    options: {
        setSiteId: string;
        setTrackerUrl: string;
        addDownloadExtensions?: string;
        trackPageView?: boolean;
        enableLinkTracking?: boolean;
        [k: string]: string | boolean;
    };
    trackingScriptUrl: string;
    uiAllowed: boolean;
    ignoreDoNotTrack: boolean;
    cookieOptions: {
        domain: string;
        expirationDays: number;
    };
    private geoIpServer;
    private static _instances;
    private uiRequired;
    private safariFix;
    static get _paq(): any[];
    static get _mtm(): any[];
    static get consent(): Consent;
    static get allowsUsageData(): boolean;
    static get allowsBrowserData(): boolean;
    static trackEvent(category: string, action: string, name?: string, value?: string | number): void;
    private static _setCookie;
    private static _getCookie;
    denyConsent(): void;
    allowUsageData(): void;
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
}
export default TrackingConsent;
