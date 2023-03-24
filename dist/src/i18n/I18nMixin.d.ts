import { Vue } from 'vue-property-decorator';
declare type I18n$tVariables = {
    [key: string]: string | number;
} | any[];
/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */
declare class I18nMixin extends Vue {
    private static readonly DEFAULT_LANGUAGE;
    private static readonly SUPPORTED_LANGUAGES;
    /** Current active language */
    private static lang;
    private static readonly loadedMessages;
    private static readonly registeredComponents;
    /**
     * Set the language to use. This will lazy-load the translation files and rerender the ui once ready.
     * @param {string} lang - The language to use.
     */
    static setLanguage(lang: string): void;
    /**
     * Detect the language to use. If no language is set fallback to the browser language.
     * @returns {string} The language code
     */
    static detectLanguage(): string;
    /**
     * Get the translation of a given string for a component.
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    static $t(componentName: string, key: string, variables?: I18n$tVariables): string;
    /**
     * Get the translation of a given string for a component.
     * @param {string} componentName - Name of the component you want the translation for
     * @param {string} key - The string you want the translation for
     * @param {string} lang - Language to use. The language has to be already loaded.
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */
    static $t(componentName: string, key: string, lang: string, variables?: I18n$tVariables): string;
    private static registerComponent;
    private static unregisterComponent;
    /**
     * Asynchronously load a translation file.
     * @param {string} componentName - Name of the component you want to load a translation for
     */
    private static loadComponentLanguageFile;
    /**
     * Get the translation of a given string for this component.
     * @param {string} key - The string you want the translation for
     * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
     * @returns {string} The translated string.
     */ /**
    * Get the translation of a given string for this component.
    * @param {string} key - The string you want the translation for
    * @param {string} lang - Language to use. The language has to be already loaded.
    * @param {I18n$tVariables} [variables] - Variables to be replaced in the translated string. Optional.
    * @returns {string} The translated string.
    */
    $t: (key: string, variablesOrLang?: I18n$tVariables | string, variables?: I18n$tVariables) => string;
    protected beforeCreate(): void;
    protected beforeDestroy(): void;
}
declare namespace I18nMixin {
    enum Events {
        LANGUAGE_READY = "language-ready"
    }
}
export default I18nMixin;
