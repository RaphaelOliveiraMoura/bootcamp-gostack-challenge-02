import React from 'react';
import { useDispatch } from 'react-redux';
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

import { singInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Insira um e-mail'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(singInRequest(email, password));
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
