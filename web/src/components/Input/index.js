import React from 'react';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function InputComponent({ className, ...rest }) {
  return (
    <Container className={className}>
      <Input {...rest} />
    </Container>
  );
}

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
