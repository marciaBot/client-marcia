/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ModalConfirmados from "../Modal/PedidosConfirmados";
import ModalConfirmar from "../Modal/PedidosConfirmar";
import { Container, ButtonContent } from "./styles";

function DashboardButton(props) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal((prev) => !prev);
  };

  return (
    <Container onClick={abrirModal}>
      <ButtonContent>
        <span>{props.nome}</span>
        <div>
          <p>
            Valor: R$
            {props.valor}
          </p>
        </div>
      </ButtonContent>
      {props.aprovado ? (
        <ModalConfirmados
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
        />
      ) : (
        <ModalConfirmar
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
        />
      )}
    </Container>
  );
}

export default DashboardButton;
