import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: #444444;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    border: 1px solid #dddddd;
    padding: 10px 15px;
    color: #333;
    border-radius: 4px;
  }

  span {
    color: #ee4d64;
    font-size: 12px;
  }
`;
