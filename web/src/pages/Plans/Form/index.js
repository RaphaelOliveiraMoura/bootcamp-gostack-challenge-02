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
  title: Yup.string().required('Digite um título'),
  duration: Yup.number()
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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Number(duration) * Number(price));
  }, [duration, price]);

  useEffect(() => {
    async function loadPlanInfo() {
      try {
        const response = await api.get(`/plans/${id}`);
        const { data } = response;

        setDuration(data.duration);
        setPrice(data.price);
        setInitialData(data);
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
        context={{ price, duration, totalPrice }}
      >
        <ContentHeader>
          <h1>{id ? 'Edição de plano' : 'Cadastro de plano'}</h1>
          <div className="options">
            <Link to="/plans">
              <BackButton background="#ccc" type="button">
                VOLTAR
              </BackButton>
            </Link>
            <SaveButton type="submit">SALVAR</SaveButton>
          </div>
        </ContentHeader>
        <Card>
          <Input name="title" label="TÍTULO DO PLANO" />
          <Input
            name="duration"
            type="number"
            label="DURAÇÃO (em meses)"
            onChange={e => setDuration(e.target.value)}
            value={duration}
          />
          <Input
            name="price"
            type="number"
            step="0.01"
            label="PREÇO MENSAL"
            onChange={e => setPrice(e.target.value)}
            value={price}
          />
          <Input
            name="totalPrice"
            type="number"
            step="0.01"
            label="PREÇO TOTAL"
            value={totalPrice}
            onChange={() => {}}
            disabled
          />
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
