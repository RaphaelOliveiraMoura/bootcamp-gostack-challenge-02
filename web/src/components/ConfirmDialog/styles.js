import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  z-index: 15;
  padding: 16px;

  h1 {
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }

  p {
    margin-top: 6px;
    font-size: 16px;
    color: #666;
  }

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    button + button {
      margin-left: 16px;
    }
  }
`;
