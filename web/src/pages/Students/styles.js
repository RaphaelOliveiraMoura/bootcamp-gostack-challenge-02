import styled from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.div`
  margin: 30px 120px;
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
`;

export const AddButton = styled(Button)`
  height: 36px;
  font-size: 14px;
`;

export const FilterInput = styled(Input)`
  margin-left: 16px;
  width: 240px;
`;
