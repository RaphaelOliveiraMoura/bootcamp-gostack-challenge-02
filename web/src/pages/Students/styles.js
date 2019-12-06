import styled from 'styled-components';

import Button from '~/components/Button';
import HeadContentWrapper from '~/components/HeadContent';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1200px;
  padding: 0 8px;

  input {
    margin-left: 16px;
    width: 240px;
  }

  table {
    th:nth-child(2),
    td:nth-child(2) {
      text-align: left;
    }

    @media (max-width: 660px) {
      th:nth-child(3),
      td:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 620px) {
      th:nth-child(1),
      td:nth-child(1) {
        display: none;
      }
    }
  }
`;

export const HeadContent = styled(HeadContentWrapper)`
  .options {
    display: flex;
    align-items: center;
  }

  @media (max-width: 620px) {
    flex-direction: column;

    .options {
      margin-top: 16px;
      flex-direction: column;

      input {
        margin-top: 8px;
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
