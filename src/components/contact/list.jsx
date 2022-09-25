import ContactItem from './item';
import css from './list.module.css';

export function ContactList({ contacts, onDel }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <ContactItem user={name} tel={number} onDel={onDel} delId={id} />
        </li>
      ))}
    </ul>
  );
}
