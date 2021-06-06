import I18nMixin from '../i18n/I18nMixin';
declare const CopyableField_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class CopyableField extends CopyableField_base {
    private static readonly DEFAULT_FONT_SIZE;
    private static readonly DEFAULT_FONT_SIZE_SMALL;
    value: string | number | {
        [key: string]: any;
    };
    label?: string;
    small: boolean;
    private currentKey;
    private fontSize;
    private copied;
    private _copiedResetTimeout;
    private mounted;
    private destroyed;
    private get isKeyedValue();
    private get hasSingleKey();
    private _onValueChange;
    private _updateFontSize;
    private copy;
}
export {};
