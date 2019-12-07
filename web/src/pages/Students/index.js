import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAdd } from 'react-icons/md';

import { Container, HeadContent, EditButton, DeleteButton } from './styles';

import ConfirmDialog from '~/components/ConfirmDialog';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';
import Input from '~/components/Input';
import EmptyContainer from '~/components/EmptyContainer';

import api from '~/services/api';
import history from '~/services/history';

export default function Students() {
  const [students, setStudents] = useState([]);

  const [filter, setFilter] = useState('');
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students', {
        params: {
          page: currentPage,
          per_page: 10,
          q: filter,
        },
      });
      setStudents(response.data);
      setPages(Number(response.headers.total_pages));
    }

    loadStudents();
  }, [currentPage, filter]);

  async function handleDelete(student) {
    async function deleteUser() {
      try {
        await api.delete(`/students/${student.id}`);
        setStudents(
          students.filter(currentStudent => currentStudent.id !== student.id)
        );
        toast.success('Aluno deletado com sucesso');
      } catch (error) {
        toast.error('Erro ao deletar aluno');
      }
    }

    ConfirmDialog({
      title: 'Apagar aluno',
      onConfirm: deleteUser,
      content: (
        <p>
          Tem certeza que deseja apagar o aluno <strong>{student.name} </strong>
          ?
        </p>
      ),
    });
  }

  return (
    <Container>
      <HeadContent>
        <h1>Gerenciando alunos</h1>
        <div className="options">
          <Link to="/students/create">
            <Button icon={MdAdd}>CADASTRAR</Button>
          </Link>
          <Input
            name="filter"
            placeholder="Buscar aluno"
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </HeadContent>
      {students.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>IDADE</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={String(student.id)}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>
                    <div className="options">
                      <EditButton
                        type="button"
                        onClick={() => history.push(`/students/${student.id}`)}
                      >
                        editar
                      </EditButton>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDelete(student)}
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
        <EmptyContainer>Nenhum aluno encontrado</EmptyContainer>
      )}
    </Container>
  );
}
