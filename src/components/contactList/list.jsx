import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/actions.js';
import css from './list.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    state.contactsReducer.items.filter(contact =>
      contact.name.toLowerCase().includes(state.contactsReducer.filter)
    )
  );
  const delContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.info}>
            {name}: {number}
            <button
              className={css.btn}
              type="button"
              onClick={() => delContacts(id)}
            >
              <MdClose size={24} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
/* <ContactItem user={name} tel={number} delId={id} /> */
