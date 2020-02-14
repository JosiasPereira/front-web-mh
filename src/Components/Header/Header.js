import React from 'react';

import { Container, FixedWrapper, ContainerLogo, Logo } from './styles';
import logo from '../../assets/logo1.png';

export default function Header() {
  return (
    <FixedWrapper>
      
        <ContainerLogo>
            <a href="/">
            <Logo src={logo}/>
            </a>
        </ContainerLogo>
        
    </FixedWrapper>
    
  );
}
