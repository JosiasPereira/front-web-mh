import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;    
`;

export const StyledOption = styled.option`
  padding:  15px 20px;
  width: 100%;
  background-color:  ${props => props.theme.colors.secondary} ;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  border-width: 0px;
  
  
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
  
 
`;
