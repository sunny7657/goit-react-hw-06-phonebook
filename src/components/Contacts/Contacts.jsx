import { ContactList } from 'components/ContactList/ContactList';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default Contacts;
