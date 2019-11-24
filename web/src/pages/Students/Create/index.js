import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ContentHeader,
  Form,
  Input,
  BackButton,
  SaveButton,
} from './styles';

export default function Create() {
  return (
    <Container>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div className="options">
          <Link to="/students">
            <BackButton type="button">VOLTAR</BackButton>
          </Link>
          <SaveButton type="button">SALVAR</SaveButton>
        </div>
      </ContentHeader>
      <Form>
        <Input name="name" placeholder="John Doe" label="NOME COMPLETO" />
        <Input
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          label="ENDEREÇO DE E-MAIL"
        />
        <section>
          <Input name="age" type="number" label="IDADE" />
          <Input name="weight" type="number" label="PESO (em kg)" />
          <Input name="heigth" type="number" label="ALTURA" />
        </section>
      </Form>
    </Container>
  );
}
