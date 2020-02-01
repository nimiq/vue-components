import { Vue } from 'vue-property-decorator';
export default class Account extends Vue {
    label: string;
    address?: string;
    image?: string;
    displayAsCashlink: boolean;
    placeholder?: string;
    walletLabel?: string;
    balance?: number;
    decimals: number;
    editable?: boolean;
    layout: string;
    private showImage;
    focus(): void;
    private changed;
    private _onImageChange;
    private readonly _isNimiqAddress;
    private readonly _isLabelNimiqAddress;
}
