import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import {
  Container,
  ContentHeader,
  Form,
  Input,
  BackButton,
  SaveButton,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Insira um e-mail'),
  birth: Yup.date().required('A idade é obrigatória'),
  weigth: Yup.number().required('O peso é obrigatório'),
  height: Yup.number().required('A altura é obrigatória'),
});

export default function Create() {
  const initialData = {
    weigth: 0,
    height: 0,
  };

  async function handleSubmit({ name, email, birth, weigth, height }) {
    await api.post('/students', { name, email, birth, weigth, height });
    history.push('/students');
  }

  return (
    <Container>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div className="options">
          <Link to="/students">
            <BackButton type="button">VOLTAR</BackButton>
          </Link>
          <SaveButton type="button" onClick={handleSubmit}>
            SALVAR
          </SaveButton>
        </div>
      </ContentHeader>
      <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
        <Input name="name" placeholder="John Doe" label="NOME COMPLETO" />
        <Input
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          label="ENDEREÇO DE E-MAIL"
        />
        <section>
          <Input name="birth" type="date" label="DATA NASCIMENTO" />
          <Input name="weigth" type="number" label="PESO (em kg)" />
          <Input name="height" type="number" step="0.01" label="ALTURA" />
        </section>
        <SaveButton style={{ display: 'none' }}>SALVAR</SaveButton>
      </Form>
    </Container>
  );
}
