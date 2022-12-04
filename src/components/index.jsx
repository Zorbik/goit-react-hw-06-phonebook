import { ThreeDots } from 'react-loader-spinner';

export { ContactItem } from './ContactsList/Contact.styled';
export { Button, Form, Input, Label } from './Form/FormInputContact.styled';

export { theme } from './theme';
export { Box } from './Box';
export { Section } from './Section/Section';
export { FormInputContact } from './Form/FormInputContact';
export { Filter } from './Form/Filter';
export { Contact } from './ContactsList/Contact';
export { ContactsList } from './ContactsList/ContactsList';

export const loader = (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#4fa94d"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);
