import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Find contact"
        onChange={changeFilter}
      ></input>
    </label>
  );
};
