import styled from 'styled-components';

import Button from '~/components/Button';
import TableWrapper from '~/components/Table';

export const Container = styled.div`
  margin: 30px 20px;
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
