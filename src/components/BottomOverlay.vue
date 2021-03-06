<template>
    <div class="bottom-overlay" :class="[theme, { 'has-close-button': hasCloseButton }]">
        <slot></slot>
        <CloseButton v-if="hasCloseButton"
            class="close-button" :class="{'inverse': ['dark', 'green'].includes(theme)}"
            @click="$emit(constructor.Events.CLOSE)"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch  } from 'vue-property-decorator';
import CloseButton from './CloseButton.vue';

@Component({components: {CloseButton}})
class BottomOverlay extends Vue {
    @Prop({
        type: String,
        default: 'dark',
        validator: (theme) => ['dark', 'light', 'green'].includes(theme),
    })
    public theme!: string;

    private hasCloseButton = false;

    @Watch('$listeners.close', { immediate: true })
    private _onListenerChange() {
        this.hasCloseButton = !!this.$listeners.close;
    }
}
namespace BottomOverlay { // tslint:disable-line no-namespace
    export enum Events {
        CLOSE = 'close',
    }
}
export default BottomOverlay;
</script>

<style scoped>
    .bottom-overlay {
        position: fixed;
        left: 50%;
        bottom: 2rem;
        max-width: 110rem;
        padding: 1.5rem 2rem 1.75rem 2rem;
        border-radius: 1.25rem;
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.111158);
        font-size: 2rem;
        line-height: 1.3;
        transform: translateX(-50%);
    }

    .dark {
        background: var(--nimiq-blue);
        color: white;
    }

    .light {
        background: white;
        color: var(--nimiq-blue);
    }

    .green {
        background: var(--nimiq-green);
        color: white;
    }

    .has-close-button {
        padding-right: 6.5rem;
    }

    .close-button {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }

    .green .close-button >>> .nq-icon {
        opacity: 0.4;
    }

    .green .close-button:hover >>> .nq-icon,
    .green .close-button:focus >>> .nq-icon {
        opacity: 0.7;
    }

    @media (max-width: 912px) {
        .bottom-overlay {
            bottom: 1.5rem;
            width: calc(100% - 3rem);
        }
    }

    @media (max-width: 450px) {
        .bottom-overlay {
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 2.5rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            transform: none;
        }

        .has-close-button {
            padding-right: 7rem;
        }

        .close-button {
            top: 2rem;
            right: 2rem;
        }
    }
</style>
