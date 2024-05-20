import { BtnDeleteStyled } from 'components/Button/Button.styled';

export const ContactItem = ({ contact, onClickDelete, onClickUpdate }) => {
  const { id, name, number } = contact;
  return (
    <li name="contact">
      {name}: {number}
      <BtnDeleteStyled
        type="button"
        onClick={() => {
          onClickUpdate(id);
        }}
      >
        Update
      </BtnDeleteStyled>
      <BtnDeleteStyled type="button" onClick={() => onClickDelete(id)}>
        Delete
      </BtnDeleteStyled>
    </li>
  );
};
