import React from 'react';

import { Container , StyledOption} from './styles';

export default function Option({children, ...props }) {
  return (
    <Container>
      <StyledOption  {...props}>{children}></StyledOption>
    </Container>
  );
}
