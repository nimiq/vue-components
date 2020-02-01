import { Vue } from 'vue-property-decorator';
export default class AmountInput extends Vue {
    $refs: {
        fullWidth: HTMLDivElement;
        input: HTMLInputElement;
        widthPlaceholder: HTMLSpanElement;
        widthValue: HTMLSpanElement;
    };
    private value?;
    private maxFontSize;
    private placeholder;
    private liveValue;
    private lastEmittedValue;
    private width;
    private fontSize;
    private maxWidth;
    private valueInLuna;
    mounted(): Promise<void>;
    focus(): void;
    private updateValue;
    private updateWidth;
    formattedValue: string;
}
