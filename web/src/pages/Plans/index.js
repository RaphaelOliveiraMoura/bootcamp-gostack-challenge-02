import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceStrict, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { MdAdd } from 'react-icons/md';

import { Container, EditButton, DeleteButton } from './styles';

import Button from '~/components/Button';
import Table from '~/components/Table';
import HeadContent from '~/components/HeadContent';
import ConfirmDialog from '~/components/ConfirmDialog';
import Pagination from '~/components/Pagination';
import EmptyContainer from '~/components/EmptyContainer';
import Loader from '~/components/Loader';

import api from '~/services/api';
import history from '~/services/history';

import { formatPrice } from '~/util/format';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const loadPlans = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/plans', {
        params: { page: currentPage },
      });

      const data = response.data.map(plan => ({
        ...plan,
        formattedDuration: formatDistanceStrict(
          addMonths(new Date(), plan.duration),
          new Date(),
          { locale: pt, unit: 'month' }
        ),
        formattedPrice: formatPrice(plan.price),
      }));

      setPlans(data);
      setPages(Number(response.headers.total_pages));
    } catch (error) {
      toast.error('Erro ao carregar planos');
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    loadPlans();
  }, [loadPlans]);

  async function handleDelete(plan) {
    async function deletePlan() {
      try {
        await api.delete(`/plans/${plan.id}`);
        toast.success('Plano deletado com sucesso');

        if (currentPage === 1) {
          loadPlans();
        } else {
          setCurrentPage(1);
        }
      } catch (error) {
        toast.error('Erro ao deletar plano');
      }
    }

    ConfirmDialog({
      title: 'Apagar plano',
      onConfirm: deletePlan,
      content: (
        <p>
          Tem certeza que deseja apagar o plano <strong>{plan.title} </strong>?
        </p>
      ),
    });
  }

  return (
    <Container>
      <HeadContent>
        <h1>Gerenciando planos</h1>
        <Link to="/plans/create">
          <Button icon={MdAdd}>CADASTRAR</Button>
        </Link>
      </HeadContent>
      {plans.length > 0 ? (
        <>
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
                  <td>{plan.formattedDuration}</td>
                  <td>{plan.formattedPrice}</td>
                  <td>
                    <div className="options">
                      <EditButton
                        type="button"
                        onClick={() => history.push(`/plans/${plan.id}`)}
                      >
                        editar
                      </EditButton>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDelete(plan)}
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
        <EmptyContainer>Nenhum plano encontrado</EmptyContainer>
      )}
      <Loader visible={loading} />
    </Container>
  );
}
