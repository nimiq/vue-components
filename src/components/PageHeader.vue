<template>
    <div class="page-header" :class="progressIndicator ? 'has-progress-indicator' : ''">
        <div v-if="progressIndicator" class="progress-indicator">
            <div v-for="thisStep in progressSteps" class="indicator" :class="thisStep <= step ? 'active' : ''" :key="thisStep"></div>
        </div>
        <a v-if="backArrow" class="page-header-back-button icon-back-arrow" @click="$emit('back')"></a>
        <h1><slot></slot></h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class PageHeader extends Vue {
        @Prop({type: Boolean, default: false}) private backArrow!: boolean;
        @Prop({type: Boolean, default: false}) private progressIndicator!: boolean;
        @Prop({type: Number, default: 6}) private numberSteps!: number;
        @Prop({type: Number, default: 1}) private step!: number;

        get progressSteps() {
            const list = [];
            for (let i = 1; i <= this.numberSteps; i++) list.push(i);
            return list;
        }
    }
</script>

<style scoped>
    .page-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        box-sizing: border-box;
        padding: calc(4.25 * var(--nimiq-size, 8px));
        background: white;
        border-bottom: solid 1px #f2f2f2;
        border-top-left-radius: calc(1 * var(--nimiq-size, 8px));
        border-top-right-radius: calc(1 * var(--nimiq-size, 8px));
    }

    .page-header.has-progress-indicator {
        padding-top: calc(5.75 * var(--nimiq-size, 8px));
    }

    .page-header-back-button {
        width: calc(3 * var(--nimiq-size, 8px));
        height: calc(3 * var(--nimiq-size, 8px));
        position: absolute;
        left: calc(4.25 * var(--nimiq-size, 8px));
        top: calc(4 * var(--nimiq-size, 8px));
        background-image: url('data:image/svg+xml,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path fill="%23000" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');
        background-repeat: no-repeat;
        background-position: center;
        background-size: calc(4 * var(--nimiq-size, 8px));
        cursor: pointer;
    }

    .page-header.has-progress-indicator .page-header-back-button {
        top: calc(5.5 * var(--nimiq-size, 8px));
    }

    h1 {
        font-size: calc(1.875 * var(--nimiq-size, 8px));
        text-transform: uppercase;
        letter-spacing: 0.068em;
        line-height: calc(2.5 * var(--nimiq-size, 8px));
        font-weight: bold;
        margin: 0;
    }

    .progress-indicator {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: calc(0.5 * var(--nimiq-size, 8px));
        position: absolute;
        left: 0;
        top: 0;
    }

    .progress-indicator .indicator {
        flex-grow: 1;
        height: calc(0.5 * var(--nimiq-size, 8px));
        border-radius: calc(0.25 * var(--nimiq-size, 8px));
        background: #e5e5e5;
        margin: calc(0.5 * var(--nimiq-size, 8px));
    }

    .progress-indicator .indicator.active {
        background: #24bdb6;
    }
</style>
