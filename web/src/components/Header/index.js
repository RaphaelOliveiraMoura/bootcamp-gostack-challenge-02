import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Left, Link, Option, Rigth } from './styles';

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
          <Link to="/students">
            <Option active>ALUNOS</Option>
          </Link>
          <Link to="/plans">
            <Option>PLANOS</Option>
          </Link>
          <Link to="/enrolments">
            <Option>MATRÍCULAS</Option>
          </Link>
          <Link to="/help-orders">
            <Option>PEDIDOS DE AUXÍLIO</Option>
          </Link>
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
