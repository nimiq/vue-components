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
    /** Nimiq Style **/
    .nq-card {
        max-width: calc(75 * var(--nimiq-size, 8px));
        background: white;
        border-radius: calc(1 * var(--nimiq-size, 8px));
        box-shadow: 0 calc(0.5 * var(--nimiq-size, 8px)) calc(3.5 * var(--nimiq-size, 8px)) rgba(0, 0, 0, 0.111158);
        margin: calc(2 * var(--nimiq-size, 8px));
        color: #1F2348;
    }

    @media (max-width: 450px) {
        .nq-card {
            margin: calc(2 * var(--nimiq-size, 8px)) calc(1 * var(--nimiq-size, 8px));
        }
    }
    /** END Nimiq Style **/

    .small-page {
        width: 100%;
        max-width: calc(56.25 * var(--nimiq-size, 8px)); /* 450px */
        min-height: calc(58 * var(--nimiq-size, 8px)); /* 464px */
        max-height: calc(70 * var(--nimiq-size, 8px)); /* 620px */
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        margin: 0 calc(1.25 * var(--nimiq-size, 8px));
    }
</style>
