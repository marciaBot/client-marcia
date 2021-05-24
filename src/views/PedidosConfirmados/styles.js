/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 110%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const PageTitle = styled.h1``;

export const Input = styled.input`
  width: 450px;
  height: 45px;
  padding: 15px;
  outline: none !important;
  border: 1px solid #22333b;
  border-radius: 10px;
  transition: ease-in 0.1s;

  &::-webkit-input-placeholder {
    justify-items: center;
    font-size: 20px;
    text-align: center;
  }

  &:focus {
    border: 3px solid #22333b;
  }
`;
