import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Loader({ visible }) {
  return <>{visible && <Container />}</>;
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: true,
};
