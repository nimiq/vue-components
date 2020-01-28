<template>
    <div class="select-bar">
        <div v-for="option of options" :key="option.value">
            <input :value="option" type="radio" :name="name" :id="option.value" v-model="selectedOption">
            <label :for="option.value" class="nq-label" :class="getColor(option)">{{option.text}}</label>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
class SelectBar extends Vue {
    @Prop(String) public name!: string;
    @Prop(Array) public options!: SelectBar.SelectBarOption[];
    @Prop(Number) public selectedValue?: number;

    private selectedOption: SelectBar.SelectBarOption | null = null;

    private created() {
        this.options = this.options.sort((a, b) => a.index - b.index);

        this.selectedOption = this.selectedValue
            ? this.options.find((val) => val.value === this.selectedValue)!
            : this.options[0];
    }

    public get value() {
        return this.selectedOption!.value;
    }

    private getColor(option: SelectBar.SelectBarOption) {
        if (option.index <= this.selectedOption!.index) {
            return this.selectedOption!.color;
        } else return 'nq-highlight-bg';
    }

    @Watch('selectedOption')
    private onChanged(option: SelectBar.SelectBarOption) {
        this.$emit('changed', option.value);
    }
}

namespace SelectBar {
    export interface SelectBarOption {
        color: string;
        value: number;
        text: string;
        index: number;
    }
}

export default SelectBar;
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
