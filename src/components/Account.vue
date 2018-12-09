<template>
    <div class="account" :class="{ 'editable': editable }">
        <div class="identicon-and-label">
            <Identicon :address="address"/>

            <div v-if="!editable" class="label">{{ label }}</div>
            <div v-else class="label">
                <LabelInput :value="label" @changed="changed" ref="label"/>
            </div>
        </div>

        <div class="balance" v-if="balance || balance === 0"><Amount :amount="balance" :decimals="2"/></div>
        <!-- <div class="balance balance-loading" v-if="!balance && balance !== 0"></div> -->
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
    import Identicon from './Identicon.vue';
    import Amount from './Amount.vue';
    import LabelInput from './LabelInput.vue';

    @Component({components: {Amount, Identicon, LabelInput}})
    export default class Account extends Vue {
        @Prop(String) public address!: string;
        @Prop(String) public label!: string;
        @Prop(Number) public balance!: number;
        @Prop(Boolean) private editable?: boolean;

        public focus() {
            if (this.editable) {
                (this.$refs.label as LabelInput).focus();
            }
        }

        @Emit()
        // tslint:disable-next-line no-empty
        private changed(label: string) {}

        private get formattedAddress() {
            return Identicon.formatAddress(this.address);
        }
    }
</script>

<style scoped>
    .account {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: calc(1.75 * var(--nimiq-size, 8px)) calc(2 * var(--nimiq-size, 8px));
        box-sizing: border-box;
        flex-shrink: 0;
        font-size: calc(2 * var(--nimiq-size, 8px));
        line-height: 1.25;
    }

    .identicon-and-label {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        min-width: calc(5.625 * var(--nimiq-size, 8px));
    }

    .identicon {
        width: calc(5.625 * var(--nimiq-size, 8px));
        height: calc(5.625 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: calc(2 * var(--nimiq-size, 8px));
    }

    .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        opacity: 0.7;
    }

    .balance {
        flex-shrink: 0;
        font-weight: bold;
        margin-left: calc(2 * var(--nimiq-size, 8px));
        opacity: 0.7;
    }
</style>
