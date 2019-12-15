import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Logo, LogoTitle, IdInput, SubmitButton } from './styles';
import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(signInRequest(id));
  }

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
        value={id}
        onChangeText={setId}
      />
      <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
    </Container>
  );
}
