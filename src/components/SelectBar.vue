<template>
    <div class="select-bar">
        <div v-for="option of options" :key="option.value">
            <input :value="option" type="radio" :name="name" :id="option.value" v-model="selected">
            <label :for="option.value" class="nq-label" :class="getColor(option)">{{option.text}}</label>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

export interface SelectBarOption {
    color: string;
    value: number;
    text: string;
    index: number;
}

@Component
    export default class SelectBar extends Vue {
        @Prop(String) public name!: string;
        @Prop(Array) public options: SelectBarOption[];
        @Prop(Number) public selectedValue: number;

        private selected: SelectBarOption = null;

        private created() {
            this.options = this.options.sort((a, b) => a.index - b.index);

            this.selected = this.selectedValue
                ? this.options.find((val) => val.value === this.selectedValue)
                : this.options[0];
        }

        public get value() {
            if (this.selected) {
                return this.selected.value;
            }
            return 0;
        }

        private getColor(option: SelectBarOption) {
            if (option.index <= this.selected.index) {
                return this.selected.color;
            } else return 'nq-highlight-bg';
        }

        @Watch('selectedOption')
        private onChanged(option: SelectBarOption) {
            this.$emit('changed', option.value);
    }
    }
</script>

<style scoped>
    .select-bar {
        display: flex;
        border-radius: 3.75rem;
        overflow: hidden;
        width: 100%;
    }

    .select-bar > div {
        display: flex;
        flex-grow: 1;
        flex-basis: 0;
    }

    .select-bar > div + div {
        margin-left: .25rem;
    }

    input {
        display: none;
    }

    label {
        padding: 1.75rem 2rem;
        margin: 0;
        width: 100%;
        text-align: center;
        cursor: pointer;
        border-radius: .5rem;
    }

    .nq-highlight-bg {
        background: var(--nimiq-highlight-bg);
    }
</style>
