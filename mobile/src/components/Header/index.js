import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, LogoImage, LogoTitle, LogoutButton } from './styles';

import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo>
        <LogoImage source={logo} />
        <LogoTitle>GYMPOINT</LogoTitle>
      </Logo>
      <LogoutButton onPress={handleLogOut}>
        <Icon name="exit-to-app" size={20} color="#666" />
      </LogoutButton>
    </Container>
  );
}
