import React, { useState, useEffect } from 'react';

import {
  Container,
  ContentHeader,
  AddButton,
  FilterInput,
  Table,
  EditButton,
  DeleteButton,
} from './styles';

import Pagination from '~/components/Pagination';

import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students', {
        params: {
          page: currentPage,
          per_page: 7,
        },
      });
      setStudents(response.data);
      setPages(Number(response.headers.total_pages));
    }

    loadStudents();
  }, [currentPage]);

  return (
    <Container>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div className="options">
          <AddButton>CADASTRAR</AddButton>
          <FilterInput name="filter" placeholder="Buscar aluno" />
        </div>
      </ContentHeader>
      <Table>
        <thead>
          {students.length > 0 && (
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
              <th />
            </tr>
          )}
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={String(student.id)}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
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
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}
