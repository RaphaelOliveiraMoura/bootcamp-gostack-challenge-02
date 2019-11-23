import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import InputWrapper from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ee4d64;
`;

export const FormCard = styled(Form)`
  background: #fff;
  padding: 50px 30px;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #ee4d64;
`;

export const Input = styled(InputWrapper)`
  margin-top: 20px;

  input {
    margin-top: 8px;
  }

  &:first-child {
    margin-top: 30px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  padding: 12px 16px;
  width: 100%;
`;
