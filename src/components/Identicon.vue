<template>
    <div class="identicon">
        <img :src="dataUrl">
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';
import Iqons from '@nimiq/iqons/dist/iqons.bundle.min.js';

@Component
export default class Identicon extends Vue {
    public static formatAddress(str: string) {
        return str.replace(/[\+ ]/g, '').match(/.{4}/g)!.join(' ');
    }

    public static isUserFriendlyAddress(str: string) {
        return ValidationUtils.isValidAddress(str);
    }

    @Prop(String) public address!: string;

    private dataUrl: string = Iqons.placeholderToDataUrl();

    @Watch('address', { immediate: true })
    private computeDataUrl(address: string, oldAddress?: string) {
        if (this.address && Identicon.isUserFriendlyAddress(this.address)) {
            Iqons.toDataUrl(Identicon.formatAddress(this.address)).then((dataUrl: string) => {
                this.dataUrl = dataUrl;
            });
        } else {
            this.dataUrl = Iqons.placeholderToDataUrl();
        }
        return true;
    }
}
</script>

<style scoped>
    .identicon {
        width: calc(10 * var(--nimiq-size, 8px));
        min-width: calc(5 * var(--nimiq-size, 8px));
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
