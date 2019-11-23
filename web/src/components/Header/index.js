import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Left, Option, Rigth } from './styles';

import logo from '~/assets/logo.svg';

import { singOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const username = useSelector(state => state.user.profile.name);

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
        <span>{username}</span>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </Rigth>
    </Container>
  );
}
