<template>
    <div class="account" :class="[{ editable }, layout]">
        <div class="identicon-and-label">
            <div v-if="showImage" class="identicon">
                <img class="account-image" :src="image" @error="showImage = false">
                <div class="outline"></div>
            </div>
            <Identicon v-else :address="address"/>

            <div v-if="!editable" class="label">{{ label }}</div>
            <div v-else class="label editable">
                <LabelInput :value="label" :placeholder="placeholder" @changed="changed" ref="label"/>
            </div>

            <div v-if="layout === 'column' && walletLabel" class="nq-label wallet-label">{{ walletLabel }}</div>
        </div>

        <Amount v-if="balance || balance === 0" class="balance" :amount="balance" :decimals="decimals" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
    import Identicon from './Identicon.vue';
    import Amount from './Amount.vue';
    import LabelInput from './LabelInput.vue';

    @Component({components: {Amount, Identicon, LabelInput}})
    export default class Account extends Vue {
        @Prop(String) public address!: string;
        @Prop(String) public image?: string;
        @Prop(String) public label!: string;
        @Prop(String) public placeholder?: string;
        @Prop(String) public walletLabel?: string;
        @Prop(Number) public balance?: number;
        @Prop({type: Number, default: 2}) public decimals!: number;
        @Prop(Boolean) public editable?: boolean;
        @Prop({
            type: String,
            default: 'row',
            validator: (layout) => ['row', 'column'].indexOf(layout) !== -1,
        }) public layout!: string;

        private showImage: boolean = !!this.image;

        public focus() {
            if (this.editable) {
                (this.$refs.label as LabelInput).focus();
            }
        }

        @Emit()
        // tslint:disable-next-line no-empty
        private changed(label: string) {}

        @Watch('image', { immediate: true })
        private onImageChange() {
            this.showImage = !!this.image;

            // load clip path if not done so yet
            if (!this.showImage || document.getElementById('nimiq-hexagon-clip')) return;
            /* tslint:disable max-line-length */
            document.body.insertAdjacentHTML('beforeend', `
                <svg width="0" height="0" viewBox="0 0 146 146">
                    <defs>
                        <clipPath id="nimiq-hexagon-clip" clipPathUnits="objectBoundingBox">
                            <path d="M.302.055A.106.106 0 0 0 .21.108l-.196.34a.106.106 0 0 0 0 .105l.196.34a.106.106 0 0 0 .092.052h.392c.038 0 .073-.02.092-.053l.196-.34a.106.106 0 0 0 0-.105L.786.107A.106.106 0 0 0 .694.056z">
                            </path>
                        </clipPath>
                    </defs>
                </svg>
            `);
            /* tslint:enable max-line-length */
            // avoid a line-height being rendered for default display: inline. Applied via code for CSP compatibility.
            (document.body.lastElementChild as SVGElement).style.display = 'block';
        }
    }
</script>

<style scoped>
    .account {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.75rem 2rem;
        box-sizing: border-box;
        flex-shrink: 0;
        font-size: 2rem;
        line-height: 1.2;
    }

    .account.row {
        width: 100%;
        flex-direction: row;
    }

    .account.column {
        flex-direction: column;
    }

    .identicon-and-label {
        display: flex;
        align-items: center;
    }

    .row .identicon-and-label {
        flex-direction: row;
        overflow: hidden;
        min-width: 5.625rem;
        flex-grow: 1;
    }

    .column .identicon-and-label {
        flex-direction: column;
    }

    .identicon {
        flex-shrink: 0;
        position: relative;
    }

    .row .identicon {
        width: 5.625rem;
        height: 5.625rem;
        margin-right: 1.5rem;
    }

    .column .identicon {
        width: 10rem;
        height: 10rem;
        margin-bottom: 1.5rem;
    }

    .identicon .account-image {
        width: 100%;
        height: 100%;
        clip-path: url(#nimiq-hexagon-clip);
    }

    .identicon .outline {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: 0 center;
        background-size: contain;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="146" height="146"><path d="M113.8 16.2l28.7 49.6c2.5 4.5 2.5 10 0 14.4l-28.7 49.6a14.4 14.4 0 0 1-12.5 7.2H44.1c-5.2 0-10-2.7-12.5-7.2L2.9 80.2C.4 75.7.4 70.2 3 65.8l28.7-49.6C34.2 11.7 38.9 9 44 9h57.2c5.2 0 10 2.7 12.5 7.2z" clip-rule="evenodd" stroke="%231f2348" stroke-width="2" opacity=".2"/></svg>');
    }

    .label,
    .wallet-label {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .wallet-label {
        margin-bottom: 0;
    }

    .row .label:not(.editable) {
        opacity: 0.7;
        padding-left: 1rem;
    }

    .row .label,
    .row .wallet-label {
        white-space: nowrap;
        font-weight: 600;
    }

    .row .label {
        flex-grow: 1;
    }

    .column .label,
    .column .wallet-label {
        max-width: 16.5rem;
        text-align: center;
        line-height: 1.5;
        /* TODO implement multi line ellipsis */
        max-height: calc(2 * 1em * 1.5); /* #lines * font-size * line-height */
    }

    .column .label-input >>> input {
        text-align: center;
    }

    .balance {
        flex-shrink: 0;
    }

    .row .balance {
        margin-left: 2rem;
        font-weight: bold;
        opacity: 0.7;
    }

    .column .balance {
        margin-top: 1.5rem;
    }
</style>
