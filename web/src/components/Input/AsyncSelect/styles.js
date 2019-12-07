import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: #444444;
    font-size: 14px;
    font-weight: bold;
  }

  & > div > div {
    margin-top: 8px;
    border: 1px solid #dddddd;
    color: #333;
    border-radius: 4px;
  }

  span {
    color: #ee4d64;
    font-size: 12px;
  }
`;
