<template>
    <div class="carousel" :class="{ disabled }">
        <div v-for="(entry, index) in entries" :ref="entry" :key="index"
            :class="{ selected: effectiveSelected === entry }"
            @click="!disabled && _updateSelection(entry)"
            @focusin="!disabled && _updateSelection(entry)">
            <slot :name="entry"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Tweenable } from '@nimiq/utils';

@Component
export default class Carousel extends Vue {
    @Prop({
        type: Array,
        default: () => [],
        validator: (entries: any) => Array.isArray(entries)
            && entries.length > 0
            && !entries.some((entry) => typeof entry !== 'string'),
    })
    public entries!: string[];

    @Prop(String)
    public selected?: string;

    @Prop({
        type: Number,
        default: 16,
    })
    public entryMargin!: number;

    @Prop({
        type: Number,
        default: 1000,
    })
    public animationDuration!: number; // in ms

    @Prop({
        type: Boolean,
        default: false,
    })
    public hideBackgroundEntries!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    public disabled!: boolean;

    // The entry refs are arrays with a single element because of v-for
    public $refs: { [ref: string]: HTMLElement[] };

    private effectiveSelected: string = '';
    private radius: Tweenable = new Tweenable();
    private rotations: Map<string, Tweenable> = new Map(); // map entry -> rotation
    private requestAnimationFrameId: number | null = null;

    private get _hasDummyPosition(): boolean {
        // add dummy to avoid that second entry is hidden exactly behind selected item on opposite side of circle.
        return this.entries.length <= 2;
    }

    private get _totalPositionCount(): number {
        return this.entries.length + (this._hasDummyPosition ? 1 : 0);
    }

    private async mounted() {
        this._onKeydown = this._onKeydown.bind(this);
        document.addEventListener('keydown', this._onKeydown);
        // trigger these manually instead of via immediate watcher to avoid animating on first render
        await this.updateDimensions(false);
        this._updateSelection(this.selected);
        this._updateRotations(false);
    }

    private destroyed() {
        document.removeEventListener('keydown', this._onKeydown);
        if (this.requestAnimationFrameId === null) return;
        cancelAnimationFrame(this.requestAnimationFrameId);
    }

    @Watch('entryMargin')
    public async updateDimensions(newWatcherValueOrTween: number | boolean = true) {
        const tween = typeof newWatcherValueOrTween === 'boolean' ? newWatcherValueOrTween : true;
        await Vue.nextTick(); // let Vue render new entries
        let largestHeight = 0;
        let largestMinDistance = 0;
        for (let i = 0; i < this.entries.length; ++i) {
            const [ el1 ] = this.$refs[this.entries[i]];
            const [ el2 ] = this.$refs[this.entries[(i + 1) % this.entries.length]];
            largestHeight = Math.max(largestHeight, el1.offsetHeight);
            const minDistance = el1.offsetWidth / 2 + el2.offsetWidth / 2 + this.entryMargin;
            largestMinDistance = Math.max(largestMinDistance, minDistance);
        }
        // Choose radius big enough such that two items can be rendered side by side without overlapping.
        // Calculate on a right triangle formed by radius, half distance and perpendicular from center point
        // to distance line.
        const centerAngle = 2 * Math.PI / this._totalPositionCount / 2; // angle at circle center point
        const radius = (largestMinDistance / 2) / Math.sin(centerAngle);
        this.radius.tweenTo(radius, tween ? this.animationDuration : 0);
        (this.$el as HTMLElement).style.minHeight = `${largestHeight}px`;
        this._rerender();
    }

    @Watch('entries')
    private async _onEntriesChange() {
        await this.updateDimensions();
        this._updateSelection(this.effectiveSelected); // re-validate
        this._updateRotations();
    }

    @Watch('selected')
    private _updateSelection(newSelection: string) {
        const oldSelection = this.effectiveSelected;
        const isNewSelectionValid = this.entries.includes(newSelection);
        const isOldSelectionValid = this.entries.includes(oldSelection);
        if (isNewSelectionValid) {
            this.effectiveSelected = newSelection;
        } else if (!isOldSelectionValid) {
            this.effectiveSelected = this.entries[0];
        } // else keep the old selection

        if (this.effectiveSelected !== oldSelection) {
            this.$emit('select', this.effectiveSelected);
        }
    }

    @Watch('effectiveSelected')
    @Watch('disabled')
    private _updateRotations(newWatcherValueOrTween: string | boolean = true, previousWatcherValue?: string | boolean) {
        const tween = typeof newWatcherValueOrTween === 'boolean' && typeof previousWatcherValue === 'undefined'
            ? newWatcherValueOrTween // specified whether to tween
            : true; // did not specify whether to tween or method was called as a watcher (default to true)
        // clean up removed entries
        for (const entry of this.rotations.keys()) {
            if (this.entries.includes(entry)) continue;
            this.rotations.delete(entry);
        }
        // update rotations
        for (const entry of this.entries) {
            const rotation = this.rotations.get(entry) || new Tweenable();
            const tweenTime = tween ? this.animationDuration : 0;
            rotation.tweenTo(this._calculateTargetRotation(entry, rotation.currentValue), tweenTime);
            this.rotations.set(entry, rotation);
        }
        this._rerender();
    }

    /**
     * @param entry
     * @param currentRotation - Rotation in radians
     * @private
     */
    private _calculateTargetRotation(entry: string, currentRotation: number): number {
        if (this.disabled && entry !== this.effectiveSelected) {
            // hide not selected entries at other end of circle
            return currentRotation + this._calculateRotationInClosestDirection(currentRotation, Math.PI);
        }
        const stepSize = 2 * Math.PI / this._totalPositionCount;
        const entryIndex = this.entries.indexOf(entry);
        const selectedIndex = this.entries.indexOf(this.effectiveSelected);
        let offset = entryIndex - selectedIndex;
        if (this._hasDummyPosition && offset > this._totalPositionCount / 2) {
            // skip dummy position
            offset += 1;
        }
        return currentRotation + this._calculateRotationInClosestDirection(currentRotation, offset * stepSize);
    }

    @Watch('hideBackgroundEntries')
    private _rerender() {
        if (this.requestAnimationFrameId !== null) return;
        this.requestAnimationFrameId = requestAnimationFrame(() => {
            const zCoordinatesForEntries: Array<[string, number]> = [];
            let finished = this.radius.finished;
            for (const [entry, rotation] of this.rotations) {
                const currentRotation = rotation.currentValue;
                const currentRadius = this.radius.currentValue;
                const x = Math.sin(currentRotation) * currentRadius;
                const z = Math.cos(currentRotation) * currentRadius - currentRadius;
                const [ el ] = this.$refs[entry];
                el.style.transform = `translate3d(calc(${x}px - 50%),-50%,${z}px)`;
                el.style.display = this._shouldHide(entry) ? 'none' : '';
                zCoordinatesForEntries.push([entry, z]);
                finished = finished && rotation.finished;
            }

            // Note that instead of setting z-index manually, we could use transform-style: preserve-3d to order
            // automatically by z coordinate. But unfortunately, this makes the entries not clickable anymore.
            zCoordinatesForEntries.sort(([, z1], [, z2]) => z1 - z2);
            for (let i = 0; i < zCoordinatesForEntries.length; ++i) {
                const [ el ] = this.$refs[zCoordinatesForEntries[i][0]];
                el.style.zIndex = `${i}`;
            }

            this.requestAnimationFrameId = null;
            if (!finished) this._rerender();
        });
    }

    private _calculateRotationInClosestDirection(fromAngle: number, toAngle: number): number {
        // angle offset modulo full rotations
        const rotation = (toAngle - fromAngle) % (2 * Math.PI);
        // determine rotation in opposite direction (subtracting or adding a full circle depending on direction (sign))
        const rotationOppositeDirection = rotation - Math.sign(rotation) * 2 * Math.PI;
        if (Math.abs(Math.abs(rotation) - Math.abs(rotationOppositeDirection)) < 1e-10) {
            // in case of ambiguity chose a default direction
            return Math.min(rotation, rotationOppositeDirection);
        } else if (Math.abs(rotation) < Math.abs(rotationOppositeDirection)) {
            return rotation;
        } else {
            return rotationOppositeDirection;
        }
    }

    private _shouldHide(entry: string): boolean {
        const rotation = this.rotations.get(entry);
        if (!rotation || (!this.disabled && !this.hideBackgroundEntries)) return false;
        const absoluteRotation = Math.abs(this._calculateRotationInClosestDirection(0, rotation.currentValue));
        if (this.disabled) {
            // Hide disabled elements once they reached the opposite end of the circle, also to avoid that they are
            // still reachable via tab. While they're animating to get there, display them even when they're in the
            // back part of the circle.
            return Math.abs(absoluteRotation - Math.PI) < 1e-10;
        } else if (this.hideBackgroundEntries) {
            // Hide entries in the back part of the circle as these will not be visible behind the front entries
            const stepSize = 2 * Math.PI / this._totalPositionCount;
            const threshold = Math.PI / 2 + stepSize / (this._totalPositionCount - 1); // just a heuristic but works ok
            return absoluteRotation > threshold;
        }
    }

    private _onKeydown(event: KeyboardEvent) {
        const target = event.target as HTMLElement;
        if (this.disabled
            || target.tagName === 'INPUT'
            || target.tagName === 'TEXTAREA'
            || this.rotations.values().next().value.progress < .5 // block if previous change not animated far enough
        ) return;
        const currentIndex = this.entries.indexOf(this.effectiveSelected);
        let newIndex;
        if (event.key === 'ArrowLeft') {
            newIndex = (currentIndex - 1 + this.entries.length) % this.entries.length;
        } else if (event.key === 'ArrowRight') {
            newIndex = (currentIndex + 1) % this.entries.length;
        } else {
            return;
        }
        this._updateSelection(this.entries[newIndex]);
    }
}
</script>

<style scoped>
    .carousel {
        position: relative;
        padding: 4rem;
        box-sizing: content-box;
        perspective: 1500px;
        /* perspective-origin: center 150%; */ /* useful for debugging */
    }

    .carousel > * {
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .carousel:not(.disabled) > :not(.selected) {
        cursor: pointer;
    }

    .carousel > :not(.selected) >>> * {
        pointer-events: none !important;
    }
</style>

