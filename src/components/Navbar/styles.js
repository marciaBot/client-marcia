/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #22333b;

  img {
    width: 100px;
    height: 100px;
    align-self: center;
    margin-top: 50px;
  }
`;

export const TitleText = styled.span`
  align-self: center;
  margin-top: 15px;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`;

export const NavButton = styled.a`
  outline: none;
  border: none;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  transition: all 0.3s ease 0s;
  background-color: #22333b;
  color: #ffffff;
  margin-bottom: 5px;

  &:hover {
    border-left: 8px solid #e0913e;
    border-right: 8px solid #e0913e;
    color: #e0913e;
  }
`;
