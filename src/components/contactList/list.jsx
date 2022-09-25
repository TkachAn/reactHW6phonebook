import ContactItem from '../contactItem/item';
import css from './list.module.css';
// import {n}
import { getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
export function ContactList() {
  const contacts = useSelector(getContacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
