import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 700px;
  padding: 0 8px;
`;

export const AnswerButton = styled(Button).attrs({
  background: '#fff',
})`
  color: #4d85ee;
  font-weight: normal;
  font-size: 15px;
  margin-left: auto;
`;
