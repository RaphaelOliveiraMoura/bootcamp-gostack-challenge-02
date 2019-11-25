import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.button`
  background: ${props => props.background || '#ee4d64'};
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 16px;
  transition: background 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => darken(0.06, props.background || '#ee4d64')};
  }
`;
