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
        padding: 34px;
        background: white;
        border-bottom: solid 1px #f2f2f2;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .page-header.has-progress-indicator {
        padding-top: 46px;
    }

    .page-header-back-button {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 34px;
        top: 32px;
        background-image: url('data:image/svg+xml,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path fill="%23000" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 32px;
        cursor: pointer;
    }

    .page-header.has-progress-indicator .page-header-back-button {
        top: 44px;
    }

    h1 {
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1.9px;
        line-height: 20px;
        font-weight: bold;
        margin: 0;
    }

    .progress-indicator {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: 4px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .progress-indicator .indicator {
        flex-grow: 1;
        height: 4px;
        border-radius: 2px;
        background: #e5e5e5;
        margin: 4px;
    }

    .progress-indicator .indicator.active {
        background: #24bdb6;
    }
</style>
