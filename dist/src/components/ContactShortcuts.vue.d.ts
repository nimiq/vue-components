import { Vue } from 'vue-property-decorator';
export default class ContactShortcuts extends Vue {
    contacts: Array<{
        address: string;
        label: string;
    }>;
    private get filteredContacts();
    private get missingContacts();
    contactsOpened(): void;
    contactSelected(address: string, label: string): void;
}
