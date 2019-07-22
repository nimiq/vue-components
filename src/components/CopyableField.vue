<template>
    <div class="copyable-field">
        <span class="nq-label" v-if="label">{{label}}</span>
        <div class="copyable-field-content" :class="{ 'simple-value': !isKeyedValue, copied }" @click="copy">
            <div ref="value-container" class="value-container" :style="{ fontSize: fontSize+'rem' }">
                <span ref="value" class="value">
                    {{ isKeyedValue ? value[currentKey] : value }}
                </span>
            </div>
            <button
                class="nq-button-s"
                v-if="isKeyedValue"
                v-for="key in Object.keys(value)"
                @click.stop="currentKey = key"
                :class="{
                    inverse: currentKey === key,
                    'single-key': hasSingleKey,
                }"
                :tabindex="hasSingleKey ? -1 : 0"
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
        validator: (value: string | object) => typeof value === 'string' || typeof value === 'number'
            || (typeof value === 'object' && Object.keys(value).length > 0),
    })
    public value!: string | number | { [key: string]: any };

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

    private get isKeyedValue() {
        return typeof this.value !== 'string' && typeof this.value !== 'number';
    }

    private get hasSingleKey() {
        return this.isKeyedValue && Object.keys(this.value).length === 1;
    }

    @Watch('value', { immediate: true })
    private _onValueChange() {
        const keys = this.isKeyedValue ? Object.keys(this.value) : [];
        if (keys.length > 0 && (!this.currentKey || !keys.includes(this.currentKey))) {
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
        Clipboard.copy(this.isKeyedValue ? this.value[this.currentKey].toString() : this.value.toString());
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
    .simple-value .value-container {
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

    button.single-key {
        pointer-events: none;
        background: transparent;
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

    .simple-value .value-container {
        mask-image: linear-gradient(90deg, black 60%, transparent 80%);
        mask-size: 160%;
        transition-property: mask-size;
    }

    .simple-value.copied .value-container {
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