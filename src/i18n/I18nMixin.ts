import { Cookie } from '@nimiq/utils';
import { Vue, Component } from 'vue-property-decorator';

type I18n$tVariables = { [key: string]: string | number } | any[];

/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */
@Component
class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private static readonly SUPPORTED_LANGUAGES = [
        I18nMixin.DEFAULT_LANGUAGE,
        'de', 'es', 'fr', 'nl', 'ru', 'uk', 'zh',
    ];

    /** Current active language */
    private static lang: string = I18nMixin.detectLanguage();
    private static readonly loadedMessages: { [lang: string]: { [key: string]: string } } = {};
    private static readonly registeredComponents: { [componentName: string]: Set<Vue> } = {};

    /**
     * Set the language to use. This will lazy-load the translation files and rerender the ui once ready.
     * @param {string} lang - The language to use.
     */
    public static setLanguage(lang: string) {
        // If the language is not supported set it to the default one
        if (!I18nMixin.SUPPORTED_LANGUAGES.includes(lang)) {
            lang = I18nMixin.DEFAULT_LANGUAGE;
        }
        if (lang === I18nMixin.lang) return;

        I18nMixin.lang = lang;
        for (const componentName of Object.keys(I18nMixin.registeredComponents)) {
            I18nMixin.loadComponentLanguageFile(componentName);
        }
    }

    /**
     * Detect the language to use. If no language is set fallback to the browser language.
     * @returns {string} The language code
     */
    public static detectLanguage(): string {
        const langCookie = Cookie.getCookie('lang');
        // const fallbackLang = window.navigator.language.split('-')[0];
        const fallbackLang = 'en'; // TODO just temporarily, until language switching is enabled in wallet

        let lang = langCookie || fallbackLang;
        // If the language is not supported set it to the default one
        if (!I18nMixin.SUPPORTED_LANGUAGES.includes(lang)) {
            lang = I18nMixin.DEFAULT_LANGUAGE;
        }
        return lang;
    }

    /**
     * Get the translation of a given string for a component.
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    public static $t(componentName: string, key: string, variables?: I18n$tVariables): string;
    /**
     * Get the translation of a given string for a component.
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {string} lang - Language to use. The language has to be already loaded.
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    public static $t(componentName: string, key: string, lang: string, variables?: I18n$tVariables): string;
    public static $t(
        componentName: string,
        key: string,
        variablesOrLang?: I18n$tVariables | string,
        variables?: I18n$tVariables,
    ): string {
        let lang;
        if (typeof variablesOrLang === 'string') {
            lang = variablesOrLang;
        } else {
            lang = I18nMixin.lang;
            variables = variablesOrLang;
        }
        const componentLang = `${lang}-${componentName}`;

        let message = I18nMixin.loadedMessages[componentLang]
            ? I18nMixin.loadedMessages[componentLang][key] || key
            : key;

        if (typeof variables === 'object' || Array.isArray(variables)) {
            message = message.replace(/{(\w+?)}/g, (match, variable) => variables[variable].toString() || match);
        }

        return message;
    }

    private static registerComponent(component: Vue) {
        const componentName = component.$options.name;
        // Using $options.name instead of constructor.name as class names get mangled in the production build.

        let componentsOfSameType = I18nMixin.registeredComponents[componentName];
        if (!componentsOfSameType) {
            componentsOfSameType = new Set<Vue>();
            I18nMixin.registeredComponents[componentName] = componentsOfSameType;
            I18nMixin.loadComponentLanguageFile(componentName);
        }
        componentsOfSameType.add(component);
    }

    private static unregisterComponent(component: Vue) {
        const componentName = component.$options.name;
        // Using $options.name instead of constructor.name as class names get mangled in the production build.

        const componentsOfSameType = I18nMixin.registeredComponents[componentName];
        if (!componentsOfSameType) return;
        if (componentsOfSameType.size === 1) {
            delete I18nMixin.registeredComponents[componentName];
        } else {
            componentsOfSameType.delete(component);
        }
    }

    /**
     * Asynchronously load a translation file.
     * @param {string} componentName - Name of the component you want to load a translation for
     */
    private static async loadComponentLanguageFile(componentName: string) {
        const lang = I18nMixin.lang;
        const componentLang = lang + '-' + componentName;

        if (!(componentLang in I18nMixin.loadedMessages) && lang !== 'en') {
            // Lazy-load translations. For English we don't load a language file but use the translation keys directly.
            // Note that the request is cached and not repeated for parallel calls.
            const messages = await import(
                // tslint:disable-next-line: trailing-comma
                /* webpackChunkName: "lang-[request]" */ `./${lang}/${componentName}.json`
            );

            I18nMixin.loadedMessages[componentLang] = messages.default || {};
        }

        const componentsToNotify = I18nMixin.registeredComponents[componentName] || [];
        for (const component of componentsToNotify) {
            // rerender with new language and notify potential event listeners
            component.$forceUpdate();
            component.$emit(I18nMixin.Events.LANGUAGE_READY, lang);
        }
    }

    /* tslint:disable:jsdoc-format */
    /**
     * Get the translation of a given string for this component.
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     *//**
     * Get the translation of a given string for this component.
     * @param {string} key - The string you want the translation for
     * @param {string} lang - Language to use. The language has to be already loaded.
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    /* tslint:enable:jsdoc-format */
    // declared as property instead of instance member function for type compatibility with vue-i18n
    public $t: (key: string, variablesOrLang?: I18n$tVariables | string, variables?: I18n$tVariables) => string;

    protected beforeCreate() {
        this.$t = I18nMixin.$t.bind(this, this.$options.name);

        I18nMixin.registerComponent(this);
    }

    protected beforeDestroy() {
        I18nMixin.unregisterComponent(this);
    }
}

namespace I18nMixin {
    export enum Events {
        LANGUAGE_READY = 'language-ready',
    }
}

// Update the language in case it was changed via language cookie.
window.addEventListener('focus', () => I18nMixin.setLanguage(I18nMixin.detectLanguage()));

export default I18nMixin;
