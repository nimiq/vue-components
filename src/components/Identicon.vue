<template>
    <div class="identicon">
        <img :src="dataUrl">
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';
import Iqons from '@nimiq/iqons/dist/iqons.min.js';

@Component
export default class Identicon extends Vue {
    public static formatAddress(str: string) {
        return str.replace(/[\+ ]/g, '').toUpperCase().match(/.{4}/g)!.join(' ');
    }

    public static isUserFriendlyAddress(str: string) {
        return ValidationUtils.isValidAddress(str);
    }

    @Prop(String) public address!: string;

    private dataUrl: string = this.placeholderDataUrl;

    @Watch('address', { immediate: true })
    private async computeDataUrl(address: string, oldAddress?: string) {
        if (this.address && Identicon.isUserFriendlyAddress(this.address)) {
            // Set svgPath
            // @ts-ignore
            if (self.NIMIQ_IQONS_SVG_PATH) {
                console.warn('Setting NIMIQ_IQONS_SVG_PATH is deprecated and support will be removed in the future. '
                    + 'Use setAssetPublicPath instead.');
                // @ts-ignore
                Iqons.svgPath = self.NIMIQ_IQONS_SVG_PATH;
            } else {
                // Use file-loader to copy the svg asset to dist and set the path to where the file is located. Instead
                // of a normal import use a dynamic import at usage time to give apps the opportunity to adapt the base
                // path via setAssetPublicPath before the path is being determined. Using webpackMode: 'eager' to avoid
                // creating an additional chunk and to let the import resolve immediately.
                let { default: svgPath } = await import(
                    /* webpackMode: 'eager' */
                    '!!file-loader?name=[name].[hash:8].[ext]!@nimiq/iqons/dist/iqons.min.svg');
                if (typeof self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH === 'string') {
                    svgPath = svgPath.replace(__webpack_public_path__, self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH);
                }
                Iqons.svgPath = svgPath;
            }

            this.dataUrl = await Iqons.toDataUrl(Identicon.formatAddress(this.address));
        } else {
            this.dataUrl = this.placeholderDataUrl;
        }
        return true;
    }

    get placeholderDataUrl(): string {
        // tslint:disable-next-line max-line-length
        return 'data:image/svg+xml,<svg width="64" height="64" viewBox="0 -4 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".1" d="M62.3 25.4L49.2 2.6A5.3 5.3 0 0 0 44.6 0H18.4c-1.9 0-3.6 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.2l13.1 22.8c1 1.6 2.7 2.6 4.6 2.6h26.2c1.9 0 3.6-1 4.6-2.6l13-22.8c1-1.6 1-3.6.1-5.2z" fill="url(%23identicon_radial)"/><defs><radialGradient id="identicon_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-63.0033 0 0 -56 63 56)"><stop stop-color="%23260133"/><stop offset="1" stop-color="%231F2348"/></radialGradient></defs></svg>';
    }
}
</script>

<style scoped>
    .identicon {
        width: 10rem;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
