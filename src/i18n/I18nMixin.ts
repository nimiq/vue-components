import { Cookie } from '@nimiq/utils';
import { Vue, Component } from 'vue-property-decorator';

interface I18n$tVariable {
    [key: string]: string | number;
}

type ComponentLanguageLoadedCallback = (lang?: string) => any;

/** i18n Class for vue-components */
@Component
class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private static readonly SUPPORTED_LANGUAGES = [I18nMixin.DEFAULT_LANGUAGE, 'fr'];
    private static readonly LOADED_LANGUAGES: string[] = [];
    private static readonly LOADED_MESSAGES: { [key: string]: string[] } = {};

    /** Current active language */
    private static lang: string = '';

    /** Object containing an array of function per component that is executed every time a translation file is loaded */
    private static onComponentLanguageLoadedListeners: { [key: string]: ComponentLanguageLoadedCallback[] } = {};

    /**
     * Public static method that add a function into the onComponentLanguageLoadedListeners property
     * @param {string} componentName - Name of the component you want to listen for new translation file load
     * @param {function} fn - The function to be executed when a new translation file is loaded
     */
    public static onComponentLanguageLoaded(componentName: string, fn: ComponentLanguageLoadedCallback) {
        if (!I18nMixin.onComponentLanguageLoadedListeners[componentName]) {
            I18nMixin.onComponentLanguageLoadedListeners[componentName] = [];
        }
        I18nMixin.onComponentLanguageLoadedListeners[componentName].push(fn);
    }

    /**
     * Private static method that execute the functions in onComponentLanguageLoadedListeners for a component
     * @param {string} componentName - Name of the component you want to execute listeners for
     * @param {string} lang - The language of the loaded translation file
     */
    private static execComponentLanguageLoadedCallbacks(componentName: string, lang: string) {
        const callbacks = I18nMixin.onComponentLanguageLoadedListeners[componentName];

        if (callbacks && callbacks.length) {
            callbacks.forEach((fn) => fn(lang));
        }
    }

    /**
     * Public static method to detect the current active language. Fallback to the browser language
     * @return {string} The language code
     */
    public static $i18nDetectLanguage(): string {
        const langCookie = Cookie.getCookie('lang');
        const langRaw = window.navigator.language;
        const langParts = langRaw.split('-');

        return langCookie || langParts[0];
    }

    /**
     * Public static async method used to load a translation file
     * @param {string} componentName - name of the component you want to load a translation for
     * @param {string} lang - language of the translation you want to load
     * @return {Promise<string>} a string containing the language code and the component name, separated by a dash
     */
    public static async $i18nLoadComponentLanguage(
        componentName: string,
        lang: string = I18nMixin.lang,
    ): Promise<string> {
        // if the language is not supported yes, setting it to the default one
        if (!I18nMixin.SUPPORTED_LANGUAGES.includes(lang)) {
            lang = I18nMixin.DEFAULT_LANGUAGE;
        }

        const componentLang = lang + '-' + componentName;

        // If the language was already loaded
        if (I18nMixin.LOADED_LANGUAGES.includes(componentLang)) {
            return componentLang;
        }

        // If the language hasn't been loaded yet
        const messages = await import(
            // tslint:disable-next-line: trailing-comma
            /* webpackChunkName: "lang-[request]" */ `./${lang}/${componentName}.json`
        );

        I18nMixin.LOADED_MESSAGES[componentLang] = messages.default || {};
        I18nMixin.LOADED_LANGUAGES.push(componentLang);
        I18nMixin.execComponentLanguageLoadedCallbacks(componentName, lang);
        return componentLang;
    }

    /**
     * Public static method used to get the translation of a given string
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {object} variables - Optional parameter. Contains the variables to be replaced in the translated string
     * @return {string} The translated string.
     */
    public static $t(componentName: string, key: string, variables?: I18n$tVariable): string {
        const componentLang = I18nMixin.lang + '-' + componentName;

        if (!I18nMixin.LOADED_MESSAGES[componentLang]) {
            return key;
        }

        let message = I18nMixin.LOADED_MESSAGES[componentLang][key] || key;

        if (variables && typeof variables === 'object') {
            Object.keys(variables).forEach((k) => {
                const re = new RegExp(`{${k}}`, 'g');
                message = message.replace(re, variables[k]);
            });
        }

        return message;
    }

    /**
     * Public method used to get the translation of a given string
     * @param {string} key - The string you want the translation for
     * @param {object} variables - Optional parameter. Contains the variables to be replaced in the translated string
     * @return {string} The translated string.
     */
    public $t(key: string, variables?: I18n$tVariable) {
        return I18nMixin.$t(this.constructor.name, key, variables);
    }

    /** Private method executed on tab focus. Check if the language changed and if so, load the new language */
    private onTabFocus() {
        I18nMixin.lang = I18nMixin.$i18nDetectLanguage();
        I18nMixin.$i18nLoadComponentLanguage(this.constructor.name);
    }

    public created() {
        window.addEventListener('focus', this.onTabFocus.bind(this));

        I18nMixin.onComponentLanguageLoaded(this.constructor.name, this.$forceUpdate.bind(this));
        if (!I18nMixin.lang) {
            I18nMixin.lang = I18nMixin.$i18nDetectLanguage();
        }
        I18nMixin.$i18nLoadComponentLanguage(this.constructor.name);
    }
}

export default I18nMixin;
