<template>
    <div class="copyable-field-wrapper">
        <span class="nq-label" v-if="label">{{label}}</span>
        <div class="copyable-field"
            :class="{ 'single-value': hasSingleValue, copied }"
            @click="copy(values[currentKey])">
            <span :style="{ fontSize: dynamicFontSize+'rem' }">
                {{values[currentKey]}}
            </span>
            <button
                class="nq-button-s"
                v-if="values && Object.keys(values).length > 1"
                v-for="(value, key) in values"
                @click.stop="changeKey(key)"
                :class="{ inverse: currentKey === key }"
            >{{key}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Clipboard } from '@nimiq/utils';

interface CopyableFieldValues {
    [ k: string ]: string | number;
}

enum InitialValue {
    FONT_SIZE = 3,
    MAX_LENGTH = 21,
}

@Component
export default class CopyableField extends Vue {
    @Prop({
        required: true,
        type: Object,
    })
    public values!: CopyableFieldValues;

    @Prop(String)
    public label?: string;

    private currentKey: string | number = '';
    private hasSingleValue: boolean = false;
    private dynamicFontSize: number = InitialValue.FONT_SIZE;
    private copied: boolean = false;
    private _copiedResetTimeout: number | undefined;

    private mounted() {
        const keys: string[] = Object.keys(this.values);

        if (!this.values || keys.length === 0 || keys.length > 2) {
            throw new Error('CopyableField: values prop should have between 1 and 2 entries');
        }

        if (keys.length === 1) {
            this.hasSingleValue = true;
        }

        this.changeKey(keys[0]);
    }

    private changeKey(key: string | number) {
        this.currentKey = key;
        this._updateFontSize(key);
    }

    private _updateFontSize(key: string | number) {
        const valueLength = (this.values[key] + '').length;
        const keysLength = Object.keys(this.values).join('').length;
        const currentMaxLength = InitialValue.MAX_LENGTH - keysLength;

        if (valueLength > currentMaxLength && !this.hasSingleValue) {
            this.dynamicFontSize = (InitialValue.FONT_SIZE / valueLength) * currentMaxLength;
        } else if (valueLength > currentMaxLength && this.hasSingleValue) {
            this.dynamicFontSize = (InitialValue.FONT_SIZE / valueLength) * (InitialValue.MAX_LENGTH + 1);
        } else {
            this.dynamicFontSize = InitialValue.FONT_SIZE;
        }
    }

    private copy(value: string | number) {
        Clipboard.copy(value + '');
        this.copied = true;

        window.clearTimeout(this._copiedResetTimeout);
        this._copiedResetTimeout = window.setTimeout(() => {
            this.copied = false;
        }, 500);
    }
}
</script>

<style scoped>
    .copyable-field,
    .copyable-field button,
    .copyable-field::after,
    .copyable-field.single-value span {
        transition-duration: .25s;
        transition-timing-function: var(--nimiq-ease);
    }

    .copyable-field-wrapper,
    .copyable-field {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .copyable-field-wrapper {
        flex-direction: column;
        justify-content: space-between;
    }

    .copyable-field {
        flex-direction: row;
        height: 6.25rem;
        position: relative;
        border-radius: 0.5rem;
        line-height: 6.25rem;
        font-size: 3rem;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        transition-property: background;
    }

    .copyable-field::after {
        content: 'COPIED';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.75rem;
        color: var(--nimiq-light-blue);
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
    }

    .copyable-field,
    .copyable-field::after {
        padding: 0 3rem;
    }

    .copyable-field:hover {
        background: rgba(255, 255, 255, 0.16);
    }

    .copyable-field.copied::after {
        opacity: 1;
        visibility: visible;
    }

    .copyable-field button {
        transition-property: background, color, opacity;
    }

    .copyable-field button.inverse {
        color: white;
    }

    .copyable-field.copied button {
        opacity: 0;
    }

    .copyable-field.single-value span {
        mask-image: linear-gradient(90deg, black 60%, transparent 80%);
        mask-size: 150%;
        transition-property: mask-size;
    }

    .copyable-field.single-value.copied span {
        mask-size: 100%;
    }

    .nq-button-s,
    .nq-label {
        color: rgba(255, 255, 255, 0.5);
    }

    .nq-button-s {
        text-transform: uppercase;
    }

    .nq-label {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    span {
        flex-grow: 1;
    }
</style>
