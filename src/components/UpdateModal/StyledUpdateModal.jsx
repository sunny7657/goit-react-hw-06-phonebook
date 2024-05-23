import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #5858f43e;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUpdateModal = () => {
  return (
    <>
      <StyledModal />
    </>
  );
};

export default StyledUpdateModal;
