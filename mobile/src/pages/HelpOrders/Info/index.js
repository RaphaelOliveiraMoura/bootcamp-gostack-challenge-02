import React from 'react';

import {
  Card,
  QuestionHeader,
  Title,
  QuestionTime,
  Question,
  Answer,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

export default function Info() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <QuestionHeader>
            <Title>PERGUNTA</Title>
            <QuestionTime>Hoje às 14h</QuestionTime>
          </QuestionHeader>
          <Question>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as marmitas
            e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
          </Question>
          <Title>RESPOSTA</Title>
          <Answer>
            Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro
            treina como um, come como dois.
          </Answer>
        </Card>
      </Container>
    </>
  );
}
