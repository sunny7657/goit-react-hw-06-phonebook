import { Section } from './components/Section/Section';
import { FormAddContact } from './components/FormAddContact/FormAddContact';
import Contacts from './components/Contacts/Contacts';
import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  return (
    <StyledApp>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </StyledApp>
  );
};
