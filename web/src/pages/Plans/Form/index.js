import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import {
  Container,
  ContentHeader,
  Card,
  Input,
  BackButton,
  SaveButton,
} from './styles';

import CurrencyInput from '~/components/Input/Currency';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  title: Yup.string().required('Digite um título'),
  duration: Yup.number()
    .min(1, 'Digite uma duração válida')
    .typeError('Digite uma duração')
    .required('Insira uma duração'),
  price: Yup.number()
    .typeError('Digite um valor para o preço')
    .required('Digite um valor mensal'),
});

export default function FormPlans({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState({});

  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setInitialData({
      ...initialData,
      totalPrice: Number(duration) * Number(price),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, price]);

  useEffect(() => {
    async function loadPlanInfo() {
      try {
        const response = await api.get(`/plans/${id}`);
        const { data } = response;

        setInitialData({
          ...data,
          totalPrice: Number(data.duration) * Number(data.price),
        });

        setPrice(data.price);
        setDuration(data.duration);
      } catch (error) {
        history.push('/plans/create');
      }
    }

    if (id) {
      loadPlanInfo();
    }
  }, [id]);

  async function handleSubmit({ title }) {
    if (id) {
      try {
        await api.put(`/plans/${id}`, { title, duration, price });
        toast.success('Dados do plano atualizados com sucesso');
        history.push('/plans');
      } catch (error) {
        toast.error('Error ao atualizar dados do plano');
      }
    } else {
      try {
        await api.post(`/plans`, { title, duration, price });
        toast.success('Plano cadastrado');
        history.push('/plans');
      } catch (error) {
        toast.error('Error ao cadastrar plano');
      }
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={initialData}
        context={{ duration, price }}
      >
        <ContentHeader>
          <h1>{id ? 'Edição de plano' : 'Cadastro de plano'}</h1>
          <div className="options">
            <Link to="/plans">
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
          <Input name="title" label="TÍTULO DO PLANO" />
          <Input
            name="duration"
            type="number"
            label="DURAÇÃO (em meses)"
            onChange={e => setDuration(e.target.value)}
          />
          <CurrencyInput
            name="price"
            label="PREÇO MENSAL"
            onChange={value => setPrice(value)}
          />
          <CurrencyInput name="totalPrice" label="PREÇO TOTAL" disabled />
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
