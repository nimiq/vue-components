<template>
    <div class="page-header nq-card-header" :class="progressIndicator ? 'has-progress-indicator' : ''">
        <div v-if="progressIndicator" class="progress-indicator">
            <div v-for="thisStep in progressSteps" class="indicator" :class="thisStep <= step ? 'active' : ''" :key="thisStep"></div>
        </div>
        <a v-if="backArrow" href="#" class="page-header-back-button" @click.prevent="$emit('back')">
            <ArrowLeftIcon/>
        </a>
        <h1 class="nq-h1"><slot></slot></h1>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import { ArrowLeftIcon } from './Icons';

    @Component({components: { ArrowLeftIcon }})
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
        position: relative;
    }

    .page-header.has-progress-indicator {
        padding-top: 6rem;
    }

    .page-header-back-button {
        font-size: 3rem;
        position: absolute;
        left: 4.25rem;
        top: 4rem;
        line-height: 1;
        cursor: pointer;
        transition: opacity .3s ease, transform .4s ease;
        opacity: .3;
        color: inherit;
    }

    .page-header-back-button:hover,
    .page-header-back-button:focus {
        opacity: 1;
        transform: translate3D(-0.375rem, 0, 0);
        outline: none;
    }

    .page-header-back-button .nq-icon {
        vertical-align: bottom;
    }

    .page-header.has-progress-indicator .page-header-back-button {
        top: 6rem;
    }

    .progress-indicator {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
        position: absolute;
        left: 0;
        top: 0;
    }

    .progress-indicator .indicator {
        flex-grow: 1;
        height: 0.5rem;
        border-radius: 0.25rem;
        background: #e5e5e5;
        margin: 0.5rem;
    }

    .progress-indicator .indicator.active {
        background: #24bdb6;
    }
</style>
