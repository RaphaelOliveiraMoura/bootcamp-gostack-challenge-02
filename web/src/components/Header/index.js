import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Left, Option, Rigth } from './styles';

import logo from '~/assets/logo.svg';

import { singOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(singOut());
  }

  return (
    <Container>
      <Left>
        <img src={logo} alt="Gympoint" />
        <span>GYMPOINT</span>

        <ul>
          <Option active>ALUNOS</Option>
          <Option>PLANOS</Option>
          <Option>MATRÍCULAS</Option>
          <Option>PEDIDOS DE AUXÍLIO</Option>
        </ul>
      </Left>
      <Rigth>
        <span>Raphael de Oliveira</span>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </Rigth>
    </Container>
  );
}
