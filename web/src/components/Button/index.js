import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, className, ...rest }) {
  return (
    <Container className={className} {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
};
