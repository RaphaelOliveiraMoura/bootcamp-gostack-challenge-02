import styled from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1200px;
  padding: 0 8px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }

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

export const Table = styled.table`
  width: 100%;
  margin-top: 24px;
  background: #fff;
  padding: 30px;
  text-align: left;
  border-radius: 4px;

  thead {
    tr {
      th {
        font-size: 16px;
        font-weight: bold;
        color: #444;
      }
    }
  }

  tbody {
    tr {
      td {
        font-size: 16px;
        color: #666;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #eee;

        .options {
          text-align: center;
          display: flex;
          justify-content: space-evenly;
        }
      }

      &:last-child {
        td {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 660px) {
    thead {
      tr {
        th:nth-child(3) {
          display: none;
        }
      }
    }

    tbody {
      tr {
        td:nth-child(3) {
          display: none;
        }
      }
    }
  }

  @media (max-width: 620px) {
    thead {
      tr {
        th:nth-child(1) {
          display: none;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(1) {
          display: none;
        }
      }
    }
  }
`;

export const EditButton = styled.button`
  font-size: 15px;
  color: #4d85ee;
`;

export const DeleteButton = styled.button`
  font-size: 15px;
  color: #de3b3b;
`;

export const EmptyContainer = styled.div`
  background: #fff;
  margin-top: 24px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #ddd
  border-radius: 4px;
`;
