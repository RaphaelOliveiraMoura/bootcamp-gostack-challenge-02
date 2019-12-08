import React from 'react';

import {
  AddButton,
  CheckingsList,
  CheckingContainer,
  CheckingId,
  CheckingTime,
} from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

const checkings = [
  { id: 1, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 2, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 3, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 4, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 5, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 6, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 7, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 8, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 9, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 10, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 11, formattedId: 'Check-in #7', time: 'Há 2 horas' },
  { id: 12, formattedId: 'Check-in #7', time: 'Há 2 horas' },
];

export default function Checkings() {
  return (
    <>
      <Header />
      <Container>
        <AddButton>Novo check-in</AddButton>
        <CheckingsList
          data={checkings}
          keyExtractor={checking => String(checking.id)}
          renderItem={({ item }) => (
            <CheckingContainer>
              <CheckingId>{item.formattedId}</CheckingId>
              <CheckingTime>{item.time}</CheckingTime>
            </CheckingContainer>
          )}
        />
      </Container>
    </>
  );
}
