import { Vue } from 'vue-property-decorator';
export default class Identicon extends Vue {
    static formatAddress(str: string): string;
    static isUserFriendlyAddress(str: string): any;
    address: string;
    private dataUrl;
    private computeDataUrl;
}
