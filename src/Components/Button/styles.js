import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? 'auto' : '100%')};
  outline: none;
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-white);
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: ${({ color, theme }) => {
    if (color === 'primary') return theme.colors.primary;
    else if (color === 'main') return 'var(--color-mainDark)';
    else return 'var(--color-mainLighter)';
  }};
  margin: 10px 0 8px 0;
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

export const Text = styled.text`
  color: ${props => props.theme.colors.text.primary};
  font-size: 16px;
  
`;