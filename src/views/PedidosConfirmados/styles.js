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
  height: 100%;
`;

export const PageTitle = styled.h1``;
