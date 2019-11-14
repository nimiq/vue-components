import { Vue } from 'vue-property-decorator';
export default class AddressInput extends Vue {
    static readonly ADDRESS_MAX_LENGTH_WITHOUT_SPACES: number;
    static readonly ADDRESS_MAX_LENGTH: number;
    private static _parse;
    private static _format;
    private static _stripWhitespace;
    private static _exportValue;
    value: string;
    $refs: {
        textarea: HTMLTextAreaElement;
    };
    private currentValue;
    private selectionStartBlock;
    private selectionEndBlock;
    private supportsMixBlendMode;
    private mounted;
    private destroyed;
    private _onExternalValueChange;
    private _onKeyDown;
    private _onInput;
    private _onPaste;
    private _onCut;
    private _onFocus;
    private _formatClipboard;
    private _afterChange;
    private _updateSelection;
    private _isBlockFocused;
    private _isBlockFilled;
}
