import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector } from 'react-redux';

import {
  AddButton,
  CheckingsList,
  CheckingContainer,
  CheckingId,
  CheckingTime,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';
import api from '~/services/api';

export default function Checkings() {
  const [checkings, setCheckings] = useState([]);

  const student = useSelector(state => state.auth.student);

  const loadCheckings = useCallback(async () => {
    try {
      const response = await api.get(`/students/${student.id}/checkins`);
      const data = response.data.map(checking => ({
        ...checking,
        formattedId: `Check-in #${checking.id}`,
        formattedTime: formatRelative(
          parseISO(checking.createdAt),
          new Date(),
          { locale: pt }
        ),
      }));
      setCheckings(data);
    } catch (error) {
      Alert.alert(
        'Erro na listagem de checkings',
        'Verifique sua conexão com a internet'
      );
    }
  }, [student.id]);

  useEffect(() => {
    loadCheckings();
  }, [loadCheckings]);

  async function handleCheking() {
    try {
      if (checkings.length >= 7) {
        Alert.alert(
          'Limite excedido',
          'Você só pode realizar 7 checkings por semana'
        );
      } else {
        await api.post(`/students/${student.id}/checkins`);
        await loadCheckings();
      }
    } catch (error) {
      Alert.alert(
        'Erro na validação do seu checking',
        'Verifique sua conexão com a internet'
      );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <AddButton onPress={handleCheking}>Novo check-in</AddButton>
        <CheckingsList
          data={checkings}
          keyExtractor={checking => String(checking.id)}
          renderItem={({ item }) => (
            <CheckingContainer>
              <CheckingId>{item.formattedId}</CheckingId>
              <CheckingTime>{item.formattedTime}</CheckingTime>
            </CheckingContainer>
          )}
        />
      </Container>
    </>
  );
}
