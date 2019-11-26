import styled from 'styled-components';

import Button from '~/components/Button';
import TableWrapper from '~/components/Table';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 900px;
  padding: 0 8px;
`;

export const Table = styled(TableWrapper)`
  text-align: center;

  th:nth-child(1),
  td:nth-child(1) {
    text-align: left;
  }

  @media (max-width: 600px) {
    th:nth-child(2),
    td:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 435px) {
    th:nth-child(3),
    td:nth-child(3) {
      display: none;
    }
  }
`;

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
