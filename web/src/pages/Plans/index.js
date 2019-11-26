import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Table, EditButton, DeleteButton } from './styles';

import Button from '~/components/Button';
import TitleContainer from '~/components/TitleContainer';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const data = response.data.map(plan => ({
        ...plan,
        formattedPrice: formatPrice(plan.price),
      }));

      setPlans(data);
    }
    loadPlans();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h1>Gerenciando planos</h1>
        <Link to="/plans/create">
          <Button>CADASTRAR</Button>
        </Link>
      </TitleContainer>
      <Table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/MÊS</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={String(plan.id)}>
              <td>{plan.title}</td>
              <td>{plan.duration}</td>
              <td>{plan.formattedPrice}</td>
              <td>
                <div className="options">
                  <EditButton type="button">editar</EditButton>
                  <DeleteButton type="button">apagar</DeleteButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
