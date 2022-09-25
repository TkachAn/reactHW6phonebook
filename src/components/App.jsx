// import { Layout } from 'components/Layout/Layout';
import { ContactFilter } from './filter/filter';
import { ContactForm } from './contact/form';
import { ContactList } from './contact/list';

export const App = () => {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};
