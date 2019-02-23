<template>
    <div class="small-page nq-card">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SmallPage extends Vue {}
</script>

<style scoped>
    .small-page {
        width: 100%;
        max-width: calc(52.5 * var(--nimiq-size, 8px)); /* 420px */
        height: calc(70.5 * var(--nimiq-size, 8px)); /* 564px */
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        margin: 0 calc(1.25 * var(--nimiq-size, 8px));
    }
</style>
