import React from 'react';

import { Container , StyledInput, Error} from './styles';

export default function Select({ field,children, form: { touched, errors }, ...props }) {
  return (
    <Container>
      <StyledInput {...field} {...props}>{children}</StyledInput>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Container>
  );
}
