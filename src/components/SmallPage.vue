<template>
    <div class="small-page">
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
        background-color: white;
        box-shadow: 0 calc(1.25 * var(--nimiq-size, 8px)) calc(2.5 * var(--nimiq-size, 8px)) 0 rgba(0, 0, 0, 0.11);
        width: 450px;
        max-width: 100%;
        min-height: calc(58 * var(--nimiq-size, 8px));
        max-height: calc(77.5 * var(--nimiq-size, 8px));
        display: flex;
        flex-direction: column;
        border-radius: calc(1 * var(--nimiq-size, 8px));
        flex-shrink: 0;
    }
</style>
