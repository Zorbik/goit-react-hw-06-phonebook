import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Button, ContactItem } from '../../components';

export const Contact = ({ item }) => {
  const { id, name, number } = item;
  const dispatch = useDispatch();
  return (
    <ContactItem>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};
