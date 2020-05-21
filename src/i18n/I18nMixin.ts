import { Cookie } from '@nimiq/utils';
import { Vue, Component } from 'vue-property-decorator';

interface I18n$tVariable {
    [key: string]: string | number;
}

type ComponentLanguageLoadedCallback = (lang?: string) => any;

@Component
class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private static readonly SUPPORTED_LANGUAGES = [I18nMixin.DEFAULT_LANGUAGE, 'fr'];
    private static readonly LOADED_LANGUAGES: string[] = [];
    private static readonly LOADED_MESSAGES: { [key: string]: string[] } = {};

    private static lang: string = '';

    private static onComponentLanguageLoadedListeners: { [key: string]: ComponentLanguageLoadedCallback[] } = {};

    public static onComponentLanguageLoaded(componentName: string, fn: ComponentLanguageLoadedCallback) {
        if (!I18nMixin.onComponentLanguageLoadedListeners[componentName]) {
            I18nMixin.onComponentLanguageLoadedListeners[componentName] = [];
        }
        I18nMixin.onComponentLanguageLoadedListeners[componentName].push(fn);
    }

    public static execComponentLanguageLoadedCallbacks(componentName: string, lang: string) {
        const callbacks = I18nMixin.onComponentLanguageLoadedListeners[componentName];

        if (callbacks && callbacks.length) {
            callbacks.forEach((fn) => fn(lang));
        }
    }

    public static $i18nDetectLanguage() {
        const langCookie = Cookie.getCookie('lang');
        const langRaw = window.navigator.language;
        const langParts = langRaw.split('-');

        return langCookie || langParts[0];
    }

    public static async $i18nLoadComponentLanguage(componentName: string, lang: string = I18nMixin.lang) {
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

    public static $t(componentName: string, key: string, variables?: I18n$tVariable) {
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

    public $t(key: string, variables?: I18n$tVariable) {
        return I18nMixin.$t(this.constructor.name, key, variables);
    }

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
