import { BtnStyled } from '../Button/Button.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/contacts-slice';
import StyledUpdateModal from './StyledUpdateModal';

const UpdateModal = ({ setModalClose, itemId }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ itemId, name, number }));
  };

  const handleSubmit = e => {
    onSubmit(e);
    setModalClose();
  };

  return (
    <StyledUpdateModal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Name
          <input
            id="username"
            type="text"
            name="name"
            placeholder="Adam Smith"
            value={name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="userNumber">
          Number
          <input
            id="userNumber"
            type="text"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="000-00-00"
            value={number}
            onChange={onChange}
          />
          <BtnStyled type="submit">Change</BtnStyled>
        </label>
      </form>
    </StyledUpdateModal>
  );
};

export default UpdateModal;
