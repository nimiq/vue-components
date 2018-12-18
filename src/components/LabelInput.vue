<template>
    <form class="label-input" @submit.prevent="changed">
        <label>
            <input type="text" :style="{width: `${Math.max(2, liveValue.length + 1)}ch`}" v-model="liveValue" @focus="$event.target.select()" @blur="changed" ref="input">
            <i class="nq-icon edit"></i>
        </label>
    </form>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({components: {}})
    export default class LabelInput extends Vue {
        @Prop(String) private value?: string;

        private liveValue = this.value;
        private lastValue = this.value;

        public focus() {
            (this.$refs.input as HTMLInputElement).focus();
        }

        private changed() {
            if (this.liveValue === this.lastValue) return;
            this.$emit('changed', this.liveValue);
            this.lastValue = this.liveValue;
            (this.$refs.input as HTMLInputElement).blur();
        }
    }
</script>

<style scoped>
    /** Nimiq Style **/
    .nq-icon {
        width: 1em;
        height: 1em;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        background-size: 100%;
        background-size: contain;
    }

    .nq-icon.edit {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14"><path class="st0" d="M0.04,13.34l1.88-4.4l3.13,3.13l-4.4,1.88c-0.19,0.08-0.39,0.03-0.52-0.1C0,13.72-0.04,13.52,0.04,13.34z M5.81,11.5L2.48,8.17l5.96-5.96c0.01,0.01,0.01,0.01,0.01,0.02l3.33,3.33l-5.96,5.96C5.82,11.51,5.82,11.5,5.81,11.5z M9.13,1.56 c-0.01,0-0.01-0.01-0.02-0.01l1.41-1.41c0.18-0.18,0.48-0.18,0.67,0l2.68,2.68c0.19,0.18,0.19,0.48,0,0.67l-1.4,1.4L9.13,1.56z"/></svg>');
    }
    /** END Nimiq Style **/

    .label-input {
        display: inline;
    }

    input {
        background: none;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        font-weight: inherit;
        margin: 0;
        padding: 0;
        line-height: 1.11;
        height: calc(2.5 * var(--nimiq-size, 8px));
    }

    .nq-icon.edit {
        height: calc(2.5 * var(--nimiq-size, 8px));
        width: calc(2.5 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        background-size: 70%;
        cursor: pointer;
        opacity: 0.2;
        will-change: opacity;
        transition: opacity 100ms ease;
        vertical-align: bottom;
    }

    .nq-icon.edit:hover {
        opacity: 0.4;
    }
</style>
