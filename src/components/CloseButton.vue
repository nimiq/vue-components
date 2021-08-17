<template>
    <button class="close-button nq-button-s" @click="click" @mousedown.prevent>
        <CloseIcon/>
    </button>
</template>

<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator';
import { CloseIcon } from './Icons';

@Component({components: {CloseIcon}})
export default class CloseButton extends Vue {
    @Emit()
    // tslint:disable-next-line no-empty
    public click(event: MouseEvent) {}
}

</script>

<style scoped>
    button {
        font-size: 3rem;
        padding: 0;
        background: none !important;
        height: 3rem;
    }

    button::before {
        border-radius: 50%;
    }

    button .nq-icon {
        opacity: .2;
        transition: opacity .3s var(--nimiq-ease);
    }

    button:hover .nq-icon,
    button:active .nq-icon,
    button:focus .nq-icon {
        opacity: .4;
    }

    button.top-right {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
</style>
