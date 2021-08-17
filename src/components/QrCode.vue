<template>
    <canvas v-if="!!data" class="qr-code"></canvas>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    import QrCreator from 'qr-creator';

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
    @Component
    export default class QrCode extends Vue {
        @Prop(String)
        public data: string;

        @Prop({
            type: String,
            default: 'M',
            validator: (errorCorrectionLevel) => ['L', 'M', 'H', 'Q'].indexOf(errorCorrectionLevel) !== -1,
        })
        public errorCorrection!: 'L' | 'M' | 'H' | 'Q';

        @Prop({
            type: Number,
            default: .5,
            validator: (radius) => 0 <= radius && radius <= .5,
        })
        public radius!: number;

        @Prop({
            // default equivalent to nimiq-light-blue-bg
            default: () => ({
                type: 'radial-gradient',
                // circle centered in bottom right corner with radius of the size of qr code diagonal
                position: [1, 1, 0, 1, 1, Math.sqrt(2)],
                colorStops: [
                    [0, '#265DD7'],
                    [1, '#0582CA'], // nimiq-light-blue
                ],
            }),
            validator: (fill) => {
                const isValidColor = (c) => typeof(c) === 'string' && /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(c);
                if (isValidColor(fill)) return true;
                const isValidGradient = ((fill.type === 'linear-gradient' && fill.position.length === 4)
                    || (fill.type === 'radial-gradient' && fill.position.length === 6))
                    && fill.position.every((coordinate) => typeof coordinate === 'number');
                if (!isValidGradient) return false;
                const hasValidGradientStops = fill.colorStops.length >= 2
                    && fill.colorStops.every(([offset, color]) => typeof(offset) === 'number' && isValidColor(color));
                return hasValidGradientStops;
            },
        })
        public fill!: string | QrCreator.LinearGradient | QrCreator.RadialGradient;

        @Prop({
            default: null,
            validator: (background) => background === null || /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(background),
        })
        public background!: string | null;

        @Prop({
            type: Number,
            default: 240,
            validator: (size) => size > 0,
        })
        public size!: number;

        public async toDataUrl(type = 'image/png') {
            if (!this.data) return 'data:,';
            await Vue.nextTick(); // Make sure the canvas is in the DOM (it depends on !!data)
            return (this.$el as HTMLCanvasElement).toDataURL(type);
        }

        @Watch('data', { immediate: true })
        @Watch('errorCorrection')
        @Watch('radius')
        @Watch('fill')
        @Watch('background')
        @Watch('size')
        private async _updateQrCode() {
            if (!this.data) return;
            await Vue.nextTick(); // Make sure the canvas is in the DOM (it depends on !!data)
            QrCreator.render({
                text: this.data,
                radius: this.radius,
                ecLevel: this.errorCorrection,
                fill: this.fill,
                background: this.background,
                size: this.size,
            }, this.$el as HTMLCanvasElement);
        }
    }
</script>
