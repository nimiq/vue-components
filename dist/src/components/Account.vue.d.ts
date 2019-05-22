import { Vue } from 'vue-property-decorator';
export default class Account extends Vue {
    address: string;
    image?: string;
    label: string;
    placeholder?: string;
    walletLabel?: string;
    balance?: number;
    decimals: number;
    editable?: boolean;
    layout: string;
    private showImage;
    focus(): void;
    private changed;
    private onImageChange;
    private readonly _isLabelAddress;
}
