import { BtnStyled } from 'components/Button/Button.styled';
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
          <input
            id="username"
            type="text"
            name="name"
            placeholder="Change your name"
            value={name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="userNumber">
          <input
            id="userNumber"
            type="text"
            name="number"
            placeholder="Change your number"
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
