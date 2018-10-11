<template>
    <div class="page-footer">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class PageFooter extends Vue {}
</script>

<style scoped>
    .page-footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        align-items: center;
        justify-content: flex-start;
        height: calc(12.25 * var(--nimiq-size, 8px));
        box-sizing: border-box;
        padding: calc(4 * var(--nimiq-size, 8px));
        background: white;
        border-top: solid 1px #f2f2f2;
        border-bottom-left-radius: calc(1 * var(--nimiq-size, 8px));
        border-bottom-right-radius: calc(1 * var(--nimiq-size, 8px));
        font-size: calc(2.25 * var(--nimiq-size, 8px));
        line-height: calc(2.5 * var(--nimiq-size, 8px));
        font-weight: 500;
    }
</style>
