/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";
import ModalConfirmados from "../Modal/PedidosConfirmados";
import ModalConfirmar from "../Modal/PedidosConfirmar";
import { Container, ButtonContent } from "./styles";
import api from "../../services/api";

function DashboardButton(props) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [itens, setItens] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [telefone, setTelefone] = useState(0);
  const [obs, setObs] = useState("");

  const abrirModal = (id, clienteId) => {
    api.get(`venda/listar-itens-venda/${id}`).then((response) => {
      const itensData = response.data.itemList;
      const data = itensData.reduce((total, item) => {
        return total += item.quantidade;
      }, 0);
      setQuantidade(data);
      setItens(itensData);
    });

    api.get(`cliente/${clienteId}`).then((response) => {
      setTelefone(response.data.numero);
    });

    api.get(`venda/${id}`).then((response) => {
      setObs(response.data.obs);
    });
    setMostrarModal((prev) => !prev);
  };

  return (
    <Container>
      <ButtonContent onClick={() => abrirModal(props.id, props.clienteId)}>
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
          itensData={itens}
          nome={props.nome}
          valor={props.valor}
          id={props.id}
          quantidade={quantidade}
          telefone={telefone}
          obs={obs}
        />
      ) : (
        <ModalConfirmar
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          itensData={itens}
          nome={props.nome}
          valor={props.valor}
          id={props.id}
          quantidade={quantidade}
          telefone={telefone}
        />
      )}
    </Container>
  );
}

export default DashboardButton;
