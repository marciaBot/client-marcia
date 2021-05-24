/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Map from "../../Map/index";
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

import CloseButton from "../../../assets/images/x.svg";

function Modal({ mostrarModal, setMostrarModal }) {
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
      {mostrarModal ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper onClick={() => setMostrarModal((prev) => !prev)}>
              <Header>
                <Informations>
                  <h1>Lucas da Silva Freitas</h1>
                  <div>
                    <span>
                      Quantidade:
                      {' '}
                      <b>2</b>
                    </span>
                    <span>
                      Total:
                      {' '}
                      <b>R$ 195,00</b>
                    </span>
                  </div>
                  <p>
                    <span>
                      Telefone:
                      {"  "}
                      <b>(91) 4002-8922</b>
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
                    <li>
                      <strong>Item: </strong>
                      <span>XXXXXXXXXX</span>
                      <section>
                        <div>
                          <strong>Quantidade: </strong>
                          <span>2</span>
                        </div>
                        <div>
                          <strong>Valor: </strong>
                          <span>R$200,00</span>
                        </div>
                      </section>
                    </li>
                    <li>
                      <strong>Item: </strong>
                      <span>XXXXXXXXXX</span>
                      <section>
                        <div>
                          <strong>Quantidade: </strong>
                          <span>2</span>
                        </div>
                        <div>
                          <strong>Valor: </strong>
                          <span>R$200,00</span>
                        </div>
                      </section>
                    </li>
                    <li>
                      <strong>Item: </strong>
                      <span>XXXXXXXXXX</span>
                      <section>
                        <div>
                          <strong>Quantidade: </strong>
                          <span>2</span>
                        </div>
                        <div>
                          <strong>Valor: </strong>
                          <span>R$200,00</span>
                        </div>
                      </section>
                    </li>
                    <li>
                      <strong>Item: </strong>
                      <span>XXXXXXXXXX</span>
                      <section>
                        <div>
                          <strong>Quantidade: </strong>
                          <span>2</span>
                        </div>
                        <div>
                          <strong>Valor: </strong>
                          <span>R$200,00</span>
                        </div>
                      </section>
                    </li>
                  </ul>
                </section>
              </Produtos>
              <Observacoes>
                <HeaderCard>
                  <h1>Observações</h1>
                </HeaderCard>
                <section>
                  <textarea placeholder="Escreva aqui sua observação ..." />
                </section>
              </Observacoes>
              <AreaButton>
                <ModalButton denny>Negar Pedido</ModalButton>
                <ModalButton confirmation>Aceitar Pedido</ModalButton>
              </AreaButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}
export default Modal;
