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
        padding: calc(4 * var(--nimiq-size, 8px));
        background: white;
        border-top: 1px solid rgba(31, 35, 72, 0.07);
        border-bottom-left-radius: calc(1 * var(--nimiq-size, 8px));
        border-bottom-right-radius: calc(1 * var(--nimiq-size, 8px));
    }

    @media (max-width: 450px) {
        .nq-card-footer {
            padding: calc(3 * var(--nimiq-size, 8px));
        }
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
