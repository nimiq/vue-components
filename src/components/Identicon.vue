<template>
    <div class="identicon">
        <img :src="dataUrl">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Iqons from '@nimiq/iqons/dist/iqons.min.js';
    import IqonsSvg from '@nimiq/iqons/dist/iqons.min.svg';
    Iqons.svgPath = IqonsSvg.substring(1, IqonsSvg.length - 1);
    
    @Component({
        asyncComputed: {
            dataUrl: {
                get() {
                    if (this.address) {
                        return Iqons.toDataUrl(this.address.toUserFriendlyAddress());
                    } else {
                        return Iqons.placeholderToDataUrl();
                    }
                },
                default() {
                    return Iqons.placeholderToDataUrl();
                },
            },
        },
    })
    export default class Identicon extends Vue {
        @Prop(Nimiq.Address) public address!: Nimiq.Address;
    }
</script>

<style scoped>
    .identicon {
        width: 80px;
        min-width: 40px;
    }

    .identicon img {
        width: 100%;
        height: 100%;
    }
</style>
