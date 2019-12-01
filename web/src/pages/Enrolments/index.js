import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Table, EditButton, DeleteButton } from './styles';
import TitleContainer from '~/components/TitleContainer';
import Button from '~/components/Button';

import api from '~/services/api';
import history from '~/services/history';

export default function Enrolments() {
  const [enrolments, setEnrolments] = useState([]);

  useEffect(() => {
    async function loadEnrolments() {
      const response = await api.get('/enrolments');
      setEnrolments(response.data);
    }

    loadEnrolments();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h1>Gerenciando matrículas</h1>
        <Link to="/enrolments/create">
          <Button>CADASTRAR</Button>
        </Link>
      </TitleContainer>
      <Table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {enrolments.map(enrolment => (
            <tr key={String(enrolment.id)}>
              <td>{enrolment.title}</td>
              <td>{enrolment.formattedDuration}</td>
              <td>{enrolment.formattedPrice}</td>
              <td>
                <div className="options">
                  <EditButton
                    type="button"
                    onClick={() => history.push(`/enrolments/${enrolment.id}`)}
                  >
                    editar
                  </EditButton>
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
