// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue-property-decorator
//   ../qr-scanner

declare module 'NimiqVueComponents' {
    export { default as ContactList } from 'NimiqVueComponents/src/components/ContactList.vue';
    export { default as WalletMenu } from 'NimiqVueComponents/src/components/WalletMenu.vue';
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

