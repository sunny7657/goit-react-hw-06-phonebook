export const getAllContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
