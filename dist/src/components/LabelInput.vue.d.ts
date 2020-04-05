import { Vue } from 'vue-property-decorator';
export default class LabelInput extends Vue {
    protected maxBytes?: number;
    private value;
    private placeholder;
    private vanishing;
    private liveValue;
    private lastValue;
    private lastEmittedValue;
    private width;
    focus(): void;
    private onInput;
    private onBlur;
    private updateValue;
    private updateWidth;
}