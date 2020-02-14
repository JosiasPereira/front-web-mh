import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import GlobalStyles from '../../utils/global';
import Routes from '../../Routes';



function App() {
  return (
    <ThemeProvider theme={theme}>   
      <>
      <Routes/>
      <GlobalStyles />     
      </>  
    </ThemeProvider>
   
  ); 
}

export default App;
