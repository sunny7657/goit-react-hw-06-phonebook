import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export const ContactList = ({ contacts }) => {
  // const filter = useSelector(getFilter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const dispatch = useDispatch();

  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };

  const onClickUpdate = id => {
    // const contact = contacts.find(item => item.id === id);
    console.log(id);
    // dispatch(updateContact(id));
  };

  return (
    <ul>
      {Boolean(contacts.length) &&
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
          />
        ))}
    </ul>
  );
};
