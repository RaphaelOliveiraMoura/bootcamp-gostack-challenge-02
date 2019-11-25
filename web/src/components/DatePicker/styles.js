import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 1px solid #dddddd;
    padding: 10px 15px;
    color: #333;
    border-radius: 4px;
    width: 100%;
  }

  span {
    margin-bottom: 8px;
    color: #444444;
    font-size: 14px;
    font-weight: bold;
  }

  p {
    color: #ee4d64;
    font-size: 12px;
  }
`;
