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
    /** Nimiq Style **/
    .nq-card-footer {
        padding: calc(1 * var(--nimiq-size, 8px));
        border-bottom-left-radius: calc(1 * var(--nimiq-size, 8px));
        border-bottom-right-radius: calc(1 * var(--nimiq-size, 8px));
    }

    .nq-card-body + .nq-card-footer {
        padding-top: 0;
    }
    /** END Nimiq Style **/

    .page-footer {
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
    }
</style>
