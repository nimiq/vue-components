<template>
    <div class="copyable-field">
        <span class="nq-label" v-if="label">{{label}}</span>
        <div class="copyable-field-content" :class="{ 'single-value': hasSingleValue, copied }" @click="copy">
            <div ref="value-container" class="value-container" :style="{ fontSize: fontSize+'rem' }">
                <span ref="value" class="value">
                    {{values[currentKey]}}
                </span>
            </div>
            <button
                class="nq-button-s"
                v-if="!hasSingleValue"
                v-for="key in Object.keys(values)"
                @click.stop="currentKey = key"
                :class="{ inverse: currentKey === key }"
            >{{key}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Clipboard } from '@nimiq/utils';

@Component
export default class CopyableField extends Vue {
    private static readonly DEFAULT_FONT_SIZE = 3; // in rem

    @Prop({
        required: true,
        type: Object,
        validator: (values: object) => typeof values === 'object' && Object.keys(values).length > 0,
    })
    public values!: { [key: string]: any };

    @Prop(String)
    public label?: string;

    private currentKey: string = '';
    private fontSize: number = CopyableField.DEFAULT_FONT_SIZE;
    private copied: boolean = false;
    private _copiedResetTimeout: number | undefined;

    private mounted() {
        this._updateFontSize = this._updateFontSize.bind(this);
        window.addEventListener('resize', this._updateFontSize);
        this._updateFontSize();
    }

    private destroyed() {
        window.removeEventListener('resize', this._updateFontSize);
    }

    private get hasSingleValue() {
        return Object.keys(this.values).length === 1;
    }

    @Watch('values', { immediate: true })
    private _onValuesChange() {
        const keys = Object.keys(this.values);
        if (!this.currentKey || !keys.includes(this.currentKey)) {
            this.currentKey = keys[0]; // will also trigger _updateFontSize
        } else {
            this._updateFontSize(); // trigger manually
        }
    }

    @Watch('currentKey')
    private async _updateFontSize() {
        await Vue.nextTick(); // let Vue render the component first
        const valueContainer = this.$refs['value-container'] as HTMLDivElement;
        const valueElement = this.$refs.value as HTMLSpanElement;
        valueElement.style.fontSize = `${CopyableField.DEFAULT_FONT_SIZE}rem`;
        const availableWidth = valueContainer.offsetWidth;
        const referenceWidth = valueElement.offsetWidth;
        const scaleFactor =  availableWidth / referenceWidth;
        valueElement.style.fontSize = '';
        this.fontSize = Math.min(CopyableField.DEFAULT_FONT_SIZE, CopyableField.DEFAULT_FONT_SIZE * scaleFactor);
    }

    private copy() {
        Clipboard.copy(this.values[this.currentKey].toString());
        this.copied = true;

        window.clearTimeout(this._copiedResetTimeout);
        this._copiedResetTimeout = window.setTimeout(() => {
            this.copied = false;
        }, 500);
    }
}
</script>

<style scoped>
    .copyable-field-content,
    .copyable-field-content::after,
    button,
    .single-value .value-container {
        transition-duration: .25s;
        transition-timing-function: var(--nimiq-ease);
    }

    .copyable-field,
    .copyable-field-content {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .copyable-field {
        flex-direction: column;
        justify-content: space-between;
        color: white;
    }

    .copyable-field-content {
        height: 6.25rem;
        position: relative;
        border-radius: 0.5rem;
        line-height: 6.25rem;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        transition-property: background;
    }

    .copyable-field-content::after {
        content: 'COPIED';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.75rem;
        color: var(--nimiq-light-blue);
        pointer-events: none;
        opacity: 0;
        transition-property: opacity;
    }

    .copyable-field-content,
    .copyable-field-content::after {
        padding: 0 3rem;
    }

    .copyable-field-content:hover {
        background: rgba(255, 255, 255, 0.16);
    }

    .copyable-field-content.copied::after {
        opacity: 1;
    }

    button {
        margin-left: .5rem;
        transition-property: background, color, opacity;
    }

    button:first-of-type {
        margin-left: 2.5rem;
    }

    button:not(.inverse) {
        background: transparent;
    }

    button:not(.inverse):hover {
        background: rgba(255, 255, 255, .07);
    }

    button.inverse {
        color: white;
    }

    .copied button {
        opacity: 0;
    }

    .value-container {
        display: flex;
        align-items: center;
        flex-grow: 1;
        overflow-x: hidden; /* avoid overflow of the value while it's not resized yet */
        white-space: nowrap;
    }

    .single-value .value-container {
        mask-image: linear-gradient(90deg, black 60%, transparent 80%);
        mask-size: 160%;
        transition-property: mask-size;
    }

    .single-value.copied .value-container {
        mask-size: 100%;
    }

    .nq-button-s,
    .nq-label {
        color: rgba(255, 255, 255, 0.5);
    }

    .nq-label {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
</style>
