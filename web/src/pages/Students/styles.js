import styled from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';
import TableWrapper from '~/components/Table';
import TitleContainer from '~/components/TitleContainer';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1200px;
  padding: 0 8px;
`;

export const ContentHeader = styled(TitleContainer)`
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

export const AddButton = styled(Button)`
  height: 36px;
  font-size: 14px;
`;

export const FilterInput = styled(Input)`
  margin-left: 16px;
  width: 240px;
`;

export const Table = styled(TableWrapper)`
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
