import I18nMixin from '../i18n/I18nMixin';
declare const PageHeader_base: import("vue-class-component/lib/declarations").VueClass<I18nMixin>;
export default class PageHeader extends PageHeader_base {
    private backArrow;
    private progressIndicator;
    private numberSteps;
    private step;
    get progressSteps(): any[];
}
export {};
