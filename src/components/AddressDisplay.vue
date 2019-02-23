<template>
    <div class="address-display">
        <span v-for="chunk in chunks" class="chunk" :key="chunk">{{ chunk }}<span class="space">&nbsp;</span></span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ValidationUtils } from '@nimiq/utils';

@Component
export default class AddressDisplay extends Vue {
    @Prop(String) private address!: string;

    private get chunks(): string[] {
        if (!this.address) return new Array(9).fill('-');
        return this.address.replace(/[\+ ]/g, '').match(/.{4}/g)!;
    }
}
</script>

<style scoped>
    .address-display {
        width: 100%;
        max-width: 28.25rem;
        font-family: 'Fira Mono', monospace;
        opacity: 0.5;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 3rem;
    }

    .chunk {
        margin: 0.875rem 0;
        line-height: 1.11;
        width: 33%;
        text-align: center;
        box-sizing: border-box;
        text-transform: uppercase;
    }

    .space {
        font-size: 0;
    }
</style>
