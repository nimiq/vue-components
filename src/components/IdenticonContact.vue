<template>
    <div class="identicon-contact">
        <Identicon :address="address" />
        <span v-if="name">{{ name }}</span>
        <div v-else class="name-placeholder"></div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Identicon from './Identicon.vue';

@Component({components: {Identicon}})
export default class IdenticonContact extends Vue {
    @Prop(String) public address!: string;
    @Prop(String) public name!: string;
}
</script>

<style scoped>
    .identicon-contact {
        width: calc(11 * var(--nimiq-size, 8px));
        text-align: center;
    }

    .identicon-contact .identicon {
        margin: auto;
        width: 72%;
    }

    .name-placeholder {
        background-color: var(--nimiq-gray);
        width: 72%;
        height: var(--nimiq-size, 8px);
        margin: auto;
        margin-top: var(--nimiq-size, 8px);
        border-radius: calc(0.5*var(--nimiq-size, 8px));
    }
</style>
