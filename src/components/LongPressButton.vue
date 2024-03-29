<template>
    <button class="long-press-button nq-button" :class="color"
        @mousedown.left.prevent="isPressed = true; /* also prevent focus. mouseup is registered on document */"
        @touchstart.prevent="isPressed = true; /* also prevent context menu on long press */"
        @keydown.enter.space.prevent="isPressed = true; /* also prevent triggering clicks */"
        @touchend="isPressed = false"
        @keyup.enter.space="isPressed = false"
        @blur="isPressed = false /* if focus moves away, release the button */"
        @click.prevent.stop="$event.stopImmediatePropagation(); /* don't trigger handlers */"
        @submit.prevent.stop="$event.stopImmediatePropagation(); /* don't trigger handlers and default behavior */"
    >
        <span class="mix-blend-mode-mask">
            <transition name="transition-indicator">
                <div v-if="isPressed" class="indicator" :style="`--transition-time: ${duration}ms`"/>
            </transition>
            <!-- Do not show/hide label, prompt and subline via v-if and instead always keep them in the DOM to avoid
            the button changing its size when switching between the texts. -->
            <label :class="{show: !showKeepPressingPrompt, center: isPressed && $slots.subline}"><slot/></label>
            <label :class="{show: showKeepPressingPrompt, center: isPressed && $slots.subline}">{{
                $t('Keep pressing\u2026')
            }}</label>
            <span v-if="$slots.subline" class="subline" :class="{show: !isPressed}"><slot name="subline"/></span>
        </span>
    </button>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import I18nMixin from '../i18n/I18nMixin';

@Component({ name: 'LongPressButton' })
class LongPressButton extends Mixins(I18nMixin) {
    @Prop({ type: Number, default: 3000 /* ms */ })
    public duration!: number;

    @Prop({ type: String, default: 'light-blue' })
    public color!: string;

    private isPressed: boolean = false;
    private showKeepPressingPrompt: boolean = false;
    private keepPressingTimeout: number = -1;
    private longPressTimeout: number = -1;

    // Register mouseup on document instead of on the button to detect it even if the mouse moved away. For touchend
    // and keyup, listening on the button suffices.
    private created() {
        this._onMouseup = this._onMouseup.bind(this);
    }
    private mounted() {
        document.addEventListener('mouseup', this._onMouseup);
    }
    private destroyed() {
        document.removeEventListener('mouseup', this._onMouseup);
    }
    private _onMouseup() {
        this.isPressed = false;
    }

    @Watch('isPressed')
    private _onButtonPressOrRelease(isPressed: boolean) {
        if (isPressed) {
            this.keepPressingTimeout = window.setTimeout(() => this.showKeepPressingPrompt = true, this.duration * .4);
            this.longPressTimeout = window.setTimeout(
                () => this.$emit(LongPressButton.Events.LONG_PRESS),
                this.duration,
            );
        } else {
            clearTimeout(this.keepPressingTimeout);
            clearTimeout(this.longPressTimeout);
            this.showKeepPressingPrompt = false;
        }
    }
}

namespace LongPressButton { // tslint:disable-line no-namespace
    export enum Events {
        LONG_PRESS = 'long-press',
    }
}

export default LongPressButton;
</script>

<style scoped>
    .long-press-button {
        --label-height: 2.5rem; /* variable that can be overwritten if custom content has a different height */
        --subline-height: 2.5rem; /* variable that can be overwritten if custom content has a different height */
        --transition-time: 3s; /* default value; the actual effective value is set via duration prop */
        --release-transiton-time: min(.3s, var(--transition-time)); /* short transition time when button released */

        contain: layout style; /* not paint because focus outline overflows */
        padding: 0; /* make the .mix-blend-mode-mask cover the whole button to be able to add paint containment on it */
    }

    .mix-blend-mode-mask {
        contain: layout paint style;
        display: flex;
        height: 100%;
        padding: 0 6.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* We achieve the color switching effect of the labels within the indicator area by two nested mix-blend-modes.
        The indicator and labels combine to a black and white mask in the .mix-blend-mode-mask of which only the white
        parts are rendered over the button via the lighten mix-blend-mode. Notably, the text within the indicator area
        is mixed to black, such that the button color shines through the text. */
        mix-blend-mode: lighten;
    }

    .indicator {
        contain: layout paint style;
        position: absolute;
        width: calc(100% - 1.5rem);
        max-height: calc(100% - 1.5rem);
        border-radius: 999px; /* just needs to be at least the indicator height */
        overflow: hidden;
        background: white;
        mix-blend-mode: difference; /* subtract text to make it black in the .mix-blend-mode-mask over the indicator */
        transition: width var(--transition-time) ease-out;
    }

    .indicator.transition-indicator-enter,
    .indicator.transition-indicator-leave-to {
        width: 0;
    }
    .indicator.transition-indicator-leave-active {
        transition-duration: var(--release-transiton-time);
    }

    /* css hack to ensure the indicator has the same height as width until max-height is reached */
    .indicator::after {
        contain: size layout paint style;
        content: '';
        display: block;
        padding-top: 100%;
    }

    label,
    .subline {
        contain: style; /* not layout or paint because these would cause a new stacking context */
        white-space: nowrap;
        /* Transition color and margin instead of opacity and transform as those would create a new stacking context
        (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
        which would prevent it from mixing with mix-blend-mode. */
        transition-property: color, margin;
        transition-timing-function: var(--nimiq-ease);
    }

    label:not(.show),
    .subline:not(.show) {
        color: rgba(255, 255, 255, 0);
    }

    label {
        --center-offset: calc(var(--subline-height) / 2 - 1px); /* -1px because it looks just a bit better centered */
        color: white;
        transition-duration: var(--release-transiton-time); /* quick transition when button released */
    }

    label.center {
        transition-duration: .5s, 1s; /* somewhat quick fade between labels and slow centering on button press */
    }

    label:nth-of-type(1).center {
        margin-top: var(--center-offset); /* only need to do this for the first label, the second will move along */
    }

    label:nth-of-type(2) {
        /* place second label on top of first for fading between then */
        --extra-margin: calc((var(--label-height) - 2.5rem) / 2); /* split height difference to --label-height in 2 */
        margin-top: calc(-1 * var(--label-height) + var(--extra-margin));
        margin-bottom: var(--extra-margin);
    }
    label:nth-of-type(2).center {
        /* pull subline up to keep it at the original position */
        margin-bottom: calc(-1 * var(--center-offset) + var(--extra-margin));
    }

    .subline {
        font-size: 1.75rem;
        font-weight: 600;
        letter-spacing: normal;
        text-transform: none;
        color: rgba(255, 255, 255, .7);
        transition-duration: 1s;
    }
    .subline.show {
        transition-duration: var(--release-transiton-time); /* quick transition when button released */
    }
</style>
