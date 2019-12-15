import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Container = styled.KeyboardAvoidingView.attrs(props => ({
  enabled: Platform.OS === 'ios' || !!props.enabled,
  behavior: 'padding',
  keyboardVerticalOffset: 140,
}))`
  flex: 1;
  background: #f5f5f5;
  padding: 20px;
`;

export default Container;
