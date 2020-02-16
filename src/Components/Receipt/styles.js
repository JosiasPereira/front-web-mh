import styled from 'styled-components';

export const NameIssuer = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-weight: bold;
  font-size: 16px;
`;

export const Comment = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-size: 14px;
`;

export const Value = styled.div`
  color : ${props => props.theme.colors.text.primary};
  font-size: 13px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
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
  width: auto;
  height: auto;
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
  box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
`;