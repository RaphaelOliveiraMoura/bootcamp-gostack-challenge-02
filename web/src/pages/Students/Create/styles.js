import styled from 'styled-components';
import { Form as FormWrapper } from '@rocketseat/unform';

import Button from '~/components/Button';
import InputWrapper from '~/components/Input';

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

export const Form = styled(FormWrapper)`
  background: #fff;
  margin-top: 24px;
  padding: 30px;
  border-radius: 4px;

  section {
    display: flex;

    div {
      margin-top: 20px;

      & + div {
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;

      div {
        & + div {
          margin-left: 0px;
        }
      }
    }
  }
`;

export const Input = styled(InputWrapper)`
  label {
    margin-bottom: 8px;
  }

  & + div {
    margin-top: 20px;
  }
`;

export const BackButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #ccc;
`;

export const SaveButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #ee4d64;
  margin-left: 16px;
`;
