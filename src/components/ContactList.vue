<template>
    <div class="contact-list">
        <input type="text" class="search-field" placeholder="Search..." v-model="searchTerm" ref="search">
        <i class="material-icons search-icon">search</i>
        <a href="#" class="material-icons search-clear" title="Clear search" v-if="searchTerm"
           @click.prevent="clearSearch">clear</a>

        <div class="list">
            <span v-if="isAddingNewContact">New contact:</span>
            <NewContact
                    v-if="isAddingNewContact"
                    :abort-action="abortNewContact"
                    ref="newContact"
            />
            <Contact
                    v-for="contact in filteredContacts"
                    :address="contact.address"
                    :label="contact.label"
                    :show-options="isManaging"
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
        @Prop(Array) public contacts!: Array<{ address: Nimiq.Address, label: string }>;

        private searchTerm: string = '';
        private isManaging: boolean = false;
        private isAddingNewContact: boolean = false;

        @Emit()
        // tslint:disable-next-line
        private setContact(label: string, address: Nimiq.Address) {
        }

        @Emit()
        // tslint:disable-next-line
        private removeContact(address: Nimiq.Address) {
        }

        private filteredContacts() {
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
            this.clearSearch();
        }

        private changeContact(old, nue) {
            this.setContact(nue.label, nue.address);
            if (old.address !== nue.address) this.removeContact(old.address);
        }

        private deleteContact(oldAddress) {
            this.removeContact(oldAddress);
        }

        private clearSearch() {
            this.searchTerm = '';
            const search: HTMLInputElement = this.$refs.search as HTMLInputElement;
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
            /* TODO
            const text = JSON.stringify(Object.values(this.contacts));

            // From https://stackoverflow.com/a/18197341/4204380
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', 'Nimiq-Safe-Contacts.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            */
        }

        private import() {
            // TODO this.$refs.importLabel.click();
        }

        private loadFile(event) {
            /* TODO
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => this.readFile(e.target.result);
            reader.readAsText(file);
            */
        }

        private readFile(data) {
            /* TODO
            // Reset file input
            this.$refs.importInput.value = '';

            let importedContacts = [];
            try {
                importedContacts = JSON.parse(data);
            } catch (e) {
                this.$toast.error('Cannot import file, wrong format.');
                return;
            }

            // Make sure the input is a non-empty array
            if (!importedContacts.length) {
                this.$toast.error('Cannot import file, wrong format.');
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

                this.actions.setContact(newContact.label, newContact.address);
            }

            this.$toast.success('Contact import finished.');
            */
        }
    }
</script>

<style>
    .contact-list {
        position: relative;
    }

    .contact-list .search-field {
        width: 100%;
        border: none !important;
        padding: 12px 40px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        text-align: left;
    }

    .contact-list .search-field:focus {
        background: rgba(0, 0, 0, 0.075);
    }

    .contact-list .search-field::placeholder {
        text-align: left;
    }

    .contact-list .search-icon {
        position: absolute;
        left: 8px;
        top: 12px;
        opacity: 0.4;
    }

    .contact-list .search-field:focus ~ .search-icon {
        opacity: 0.8;
    }

    .contact-list .search-clear {
        position: absolute;
        right: 4px;
        top: 8px;
        opacity: 0.4;
        padding: 4px;
        border-radius: 50%;
        cursor: pointer;
    }

    .contact-list .search-clear:hover,
    .contact-list .search-clear:focus {
        background: rgba(0, 0, 0, 0.1);
        opacity: 0.8;
    }

    .contact-list .list {
        margin-top: 16px;
    }

    .contact-list .contact {
        padding: 8px;
    }

    .contact-list .contact:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    .contact-list .no-contacts {
        text-align: center;
        opacity: 0.6;
    }

    .contact-list .no-contacts .material-icons {
        display: block;
        font-size: 120px;
        margin: 0.1em;
        opacity: 0.3;
    }

    .contact-list .file-import {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
        left: -9999px;
        top: -9999px;
    }
</style>
