import React from 'react';
import { Container, Li, StyledNavLink } from './styles';

export default function NavItem({link, children, clicked}) {
  return (
     <Li>
       <StyledNavLink
        to={link}
        exact
        onClick={clicked}
       >
         {children}
       </StyledNavLink>
     </Li>
  );
}
