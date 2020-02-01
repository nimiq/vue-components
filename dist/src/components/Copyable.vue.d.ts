import { Vue } from 'vue-property-decorator';
/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard
 */
export default class Copyable extends Vue {
    private static readonly DISPLAY_TIME;
    text?: string;
    private copied;
    private _copiedResetTimeout;
    copy(): void;
}
