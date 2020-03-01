import { Vue } from 'vue-property-decorator';
/** @deprecated */
export default class Address extends Vue {
    address: string;
    private created;
    private copy;
    private get userFriendlyAddress();
}
