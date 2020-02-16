import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Li = styled.li`
  list-style: none;
  display: flex;
  height:70%;
 
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center; 
  font-size: 16px;
  padding: 10px;
  margin: 2px;
  font-weight: 400;
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s;

 

  &:hover {
    background-color: ${props => props.theme.colors.primary};    
  }

  &.active {
    background-color: ${props => props.theme.colors.primary};    
  }
`;