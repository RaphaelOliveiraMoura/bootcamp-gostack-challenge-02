import styled from 'styled-components';

import Button from '~/components/Button';
import TableWrapper from '~/components/Table';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1380px;
  padding: 0 8px;
`;

export const Table = styled(TableWrapper)``;

export const EditButton = styled(Button).attrs({
  background: '#fff',
})`
  font-size: 15px;
  color: #4d85ee;
  font-weight: normal;
`;

export const DeleteButton = styled(Button).attrs({
  background: '#fff',
})`
  font-size: 15px;
  color: #de3b3b;
  font-weight: normal;
`;

export const EmptyContainer = styled.div`
  background: #fff;
  margin-top: 24px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #ddd;
  border-radius: 4px;
`;
