<template>
    <div class="account">
        <Identicon :address="address"/>
        <div class="account-description">
            <div class="label-and-balance">
                <div v-if="!editable" class="label">{{ label }}</div>
                <div v-else class="label"><LabelInput :value="label" @changed="changed"/></div>

                <div class="balance" v-if="balance || balance === 0"><Amount :amount="balance" :decimals="2"/></div>
                <div class="balance balance-loading" v-if="!balance && balance !== 0"></div>
            </div>
            <div class="address">{{ formattedAddress }}</div>
        </div>
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
        padding: calc(1.5 * var(--nimiq-size, 8px)) calc(4 * var(--nimiq-size, 8px));
        box-sizing: border-box;
    }

    .identicon {
        width: calc(8 * var(--nimiq-size, 8px));
        height: calc(8 * var(--nimiq-size, 8px));
        flex-shrink: 0;
        margin-right: calc(2 * var(--nimiq-size, 8px));
    }

    .account-description {
        flex-grow: 1;
        --lost-width: calc(10 * var(--nimiq-size, 8px));
        width: calc(100% - var(--lost-width));
    }

    .label-and-balance {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: 500;
        font-size: calc(2.25 * var(--nimiq-size, 8px));
        line-height: calc(2.5 * var(--nimiq-size, 8px));
    }

    .label {
        margin-bottom: 0.375em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .balance {
        color: #24bdb6;
    }

    .address {
        font-size: calc(1.5 * var(--nimiq-size, 8px));
        line-height: calc(2.5 * var(--nimiq-size, 8px));
        font-family: "Andale Mono", monospace;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        word-spacing: -0.2em;
        max-width: calc(38.5 * var(--nimiq-size, 8px));
    }
</style>
