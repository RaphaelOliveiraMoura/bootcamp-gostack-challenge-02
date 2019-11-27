import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Options } from './styles';

import Button from '~/components/Button';

export default function ConfirmDialog({
  title,
  description,
  onConfirm,
  opened,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);

  return (
    <>
      {isOpen && (
        <Container>
          <Content>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <Options>
              <Button onClick={() => setIsOpen(false)} background="#ccc">
                CANCELAR
              </Button>
              <Button onClick={() => onConfirm()}>CONFIRMAR</Button>
            </Options>
          </Content>
        </Container>
      )}
    </>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onConfirm: PropTypes.func,
  opened: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
  description: null,
  opened: false,
  onConfirm: () => {},
};
