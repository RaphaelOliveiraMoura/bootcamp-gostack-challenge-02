import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.button`
  background: #ee4d64;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  width: 100%;
  transition: background 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }
`;
