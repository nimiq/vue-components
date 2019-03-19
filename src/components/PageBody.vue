<template>
    <div class="page-body nq-card-body">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class PageBody extends Vue {}
</script>

<style scoped>
    .page-body {
        flex-grow: 1;
        overflow-y: auto;
    }
</style>
