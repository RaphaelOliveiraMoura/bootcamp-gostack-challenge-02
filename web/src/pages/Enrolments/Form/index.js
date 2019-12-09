import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO, addMonths, endOfDay, startOfDay, addDays } from 'date-fns';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import {
  Container,
  ContentHeader,
  Card,
  BackButton,
  SaveButton,
} from './styles';

import DatePicker from '~/components/Input/DatePicker';
import CurrencyInput from '~/components/Input/Currency';
import AsyncSelect from '~/components/Input/AsyncSelect';
import Select from '~/components/Input/Select';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  student_id: Yup.number()
    .typeError('Escolha um aluno')
    .required('Escolha um aluno válido'),
  plan_id: Yup.number()
    .typeError('Escolha um plano')
    .required('Escolha um plano válido'),
  start_date: Yup.date()
    .typeError('Digite uma data')
    .min(endOfDay(new Date()))
    .required('Digite uma data válida'),
});

export default function FormPlans({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState({});

  const [plans, setPlans] = useState([]);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [start_date, setStartDate] = useState(null);

  const loadStudents = useCallback((inputValue = '') => {
    async function load() {
      const response = await api.get('/students', {
        params: { q: inputValue },
      });
      const data = response.data.map(student => ({
        id: student.id,
        title: student.name,
        data: student,
      }));
      return data;
    }

    return load();
  }, []);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans', {
        params: { paginate: false },
      });
      const data = response.data.map(plan => ({
        id: plan.id,
        title: plan.title,
        data: plan,
      }));

      setPlans(data);
    }

    async function loadEnrolment() {
      try {
        const response = await api.get(`/enrolments/${id}`);

        const { data } = response;

        setInitialData({
          student_id: {
            id: data.student.id,
            title: data.student.name,
            data: data.student,
          },
          plan_id: {
            id: data.plan.id,
            title: data.plan.title,
            data: data.plan,
          },
          start_date: parseISO(data.start_date),
          end_price: data.price,
        });

        setSelectedPlan({
          id: data.plan.id,
          title: data.plan.title,
          data: data.plan,
        });

        setStartDate(parseISO(data.start_date));
      } catch (error) {
        history.push('/enrolments/create');
      }
    }

    loadPlans();

    if (id) {
      loadEnrolment();
    }
  }, [id, loadStudents]);

  useEffect(() => {
    if (selectedPlan && start_date) {
      setInitialData({
        ...initialData,
        end_date: addMonths(start_date, selectedPlan.data.duration),
        end_price:
          Number(selectedPlan.data.price) * Number(selectedPlan.data.duration),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, start_date]);

  async function handleSubmit({ student_id, plan_id }) {
    if (id) {
      try {
        await api.put(`/enrolments/${id}`, { student_id, plan_id, start_date });
        toast.success('Matrícula atualizada com sucesso');
        history.push('/enrolments');
      } catch (error) {
        toast.error(
          'Erro ao realizar matrícula, verifique se o estudante já está matriculado'
        );
      }
    } else {
      try {
        await api.post('/enrolments', { student_id, plan_id, start_date });
        toast.success('Matrícula realizada');
        history.push('/enrolments');
      } catch (error) {
        toast.error(
          'Erro ao realizar matrícula, verifique se o estudante já está matriculado'
        );
      }
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={initialData}
        context={{ start_date }}
      >
        <ContentHeader>
          <h1>{id ? 'Edição de matrícula' : 'Cadastro de matrícula'}</h1>
          <div className="options">
            <Link to="/enrolments">
              <BackButton
                icon={MdKeyboardArrowLeft}
                background="#ccc"
                type="button"
              >
                VOLTAR
              </BackButton>
            </Link>
            <SaveButton icon={MdCheck} type="submit">
              SALVAR
            </SaveButton>
          </div>
        </ContentHeader>
        <Card>
          <AsyncSelect
            name="student_id"
            label="ALUNO"
            placeholder="Buscar aluno"
            loadFunction={loadStudents}
            noOptionsMessage={() => 'Digite o nome ou email do aluno'}
          />
          <Select
            name="plan_id"
            label="PLANO"
            options={plans}
            onChange={plan => setSelectedPlan(plan)}
          />
          <DatePicker
            name="start_date"
            placeholder="Escolha a data"
            label="DATA DE INÍCIO"
            minDate={startOfDay(addDays(new Date(), 1))}
            onChange={date => setStartDate(date)}
          />
          <DatePicker name="end_date" label="DATA DE TÉRMINO" disabled />
          <CurrencyInput name="end_price" label="VALOR FINAL" disabled />
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
