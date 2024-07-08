import I18nMixin from '../i18n/I18nMixin';
declare const LabelInput_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class LabelInput extends LabelInput_base {
    protected maxBytes?: number;
    private value;
    private placeholder?;
    private vanishing;
    private disabled;
    private liveValue;
    private lastValue;
    private lastEmittedValue;
    private width;
    focus(): void;
    private onInput;
    private onBlur;
    private updateValue;
    private updateWidth;
    private updateMaxBytes;
}
export {};
