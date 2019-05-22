import { Vue } from 'vue-property-decorator';
import QrScannerLib from 'qr-scanner';
declare class QrScanner extends Vue {
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
