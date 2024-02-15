import { BtnDeleteStyled } from 'components/Button/Button.styled';

export const ContactItem = ({ contactName, contactNumber, onDelete }) => {
  return (
    <li name="contact">
      {contactName}: {contactNumber}
      <BtnDeleteStyled onClick={onDelete} type="button">
        Delete
      </BtnDeleteStyled>
    </li>
  );
};
