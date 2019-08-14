<template>
    <div class="copyable" :class="{ copied }" @click="copy">
        <div class="background"></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Clipboard } from '@nimiq/utils';

/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard
 */
@Component
export default class Copyable extends Vue {
    private static readonly DISPLAY_TIME = 2000;

    @Prop(String)
    public text?: string;

    private copied: boolean = false;
    private _copiedResetTimeout: number | null = null;

    public copy() {
        // Note that when iterating over childNodes, pseudo elements are excluded.
        const text = this.text || (this.$el as HTMLElement).innerText;
        Clipboard.copy(text);

        window.clearTimeout(this._copiedResetTimeout);
        this.copied = true;
        this._copiedResetTimeout = window.setTimeout(() => {
            this.copied = false;
        }, Copyable.DISPLAY_TIME);
    }

    private copied: boolean = false;
    private _copiedResetTimeout: number | null = null;
}
</script>

<style scoped>
    .copyable {
        position: relative;
        padding: 1.5rem;
        cursor: pointer;
        margin-bottom: 5.5rem;
    }

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: var(--nimiq-blue-bg);
        border-radius: .5rem;
        opacity: 0;
        transition: opacity .3s var(--nimiq-ease);
    }

    .copyable:hover .background,
    .copyable.copied .background {
        opacity: .05;
    }

    .copyable::before,
    .copyable::after {
        position: absolute;
        left: 50%;
        top: 100%;
        padding: 2.5rem 2rem 1rem;
        box-sizing: content-box;
        transform: translateX(-50%);
        font-family: Muli, system-ui, sans-serif;
        font-weight: 600;
        font-size: 1.75rem;
        text-transform: uppercase;
        letter-spacing: .1875rem;
        color: var(--nimiq-light-blue);
        opacity: 0;
        visibility: hidden;
        transition: opacity .3s var(--nimiq-ease), visibility 1s, transform 2s var(--nimiq-ease);
    }

    .copyable::before {
        content: 'Copy';
    }

    .copyable::after {
        content: 'Copied';
    }

    .copyable:not(.copied):hover::before,
    .copyable.copied::after {
        opacity: 1;
        visibility: visible;
    }

    .copyable.copied::after {
        animation: copied .85s .85s var(--nimiq-ease) forwards;
    }

    @keyframes copied {
        to {
            opacity: 0;
            transform: translate(-50%, -1.5rem);
        }
    }
</style>
