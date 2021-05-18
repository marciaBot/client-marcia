import React from "react";
import {
  Container, TitleText, NavButton,
} from "./styles";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <TitleText>Márcia</TitleText>
      <NavButton href="/">
        <h1>Pedidos a Confirmar</h1>
      </NavButton>
      <NavButton href="/pedidos-confirmados">
        <h1>Pedidos Confirmados</h1>
      </NavButton>
    </Container>
  );
}

export default Navbar;
