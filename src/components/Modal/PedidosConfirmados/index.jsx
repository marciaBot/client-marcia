/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useSpring, animated } from "react-spring";
import Map from "../../Map/index";
import {
  Background,
  ModalWrapper,
  Header,
  Observacoes,
  Produtos,
  Informations,
  HeaderCard,
} from "./styles";

import CloseButton from "../../../assets/images/x.svg";

function Modal({
  mostrarModal, setMostrarModal, nome, valor, quantidade, telefone, itensData, obs,
}) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 100,
    },
    opacity: mostrarModal ? 1 : 0,
    transform: mostrarModal ? `translateZ(0%)` : `translateZ(100%)`,
  });

  return (
    <>
      { mostrarModal ? (
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
                      {' '}
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
                      {'  '}
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
                  <div>
                    {obs}
                  </div>
                </section>
              </Observacoes>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}
export default Modal;
