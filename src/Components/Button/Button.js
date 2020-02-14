import React from 'react';

import { StyledButton, Text } from './styles';

export default function Button({ children, disabled, loading, contain, color, ...rest }) {
  return (
    <StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading: children}
    </StyledButton>
  );
}
 