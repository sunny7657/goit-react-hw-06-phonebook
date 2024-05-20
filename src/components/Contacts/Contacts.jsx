import { ContactList } from 'components/ContactList/ContactList';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllContacts, getFilter } from '../../redux/selectors';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};

export default Contacts;
