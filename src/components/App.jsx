// import { Layout } from 'components/Layout/Layout';
import { useState, useEffect } from 'react';
import { Filter } from './filter/filter';
import { ContactForm } from './contactForm/form';
import { ContactList } from './contactList/list';
// import { useDispatch } from 'react-redux'; loadFromStorage,
import { contacts } from './storageService/storageService';

import css from './App.module.css';
export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = loadFromStorage('phonebook');
  // console.log('contacts.length', contacts); //.length
  // console.log('ContactList', ContactList);
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
