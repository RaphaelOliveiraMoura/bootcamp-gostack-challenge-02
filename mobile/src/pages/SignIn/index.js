import React from 'react';

import { Container, Logo, LogoTitle, IdInput, SubmitButton } from './styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Logo source={logo} />
      <LogoTitle>GYMPOINT</LogoTitle>
      <IdInput
        placeholder="Informe seu ID de cadastro"
        returnKeyType="send"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <SubmitButton>Entrar no sistema</SubmitButton>
    </Container>
  );
}
