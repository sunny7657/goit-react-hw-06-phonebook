import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #607d8ba1;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUpdateModal = ({ children }) => {
  return <StyledModal>{children}</StyledModal>;
};

export default StyledUpdateModal;
