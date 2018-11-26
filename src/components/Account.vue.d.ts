import { Vue } from 'vue-property-decorator';
export default class Account extends Vue {
    address: string;
    label: string;
    balance: number;
    private editable?;
    private changed;
    private readonly formattedAddress;
}
