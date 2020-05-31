import { Cookie } from '@nimiq/utils';
import { Vue, Component } from 'vue-property-decorator';

interface I18n$tVariables {
    [key: string]: string | number;
}

type LanguageLoadListener = (lang: string) => void;

/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */
@Component
class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private static readonly SUPPORTED_LANGUAGES = [I18nMixin.DEFAULT_LANGUAGE, 'fr'];
    private static readonly LOADED_LANGUAGES: string[] = [];
    private static readonly LOADED_MESSAGES: { [lang: string]: string[] } = {};

    /** Current active language */
    private static lang: string = '';

    /** Object containing an array of functions per component that are executed when a translation file is loaded */
    private static languageLoadListeners: { [component: string]: LanguageLoadListener[] } = {};

    /**
     * Registers a language load event listener.
     * @param {string} componentName - Name of the component for which you want to listen for translation load events
     * @param {function} listener - The function to be executed when a new translation file is loaded
     */
    public static onComponentLanguageLoad(componentName: string, listener: LanguageLoadListener) {
        if (!I18nMixin.languageLoadListeners[componentName]) {
            I18nMixin.languageLoadListeners[componentName] = [];
        }
        I18nMixin.languageLoadListeners[componentName].push(listener);
    }

    /**
     * Notify listeners that a component's language finished loading.
     * @param {string} componentName - Name of the component you want to execute listeners for
     * @param {string} lang - The language of the loaded translation file
     */
    private static fireComponentLanguageLoad(componentName: string, lang: string) {
        const listeners = I18nMixin.languageLoadListeners[componentName];

        if (listeners && listeners.length) {
            listeners.forEach((listener) => listener(lang));
        }
    }

    /**
     * Detect the current active language. If no language is set fallback to the browser language.
     * @returns {string} The language code
     */
    public static detectLanguage(): string {
        const langCookie = Cookie.getCookie('lang');
        const fallbackLang = window.navigator.language.split('-')[0];

        return langCookie || fallbackLang;
    }

    /**
     * Asynchronously load a translation file.
     * @param {string} componentName - Name of the component you want to load a translation for
     * @param {string} lang - Language of the translation you want to load
     * @returns {Promise<string>} a string containing the language code and the component name, separated by a dash
     */
    public static async loadComponentLanguage(
        componentName: string,
        lang: string = I18nMixin.lang,
    ): Promise<string> {
        // If the language is not supported set it to the default one
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
        I18nMixin.fireComponentLanguageLoad(componentName, lang);
        return componentLang;
    }

    /**
     * Get the translation of a given string for a component.
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} variables - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    public static $t(componentName: string, key: string, variables?: I18n$tVariables): string {
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
     * Get the translation of a given string for this component.
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} variables - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    public $t(key: string, variables?: I18n$tVariables) {
        return I18nMixin.$t(this.constructor.name, key, variables);
    }

    /** On tab focus check whether the language changed and if so, load the new language */
    private onTabFocus() {
        I18nMixin.lang = I18nMixin.detectLanguage();
        I18nMixin.loadComponentLanguage(this.constructor.name);
    }

    protected created() {
        window.addEventListener('focus', this.onTabFocus.bind(this));

        I18nMixin.onComponentLanguageLoad(this.constructor.name, this.$forceUpdate.bind(this));
        if (!I18nMixin.lang) {
            I18nMixin.lang = I18nMixin.detectLanguage();
        }
        I18nMixin.loadComponentLanguage(this.constructor.name);
    }
}

export default I18nMixin;
