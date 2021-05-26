/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
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
    async function loadSale() {
      api.get("/venda").then((response) => {
        const salesData = response.data;
        const salesList = salesData.filter((sale) => sale.aprovado === true && sale.valorTotal !== null);
        setSales(salesList);
      });
    }
    loadSale();
  }, []);

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
                id={sale.id}
                clienteId={sale.clienteId}
              />
            ))}
        </BottomContent>
      </Main>
    </Container>
  );
}

export default PedidosConfirmados;
