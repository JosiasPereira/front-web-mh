import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 25px;
  flex-direction: column;    
`;

export const StyledInput = styled.input`
  padding:  ${(props) => (props.inputType === 'file' ? '5px 8px' : '15px 20px')};
  width: 100%;
  background-color:  ${props => props.theme.colors.secondary} ;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  border-width: 0px;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.primary};
  }
  &:hover {    
    box-shadow: 0px 0px 4px ${props => props.theme.colors.primary};
  }
  &:focus:hover {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }
  &:focus {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }
  &:active {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }
  
  &::-webkit-file-upload-button{
    padding: 8px;
    color: ${props => props.theme.colors.text.primary};
    background-color:  ${props => props.theme.colors.primary} ;
    border-width: 0px;
    border-radius: 4px;
  }
`;

export const Error = styled.div`
color: ${props => props.theme.colors.errorRed};
visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
opacity: ${({ show }) => (show ? '1' : '0')};
transform: translateY(${({ show }) => (show ? '20px' : '10px')});
transition: all 0.1s;
position: absolute;
bottom: 0;
left: 0;
padding: 0px 15px;
font-weight: 500;
font-size: 12px;
`;