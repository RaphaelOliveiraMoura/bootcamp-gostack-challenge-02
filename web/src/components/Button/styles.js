import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.button`
  background: ${props => props.background || '#ee4d64'};
  color: ${props => props.color || '#fff'};
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
  border-radius: 4px;
  padding: 10px 16px;
  transition: background 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background: ${props => darken(0.06, props.background || '#ee4d64')};
  }
`;
