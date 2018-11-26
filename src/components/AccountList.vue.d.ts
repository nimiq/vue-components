import { Vue } from 'vue-property-decorator';
export default class AccountList extends Vue {
    accounts: Array<{
        label: string;
        userFriendlyAddress: string;
        balance?: number;
    }>;
    private walletId?;
    private editable?;
    private accountSelected;
    private accountChanged;
}
