import React from 'react';

import { Container, ContentHeader, AddButton, FilterInput } from './styles';

export default function Students() {
  return (
    <Container>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div className="options">
          <AddButton>CADASTRAR</AddButton>
          <FilterInput name="filter" placeholder="Buscar aluno" />
        </div>
      </ContentHeader>
    </Container>
  );
}
