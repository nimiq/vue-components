import QrScannerLib from 'qr-scanner';
import I18nMixin from '../i18n/I18nMixin';
declare const QrScanner_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
declare class QrScanner extends QrScanner_base {
    reportFrequency: number;
    validate?: (scanResult: string) => boolean;
    private cameraAccessFailed;
    private hasCamera;
    private isMobileOrTablet;
    private browser;
    private _scanner;
    private _lastResult?;
    private _lastResultTime;
    private _cameraRetryTimer?;
    private mounted;
    private destroyed;
    start(): Promise<boolean>;
    stop(): void;
    setGrayscaleWeights(red: any, green: any, blue: any): void;
    setInversionMode(inversionMode: QrScannerLib.InversionMode): void;
    repositionOverlay(): void;
    private _isVisible;
    private _cancel;
    private _onResult;
}
declare namespace QrScanner {
    const enum Events {
        RESULT = "result",
        CANCEL = "cancel",
        ERROR = "error"
    }
}
export default QrScanner;
