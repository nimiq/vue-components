<template>
    <div class="loading-spinner" />
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class LoadingSpinner extends Vue {}
</script>

<style scoped>
    .loading-spinner {
        background-image: url('../assets/loading-spinner.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: calc(9 * var(--nimiq-size, 8px));
        z-index: 1;
        display: block;
        height: calc(9 * var(--nimiq-size, 8px));
        width: calc(10 * var(--nimiq-size, 8px));
    }
</style>
