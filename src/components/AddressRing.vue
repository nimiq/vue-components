<template>
    <div class="address-ring" v-if="addresses.length >=6">
        <Identicon
            v-for="(address, index) of addresses.slice(0, 6)"
            :key="index"
            :address="address"
            class="identicon"
        />
    </div>
    <div class="address-ring" v-else>
        <Identicon
            v-for="(address, index) of addresses.slice(0, 6)"
            :key="index"
            :address="address"
            class="identicon"
        />
        <svg v-for="index in emptyHexagons" :key="6 - index" class="identicon nq-icon">
            <use class="nq-blue opaque" xlink:href="../../node_modules/@nimiq/style/nimiq-style.icons.svg#nq-hexagon"/>
        </svg>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Identicon from './Identicon.vue';

    @Component({components: { Identicon }})
    export default class AddressRing extends Vue {
        @Prop(Array) private addresses!: string[];

        private get emptyHexagons() {
            return 6 - this.addresses.length;
        }
    }
</script>

<style scoped>
    .address-ring {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 10rem; 
        height: 10rem;
        position: relative;
        transform: scale(0.24);
    }

    .identicon {
        width: 14.25rem;
        height: 14.25rem;
        position: absolute;
    }

    .identicon:nth-child(1) { transform: translate(  0.0rem, -14.25rem); }
    .identicon:nth-child(2) { transform: translate(-12.5rem,  -7.25rem); }
    .identicon:nth-child(3) { transform: translate(-12.5rem,   7.25rem); }
    .identicon:nth-child(4) { transform: translate(  0.0rem,  14.25rem); }
    .identicon:nth-child(5) { transform: translate( 12.5rem,   7.25rem); }
    .identicon:nth-child(6) { transform: translate( 12.5rem,  -7.25rem); }

    .opaque {
        opacity: 0.1;
    }
</style>
