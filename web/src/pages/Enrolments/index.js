import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import { Container, EditButton, DeleteButton } from './styles';

import HeadContent from '~/components/HeadContent';
import Button from '~/components/Button';
import Table from '~/components/Table';
import ConfirmDialog from '~/components/ConfirmDialog';
import EmptyContainer from '~/components/EmptyContainer';
import Pagination from '~/components/Pagination';
import Loader from '~/components/Loader';

import api from '~/services/api';
import history from '~/services/history';

export default function Enrolments() {
  const [enrolments, setEnrolments] = useState([]);

  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEnrolments() {
      try {
        setLoading(true);
        const response = await api.get('/enrolments', {
          params: { page: currentPage },
        });
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
        setPages(Number(response.headers.total_pages));
      } catch (error) {
        toast.error('Erro ao carregar matrículas');
      } finally {
        setLoading(false);
      }
    }

    loadEnrolments();
  }, [currentPage]);

  async function handleDelete(enrolment) {
    async function deleteEnrolment() {
      try {
        await api.delete(`/enrolments/${enrolment.id}`);
        setEnrolments(
          enrolments.filter(
            currentEnrolment => currentEnrolment.id !== enrolment.id
          )
        );
        toast.success('Matrícula deletada com sucesso');
      } catch (error) {
        toast.error('Erro ao deletar matrícula');
      }
    }

    ConfirmDialog({
      title: 'Apagar matrícula',
      onConfirm: deleteEnrolment,
      content: (
        <p>
          Tem certeza que deseja apagar a matrícula do(a) aluno(a)&nbsp;
          <strong>{enrolment.student.name} </strong>?
        </p>
      ),
    });
  }

  return (
    <Container>
      <HeadContent>
        <h1>Gerenciando matrículas</h1>
        <Link to="/enrolments/create">
          <Button icon={MdAdd}>CADASTRAR</Button>
        </Link>
      </HeadContent>
      {enrolments.length > 0 ? (
        <>
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
                  <td>
                    {enrolment.plan ? enrolment.plan.title : 'Plano removido'}
                  </td>
                  <td>{enrolment.formatted_start_date}</td>
                  <td>{enrolment.formatted_end_date}</td>
                  <td>
                    {enrolment.active ? (
                      <MdCheckCircle size={20} color="#42cb59" />
                    ) : (
                      <MdCheckCircle size={20} color="#dddddd" />
                    )}
                  </td>
                  <td>
                    <div className="options">
                      <EditButton
                        type="button"
                        onClick={() =>
                          history.push(`/enrolments/${enrolment.id}`)
                        }
                      >
                        editar
                      </EditButton>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDelete(enrolment)}
                      >
                        apagar
                      </DeleteButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <EmptyContainer>Nenhuma matrícula encontrada</EmptyContainer>
      )}
      <Loader visible={loading} />
    </Container>
  );
}
