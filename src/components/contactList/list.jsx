// import { deleteContact } from '../../redux/actions.js';
import { useSelector } from 'react-redux'; //, useDispatch
import ContactItem from '../contactItem/item';
import css from './list.module.css';
import { getContacts } from '../../redux/selectors';

export function ContactList() {
  // const dispatch = useDispatch();
  const contacts = useSelector(getContacts());

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <ContactItem user={name} tel={number} delId={id} />
        </li>
      ))}
    </ul>
  );
}
