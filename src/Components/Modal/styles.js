import styled from "styled-components";

export const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  width: 100%;
  max-width: 550px;
  box-shadow: 0 0.5rem 3.5em rgba(0,0,0,0.2);
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.dark1};
  transition: all 0.2s;
`;

export const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0%;
width: 100%;
height: 100vh;
z-index: 100;
background-color: rgba(0, 0, 0, 0.7);
opacity: ${({ opened }) => (opened ? '1' : '0')};
visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
transition: all 0.2s;
`;