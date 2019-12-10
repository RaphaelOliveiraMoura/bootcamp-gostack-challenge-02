import React, { useState, useEffect, useCallback } from 'react';

import { toast } from 'react-toastify';
import { Container, AnswerButton } from './styles';

import Form from './Form';
import HeadContent from '~/components/HeadContent';
import Table from '~/components/Table';
import EmptyContainer from '~/components/EmptyContainer';
import Pagination from '~/components/Pagination';
import ConfirmDialog from '~/components/ConfirmDialog';
import Loader from '~/components/Loader';

import api from '~/services/api';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const loadHelpOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/help-orders', {
        params: { page: currentPage },
      });
      setHelpOrders(response.data);
      setPages(Number(response.headers.total_pages));
    } catch (error) {
      toast.error('Erro ao carregar pedidos de auxílio');
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    loadHelpOrders();
  }, [loadHelpOrders]);

  function handleOpenDialog(helpOrder) {
    ConfirmDialog({
      component: closeDialog => (
        <Form
          helpOrder={helpOrder}
          closeDialog={closeDialog}
          loadHelpOrders={
            currentPage === 1 ? () => loadHelpOrders() : () => setCurrentPage(1)
          }
        />
      ),
    });
  }

  return (
    <Container>
      <HeadContent>
        <h1>Pedidos de auxílio</h1>
      </HeadContent>
      {helpOrders.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {helpOrders.map(helpOrder => (
                <tr key={String(helpOrder.id)}>
                  <td>{helpOrder.student.name}</td>
                  <td>
                    <AnswerButton onClick={() => handleOpenDialog(helpOrder)}>
                      Responder
                    </AnswerButton>
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
        <EmptyContainer>Nenhum pedido de auxílio encontrado</EmptyContainer>
      )}
      <Loader visible={loading} />
    </Container>
  );
}
