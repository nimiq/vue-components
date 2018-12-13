<template>
    <svg height="54" width="54" color="inherit" class="loading-spinner">
        <path id="big-hex" d="M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z" stroke="currentColor" stroke-width="3" fill="transparent" stroke-linecap="round" opacity="0.4"
        stroke-dasharray="92.5 60" />

        <path id="small-hex" d="M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"
        stroke-dasharray="47.5 105" />
    </svg>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class LoadingSpinner extends Vue {}
</script>

<style scoped>
    /* SVG loading animation */
    /* Hexagon circumfence: 152.5 */

    #big-hex {
        stroke-dashoffset: -40.5;
        animation: big-hex 3s linear infinite;
    }

    #small-hex {
        stroke-dashoffset: 13;
        animation: small-hex 3s linear infinite;
    }

    @keyframes big-hex {
        from { stroke-dashoffset: -40.5 }
        to   { stroke-dashoffset: 112 }
    }

    @keyframes small-hex {
        from { stroke-dashoffset: 13 }
        to   { stroke-dashoffset: 165.5 }
    }
</style>
