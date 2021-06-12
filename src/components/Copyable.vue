<template>
    <div class="copyable" :class="{ copied }" @click="copy" tabindex="0">
        <div class="background"></div>
        <slot></slot>
        <div class="tooltip" ref="tooltip">{{ $t('Copied') }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Clipboard } from '@nimiq/utils';
import I18nMixin from '../i18n/I18nMixin';

/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard on click
 */
@Component({ name: 'Copyable' })
export default class Copyable extends Mixins(I18nMixin) {
    private static readonly DISPLAY_TIME = 800;

    @Prop(String)
    public text?: string;

    private copied: boolean = false;
    private _copiedResetTimeout: number | null = null;

    public copy() {
        let text = this.text;
        if (!text) {
            const copiedLabel = (this.$refs.tooltip as HTMLElement).textContent;
            text = (this.$el as HTMLElement).innerText.replace(new RegExp(`\\s*${copiedLabel}$`), '');
        }
        Clipboard.copy(text);

        window.clearTimeout(this._copiedResetTimeout!);
        this.copied = true;
        this._copiedResetTimeout = window.setTimeout(() => {
            this.copied = false;
        }, Copyable.DISPLAY_TIME);
    }

    private onKeyDown(event: KeyboardEvent) {
        if (event.key === ' ' /* Space */ || event.key === 'Enter') {
            this.copy();
        }
    }

    public created() {
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    public mounted() {
        this.$el.addEventListener('keydown', this.onKeyDown as (event: Event) => void);
    }

    public beforeDestroy() {
        this.$el.removeEventListener('keydown', this.onKeyDown as (event: Event) => void);
    }
}
</script>

<style scoped>
    .copyable {
        position: relative;
        padding: 1.5rem;
        cursor: pointer;
        transition: color .3s var(--nimiq-ease);
    }

    .copyable:hover,
    .copyable:focus,
    .copyable.copied {
        color: var(--nimiq-light-blue) !important;
        outline: none;
    }

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: var(--nimiq-light-blue-bg);
        border-radius: .5rem;
        opacity: 0;
        transition: opacity .3s var(--nimiq-ease);
    }

    .copyable:hover .background,
    .copyable:focus .background,
    .copyable.copied .background {
        opacity: .07;
    }

    .tooltip {
        pointer-events: none;
        font-size: 1.75rem;
        padding: 0.75rem 1rem;
        background: var(--nimiq-light-blue-bg);
        position: absolute;
        top: -5rem;
        left: 50%;
        margin-left: -3.75rem; /* half width of tooltip */
        border-radius: .5rem;
        color: white;
        font-weight: 600;
        line-height: 1.1;
        box-shadow:
            0px 2px 2.5px rgba(31, 35, 72, 0.02),
            0px 7px 8.5px rgba(31, 35, 72, 0.04),
            0px 18px 38px rgba(31, 35, 72, 0.07);

        /* Animated styles */
        transform: translate3d(0, 1rem, 0);
        opacity: 0;

        transition: transform .3s var(--nimiq-ease), opacity .3s var(--nimiq-ease);
        transition-delay: .2s;
    }

    .tooltip::after {
        content: '';
        display: block;
        position: absolute;
        width: 2.25rem;
        height: 2rem;
        left: calc(50% - 1.125rem);
        mask-image: url('data:image/svg+xml,<svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.12c-.47 0-.93.2-1.23.64L3.2 14.29A4 4 0 0 1 0 16h18a4 4 0 0 1-3.2-1.7l-4.57-6.54c-.3-.43-.76-.64-1.23-.64z" fill="white"/></svg>');
        z-index: 1000; /* move above tooltip-box's box-shadow */
        background: #1A6AD2;
        transform: rotate(180deg) translateY(-0.75rem);
    }

    .copyable.copied .tooltip {
        transition-delay: 0s;
        pointer-events: all;
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
</style>
