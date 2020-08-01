import { Vue } from 'vue-property-decorator';
export default class AccountDetails extends Vue {
    private address;
    private image?;
    private label?;
    private walletLabel?;
    private balance?;
    private editable?;
    private placeholder?;
    focus(): void;
    private close;
    private changed;
}
