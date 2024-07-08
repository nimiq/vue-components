import { Vue } from 'vue-property-decorator';
export interface SliderToggleRadio {
    label: string;
    value: string;
}
export declare enum SliderToggleType {
    CURRENCY = "currency",
    DEFAULT = "default"
}
export default class SliderToggle extends Vue {
    readonly $refs: {
        labels$?: HTMLLabelElement[];
        activeBox$: HTMLDivElement;
    };
    name: string;
    value: string;
    type: SliderToggleType;
    loading: boolean;
    private localValue;
    private activeBoxStyles;
    private isUpdatingActiveBoxPosition;
    private noTransitions;
    private created;
    private mounted;
    private destroyed;
    private onRadiosChange;
    private onValueChange;
    private onLocalValueChange;
    private updateActiveBoxPosition;
}
