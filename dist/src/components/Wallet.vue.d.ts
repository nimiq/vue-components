import { Vue } from 'vue-property-decorator';
export default class Wallet extends Vue {
    private wallet;
    readonly addresses: string[];
    readonly isLegacy: boolean;
    readonly isBip39: boolean;
    readonly isLedger: boolean;
    readonly isKeyguard: boolean;
    readonly isMultiAddress: boolean;
    readonly fileMissing: boolean;
    readonly wordsMissing: boolean;
    readonly exportMissing: boolean;
}
