import { Vue } from 'vue-property-decorator';
export default class Wallet extends Vue {
    private wallet;
    get addresses(): string[];
    get isLegacy(): boolean;
    get isBip39(): boolean;
    get isLedger(): boolean;
    get isKeyguard(): boolean;
    get isMultiAddress(): boolean;
    get fileMissing(): boolean;
    get wordsMissing(): boolean;
    get exportMissing(): boolean;
}
