import { ContactList } from 'components/ContactList/ContactList';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState('');
  return <ContactList items={contacts} />;
};

export default Contacts;
