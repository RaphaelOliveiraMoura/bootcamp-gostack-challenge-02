import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, className, icon: Icon, ...rest }) {
  return (
    <Container className={className} {...rest}>
      {Icon && <Icon size={20} color="#fff" />}
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

Button.defaultProps = {
  className: null,
  icon: null,
};
