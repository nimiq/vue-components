<template>
    <div class="identicon">
        <img :src="dataUrl">
    </div>
</template>

<script>
import ValidationUtils from '../../../../libraries/secure-utils/validation-utils/validation-utils.js'
import Iqons from '../../../../libraries/iqons/src/js/iqons.js'
if (!location.host.includes('localhost')) Iqons.svgPath = '/iqons.min.svg'

export default {
    name: 'Identicon',
    props: ['address'],
    asyncComputed: {
        dataUrl: {
            get() {
                if (ValidationUtils.isValidAddress(this.address)) {
                    const address = this.address.replace(/ /g, '').replace(/.{4}/g, '$& ').trim()
                    return Iqons.toDataUrl(address)
                } else {
                    return Iqons.placeholderToDataUrl()
                }
            },
            default() {
                return Iqons.placeholderToDataUrl()
            }
        }
    }
}
</script>

<style>
    .identicon {
        width: 80px;
        min-width: 40px;
    }

    .identicon img {
        width: 100%;
        height: 100%;
    }
</style>
