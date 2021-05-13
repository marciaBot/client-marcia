/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalButton,
  Header,
  Observacoes,
  Produtos,
  Informations,
  AreaButton,
} from "./styles";

function Modal({ mostrarModal, setMostrarModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: mostrarModal ? 1 : 0,
    transform: mostrarModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const fecharModal = (event) => {
    if (modalRef.current === event.target) {
      setMostrarModal(false);
    }
  };

  const keyPress = useCallback((event) => {
    if (event.key === 'Escape' && mostrarModal) {
      setMostrarModal(false);
    }
  }, [setMostrarModal, mostrarModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      { mostrarModal ? (
        <Background ref={modalRef} onClick={fecharModal}>

          <animated.div style={animation}>
            <ModalWrapper mostrarModal={mostrarModal}>
              <Header>
                <Informations>
                  <h1>Lucas da Silva Freitas</h1>
                  <div>
                    <span>Quantidade: 2</span>
                    <span>Total: R$195</span>
                  </div>
                  <p>
                    <span>Telefone: (91)4002-8922</span>
                    <span>Forma de pagamento: Dinheiro</span>
                  </p>
                </Informations>
              </Header>
              <Produtos>
                <header>
                  <h1>Itens</h1>
                </header>
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
                  </ul>
                </section>
              </Produtos>
              <Observacoes>
                <header>
                  <h1>Observações</h1>
                </header>
                <textarea placeholder="Escreva aqui sua observação" />
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
