import { Vue } from 'vue-property-decorator';
/** @deprecated */
export default class Contact extends Vue {
    address: string;
    label: string;
    showOptions?: boolean;
    abortTrigger?: number;
    private isEditing;
    private workingLabel;
    private workingAddress;
    private created;
    private isInputValid;
    private select;
    private edit;
    private save;
    private abort;
    private remove;
}
