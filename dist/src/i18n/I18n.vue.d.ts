import { Vue } from 'vue-property-decorator';
/**
 * Component for slot interpolation, similar to vue-i18n's interpolation component,
 * see https://kazupon.github.io/vue-i18n/guide/interpolation.html#slots-syntax-usage
 */
export default class I18n extends Vue {
    path: string;
    tag: string;
    private created;
    private beforeDestroy;
    private render;
}
