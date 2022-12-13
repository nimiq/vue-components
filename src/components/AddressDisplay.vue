<template>
    <component :is="copyable ? 'Copyable' : 'div'" :text="text" class="address-display" :class="`format-${format}`">
        <span v-for="(chunk, index) in chunks" class="chunk" :key="chunk + index">{{ chunk }}<span v-if="chunkTrailingSpaces" class="space">&nbsp;</span></span>
    </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Copyable from './Copyable.vue';

@Component({ components: {Copyable} })
export default class AddressDisplay extends Vue {
    @Prop({
        type: String,
        required: true,
    }) address: string;

    @Prop({
        type: String,
        default: 'nimiq',
    }) format: string;

    @Prop({
        type: Boolean,
        default: false,
    }) copyable: boolean;

    get chunks(): string[] {
        switch (this.format) {
            case 'nimiq':
                if (!this.address) return new Array(9).fill('-');
                return this.address.replace(/[+ ]/g, '').match(/.{4}/g)!;
            case 'ethereum':
                if (!this.address) return new Array(3).fill('-');
                return this.address.replace(/[+ ]/g, '').match(/.{14}/g)!;
            default:
                return [this.address];
        }
    }

    get text(): string {
        switch (this.format) {
            case 'nimiq': return this.chunks.join(' ').toUpperCase();
            case 'ethereum': return this.chunks.join('');
            default: return this.address;
        }
    }

    get chunkTrailingSpaces(): boolean {
        return this.format === 'nimiq';
    }
}
</script>

<style scoped>
    .address-display {
        width: 100%;
        box-sizing: content-box;
        color: rgba(31, 35, 72, .5); /* nimiq-blue with .5 opacity */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 3rem;
    }

    .format-nimiq {
        max-width: 28.25rem;
    }

    .format-ethereum {
        max-width: 27rem;
    }

    .address-display.copyable:hover,
    .address-display.copyable:focus,
    .address-display.copyable.copied {
        font-weight: 500;
    }

    .chunk {
        font-family: 'Fira Mono', monospace;
        margin: 0.875rem 0;
        line-height: 1.11;
        text-align: center;
        box-sizing: border-box;
    }

    .format-nimiq .chunk {
        width: 33%;
        text-transform: uppercase;
    }

    .format-ethereum .chunk {
        width: 100%;
    }

    .space {
        font-size: 0;
    }
</style>
