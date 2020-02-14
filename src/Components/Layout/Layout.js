import React from 'react';

import { MainWrapper } from './styles';
import Header from '../Header';

export default function Layout({children}) {
  return (
    <>
    <Header/>
    <MainWrapper>
        {children}
    </MainWrapper>
    </>
    
  );
}
