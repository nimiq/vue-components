<template>
    <div class="address" @click="copy">
        <span>{{ address ? userFriendlyAddress : 'Invalid address' }}</span>
        <div class="copied-cover">Copied!</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Identicon from './Identicon.vue';

    @Component
    export default class Address extends Vue {
        @Prop(String) public address!: string;

        private copy() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this.$el.querySelector('span') as HTMLSpanElement);
            selection.removeAllRanges();
            selection.addRange(range);

            try {
                document.execCommand('copy');
                selection.removeAllRanges();
                this.$el.classList.add('copied');
                setTimeout(() => this.$el.classList.remove('copied'), 400);
            } catch (e) {
                console.error(e); // eslint-disable-line no-console
            }
        }

        private get userFriendlyAddress() {
            return Identicon.formatAddress(this.address);
        }
    }
</script>

<style scoped>
    .address {
        position: relative;
        width: 100%;
        min-width: 40rem;
        max-width: 50rem;
        padding: 1rem 2rem;
        font-size: 1.75rem;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
        border-radius: 0.375rem;
        font-family: "Source Code Pro", "Menlo", "Roboto Mono", "Droid Sans Mono", monospace;
    }

    .address:hover {
        background: rgba(0, 0, 0, 0.2);
    }

    .copied-cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem 2rem;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        border-radius: 0.375rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    .address.copied .copied-cover {
        opacity: 1;
    }
</style>
