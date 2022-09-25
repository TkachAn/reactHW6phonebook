import { filterContact } from '../../redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';
import css from './filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsReducer.filter);

  const changeFilter = data => {
    dispatch(filterContact(data));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => changeFilter(e.target.value)}
      />
    </label>
  );
}
