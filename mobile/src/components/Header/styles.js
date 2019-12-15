import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View.attrs()`
  border-style: solid;
  border-bottom-color: #dddddd;
  border-bottom-width: 1px;
  background: #fff;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 44px;
`;

export const Logo = styled(TouchableOpacity)`
  flex-direction: row;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 36px;
  height: 18px;
`;

export const LogoTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ee4e62;
  margin-left: 8px;
`;
