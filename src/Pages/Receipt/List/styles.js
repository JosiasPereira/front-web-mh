import styled from "styled-components";

export const Container = styled.div`
    width : 500px;
    height: auto;
    min-height: 400px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.dark1};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
`;

export const Title = styled.text`
    color : ${props => props.theme.colors.text.primary} ;
    font-size: 22px;
    margin-bottom : 30px;

`;

export const Logo = styled.img`
    height: auto;
    width: 250px;
`;

export const TextBtnLogin = styled.text`
  color: ${props => props.theme.colors.text.primary};
  font-size: 16px;
`;

export const TextBtnSignUp = styled.text`
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
`;