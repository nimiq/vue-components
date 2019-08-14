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
    @Prop(String)
    public text?: string;

    public copy() {
        // Note that when iterating over childNodes, pseudo elements are excluded.
        const text = this.text || [ ...this.$el.childNodes ].reduce((concatenated, node) => {
            let nodeText = '';
            if (node.nodeType === Node.TEXT_NODE) {
                nodeText = node.textContent.trim();
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // use innerText as it better represents the visible content than textContent
                nodeText = (node as HTMLElement).innerText;
            }

            if (concatenated && nodeText) {
                concatenated += '\n';
            }
            concatenated += nodeText;
            return concatenated;
        }, '');
        Clipboard.copy(text);

        window.clearTimeout(this._copiedResetTimeout);
        this.copied = true;
        this._copiedResetTimeout = window.setTimeout(() => {
            this.copied = false;
        }, 1800);
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
        /* When label is not visible set height to 0 to avoid it being hoverable. Not using pointer-events:none as the
        labels should be clickable when visible. While we could set pointer-events:all while visible (hovered), once
        unhovered for a short moment (for example when moving the mouse from the slot to the label) it's not possible to
        hover the labels again to keep them visible without hovering the slot itself. Using height we don't have this
        problem as we can apply a transition delay. */
        height: 0;
        padding: 0;
        box-sizing: content-box;
        transform: translateX(-50%);
        font-family: Muli, system-ui, sans-serif;
        font-weight: 600;
        font-size: 1.75rem;
        text-transform: uppercase;
        letter-spacing: .1875rem;
        color: var(--nimiq-light-blue);
        opacity: 0;
        overflow: hidden;
        transition: opacity .3s var(--nimiq-ease), transform 2s var(--nimiq-ease), height 0s 1s, padding 0s 1s;
    }

    .copyable::before {
        content: 'Copy';
    }

    .copyable::after {
        content: 'Copied';
    }

    .copyable:not(.copied):hover::before,
    .copyable.copied::after {
        height: 1em;
        padding: 2.5rem 2rem 1rem;
        opacity: 1;
        transition-delay: 0s;
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
