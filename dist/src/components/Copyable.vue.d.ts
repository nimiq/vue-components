import I18nMixin from '../i18n/I18nMixin';
declare const Copyable_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard on click
 */
declare class Copyable extends Copyable_base {
    static readonly DISPLAY_TIME = 800;
    text?: string;
    private copied;
    private _copiedResetTimeout;
    copy(): void;
    private onKeyDown;
    created(): void;
    mounted(): void;
    beforeDestroy(): void;
}
declare namespace Copyable {
    enum Events {
        COPY = "copy"
    }
}
export default Copyable;
