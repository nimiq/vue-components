import I18nMixin from '../i18n/I18nMixin';
declare const LongPressButton_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
declare class LongPressButton extends LongPressButton_base {
    duration: number;
    color: string;
    private isPressed;
    private showKeepPressingPrompt;
    private keepPressingTimeout;
    private longPressTimeout;
    private created;
    private mounted;
    private destroyed;
    private _onMouseup;
    private _onButtonPressOrRelease;
}
declare namespace LongPressButton {
    enum Events {
        LONG_PRESS = "long-press"
    }
}
export default LongPressButton;
