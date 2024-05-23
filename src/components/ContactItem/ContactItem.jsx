import { BtnSmallStyled } from '../Button/Button.styled';

export const ContactItem = ({ contact, onClickDelete, onClickUpdate }) => {
  const { id, name, number } = contact;
  return (
    <li name="contact">
      {name}: {number}
      <BtnSmallStyled type="button" onClick={() => onClickUpdate(id)}>
        Update
      </BtnSmallStyled>
      <BtnSmallStyled type="button" onClick={() => onClickDelete(id)}>
        Delete
      </BtnSmallStyled>
    </li>
  );
};
