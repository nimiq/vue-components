import { Vue } from 'vue-property-decorator';
export default class FiatAmount extends Vue {
    amount: number;
    currency: string;
    locale: string;
    private get _currencyString();
}
