/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
