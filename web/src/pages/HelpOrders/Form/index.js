import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form as Unform } from '@rocketseat/unform';

import { Container } from './styles';

import TextInput from '~/components/Input';
import Button from '~/components/Button';

import api from '~/services/api';

const schema = Yup.object().shape({
  answer: Yup.string('Digite algum texto de resposta').required(
    'O texto de resposta é obrigatório'
  ),
});

export default function Form({
  helpOrder,
  closeDialog,
  helpOrders,
  setHelpOrders,
}) {
  async function handleSubmit({ answer }) {
    try {
      await api.post(`help-orders/${helpOrder.id}/answer`, { answer });

      closeDialog();

      setHelpOrders(
        helpOrders.filter(
          currentHelpOrder => currentHelpOrder.id !== helpOrder.id
        )
      );

      toast.success('Resposta enviada para o aluno');
    } catch (error) {
      toast.error('Erro ao salvar resposta');
    }
  }

  return (
    <Container>
      <Unform schema={schema} onSubmit={handleSubmit}>
        <strong>PERGUNTA DO ALUNO</strong>
        <p>{helpOrder.question}</p>
        <strong>SUA RESPOSTA</strong>
        <TextInput multiline rows="6" name="answer" type="text" />
        <Button>Responder aluno</Button>
      </Unform>
    </Container>
  );
}

Form.propTypes = {
  helpOrder: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
  }).isRequired,
  closeDialog: PropTypes.func.isRequired,
  helpOrders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setHelpOrders: PropTypes.func.isRequired,
};
