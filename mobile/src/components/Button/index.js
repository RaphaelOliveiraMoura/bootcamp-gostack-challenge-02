import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
      {loading && <ActivityIndicator color="#fff" />}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  loading: false,
};
