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
    toDataUrl(type: 'image/png'): Promise<string>;
    private _updateQrCode;
}
