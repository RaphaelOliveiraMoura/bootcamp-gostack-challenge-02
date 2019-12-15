import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, QuestionInput, SubmitButton } from './styles';

import Header from '~/components/Header';

import api from '~/services/api';

export default function Create({ navigation }) {
  const student = useSelector(state => state.auth.student);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      if (question) {
        await api.post(`/students/${student.id}/help-orders`, {
          question,
        });
        Alert.alert('Sucesso', 'Pedido de auxílio enviado com sucesso');
        navigation.goBack();
      } else {
        Alert.alert('Preencha sua pergunta', 'O campo não pode estar vazio');
      }
    } catch (error) {
      Alert.alert(
        'Erro ao enviar pergunta',
        'Verifique sua conexão com a rede'
      );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <QuestionInput
          placeholder="Insira seu pedido de auxílio"
          multiline
          numberOfLines={15}
          textAlignVertical="top"
          value={question}
          onChangeText={setQuestion}
        />
        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </>
  );
}

Create.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
