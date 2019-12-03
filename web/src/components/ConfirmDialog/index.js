import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { Container } from './styles';

import Button from '~/components/Button';

export default function ConfirmDialog({
  title = 'Tem certeza disso ?',
  description = null,
  component = null,
  onConfirm = () => {},
}) {
  return confirmAlert({
    // eslint-disable-next-line react/prop-types
    customUI: ({ onClose }) => {
      return (
        <Container>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {component && <section>{component}</section>}
          <div>
            <Button background="#ccc" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                onClose();
                onConfirm();
              }}
            >
              Confirmar
            </Button>
          </div>
        </Container>
      );
    },
  });
}
