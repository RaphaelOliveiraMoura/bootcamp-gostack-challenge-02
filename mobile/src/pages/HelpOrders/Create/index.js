import React from 'react';

import { QuestionInput, SubmitButton } from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

export default function Create() {
  return (
    <>
      <Header />
      <Container>
        <QuestionInput
          placeholder="Insira seu pedido de auxílio"
          multiline
          numberOfLines={15}
          textAlignVertical="top"
        />
        <SubmitButton>Enviar pedido</SubmitButton>
      </Container>
    </>
  );
}
