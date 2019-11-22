import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, className }) {
  return <Container className={className}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
