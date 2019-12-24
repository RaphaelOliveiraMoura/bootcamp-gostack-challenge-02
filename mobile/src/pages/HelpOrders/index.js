import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AddButton,
  HelpOrdersList,
  HelpOrderContainer,
  HelpOrderHeader,
  HelpOrderHeaderIcon,
  Answered,
  HelpOrderTime,
  Question,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';
import EmptyContainer from '~/components/EmptyContainer';

import api from '~/services/api';

export default function HelpOrders({ navigation }) {
  const student = useSelector(state => state.auth.student);

  const [helpOrders, setHelpOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadHelpOrders = useCallback(async () => {
    try {
      setRefreshing(true);
      const response = await api.get(`/students/${student.id}/help-orders`);
      const data = response.data.map(helpOrder => ({
        ...helpOrder,
        time: formatRelative(parseISO(helpOrder.createdAt), new Date(), {
          locale: pt,
        }),
      }));

      setHelpOrders(data);
    } catch (error) {
      Alert.alert(
        'Erro ao listar pedidos de auxílio',
        'Verifique sua conexão com a rede'
      );
    } finally {
      setRefreshing(false);
    }
  }, [student.id]);

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      loadHelpOrders();
    });
  }, [loadHelpOrders, navigation]);

  useEffect(() => {
    loadHelpOrders();
  }, [loadHelpOrders]);

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
                  <HelpOrderHeaderIcon>
                    <Icon name="check-circle" size={20} color="#42cb59" />
                    <Answered>Respondido</Answered>
                  </HelpOrderHeaderIcon>
                ) : (
                  <HelpOrderHeaderIcon>
                    <Icon name="check-circle" size={20} color="#999" />
                    <Answered disabled>Não respondido</Answered>
                  </HelpOrderHeaderIcon>
                )}
                <HelpOrderTime>{item.time}</HelpOrderTime>
              </HelpOrderHeader>
              <Question>{item.question}</Question>
            </HelpOrderContainer>
          )}
          refreshing={refreshing}
          onRefresh={loadHelpOrders}
          ListEmptyComponent={
            <EmptyContainer>
              Nenhum pedido de auxílio criado até o momento
            </EmptyContainer>
          }
        />
      </Container>
    </>
  );
}

HelpOrders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    addListener: PropTypes.func,
  }).isRequired,
};
