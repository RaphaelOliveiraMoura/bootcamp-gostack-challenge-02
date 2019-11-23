import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background: #fff;
  padding: 20px 30px;
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    & {
      flex-direction: column;
      height: auto;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
    cursor: pointer;
  }

  span {
    font-size: 15px;
    font-weight: bold;
    color: #ee4d64;
    padding-left: 12px;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding-left: 30px;
    border-left: 1px solid #ddd;
  }

  @media (max-width: 825px) {
    span {
      display: none;
    }
  }

  @media (max-width: 725px) {
    img {
      display: none;
    }

    ul {
      margin-left: 0;
      padding-left: 0;
      border-left: 0;
    }
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
`;

export const Option = styled.li`
  color: ${props => (props.active ? '#444' : '#999999')};
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.6s;
  text-align: center;

  & + li {
    margin-left: 20px;
  }

  &:hover {
    color: ${props => (props.active ? '#444' : darken(0.3, '#999999'))};
  }

  @media (max-width: 600px) {
    & + li {
      margin-left: 0px;
      margin-top: 6px;
    }
  }
`;

export const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;

  span {
    color: #666;
    font-weight: bold;
    text-align: end;
  }

  button {
    color: #de3b3b;
  }

  @media (max-width: 600px) {
    & {
      margin-top: 12px;
      align-items: center;

      span {
        text-align: center;
      }
    }
  }
`;
