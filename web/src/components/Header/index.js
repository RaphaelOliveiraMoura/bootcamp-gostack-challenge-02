import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Left, Link, Rigth } from './styles';

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
            <li>ALUNOS</li>
          </Link>
          <Link to="/plans">
            <li>PLANOS</li>
          </Link>
          <Link to="/enrolments">
            <li>MATRÍCULAS</li>
          </Link>
          <Link to="/help-orders">
            <li>PEDIDOS DE AUXÍLIO</li>
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
