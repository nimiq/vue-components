// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator
//   ../qr-code
//   ../qr-scanner

declare module 'NimiqVueComponents' {
    export { default as ContactList } from 'NimiqVueComponents/src/components/ContactList.vue';
    export { default as WalletMenu } from 'NimiqVueComponents/src/components/WalletMenu.vue';
    export { default as QrCode } from 'NimiqVueComponents/src/components/QrCode.vue';
    export { default as QrScanner } from 'NimiqVueComponents/src/components/QrScanner.vue';
}

declare module 'NimiqVueComponents/src/components/ContactList.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class ContactList extends Vue {
        contacts: Array<{
            address: string;
            label: string;
        }>;
    }
}

declare module 'NimiqVueComponents/src/components/WalletMenu.vue' {
    import { Vue } from 'vue-property-decorator';
    export default class WalletMenu extends Vue {
    }
}

declare module 'NimiqVueComponents/src/components/QrCode.vue' {
    import { Vue } from 'vue-property-decorator';
    import QrEncoder from 'qr-code';
    /**
      * **Nimiq QR Code Component**
      *
      * Props:
      *
      * **data** {string} The data to render
      *
      * **errorCorrection** {'L', 'M', 'H', 'Q'} [optional, default: 'M'] Error correction level according to QR specs
      *
      * **radius** {number} [optional, default .5] Roundness of QR code modules. Recommended value: .5
      *
      * **fill** {string|LinearGradient|RadialGradient} [optional, default '#0582ca' (nimiq-light-blue)] Fill of QR code
      *
      * **background** {string|null} [optional, default null] Background color of QR code. null means transparent.
      *
      * **size** {number} [optional, default 128] Width and height of QR code
      *
      * The QR encoder lib itself is lazy loaded as a webpack chunk when the data is set. If you want to use the QrCode
      * component in your project, you should copy the chunk from the dist folder over to your project.
      */
    export default class QrCode extends Vue {
        data: string;
        errorCorrection: 'L' | 'M' | 'H' | 'Q';
        radius: number;
        fill: string | QrEncoder.LinearGradient | QrEncoder.RadialGradient;
        background: string | null;
        size: number;
    }
}

declare module 'NimiqVueComponents/src/components/QrScanner.vue' {
    import { Vue } from 'vue-property-decorator';
    import QrScannerLib from 'qr-scanner';
    class QrScanner extends Vue {
        reportFrequency: number;
        validate?: (scanResult: string) => boolean;
        start(): Promise<boolean>;
        stop(): void;
        setGrayscaleWeights(red: any, green: any, blue: any): void;
        setInversionMode(inversionMode: QrScannerLib.InversionMode): void;
        repositionOverlay(): void;
    }
    namespace QrScanner {
        const enum Events {
            RESULT = "result",
            CANCEL = "cancel",
            ERROR = "error"
        }
    }
    export default QrScanner;
}

