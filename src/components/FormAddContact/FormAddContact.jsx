import { BtnStyled } from 'components/Button/Button.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/store';

export const FormAddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { value } = evt.target;
    if (evt.target.name === 'name') {
      setName(value);
    } else if (evt.target.name === 'number') {
      setNumber(value);
    }
  };

  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    // onSubmit({ name, number });
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          placeholder="Adam Smith"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="000-00-00"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <BtnStyled type="submit">Add contact</BtnStyled>
    </form>
  );
};
