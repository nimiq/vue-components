import { Vue } from 'vue-property-decorator';
export default class LabelInput extends Vue {
    private value?;
    private liveValue;
    private lastValue;
    private changed;
}
