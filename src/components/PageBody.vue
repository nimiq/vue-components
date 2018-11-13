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
    /** Nimiq Style **/
    .nq-card-body {
        padding: calc(4 * var(--nimiq-size, 8px));
    }

    @media (max-width: 450px) {
        .nq-card-body {
            padding: calc(3 * var(--nimiq-size, 8px));
        }
    }

    .nq-card-body *:first-child {
        margin-top: 0;
    }

    .nq-card-body *:last-child {
        margin-bottom: 0;
    }
    /** END Nimiq Style **/

    .page-body {
        flex-grow: 1;
        overflow-y: auto;
    }
</style>
