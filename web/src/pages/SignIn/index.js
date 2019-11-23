import React from 'react';
import * as Yup from 'yup';

import {
  Container,
  FormCard,
  Logo,
  Title,
  Input,
  SubmitButton,
} from './styles';

import logo from '~/assets/logo.svg';

import api from '~/services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Insira um e-mail'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  async function handleSubmit({ email, password }) {
    const response = await api.post('/sessions', { email, password });
    console.log(response.data);
  }

  return (
    <Container>
      <FormCard schema={schema} onSubmit={handleSubmit}>
        <Logo src={logo} />
        <Title>GYMPOINT</Title>
        <Input
          type="text"
          name="email"
          label="SEU E-MAIL"
          placeholder="exemplo@email.com"
        />
        <Input
          type="password"
          name="password"
          label="SUA SENHA"
          placeholder="*********"
        />
        <SubmitButton>Entrar no sistema</SubmitButton>
      </FormCard>
    </Container>
  );
}
