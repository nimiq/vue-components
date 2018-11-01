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
        background-size: 9rem;
        z-index: 1;
        display: block;
        height: 9rem;
        width: 10rem;
    }
</style>
