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
        height: 98px;
        box-sizing: border-box;
        padding: 32px;
        background: white;
        border-top: solid 1px #f2f2f2;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 18px;
        line-height: 20px;
        font-weight: 500;
    }
</style>
