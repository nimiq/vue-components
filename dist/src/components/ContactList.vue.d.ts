import { Vue } from 'vue-property-decorator';
export default class ContactList extends Vue {
    contacts: Array<{
        address: string;
        label: string;
    }>;
    private searchTerm;
    private isManaging;
    private isAddingNewContact;
    private abortTrigger;
    private selectContact;
    private setContact;
    private removeContact;
    private notification;
    private get filteredContacts();
    private reset;
    private changeContact;
    private deleteContact;
    private clearSearch;
    private toggleManaging;
    private addNewContact;
    private abortNewContact;
    private export;
    private import;
    private loadFile;
    private readFile;
}
