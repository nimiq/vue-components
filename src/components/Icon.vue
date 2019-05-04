<template>
    <svg class="nq-icon" v-html="useTag"></svg>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

/**
 * # Icons
 *
 * Comment out the ones not used for the build target.
 */
import '@nimiq/style/src/icons/alert-triangle.svg';
import '@nimiq/style/src/icons/arrow-left-small.svg';
import '@nimiq/style/src/icons/arrow-left.svg';
import '@nimiq/style/src/icons/arrow-right-small.svg';
import '@nimiq/style/src/icons/arrow-right.svg';
import '@nimiq/style/src/icons/browser-login.svg';
import '@nimiq/style/src/icons/caret-right-small.svg';
import '@nimiq/style/src/icons/checkmark.svg';
import '@nimiq/style/src/icons/close.svg';
import '@nimiq/style/src/icons/contacts.svg';
import '@nimiq/style/src/icons/copy.svg';
import '@nimiq/style/src/icons/download.svg';
import '@nimiq/style/src/icons/face-neutral.svg';
import '@nimiq/style/src/icons/face-sad.svg';
import '@nimiq/style/src/icons/fire.svg';
import '@nimiq/style/src/icons/gear.svg';
import '@nimiq/style/src/icons/hexagon.svg';
import '@nimiq/style/src/icons/info-circle.svg';
import '@nimiq/style/src/icons/keys.svg';
import '@nimiq/style/src/icons/ledger.svg';
import '@nimiq/style/src/icons/lock-locked.svg';
import '@nimiq/style/src/icons/lock-unlocked.svg';
import '@nimiq/style/src/icons/login.svg';
import '@nimiq/style/src/icons/menu-dots.svg';
import '@nimiq/style/src/icons/paper-edit.svg';
import '@nimiq/style/src/icons/plus-circle.svg';
import '@nimiq/style/src/icons/qr-code.svg';
import '@nimiq/style/src/icons/questionmark.svg';
import '@nimiq/style/src/icons/scan-qr-code.svg';
import '@nimiq/style/src/icons/settings.svg';
import '@nimiq/style/src/icons/shredder.svg';
import '@nimiq/style/src/icons/skull.svg';
import '@nimiq/style/src/icons/transfer.svg';
import '@nimiq/style/src/icons/view-off.svg';
import '@nimiq/style/src/icons/view.svg';

@Component
export default class Icon extends Vue {
    @Prop(String) private name!: string;

    private get useTag() {
        return `<use xlink:href="#nq-${this.name}"/>`;
    }
}
</script>
