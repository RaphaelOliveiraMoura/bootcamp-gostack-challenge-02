import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  QuestionHeader,
  Title,
  QuestionTime,
  Question,
  Answer,
  NotAnswer,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

export default function Info({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  return (
    <>
      <Header />
      <Container>
        <Card>
          <QuestionHeader>
            <Title>PERGUNTA</Title>
            <QuestionTime>{helpOrder.time}</QuestionTime>
          </QuestionHeader>
          <Question>{helpOrder.question}</Question>

          {helpOrder.answer ? (
            <>
              <Title>RESPOSTA</Title>
              <Answer>{helpOrder.answer}</Answer>
            </>
          ) : (
            <NotAnswer>SEM RESPOSTA</NotAnswer>
          )}
        </Card>
      </Container>
    </>
  );
}

Info.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
