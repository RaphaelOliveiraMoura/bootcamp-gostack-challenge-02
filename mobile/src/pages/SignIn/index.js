import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { Container, Logo, LogoTitle, IdInput, SubmitButton } from './styles';
import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    if (id) {
      dispatch(signInRequest(id));
    } else {
      Alert.alert('ID obrigatório', 'Preencha o campo com um ID válido');
    }
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
      <SubmitButton onPress={handleSubmit} loading={loading}>
        Entrar no sistema
      </SubmitButton>
    </Container>
  );
}
