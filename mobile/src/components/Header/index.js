import React from 'react';

import { Container, Logo, LogoTitle } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <LogoTitle>GYMPOINT</LogoTitle>
    </Container>
  );
}
