import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  transition: all 0.2s;
  /*@media (max-width: 780px) {
    display: flex;
    flex-direction: column;   
    margin-top: 6rem; 
  }
  */
`;

//  drop menu

export const NavbarDropdownContent = styled.div`
  display: flex;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  flex-direction: column;
  
`;

export const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;
  display: none;
  &:hover ${NavbarDropdownContent}{
    display: block;
  }
`;