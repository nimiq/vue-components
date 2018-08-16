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
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.11);
        width: 450px;
        max-width: 100%;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
    }
</style>
