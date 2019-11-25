import React, { useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import {
  Container,
  ContentHeader,
  Card,
  Input,
  DatePicker,
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
  birth: Yup.date()
    .typeError('Utilize o formato correto para a data')
    .max(new Date(), 'Não é possível escolher uma data futura')
    .required('A idade é obrigatória'),
  weigth: Yup.number()
    .typeError('O peso deve conter um valor numérico')
    .required('O peso é obrigatório'),
  height: Yup.number()
    .typeError('A idade deve conter um valor numérico')
    .required('A altura é obrigatória'),
});

export default function FormStudents({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    async function loadStudentInf() {
      try {
        const response = await api.get(`/students/${id}`);
        const { birth, ...rest } = response.data;
        setInitialData({
          ...rest,
          birth: parseISO(birth),
        });
      } catch (error) {
        history.push('/students/create');
      }
    }

    if (id) {
      loadStudentInf();
    }
  }, [id]);

  async function handleSubmit({ name, email, birth, weigth, height }) {
    if (id) {
      try {
        await api.put(`/students/${id}`, {
          name,
          email,
          birth,
          weigth,
          height,
        });
        toast.success('Dados do aluno atualizados com sucesso');
        history.push('/students');
      } catch (error) {
        toast.error('Error ao atualizar dados do aluno');
      }
    } else {
      try {
        await api.post(`/students`, { name, email, birth, weigth, height });
        toast.success('Aluno cadastrado');
        history.push('/students');
      } catch (error) {
        toast.error('Error ao cadastrar aluno');
      }
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <ContentHeader>
          <h1>{id ? 'Edição de aluno' : 'Cadastro de aluno'}</h1>
          <div className="options">
            <Link to="/students">
              <BackButton background="#ccc" type="button">
                VOLTAR
              </BackButton>
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
          <DatePicker
            name="birth"
            label="DATA NASCIMENTO"
            placeholderText="dd/mm/yyyy"
          />
          <Input name="weigth" type="number" label="PESO (em kg)" />
          <Input name="height" type="number" step="0.01" label="ALTURA" />
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
