import { BtnDeleteStyled } from 'components/Button/Button.styled';
// import { useDispatch } from 'react-redux';

export const ContactItem = ({ contactName, contactNumber, onDelete }) => {
  // const dispatch = useDispatch();

  return (
    <li name="contact">
      {contactName}: {contactNumber}
      <BtnDeleteStyled onClick={onDelete} type="button">
        Delete
      </BtnDeleteStyled>
    </li>
  );
};
