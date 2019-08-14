<template>
    <div class="contact-list">
        <template v-if="contacts.length > 3">
            <input type="text" class="nq-input search-field" placeholder="Search..." v-model="searchTerm" ref="search">
        </template>

        <div class="list">
            <span v-if="isAddingNewContact">New contact:</span>
            <NewContact
                    v-if="isAddingNewContact"
                    @abort="abortNewContact"
                    @set="setContact"
                    ref="newContact"
            />
            <Contact
                    v-for="contact in filteredContacts"
                    :address="contact.address"
                    :label="contact.label"
                    :show-options="isManaging"
                    :abort-trigger="abortTrigger"
                    @select="selectContact"
                    @change="changeContact"
                    @delete="deleteContact"
                    :key="contact.address"
            />
            <div class="no-contacts" v-if="!filteredContacts.length && !searchTerm">
                <i class="material-icons">face</i>
                Use the menu to add contacts
            </div>
            <div class="no-contacts" v-if="!filteredContacts.length && searchTerm">
                <i class="material-icons">face</i>
                No matches found
            </div>
        </div>

        <label class="file-import" ref="importLabel">
            <input type="file" @change="loadFile" ref="importInput">
        </label>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Contact from './Contact.vue';
import NewContact from './NewContact.vue';

@Component({components: {Contact, NewContact}})
    export default class ContactList extends Vue {
        @Prop(Array) public contacts!: Array<{ address: string, label: string }>;

        private searchTerm: string = '';
        private isManaging: boolean = false;
        private isAddingNewContact: boolean = false;
        private abortTrigger: number = 0;

        @Emit()
        // tslint:disable-next-line no-empty
        private selectContact(address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private setContact(label: string, address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private removeContact(address: string) {}

        @Emit()
        // tslint:disable-next-line no-empty
        private notification(msg: string, type?: string) {}

        private get filteredContacts() {
            const searchTerm = this.searchTerm.trim().toLowerCase();

            if (!searchTerm) return this.contacts;

            const result = [];
            for (const contact of this.contacts) {
                if (contact.label.toLowerCase().includes(searchTerm)) {
                    result.push(contact);
                }
            }
            return result;
        }

        private reset() {
            this.isManaging = false;
            this.isAddingNewContact = false;
            this.abortTrigger += 1;
            this.clearSearch();
        }

        private changeContact(old: any, nue: any) {
            this.setContact(nue.label, nue.address);
            if (old.address !== nue.address) this.removeContact(old.address);
        }

        private deleteContact(oldAddress: string) {
            this.removeContact(oldAddress);
        }

        private clearSearch() {
            this.searchTerm = '';
            const search: HTMLInputElement = this.$refs.search as HTMLInputElement;
            if (!search) return;
            search.focus();
        }

        private toggleManaging() {
            this.isManaging = !this.isManaging;
        }

        private addNewContact() {
            this.isAddingNewContact = true;
            Vue.nextTick(() => {
                const newContact: NewContact = this.$refs.newContact as NewContact;
                newContact.edit();
            });
        }

        private abortNewContact() {
            this.isAddingNewContact = false;
        }

        private export() {
            const text = JSON.stringify(this.contacts);

            // From https://stackoverflow.com/a/18197341/4204380
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', 'Nimiq-Safe-Contacts.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        private import() {
            (this.$refs.importLabel as HTMLLabelElement).click();
        }

        private loadFile(event: Event) {
            const fileList = (event.target as HTMLInputElement).files;
            if (!fileList) return;
            const file = fileList[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => this.readFile((e.target as FileReader).result);
            reader.readAsText(file);
        }

        private readFile(data: any) {
            // Reset file input
            (this.$refs.importInput as HTMLInputElement).value = '';

            let importedContacts = [];
            try {
                importedContacts = JSON.parse(data);
            } catch (e) {
                this.notification('Cannot import file, wrong format.', 'error');
                return;
            }

            // Make sure the input is a non-empty array
            if (!importedContacts.length) {
                this.notification('Cannot import file, wrong format.', 'error');
                return;
            }

            for (const newContact of importedContacts) {
                if (!newContact.label || !newContact.address) continue;

                const storedContact = this.contacts[newContact.address];
                if (storedContact) {
                    if (storedContact.label === newContact.label) continue;
                    else {
                        const shouldOverwrite = confirm(
                            `A contact with the address "${storedContact.address}", but a different name already exists.
\nDo you want to override it?`);
                        if (!shouldOverwrite) continue;
                    }
                }

                this.setContact(newContact.label, newContact.address);
            }

            this.notification('Contact import finished.', 'success');
        }
    }
</script>

<style scoped>
    .contact-list {
        position: relative;
        padding: 1rem 0;
    }

    .search-field {
        margin: 0 4rem;
        width: calc(100% - 8rem);
        box-sizing: border-box;
    }

    .search-icon {
        position: absolute;
        left: 3rem;
        top: 2rem;
        opacity: 0.4;
    }

    .search-field:focus ~ .search-icon {
        opacity: 0.8;
    }

    .search-clear {
        position: absolute;
        right: 0.5rem;
        top: 1rem;
        opacity: 0.4;
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
    }

    .search-clear:hover,
    .search-clear:focus {
        background: rgba(0, 0, 0, 0.1);
        opacity: 0.8;
    }

    .list {
        overflow-y: auto;
        margin-top: 1rem;
        padding: 4rem 2rem;
        mask-image: linear-gradient(0deg , rgba(255,255,255,0), rgba(255,255,255, 1) 4rem, rgba(255,255,255,1) calc(100% - 4rem), rgba(255,255,255,0));
        max-height: calc(100% - 5.5rem); /* Sadly, I found no other way of making the list only grow to the container size */
    }

    .contact {
        padding: 1rem;
        transition: background-color .3s var(--nimiq-ease);
    }

    .contact:hover {
        background-color: rgba(31, 35, 72, 0.06); /* Based on Nimiq Blue */
    }

    .no-contacts {
        text-align: center;
        opacity: 0.6;
    }

    .no-contacts .material-icons {
        display: block;
        font-size: 10rem;
        line-height: 1.1;
        opacity: 0.3;
    }

    .file-import {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
        left: -9999px;
        top: -9999px;
    }
</style>
