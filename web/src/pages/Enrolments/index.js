import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
      const data = response.data.map(enrolment => ({
        ...enrolment,
        formatted_start_date: format(
          parseISO(enrolment.start_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        formatted_end_date: format(
          parseISO(enrolment.end_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      }));
      setEnrolments(data);
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
              <td>{enrolment.student.name}</td>
              <td>{enrolment.plan.title}</td>
              <td>{enrolment.formatted_start_date}</td>
              <td>{enrolment.formatted_end_date}</td>
              <td>{enrolment.active ? 'Ativa' : 'Inativa'}</td>
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
