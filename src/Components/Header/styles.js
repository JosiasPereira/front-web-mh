import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  height: 40;
  

`;

export const FixedWrapper = styled.header`
  position: fixed;
  background-color: ${props => props.theme.colors.dark1};  
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;  
  z-index: 5
`;

export const ContainerLogo = styled.div`  
  width : 250px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
`;
export const Logo = styled.img`
    height : 100%;
`;