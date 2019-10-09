<template>
    <div class="bottom-overlay" :class="{ 'has-close-button': hasCloseButton }">
        <slot></slot>
        <CloseButton v-if="hasCloseButton" class="close-button" @click="$emit(constructor.Events.CLOSE)" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch  } from 'vue-property-decorator';
import CloseButton from './CloseButton.vue';

@Component({components: {CloseButton}})
class BottomOverlay extends Vue {
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
        bottom: 1rem;
        width: calc(100vw - 2rem);
        max-width: 110rem;
        padding: 1.5rem 2rem 1.75rem 2rem;
        border-radius: 1rem;
        background: var(--nimiq-blue-bg);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.111158);
        font-size: 2rem;
        line-height: 1.3;
        color: white;
        transform: translateX(-50%);
    }

    .has-close-button {
        padding-right: 6.5rem;
    }

    .close-button {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: white;
    }

    @media (max-width: 450px) {
        .bottom-overlay {
            left: 0;
            bottom: 0;
            width: 100vw;
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
