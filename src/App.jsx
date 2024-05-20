import { Section } from './components/Section/Section';
import { FormAddContact } from './components/FormAddContact/FormAddContact';
import Contacts from './components/Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </div>
  );
};
