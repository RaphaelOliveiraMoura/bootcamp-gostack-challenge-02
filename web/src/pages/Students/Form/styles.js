import styled from 'styled-components';

import Button from '~/components/Button';
import InputWrapper from '~/components/Input';
import DatePickerWrapper from '~/components/DatePicker';

export const Container = styled.div`
  margin: 30px auto;
  padding: 0 16px;
  max-width: 900px;
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

export const Card = styled.div`
  background: #fff;
  margin-top: 24px;
  padding: 30px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 20px;
`;

export const Input = styled(InputWrapper)`
  &:nth-child(1) {
    grid-column: 1 / 4;
  }

  &:nth-child(2) {
    grid-column: 1 / 4;
  }

  @media (max-width: 820px) {
    & {
      &:nth-child(4) {
        grid-column: 1 / 4;
      }
      &:nth-child(5) {
        grid-column: 1 / 4;
      }
    }
  }
`;

export const DatePicker = styled(DatePickerWrapper)`
  @media (max-width: 820px) {
    & {
      grid-column: 1 / 4;
    }
  }
`;

export const BackButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const SaveButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #ee4d64;
  margin-left: 16px;
`;
