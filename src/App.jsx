import { useSelector } from 'react-redux';
import {
  Box,
  Section,
  FormInputContact,
  ContactsList,
  Filter,
} from './components';

function App() {
  const state = useSelector(state => state.contacts.value);

  return (
    <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
      <Section title="Phonebook">
        <FormInputContact />
      </Section>
      <Section title="Contacts">
        {state.length ? <Filter /> : ''}
        <ContactsList />
      </Section>
    </Box>
  );
}

export default App;
