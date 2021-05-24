/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-alert */
import React, { useState, useEffect, setTime } from "react";
import {
  TopContent,
  Container,
  Main,
  PageTitle,
  BottomContent,
  Input,
} from "./styles";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import DashboardButton from "../../components/DashboardButton";

function PedidosConfirmados() {
  const [sales, setSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    api.get("/venda").then((response) => {
      const salesData = response.data;
      const salesList = salesData.filter((sale) => sale.aprovado === true);
      setSales(salesList);
      clearInterval(interval);
    });
  }, [sales]);
  return (
    <Container>
      <Navbar />
      <Main>
        <TopContent>
          <PageTitle>Pedidos Confirmados</PageTitle>
          <Input
            placeholder="Pesquisar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </TopContent>
        <BottomContent>
          {sales
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              }
              if (
                value.nomeCliente
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((sale) => (
              <DashboardButton
                nome={sale.nomeCliente}
                valor={sale.valorTotal}
                key={sale.id}
                aprovado={sale.aprovado}
              />
            ))}
        </BottomContent>
      </Main>
    </Container>
  );
}

export default PedidosConfirmados;
