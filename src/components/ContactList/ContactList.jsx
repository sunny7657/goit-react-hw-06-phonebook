import { useSelector } from 'react-redux';

// import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  console.log(contacts);
  // const filter = useSelector(getFilter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {/* {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))} */}
    </ul>
  );
};
