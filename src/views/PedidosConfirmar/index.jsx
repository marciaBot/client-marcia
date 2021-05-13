import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";

import "./styles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function PedidosConfirmar() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Button onClick={abrirModal}>Clica aqui</Button>
        <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} />
      </Container>
    </>
  );
}

export default PedidosConfirmar;
