/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useRef,
} from "react";
import { useSpring, animated } from "react-spring";
import Map from "../../Map/index";
import CloseButton from "../../../assets/images/x.svg";
import {
  Background,
  ModalWrapper,
  ModalButton,
  Header,
  Observacoes,
  Produtos,
  Informations,
  AreaButton,
  HeaderCard,

} from "./styles";
import api from "../../../services/api";

function Modal({
  mostrarModal, setMostrarModal, nome, valor, id, quantidade, telefone, itensData,
}) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 100,
    },
    opacity: mostrarModal ? 1 : 0,
    transform: mostrarModal ? `translateZ(0%)` : `translateZ(100%)`,
  });

  async function deletarPedido() {
    try {
      const response = await api.delete(`/venda/${id}`);
      console.log(response);
      setMostrarModal(false);
    } catch (err) {
      alert("Erro ao deletar pedido.");
    }
  }

  async function aprovarPedido() {
    try {
      const texto = document.getElementById("observacao").value;
      const data = {
        obs: texto,
        aprovado: true,
      };
      await api.put(`/venda/${id}`, data);
      setMostrarModal(false);
    } catch (err) {
      alert("Erro ao aprovar pedido");
    }
  }

  return (
    <>
      {mostrarModal ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <Header>
                <Informations>
                  <h1>{nome}</h1>
                  <div>
                    <span>
                      Quantidade:
                      {' '}
                      <b>{quantidade}</b>
                    </span>
                    <span>
                      Total:
                      {" "}
                      <b>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(valor)}
                      </b>
                    </span>
                  </div>
                  <p>
                    <span>
                      Telefone:
                      {"  "}
                      <b>{telefone}</b>
                    </span>
                  </p>
                </Informations>
                <section>
                  <Map />
                  <img
                    src={CloseButton}
                    onClick={() => setMostrarModal(false)}
                  />
                </section>
              </Header>
              <Produtos>
                <HeaderCard>
                  <h1>Itens</h1>
                </HeaderCard>
                <section>
                  <ul>
                    {itensData.map((item) => (
                      <li key={item.id}>
                        <strong>Item: </strong>
                        <span>{item.produto}</span>
                        <section>
                          <div>
                            <strong>Quantidade: </strong>
                            <span>{item.quantidade}</span>
                          </div>
                          <div>
                            <strong>Valor: </strong>
                            <span>
                              {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(item.valor)}
                            </span>
                          </div>
                        </section>
                      </li>
                    ))}
                  </ul>
                </section>
              </Produtos>
              <Observacoes>
                <HeaderCard>
                  <h1>Observações</h1>
                </HeaderCard>
                <section>
                  <textarea id="observacao" placeholder="Escreva aqui sua observação ..." />
                </section>
              </Observacoes>
              <AreaButton>
                <ModalButton onClick={() => deletarPedido()} denny>
                  Negar Pedido
                </ModalButton>
                <ModalButton onClick={() => aprovarPedido()} confirmation>
                  Aceitar Pedido
                </ModalButton>
              </AreaButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}
export default Modal;
