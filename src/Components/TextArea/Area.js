import React from 'react';

import { Container , StyledInput, Error} from './styles';

export default function TextArea({ field, form: { touched, errors }, ...props }) {
  return (
    <Container>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Container>
  );
}
