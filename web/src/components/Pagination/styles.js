import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 8px;
  font-size: 12px;
  color: ${props => (props.active ? '#444' : '#666')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  transition: color 0.3s;

  &:hover {
    color: ${props => (props.active ? '#444' : darken(0.2, '#666'))};
  }
`;
