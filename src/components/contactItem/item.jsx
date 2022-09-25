import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/reducer';
// import { contactsReducer } from '../../redux/reducer';
import css from './item.module.css';

export function ContactItem({ user, tel, delId }) {
  const dispatch = useDispatch();
  const delContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <div className={css.info}>
      {user}: {tel}
      <button
        className={css.btn}
        type="button"
        onClick={() => delContacts(delId)}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
}
