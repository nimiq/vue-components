import { Vue } from 'vue-property-decorator';
/** @deprecated */
export default class ContactShortcuts extends Vue {
    contacts: Array<{
        address: string;
        label: string;
    }>;
    private get filteredContacts();
    private get missingContacts();
    private created;
    contactsOpened(): void;
    contactSelected(address: string, label: string): void;
}
