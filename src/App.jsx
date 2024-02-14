import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from './components/Section/Section';
import { FormAddContact } from './components/FormAddContact/FormAddContact';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from './redux/filter/filter-selectors';
import { setFilter } from './redux/filter/filter-actions';
import { addContact, deleteContact } from './redux/contacts/contacts-actions';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const localData = localStorage.getItem('contacts');
  //   return localData ? JSON.parse(localData) : [];
  // });

  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = data => {
    const newContact = { ...data };
    const doesExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doesExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(data));
    Notify.success('The contact was created');
  };

  const onDelete = id => {
    dispatch(deleteContact(id));
    Notify.info('The contact was deleted');
  };

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <Section title="Phonebook">
        <FormAddContact onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={changeFilter} />
        {contacts.length > 0 && (
          <>
            <ContactList contacts={contacts} onDelete={onDelete} />
          </>
        )}
      </Section>
    </div>
  );
};
