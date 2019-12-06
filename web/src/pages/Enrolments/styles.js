import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1380px;
  padding: 0 8px;

  table {
    @media (max-width: 780px) {
      th:nth-child(3),
      td:nth-child(3) {
        display: none;
      }

      th:nth-child(4),
      td:nth-child(4) {
        display: none;
      }
    }

    /* @media (max-width: 450px) {
      th:nth-child(5),
      td:nth-child(5) {
        display: none;
      } */

    @media (max-width: 450px) {
      th:nth-child(3),
      td:nth-child(3) {
        display: table-cell;
      }

      th:nth-child(4),
      td:nth-child(4) {
        display: table-cell;
      }

      thead {
        display: none;
      }
      tr {
        display: flex;
        flex-direction: column;
        text-align: left;
        border-bottom: 1px solid #eee;

        td {
          border-bottom: none;
        }
      }
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
