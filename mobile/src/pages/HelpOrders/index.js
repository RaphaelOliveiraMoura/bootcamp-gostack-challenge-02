import React from 'react';
import PropTypes from 'prop-types';

import {
  AddButton,
  HelpOrdersList,
  HelpOrderContainer,
  HelpOrderHeader,
  Answered,
  HelpOrderTime,
  Question,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

const helpOrders = [
  {
    id: 1,
    question:
      'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as',
    time: 'Há 2 horas',
    answer: null,
  },
  {
    id: 2,
    question: 'Olá pessoal da arango logo de primeira, preparar as...',
    answer:
      'Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro treina como um, come como dois.',
    time: 'Há 2 horas',
  },
];

export default function HelpOrders({ navigation }) {
  return (
    <>
      <Header />
      <Container>
        <AddButton onPress={() => navigation.navigate('HelpOrdersCreate')}>
          Novo pedido de auxílio
        </AddButton>
        <HelpOrdersList
          data={helpOrders}
          keyExtractor={helpOrder => String(helpOrder.id)}
          renderItem={({ item }) => (
            <HelpOrderContainer
              onPress={() =>
                navigation.navigate('HelpOrdersInfo', { helpOrder: item })
              }
            >
              <HelpOrderHeader>
                {item.answer ? (
                  <Answered>Respondido</Answered>
                ) : (
                  <Answered disabled>Não respondido</Answered>
                )}
                <HelpOrderTime>{item.time}</HelpOrderTime>
              </HelpOrderHeader>
              <Question>{item.question}</Question>
            </HelpOrderContainer>
          )}
        />
      </Container>
    </>
  );
}

HelpOrders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
