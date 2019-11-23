import React from 'react';

import { Container, Left, Option, Rigth } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
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
        <button type="button">sair do sistema</button>
      </Rigth>
    </Container>
  );
}
