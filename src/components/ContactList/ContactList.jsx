import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ contacts }) => {
  // const filter = useSelector(getFilter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
