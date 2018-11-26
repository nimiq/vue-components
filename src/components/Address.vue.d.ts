import { Vue } from 'vue-property-decorator';
export default class Address extends Vue {
    address: string;
    private copy;
    private readonly userFriendlyAddress;
}
