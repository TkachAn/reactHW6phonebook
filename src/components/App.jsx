// import { Layout } from 'components/Layout/Layout';
// import { ContactFilter } from './filter/filter';
import { ContactForm } from './contactForm/form';
import { ContactList } from './contactList/list';

export const App = () => {
  return (
    <>
      <ContactForm />
      {/* <ContactFilter /> */}
      <ContactList />
    </>
  );
};
