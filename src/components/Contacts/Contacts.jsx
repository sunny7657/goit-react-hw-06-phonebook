import { ContactList } from 'components/ContactList/ContactList';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(store => store.contacts);

  // const [filter, setFilter] = useState('');
  return <ContactList contacts={contacts} />;
};

export default Contacts;
