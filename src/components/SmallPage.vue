<template>
    <div class="margin">
        <div class="small-page">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class SmallPage extends Vue {
    }
</script>

<style scoped>
    .small-page {
        background-color: #fefefe;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
        min-height: 25rem;
        min-width: 320px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 490px) {
        .small-page {
            max-width: 28rem;
            border-radius: 0.5rem;
        }
    }
</style>
