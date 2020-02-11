import { Vue } from 'vue-property-decorator';
export default class CopyableField extends Vue {
    private static readonly DEFAULT_FONT_SIZE;
    value: string | number | {
        [key: string]: any;
    };
    label?: string;
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
