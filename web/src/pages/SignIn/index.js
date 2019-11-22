import React from 'react';

import { Container, Card, Logo, Title, Input, SubmitButton } from './styles';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <Container>
      <Card>
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
      </Card>
    </Container>
  );
}
