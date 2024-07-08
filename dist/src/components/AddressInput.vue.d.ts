import { Vue } from 'vue-property-decorator';
export default class AddressInput extends Vue {
    private static readonly _ADDRESS_REPLACED_CHARS;
    private static readonly NIM_ADDRESS_MAX_LENGTH;
    private static readonly _NIMIQ_ADDRESS_REGEX;
    private static readonly ETH_ADDRESS_MAX_LENGTH;
    private static readonly _ETH_ADDRESS_REGEX;
    private static readonly _DOMAIN_REGEX;
    private static readonly _WHITESPACE_REGEX;
    private static _parse;
    private static _format;
    private static _stripWhitespace;
    private static _exportValue;
    private static _willBeNimAddress;
    private static _willBeEthAddress;
    private static _willBeDomain;
    private static _isValidEthAddress;
    private static _addEthAddressChecksumIfMissing;
    private static _hasEthAddressChecksum;
    value: string;
    autofocus?: boolean;
    allowNimAddresses: boolean;
    allowEthAddresses?: boolean;
    allowDomains?: boolean;
    $refs: {
        textarea: HTMLTextAreaElement;
    };
    focus(scrollIntoView?: boolean): void;
    private currentValue;
    private selectionStartBlock;
    private selectionEndBlock;
    private supportsMixBlendMode;
    private get parserFlags();
    private get displayAsNimAddress();
    private get displayAsDomain();
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
}
