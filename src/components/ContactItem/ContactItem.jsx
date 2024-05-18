import { BtnDeleteStyled } from 'components/Button/Button.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  return (
    <li name="contact">
      {name}: {number}
      <BtnDeleteStyled type="button">Delete</BtnDeleteStyled>
    </li>
  );
};
