import React from 'react';

import { Container, FixedWrapper, ContainerLogo, Logo } from './styles';
import logo from '../../assets/logo1.png';
import NavItems from '../NavItems';

export default function Header() {
  return (
    <FixedWrapper>
      
        <ContainerLogo>
            <a href="/">
            <Logo src={logo}/>
            </a>
        </ContainerLogo>
        <NavItems/>
    </FixedWrapper>
    
  );
}
