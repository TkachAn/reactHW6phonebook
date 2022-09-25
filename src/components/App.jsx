// import { Layout } from 'components/Layout/Layout';
import { useState } from 'react';
import { Filter } from './filter/filter';
import { ContactForm } from './contactForm/form';
import { ContactList } from './contactList/list';
import { loadFromStorage } from './storageService/storageService';
import css from './App.module.css';
export const App = () => {
  const [contacts] = useState(loadFromStorage('phonebook'));
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
};
