<template>
    <div class="page-header nq-card-header" :class="progressIndicator ? 'has-progress-indicator' : ''">
        <div v-if="progressIndicator" class="progress-indicator">
            <div v-for="thisStep in progressSteps" class="indicator" :class="thisStep <= step ? 'active' : ''" :key="thisStep"></div>
        </div>
        <a v-if="backArrow" class="page-header-back-button nq-icon arrow-left" @click="$emit('back')"></a>
        <h1 class="nq-h1"><slot></slot></h1>
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
    /** Nimiq Style **/
    .nq-h1 {
        font-size: calc(3 * var(--nimiq-size, 8px));
        line-height: 1.2;
        font-weight: bold;
        margin: calc(3 * var(--nimiq-size, 8px)) 0;
    }

    .nq-h2 {
        font-size: calc(2.5 * var(--nimiq-size, 8px));
        line-height: 1.2;
        font-weight: bold;
        margin: calc(2.5 * var(--nimiq-size, 8px)) 0;
    }

    .nq-card-header {
        padding: calc(4 * var(--nimiq-size, 8px));
        text-align: center;
        border-top-left-radius: calc(1 * var(--nimiq-size, 8px));
        border-top-right-radius: calc(1 * var(--nimiq-size, 8px));
    }

    @media (max-width: 450px) {
        .nq-card-header {
            padding: calc(3 * var(--nimiq-size, 8px));
        }
    }

    .nq-card-header .nq-h1,
    .nq-card-header .nq-h2 {
        margin: 0;
        line-height: 1;
    }

    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.arrow-left {
        background-image: url('data:image/svg+xml,<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.04854L2.99789 9.04826" stroke="%231F2348" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.99902 16.001L1.99951 8.99951L8.99902 2" stroke="%231F2348" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
    /** END Nimiq Style **/

    .page-header {
        position: relative;
    }

    .page-header.has-progress-indicator {
        padding-top: calc(6 * var(--nimiq-size, 8px));
    }

    .page-header-back-button {
        width: calc(3 * var(--nimiq-size, 8px));
        height: calc(3 * var(--nimiq-size, 8px));
        position: absolute;
        left: calc(4.5 * var(--nimiq-size, 8px));
        top: calc(4.5 * var(--nimiq-size, 8px));
        cursor: pointer;
        transition: opacity .3s ease, transform .4s ease;
    }

    .page-header-back-button:hover {
        opacity: .4;
        transform: translate3D(-3px,0,0);
    }

    .page-header-back-button:focus {
        /* TODO Ideally, we could change the color to --nimiq-light-blue on :focus instead, but this works for now */
        opacity: .7;
        transform: translate3D(-3px,0,0);
        outline: none;
    }

    .page-header.has-progress-indicator .page-header-back-button {
        top: calc(6 * var(--nimiq-size, 8px));
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
