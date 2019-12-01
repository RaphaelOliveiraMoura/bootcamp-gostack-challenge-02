import React, { useEffect, useState } from 'react';
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
  BackButton,
  SaveButton,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  student_id: Yup.string()
    .typeError('Escolha um aluno')
    .required('Escolha um aluno válido'),
  plan_id: Yup.number()
    .typeError('Escolha um plano')
    .required('Escolha um plano válido'),
  start_date: Yup.date()
    .typeError('Digite uma data')
    .required('Digite uma data válida'),
});

export default function FormPlans({ match }) {
  const { id } = match.params;

  const [students, setStudents] = useState([]);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    async function loadEnrolmentInfo() {
      try {
      } catch (error) {
        history.push('/enrolments/create');
      }
    }

    async function loadStudents() {
      const response = await api.get('/students');
      const data = response.data.map(student => ({
        id: student.id,
        title: student.name,
      }));
      setStudents(data);
    }

    if (id) {
      loadEnrolmentInfo();
    } else {
      loadStudents();
    }
  }, [id]);

  async function handleSubmit() {
    if (id) {
      try {
        history.push('/enrolments');
      } catch (error) {
        toast.error('Error ao atualizar dados da matrícula');
      }
    } else {
      try {
        toast.success('Matrícula realizada');
        history.push('/enrolments');
      } catch (error) {
        toast.error('Error ao realizar matrícula');
      }
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <ContentHeader>
          <h1>{id ? 'Edição de matrícula' : 'Cadastro de matrícula'}</h1>
          <div className="options">
            <Link to="/enrolments">
              <BackButton background="#ccc" type="button">
                VOLTAR
              </BackButton>
            </Link>
            <SaveButton type="submit">SALVAR</SaveButton>
          </div>
        </ContentHeader>
        <Card>
          <Input name="student_id" label="ALUNO" options={students} />
          <Input name="plan_id" type="number" label="Selecione o plano" />
          <Input name="start_date" label="DATA DE INÍCIO" />
          <Input name="end_date" label="DATA DE TÉRMINO" disabled />
          <Input name="end_value" label="VALOR FINAL" disabled />
        </Card>
      </Form>
    </Container>
  );
}

FormPlans.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

FormPlans.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
