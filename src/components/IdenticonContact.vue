<template>
    <div class="identicon-contact">
        <Identicon :address="address" />
        <span v-if="name">{{ name }}</span>
        <div v-if="!name" class="name-placeholder"></div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import Identicon from './Identicon.vue'
import '@nimiq/style/nimiq-style.min.css'

@Component({components: {Identicon}})
export default class IdenticonContact extends Vue {
    @Prop(String) public address!: string;
    @Prop(String) public name!: string;
}
</script>

<style scoped>

    span {
        text-align: center;
    }

    .identicon-contact {
        width: calc(11 * var(--nimiq-size, 8px));
        min-width: calc(5 * var(--nimiq-size, 8px));
        text-align: center;
        margin: 0;
    }

    .identicon-contact .identicon {
        margin: auto;
        width: 72%;
    }

    .name-placeholder {
        background-color: var(--nimiq-gray);
        width: 72%;
        height: 0.5em;
        margin: auto;
        margin-top: 8px;
        border-radius: 0.5em;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
