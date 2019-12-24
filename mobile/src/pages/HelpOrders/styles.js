import styled from 'styled-components/native';

import Button from '~/components/Button';

export const AddButton = styled(Button)``;

export const HelpOrdersList = styled.FlatList`
  margin-top: 33px;
`;

export const HelpOrderContainer = styled.TouchableOpacity`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin-bottom: 10px;
`;

export const HelpOrderHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HelpOrderHeaderIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Answered = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.disabled ? '#999999' : '#42CB59')};
  margin-left: 8px;
`;

export const HelpOrderTime = styled.Text`
  font-size: 11px;
  color: #666666;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 16px;
  font-size: 14px;
  color: #666666;
`;
