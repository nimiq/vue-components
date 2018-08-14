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
        min-width: 320px;
        max-width: 400px;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
        border-radius: 3px;
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
        padding: 8px 16px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        border-radius: 3px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    .address.copied .copied-cover {
        opacity: 1;
    }
</style>
