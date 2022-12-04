import { useSelector } from 'react-redux';
import { Box, Contact } from '../../components';

export function ContactsList() {
  const stateContacts = useSelector(state => state.contacts.value);
  const stateFilter = useSelector(state => state.filter.value);

  const getVisibleContacts = () => {
    const normalizedFilter = stateFilter.toLowerCase().trim();
    return stateContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box as="ul" px={3} mb={0}>
      {stateContacts &&
        getVisibleContacts().map(item => <Contact key={item.id} item={item} />)}
    </Box>
  );
}
