<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';
import I18nMixin from './I18nMixin';
import { VNode } from 'vue';

/**
 * Component for slot interpolation, similar to vue-i18n's interpolation component,
 * see https://kazupon.github.io/vue-i18n/guide/interpolation.html#slots-syntax-usage
 */
@Component
class I18n extends Vue {

    @Prop({
        type: String,
        required: true,
    })
    private path!: string;

    private template: Array<string | VNode | VNode[]> = [];

    private updateTemplate() {
        this.template = [];

        const trad = I18nMixin.$t(this.$parent.$vnode.componentOptions.tag, this.path.replace(/\\n/gm, '\n'));
        const slotNames = Object.keys(this.$slots);
        const isEveryVarASlot = slotNames.every((slotName) => trad.includes(`{${slotName}}`));

        if (!slotNames.length) {
            throw new Error(
                'I18n: the component must contain at least 1 template slot, otherwise simply use the $t function.',
            );
        }
        if (!isEveryVarASlot) {
            throw new Error('I18n: every {variable} in the translation must be a template slot.');
        }

        const re = /\{(\w+)\}/gm;
        let match = re.exec(trad);
        let lastParsedIndex = 0;

        while (match != null) {
            const stringBeforeMatch = trad.substring(lastParsedIndex, match.index);

            if (stringBeforeMatch) {
                this.template.push(stringBeforeMatch);
            }
            // this.arr.push(this.$slots[match[1]]);
            this.template.push(match[0]);

            lastParsedIndex = match.index + match[0].length;
            match = re.exec(trad);
        }

        const lastPartOfString = trad.substring(lastParsedIndex);
        if (lastPartOfString) {
            this.template.push(lastPartOfString);
        }
    }

    private created() {
        this.updateTemplate = this.updateTemplate.bind(this);
        this.$parent.$on(I18nMixin.Events.LANGUAGE_LOAD, this.updateTemplate);
    }

    private mounted() {
        this.updateTemplate();
    }

    private beforeDestroy() {
        this.$parent.$off(I18nMixin.Events.LANGUAGE_LOAD, this.updateTemplate);
    }

    private render(createElement) {
        return createElement('span', {}, this.template.map((el) => {
            return (typeof el === 'string' && this.$slots[el.slice(1, -1)])
                ? this.$slots[el.slice(1, -1)]
                : el;
        }));
    }
}

export default I18n;

</script>
