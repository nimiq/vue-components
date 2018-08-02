<template>
    <div class="contact-list">
        <input type="text" class="search-field" placeholder="Search..." v-model="searchTerm" ref="search">
        <i class="material-icons search-icon">search</i>
        <a href="#" class="material-icons search-clear" title="Clear search" v-if="searchTerm" @click.prevent="clearSearch">clear</a>

        <div class="list">
            <span v-if="isAddingNewContact">New contact:</span>
            <NewContact
                v-if="isAddingNewContact"
                :set-contact-action="actions.setContact"
                :abort-action="abortNewContact"
                ref="newContact"
            />
            <Contact
                v-for="contact in filteredContacts"
                :contact="contact"
                :show-options="isManaging"
                :set-contact-action="actions.setContact"
                :remove-contact-action="actions.removeContact"
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

<script>
/* global Vue */
import Contact from './Contact.vue'
import NewContact from './NewContact.vue'

export default {
    name: 'ContactList',
    props: ['contacts', 'actions'],
    data: () => ({
        // Local state
        searchTerm: '',
        isManaging: false,
        isAddingNewContact: false
    }),
    computed: {
        filteredContacts() {
            const searchTerm = this.searchTerm.trim().toLowerCase()

            if (!searchTerm) return Object.values(this.contacts)

            const result = []
            for (const contact of Object.values(this.contacts)) {
                if (contact.label.toLowerCase().includes(searchTerm)) {
                    result.push(contact)
                }
            }
            return result
        }
    },
    methods: {
        reset() {
            this.isManaging = false
            this.isAddingNewContact = false
            this.clearSearch()
        },
        clearSearch() {
            this.searchTerm = ''
            this.$refs.search.focus()
        },
        toggleManaging() {
            this.isManaging = !this.isManaging
        },
        addNewContact() {
            this.isAddingNewContact = true
            Vue.nextTick(() => this.$refs.newContact.edit())
        },
        abortNewContact() {
            this.isAddingNewContact = false
        },
        export() {
            const text = JSON.stringify(Object.values(this.contacts))

            // From https://stackoverflow.com/a/18197341/4204380
            const element = document.createElement('a')
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
            element.setAttribute('download', 'Nimiq-Safe-Contacts.json')
            element.style.display = 'none'
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
        },
        import() {
            this.$refs.importLabel.click()
        },
        loadFile(e) {
            const file = e.target.files[0]
            if (!file) return

            const reader = new FileReader()
            reader.onload = e => this.readFile(e.target.result)
            reader.readAsText(file)
        },
        readFile(data) {
            // Reset file input
            this.$refs.importInput.value = ''

            let importedContacts = []
            try {
                importedContacts = JSON.parse(data)
            } catch (e) {
                this.$toast.error('Cannot import file, wrong format.')
                return
            }

            // Make sure the input is a non-empty array
            if (!importedContacts.length) {
                this.$toast.error('Cannot import file, wrong format.')
                return
            }

            for (const newContact of importedContacts) {
                if (!newContact.label || !newContact.address) continue

                const storedContact = this.contacts[newContact.address]
                if (storedContact) {
                    if (storedContact.label === newContact.label) continue
                    else {
                        const shouldOverwrite = confirm(
`A contact with the address "${storedContact.address}", but a different name already exists.

Do you want to override it?`
                        )
                        if (!shouldOverwrite) continue
                    }
                }

                this.actions.setContact(newContact.label, newContact.address)
            }

            this.$toast.success('Contact import finished.')
        }
    },
    components: {
        Contact,
        NewContact
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
