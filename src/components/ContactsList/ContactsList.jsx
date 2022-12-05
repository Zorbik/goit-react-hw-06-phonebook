import { useSelector } from 'react-redux';
import { Box, Contact } from '../../components';
import { getContacts, getFilter } from '../../redux/selectors';

export function ContactsList() {
  const stateContacts = useSelector(getContacts);
  const stateFilter = useSelector(getFilter);

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
