import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Logo, LogoImage, LogoTitle } from './styles';

import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo onPress={handleLogOut}>
        <LogoImage source={logo} />
        <LogoTitle>GYMPOINT</LogoTitle>
      </Logo>
    </Container>
  );
}
