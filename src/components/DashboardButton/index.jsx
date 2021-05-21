import React, { useState } from "react";
import Modal from "../Modal/PedidosConfirmados/index";
import { Container, ButtonContent } from "./styles";

function DashboardButton() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal((prev) => !prev);
  };
  return (
    <Container onClick={abrirModal}>
      <ButtonContent>
        <span>Lucas da Silva Freitas</span>
        <div>
          <p>Quantidade: 2</p>
          <p>Valor: R$ 195,00</p>
        </div>
      </ButtonContent>
      <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} />
    </Container>
  );
}

export default DashboardButton;
