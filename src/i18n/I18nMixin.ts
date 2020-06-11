import { Cookie } from '@nimiq/utils';
import { Vue, Component } from 'vue-property-decorator';

interface I18n$tVariables {
    [key: string]: string | number;
}

/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */
@Component
class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private static readonly SUPPORTED_LANGUAGES = [I18nMixin.DEFAULT_LANGUAGE, 'fr'];

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
     * Detect the current active language. If no language is set fallback to the browser language.
     * @returns {string} The language code
     */
    public static detectLanguage(): string {
        const langCookie = Cookie.getCookie('lang');
        const fallbackLang = window.navigator.language.split('-')[0];

        return langCookie || fallbackLang;
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

        let message = I18nMixin.loadedMessages[componentLang]
            ? I18nMixin.loadedMessages[componentLang][key] || key
            : key;

        if (typeof variables === 'object') {
            message = message.replace(/{(\w+?)}/g, (match, variable) => variables[variable].toString() || match);
        }

        return message;
    }

    private static registerComponent(component: Vue) {
        const componentName = component.constructor.name;
        let componentsOfSameType = I18nMixin.registeredComponents[componentName];
        if (!componentsOfSameType) {
            componentsOfSameType = new Set<Vue>();
            I18nMixin.registeredComponents[componentName] = componentsOfSameType;
        }
        componentsOfSameType.add(component);
    }

    private static unregisterComponent(component: Vue) {
        const componentName = component.constructor.name;
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
     * @param {string} lang - Language of the translation you want to load
     */
    private static async loadComponentLanguageFile(componentName: string) {
        const lang = I18nMixin.lang;
        const componentLang = lang + '-' + componentName;

        if (componentLang in I18nMixin.loadedMessages) {
            // language was already loaded
            return;
        }

        // Lazy-load translations. Note that the request is cached and not repeated for parallel calls
        const messages = await import(
            // tslint:disable-next-line: trailing-comma
            /* webpackChunkName: "lang-[request]" */ `./${lang}/${componentName}.json`
        );

        if (componentLang in I18nMixin.loadedMessages) {
            // another call loaded the language in the meantime and resolved earlier
            return;
        }

        I18nMixin.loadedMessages[componentLang] = messages.default || {};

        const componentsToNotify = I18nMixin.registeredComponents[componentName] || [];
        for (const component of componentsToNotify) {
            // rerender with new language and notify potential event listeners
            component.$forceUpdate();
            component.$emit(I18nMixin.Events.LANGUAGE_LOAD, lang);
        }
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
        I18nMixin.loadComponentLanguageFile(this.constructor.name);
    }

    protected created() {
        I18nMixin.registerComponent(this);

        this.onTabFocus = this.onTabFocus.bind(this);
        window.addEventListener('focus', this.onTabFocus);

        I18nMixin.loadComponentLanguageFile(this.constructor.name);
    }

    protected beforeDestroy() {
        I18nMixin.unregisterComponent(this);
        window.removeEventListener('focus', this.onTabFocus);
    }
}

namespace I18nMixin {
    export enum Events {
        LANGUAGE_LOAD = 'language-load',
    }
}

export default I18nMixin;
