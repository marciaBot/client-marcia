import React from "react";
import { Container, ButtonContent } from "./styles";

function DashboardButton() {
  return (
    <Container>
      <ButtonContent>
        <span>Lucas da Silva Freitas</span>
        <div>
          <p>Quantidade: 2</p>
          <p>Valor: R$ 195,00</p>
        </div>
      </ButtonContent>
    </Container>
  );
}

export default DashboardButton;
