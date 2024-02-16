import { BtnDeleteStyled } from 'components/Button/Button.styled';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
    Notify.info('The contact was deleted');
  };

  return (
    <li name="contact">
      {name}: {number}
      <BtnDeleteStyled onClick={onDelete(id)} type="button">
        Delete
      </BtnDeleteStyled>
    </li>
  );
};
