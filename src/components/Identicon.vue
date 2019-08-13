<template>
    <div class="identicon">
        <img :src="dataUrl">
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';
import Iqons from '@nimiq/iqons/dist/iqons.min.js';
import IqonsSvg from '@nimiq/iqons/dist/iqons.min.svg';

// Detect Iqons.svgPath
// @ts-ignore
if (self.NIMIQ_IQONS_SVG_PATH) Iqons.svgPath = self.NIMIQ_IQONS_SVG_PATH;
else {
    if (IqonsSvg[0] === '"') {
        Iqons.svgPath = IqonsSvg.substring(1, IqonsSvg.length - 1);
    } else {
        Iqons.svgPath = IqonsSvg;
    }
}

@Component
export default class Identicon extends Vue {
    public static formatAddress(str: string) {
        return str.replace(/[\+ ]/g, '').match(/.{4}/g)!.join(' ');
    }

    public static isUserFriendlyAddress(str: string) {
        return ValidationUtils.isValidAddress(str);
    }

    @Prop(String) public address!: string;

    private dataUrl: string = this.placeholderDataUrl;

    @Watch('address', { immediate: true })
    private computeDataUrl(address: string, oldAddress?: string) {
        if (this.address && Identicon.isUserFriendlyAddress(this.address)) {
            Iqons.toDataUrl(Identicon.formatAddress(this.address)).then((dataUrl: string) => {
                this.dataUrl = dataUrl;
            });
        } else {
            this.dataUrl = this.placeholderDataUrl;
        }
        return true;
    }

    get placeholderDataUrl(): string {
        return 'data:image/svg+xml,<svg width="64" height="64" viewBox="0 -4 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".1" d="M62.3 25.4L49.2 2.6A5.3 5.3 0 0 0 44.6 0H18.4c-1.9 0-3.6 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.2l13.1 22.8c1 1.6 2.7 2.6 4.6 2.6h26.2c1.9 0 3.6-1 4.6-2.6l13-22.8c1-1.6 1-3.6.1-5.2z" fill="url(%23identicon_radial)"/><defs><radialGradient id="identicon_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-63.0033 0 0 -56 63 56)"><stop stop-color="%23260133"/><stop offset="1" stop-color="%231F2348"/></radialGradient></defs></svg>'
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
