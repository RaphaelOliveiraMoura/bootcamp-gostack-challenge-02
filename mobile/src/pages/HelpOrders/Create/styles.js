import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
  keyboardVerticalOffset: 140,
})`
  background: #f5f5f5;
  padding: 20px;
`;

export const QuestionInput = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
