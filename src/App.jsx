import { Section } from './components/Section/Section';
import { FormAddContact } from './components/FormAddContact/FormAddContact';
import { Filter } from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
};
