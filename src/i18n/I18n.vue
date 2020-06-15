<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import I18nMixin from './I18nMixin';

/**
 * Component for slot interpolation, similar to vue-i18n's interpolation component,
 * see https://kazupon.github.io/vue-i18n/guide/interpolation.html#slots-syntax-usage
 */
@Component
export default class I18n extends Vue {
    @Prop({
        type: String,
        required: true,
    })
    public path!: string;

    @Prop({
        type: String,
        default: 'span',
    })
    public tag!: string;

    private created() {
        this.$forceUpdate = this.$forceUpdate.bind(this);
        this.$vnode.context.$on(I18nMixin.Events.LANGUAGE_READY, this.$forceUpdate);
    }

    private beforeDestroy() {
        this.$vnode.context.$off(I18nMixin.Events.LANGUAGE_READY, this.$forceUpdate);
    }

    private render(createElement) {
        if (!Object.keys(this.$slots).length) {
            throw new Error(
                'I18n: the component must contain at least 1 template slot, otherwise simply use the $t function.',
            );
        }

        const message = I18nMixin.$t(this.$vnode.context.$vnode.componentOptions.tag, this.path.replace(/\\n/g, '\n'));
        const children = message.split(/({\w+})/g)
            .map((part) => {
                const variableNameMatch = part.match(/^{(\w+)}$/);
                if (!variableNameMatch) return part; // plain text part or empty part
                return this.$slots[variableNameMatch[1]] || part;
            });
        return createElement(this.tag, {}, children);
    }
}
</script>
