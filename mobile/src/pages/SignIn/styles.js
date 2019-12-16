import styled from 'styled-components/native';

import Button from '~/components/Button';
import ContainerWrapper from '~/components/Container';

export const Container = styled(ContainerWrapper)`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 25px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 120px;
`;

export const LogoTitle = styled.Text`
  color: #ee4d64;
  font-size: 24px;
  font-weight: bold;
`;

export const IdInput = styled.TextInput`
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
  padding: 13px 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
