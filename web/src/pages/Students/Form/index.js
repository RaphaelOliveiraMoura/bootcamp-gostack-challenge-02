import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import {
  Container,
  ContentHeader,
  Card,
  Input,
  BackButton,
  SaveButton,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Insira um e-mail'),
  birth: Yup.date().required('A idade é obrigatória'),
  weigth: Yup.number().required('O peso é obrigatório'),
  height: Yup.number().required('A altura é obrigatória'),
});

export default function FormStudents({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function loadStudentInf() {
      const response = await api.get(`/students/${id}`);
      const { birth, ...rest } = response.data;
      setInitialData({
        ...rest,
        birth: format(parseISO(birth), 'yyyy-MM-dd'),
      });
    }

    if (id) {
      loadStudentInf();
    }
  }, [id]);

  async function handleSubmit({ name, email, birth, weigth, height }) {
    if (id) {
      await api.put(`/students/${id}`, { name, email, birth, weigth, height });
    } else {
      await api.post(`/students`, { name, email, birth, weigth, height });
    }

    history.push('/students');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <ContentHeader>
          <h1>{id ? 'Edição de aluno' : 'Cadastro de aluno'}</h1>
          <div className="options">
            <Link to="/students">
              <BackButton type="button">VOLTAR</BackButton>
            </Link>
            <SaveButton type="submit">SALVAR</SaveButton>
          </div>
        </ContentHeader>
        <Card>
          <Input name="name" placeholder="John Doe" label="NOME COMPLETO" />
          <Input
            type="email"
            name="email"
            placeholder="exemplo@email.com"
            label="ENDEREÇO DE E-MAIL"
          />
          <section>
            <Input name="birth" type="date" label="DATA NASCIMENTO" />
            <Input name="weigth" type="number" label="PESO (em kg)" />
            <Input name="height" type="number" step="0.01" label="ALTURA" />
          </section>
        </Card>
      </Form>
    </Container>
  );
}

FormStudents.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

FormStudents.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
