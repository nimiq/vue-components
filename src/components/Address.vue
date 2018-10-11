<template>
    <div class="address" @click="copy">
        <span>{{ address ? address.toUserFriendlyAddress() : 'Invalid address' }}</span>
        <div class="copied-cover">Copied!</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Address extends Vue {
        @Prop(Nimiq.Address) public address!: Nimiq.Address;

        private copy() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this.$el.querySelector('span'));
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
    }
</script>

<style scoped>
    .address {
        position: relative;
        width: 100%;
        min-width: calc(40 * var(--nimiq-size, 8px));
        max-width: calc(50 * var(--nimiq-size, 8px));
        padding: calc(1 * var(--nimiq-size, 8px)) calc(2 * var(--nimiq-size, 8px));
        font-size: calc(1.75 * var(--nimiq-size, 8px));
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
        border-radius: calc(0.375 * var(--nimiq-size, 8px));
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
        padding: calc(1 * var(--nimiq-size, 8px)) calc(2 * var(--nimiq-size, 8px));
        background: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        border-radius: calc(0.375 * var(--nimiq-size, 8px));
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    .address.copied .copied-cover {
        opacity: 1;
    }
</style>
