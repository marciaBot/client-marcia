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

function PedidosConfirmar() {
  return (
    <Container>
      <Navbar />
      <Main>
        <TopContent>
          <PageTitle>Pedidos a confirmar</PageTitle>
          <SearchBar />
        </TopContent>
        <BottomContent>
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
          <DashboardButton />
        </BottomContent>
      </Main>
    </Container>
  );
}

export default PedidosConfirmar;
