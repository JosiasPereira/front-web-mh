import styled from "styled-components";
import search from '../../../assets/search.png';
import Button from '../../../Components/Button';


export const Container = styled.div`
    width : 650px;
    max-width : 650px;    
    min-height: 400px;
    border-radius: 4px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    background-color: ${props => props.theme.colors.dark1};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    padding-top: 10px;
    flex-direction: column;
    box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
    align-self: flex-start;

    @media (max-weight:650) {
      width: 100%;
    }
    
`;

export const Title = styled.div`
  color : ${props => props.theme.colors.text.green} ;    
  font-size: ${props => props.fontSize}px;
  margin-bottom : 30px;
  font-weight : 500;

`;

export const SearchInput = styled.input`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: right;  
  padding:  15px 20px;
  width: 100%;
  background-color:  ${props => props.theme.colors.secondary} ;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  border-width: 0px;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.primary};
  }
  &:hover {    
    box-shadow: 0px 0px 4px ${props => props.theme.colors.primary};
  }
  &:focus:hover {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }
  &:focus {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }
  &:active {    
    box-shadow: 0px 0px 8px ${props => props.theme.colors.primary};
  }

`;

export const ContainerList = styled.div`
  height: auto;
  width: 100%;
  padding-top: 15px;
  margin-top:155px;
`;

export const ContainerTop = styled.div`
  height: 155px;
  width: inherit;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
  position: fixed;
  padding: 10px 20px;
  margin-top: -10px;
  background-color: ${props => props.theme.colors.dark1};
  
`;


export const TextBtnLogin = styled.div`
  color: ${props => props.theme.colors.text.primary};
  font-size: 16px;
`;

export const TextBtnSignUp = styled.div`
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
`;

export const NameIssuer = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-weight: bold;
  font-size: 16px;
`;

export const Comment = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-size: 14px;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const ImageReceipt = styled.img`
  max-width: 500px;
  max-height: 500px;
  border-radius: 4px;
  margin-left: 10px;
`;
export const DateUploaded = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-size: 14px;
`;
export const ContainerComp = styled.div`
  height: auto;
  width: 100%;
  border-radius: 4px;
  border-width: 5px;
  border-color : #fff;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px 15px;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtonAdd = styled(Button)`
  width: 50px;
  background-color: ${props => props.theme.colors.primary};
  margin: 0px;
  margin-left: 5px;
  height: inherit;
`;

export const ImageAdd = styled.img`
  width: 20px;
  height: auto;
`;