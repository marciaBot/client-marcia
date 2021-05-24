/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 400px;
  height: 90px;
  align-items: center;
  color: #ffffff;
  background-color: #e0913e;
  padding: 15px;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
  span {
    font-size: 26px;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 15px #A9A9A9;
    transform: translateY(-7px);
  }
`;
