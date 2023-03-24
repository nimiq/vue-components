import I18nMixin from '../i18n/I18nMixin';
declare const Wallet_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
/** @deprecated */
export default class Wallet extends Wallet_base {
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
export {};
