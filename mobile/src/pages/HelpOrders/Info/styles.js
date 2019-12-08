import styled from 'styled-components/native';

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 20px;
`;

export const QuestionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
  margin-bottom: 16px;
`;

export const QuestionTime = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Question = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

export const Answer = styled.Text`
  font-size: 14px;
  color: #666666;
`;
