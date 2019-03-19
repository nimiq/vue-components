<template>
    <div class="account" :class="{ 'editable': editable }">
        <div class="identicon-and-label">
            <Identicon :address="address"/>

            <div v-if="!editable" class="label">
                <div>{{ label }}</div>
            </div>
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
    }
</script>

<style scoped>
    .account {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1.75rem 2rem;
        box-sizing: border-box;
        flex-shrink: 0;
        font-size: 2rem;
        line-height: 1.25;
    }

    .identicon-and-label {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        min-width: 5.625rem;
    }

    .identicon {
        width: 5.625rem;
        height: 5.625rem;
        flex-shrink: 0;
        margin-right: 1.5rem;
    }

    .label {
        white-space: nowrap;
        font-weight: 600;
        overflow: hidden;
    }

    .label div {
        opacity: 0.7;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 1rem;
    }

    .balance {
        flex-shrink: 0;
        font-weight: bold;
        margin-left: 2rem;
        opacity: 0.7;
    }
</style>
