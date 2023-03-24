<template>
    <div class="slider-toggle" :class="[`type-${type}`, { 'no-transition': noTransitions, loading }]">
        <!-- Loading state -->
        <label v-if="loading">
            <LoadingSpinner/>Loading
        </label>
        <template v-else>
            <!-- Active box that moves and changes width based on the selected slot -->
            <div class="active-box"
                ref="activeBox$"
                :style="{
                    '--center': `${activeBoxStyles.center}px`,
                    '--width': `${activeBoxStyles.width}px`,
                }"
            ></div>
            <!-- Slot buttons -->
            <label v-for="(slot, index) in Object.keys($slots)"
                ref="labels$"
                :key="index"
                :class="{ active: localValue === slot }"
            >
                <input type="radio" :name="name" :value="slot" v-model="localValue"/>
                <slot :name="slot"></slot>
            </label>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import * as Icons from './Icons';
import LoadingSpinner from './LoadingSpinner.vue';

export interface SliderToggleRadio {
    label: string;
    value: string;
}

export enum SliderToggleType {
    CURRENCY = 'currency',
    DEFAULT = 'default',
}

@Component({ components: { ...Icons, LoadingSpinner } })
export default class SliderToggle extends Vue {
    public readonly $refs!: {
        labels$?: HTMLLabelElement[],
        activeBox$: HTMLDivElement,
    };

    @Prop({ type: String, required: true })
    public name!: string;

    @Prop({ type: String, default: '', required: true })
    public value!: string;

    @Prop({
        type: String as () => SliderToggleType,
        default: SliderToggleType.DEFAULT,
    })
    public type!: SliderToggleType;

    @Prop({ type: Boolean, default: false })
    public loading!: boolean;

    private localValue: string | null = null; // Initialized in created
    private activeBoxStyles: { center: number, width: number } = { center: 0, width: 0 };
    private isUpdatingActiveBoxPosition: boolean = false;
    private noTransitions: boolean = true;

    private created() {
        this.localValue = this.value;
        this.updateActiveBoxPosition = this.updateActiveBoxPosition.bind(this);
        window.addEventListener('resize', this.updateActiveBoxPosition);
    }

    private async mounted() {
        await this.updateActiveBoxPosition();
        await this.$nextTick();
        // Wait for browser to update styles
        await new Promise((resolve) => { window.requestAnimationFrame(resolve); });
        this.noTransitions = false;
    }

    private destroyed() {
        window.removeEventListener('resize', this.updateActiveBoxPosition);
    }

    @Watch('radios')
    private onRadiosChange(radios: SliderToggleRadio[]) {
        if (!radios.some(({ value }) => this.localValue === value)) {
            // New radios do not include current localValue
            // localValue update will also trigger updateActiveBoxPosition
            this.localValue = radios[0].value;
        } else {
            this.updateActiveBoxPosition();
        }
    }

    @Watch('value')
    private onValueChange(value: string) {
        this.localValue = value;
    }

    @Watch('localValue')
    private onLocalValueChange(value: string) {
        this.updateActiveBoxPosition();
        this.$emit('input', value);
    }

    @Watch('type') // watch for style changes associated with type changes
    @Watch('loading') // watch for UI changes when component gets enabled
    private async updateActiveBoxPosition() {
        if (this.isUpdatingActiveBoxPosition) return;
        this.isUpdatingActiveBoxPosition = true;
        try {
            await this.$nextTick();
            // Wait for browser to update styles, after which getBoundingClientRect should be cheaper
            await new Promise<unknown>((resolve) => { window.requestAnimationFrame(resolve); });

            if (!this.$refs.labels$ || !this.$refs.activeBox$) return;

            const label = this.$refs.labels$.find(({ className }) => className === 'active') || this.$refs.labels$[0];
            if (!label) return;

            const labelRect = label.getBoundingClientRect();
            const containerRect = this.$el.getBoundingClientRect();

            const labelCenter = (labelRect.left - containerRect.left) + (labelRect.width / 2);

            this.activeBoxStyles.center = labelCenter;
            this.activeBoxStyles.width = labelRect.width;
        } finally {
            this.isUpdatingActiveBoxPosition = false;
        }
    }
}
</script>

<style scoped>
.slider-toggle {
    --borderRadius: 9999px;
    --transitionDuration: 200ms;
    --padding: .5rem;

    contain: layout style; /* not paint to not cutoff active-box box-shadow */
    position: relative;
    display: flex;

    background-color: var(--nimiq-highlight-bg);
    border-radius: var(--borderRadius);
    padding: var(--padding);
}

/* Currency type styles */
.slider-toggle,
.slider-toggle.type-currency {
    --inactiveOpacity: .5;
    --horizontalPadding: 16px;
    --verticalPadding: 14px;

    font-size: 1.75rem;
    letter-spacing: 0.1em;
    font-weight: bold;
}

/* Purpose type styles */
.slider-toggle.type-default {
    --inactiveOpacity: .625;
    --horizontalPadding: 2.5rem;
    --verticalPadding: 1.125rem;

    font-size: 2.5rem;
    letter-spacing: 0;
    font-weight: 600;
    color: rgba(31, 35, 72, 0.8); /* --nimiq-blue */
}

/* Loading state styles */
.slider-toggle.loading {
    letter-spacing: initial;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
}

.slider-toggle.loading svg {
    height: 2.5rem;
    width: auto;
    margin-right: 1.5rem;
}

.slider-toggle.loading label {
    opacity: 1;
}

.slider-toggle.loading.no-transition { --transitionDuration: 0ms }


input { display: none }

label {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    isolation: isolate; /* create a separate stacking context to avoid being hidden behind active-box */

    line-height: 150%;

    padding: var(--verticalPadding) var(--horizontalPadding);
    cursor: pointer;

    transition: opacity var(--transitionDuration) var(--nimiq-ease);
}

label:not(.active) {
    opacity: var(--inactiveOpacity);
}

label:not(.active):hover {
    opacity: calc(var(--inactiveOpacity) + .12);
}

label * { pointer-events: none }

.active-box {
    /* variables dynamically updated in updateActiveBoxPosition() */
    --center: 0px;
    --width: 0px;

    contain: size layout paint style;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(calc(-50% + var(--center)), -50%);

    background-color: white;
    height: calc(100% - (var(--padding) * 2));
    border-radius: var(--borderRadius);
    width: var(--width);

    box-shadow: 0px 13px 27px rgba(31, 35, 72, .07), /* --nimiq-blue */
        0px 5px 6px rgba(31, 35, 72, .04), /* --nimiq-blue */
        0px 1px 2px rgba(31, 35, 72, .02); /* --nimiq-blue */

    transition: transform var(--transitionDuration) var(--nimiq-ease),
                width var(--transitionDuration) var(--nimiq-ease);
}
</style>

