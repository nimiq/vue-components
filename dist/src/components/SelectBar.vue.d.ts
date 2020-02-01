import { Vue } from 'vue-property-decorator';
declare class SelectBar extends Vue {
    name: string;
    options: SelectBar.SelectBarOption[];
    selectedValue?: number;
    private selectedOption;
    private created;
    readonly value: number;
    private getColor;
    private onChanged;
}
declare namespace SelectBar {
    interface SelectBarOption {
        color: string;
        value: number;
        text: string;
        index: number;
    }
}
export default SelectBar;
