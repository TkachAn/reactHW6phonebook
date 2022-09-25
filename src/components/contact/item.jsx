import { useDispatch } from 'react-redux';
// import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/phoneSlice';
import css from './item.module.css';

export function ContactItem({ phone }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(phone.id));
  return (
    <div className={css.info}>
      {phone.user}: {phone.tel}
      <button className={css.btn} type="button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}
