<template>
    <div class="language-selector"
        :tabindex="!isListShown && languages.length > 1 ? 0 : false"
        @focus.capture="_showList"
        @blur.capture="
            // Do not hide the list immediately to wait whether the next focused element is also a language list entry,
            // because blurs also occur when moving between the list entries.
            _hideList(50)
        ">
        <div class="trigger" :class="{ 'has-arrow': languages.length > 1 }">{{ selectedLanguage }}</div>
        <div v-if="isListShown && languages.length > 1" class="list">
            <div v-for="language of languages"
                ref="list-entries"
                tabindex="0"
                class="list-entry"
                :key="language"
                @mouseenter="$event.target.focus()"
                @click="selectedLanguage = language; _hideList()"
                @keydown.space.enter="selectedLanguage = language; _hideList()"
            >
                <span class="list-entry-label has-arrow">{{ language }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class LanguageSelector extends Vue {
    @Prop({
        type: Array,
        required: true,
        validator: (entries: unknown) => Array.isArray(entries)
            && entries.length > 0
            && !entries.some((entry) => typeof entry !== 'string'),
    })
    public languages!: string[];

    // prop compatible with v-model
    @Prop(String)
    public value?: string;

    private selectedLanguage: string = this.languages[0];
    private isListShown: boolean = false;
    private closeTimeout: number = -1;

    public $refs!: { 'list-entries'?: HTMLDivElement[] };

    @Watch('languages')
    private _onLanguagesChange(languages) {
        if (languages.includes(this.selectedLanguage)) return;
        this.selectedLanguage = languages[0];
    }

    @Watch('value', { immediate: true })
    private _onExternalValueChange(value: string) {
        if (!this.languages.includes(value)) return;
        this.selectedLanguage = value;
    }

    @Watch('selectedLanguage')
    private _onValueChange(value: string) {
        // Emit event compatible with v-model.
        this.$emit('input', value);
    }

    private async _showList() {
        clearTimeout(this.closeTimeout);
        if (this.isListShown) return;
        this.isListShown = true;
        // Focus entry for the currently selected language.
        await Vue.nextTick();
        if (!this.$refs['list-entries']) return;
        const selectedLanguageListEntry = this.$refs['list-entries'][this.languages.indexOf(this.selectedLanguage)];
        if (!selectedLanguageListEntry) return;
        selectedLanguageListEntry.focus();
    }

    private _hideList(delay = 0) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = window.setTimeout(() => this.isListShown = false, delay);
    }
}
</script>

<style scoped>
    .language-selector {
        contain: layout style; /* no paint because list overflows */
        position: relative;
        width: max-content;
        font-size: 2.25rem;
        font-weight: 600;
        letter-spacing: .125rem;
        text-transform: uppercase;
    }

    .has-arrow::after {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        border: .5rem solid transparent;
        border-right: .5rem solid var(--arrow-color);
        border-bottom: .5rem solid var(--arrow-color);
        border-radius: .25rem;
        transform: scale(1, 0.8) rotate(135deg);
        transform-origin: 70% 70%;
    }

    .trigger {
        contain: layout paint style;
        padding-right: 2rem;
        outline: none; /* avoid default browser focus style */
    }
    .trigger.has-arrow {
        cursor: pointer;
    }

    .trigger.has-arrow::after {
        --arrow-color: var(--nimiq-blue);
        right: .5rem;
        top: 25%;
        opacity: .3;
        transition: transform .2s var(--nimiq-ease);
    }
    .language-selector:not(:where(:hover, :focus-within, :has(.list))) .trigger.has-arrow::after {
        transform: scale(0.6, 0.9) rotate(45deg);
    }

    .list {
        contain: layout paint style;
        display: flex;
        flex-direction: column;
        position: absolute;
        /*left: -2.25rem;*/
        left: -1rem;
        bottom: -2rem;
        border-radius: .5rem;
        color: white;
        background: var(--nimiq-blue-bg);
        box-shadow: 0 .25rem .3125rem 0 rgba(31, 35, 72, 0.02),
            0 .875rem 1.0625rem 0 rgba(31, 35, 72, 0.04),
            0 2.25rem 4.75rem 0 rgba(31, 35, 72, 0.07);
    }

    .list-entry {
        contain: layout paint style;
        padding: .375rem 1.5rem .375rem 1.5rem;
        outline: none; /* avoid default browser focus style */
        cursor: pointer;
    }
    .list-entry:first-child {
        padding-top: 1.375rem;
    }
    .list-entry:last-child {
        padding-bottom: 1.375rem;
    }

    .list-entry-label {
        position: relative;
        display: inline-block;
        padding-right: 1.375rem;
        opacity: .4;
        transition: opacity .2s var(--nimiq-ease);
    }

    .list-entry-label.has-arrow::after {
        --arrow-color: white;
        top: .75rem;
        right: 0;
        opacity: 0;
        transition: opacity .2s var(--nimiq-ease);
    }
    .list-entry:focus-within .list-entry-label,
    .list-entry:focus-within .list-entry-label.has-arrow::after {
        opacity: 1;
    }
</style>
