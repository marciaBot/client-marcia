import React from "react";
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
  return (
    <Container>
      <Navbar />
      <Main>
        <TopContent>
          <PageTitle>Pedidos Confirmados</PageTitle>
          <SearchBar />
        </TopContent>
        <BottomContent>
          <DashboardButton />
          <DashboardButton />
        </BottomContent>
      </Main>
    </Container>
  );
}

export default PedidosConfirmados;
