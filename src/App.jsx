import { useSelector } from 'react-redux';
import {
  Box,
  Section,
  FormInputContact,
  ContactsList,
  Filter,
} from './components';
import { getContacts } from './redux/selectors';

function App() {
  const stateContacts = useSelector(getContacts);

  return (
    <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
      <Section title="Phonebook">
        <FormInputContact />
      </Section>
      <Section title="Contacts">
        {stateContacts?.length ? <Filter /> : ''}
        <ContactsList />
      </Section>
    </Box>
  );
}

export default App;
