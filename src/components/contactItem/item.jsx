import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/contactSlice';
import css from './item.module.css';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.info}>
      {contact.user}: {contact.tel}
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
}
