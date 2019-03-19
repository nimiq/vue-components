<template>
    <div class="page-footer nq-card-footer">
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
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
    }
</style>
