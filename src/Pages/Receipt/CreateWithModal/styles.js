import styled from "styled-components";

export const Container = styled.div`
    width : 600px;
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
    color : ${props => props.theme.colors.text.green} ;    
    font-size: ${props => props.fontSize}px;
    margin-bottom : 30px;
    font-weight : 500;

`;

export const ImagePreview = styled.img`
   
    max-width: 500px;
    max-height: 500px;
`;

export const TextBtnSubmit = styled.text`
  color: ${props => props.theme.colors.text.primary};
  font-size: 16px;
`;

