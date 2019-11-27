import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.8;
    z-index: 10;
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  z-index: 15;
  min-width: 420px;
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
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 8px 0px;
  margin-top: 16px;

  button + button {
    margin-left: 8px;
  }
`;
