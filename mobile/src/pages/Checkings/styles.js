import styled from 'styled-components/native';

import Button from '~/components/Button';

export const AddButton = styled(Button)``;

export const CheckingsList = styled.FlatList`
  margin-top: 33px;
`;

export const CheckingContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 15px 20px;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const CheckingId = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const CheckingTime = styled.Text`
  font-size: 14px;
  color: #666;
`;
