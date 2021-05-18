import React, { useState } from "react";
import Modal from "../../components/Modal/PedidosConfirmados/index";
import {
  TopContent,
  Container,
  Main,
  PageTitle,
  BottomContent,
} from "./styles";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import DashboardButton from "../../components/DashboardButton";

function PedidosConfirmados() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal((prev) => !prev);
  };

  return (
    <Container>
      <Navbar />
      <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} />
      <Main>
        <TopContent>
          <PageTitle>Pedidos Confirmados</PageTitle>
          <SearchBar />
        </TopContent>
        <BottomContent>
          <DashboardButton onClick={abrirModal} />
          <DashboardButton />
        </BottomContent>
      </Main>
    </Container>
  );
}

export default PedidosConfirmados;
