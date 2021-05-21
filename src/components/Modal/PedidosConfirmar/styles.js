import styled, { css } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 15px;
  z-index: 10;
  border-radius: 10px;
  justify-content: center;
`;

export const Header = styled.header`
  background: #22333B;
  width: 100%;
  height: 2000px;
  height: 180px;
  grid-column: 1/3;
  border-radius: 10px/ 10px 10px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Informations = styled.div`
  color: #ffffff;
  padding: 30px;
  display:flex;
  flex-direction: column;
  font-family:"Raleway",sans-serif;

  h1{
    color: #ffffff;
    font-size: 30px;
    font-weight: 600;
    font-family: "Raleway",sans-serif;
  }
  span{
    font-size: 18px;
    font-weight: 400;
  }
  div{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }
   p{
    display: flex;
    flex-direction: column;
   }

   p span {
     margin-top: 5px;
   }
   b{
     font-weight: 700;
   }
   label {
    font-weight: 700;
   }
`;

export const Produtos = styled.section`
  width: 400px;
  height: 300px;
  background: #7D7D7D;
  border-radius: 10px;
  color: #ffffff;
  grid-column: 1/2;
  margin-left: 10px;
  display:flex;
  flex-direction: column;
  font-family:"Raleway",sans-serif;
  margin-left: 60px;
  
  header{
    height: 50px;
    width: 400px;
    background: #22333B;
    border-radius: 10px / 10px 10px 0px 0px ;
    padding-left: 30px;
  }

  header h1 {
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
  }
  
  ul{
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    list-style: none;
    height: 200px;
    padding-right: 10px;
    padding-left: 10px;
    overflow: hidden;
    overflow-y: scroll;
  }
  ul li {
    padding-top: 10px;
    padding-left: 10px;
    background: #E0913E;
    height: 80px;
    border-radius: 8px;
    position: relative;
    font-size: 17px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 8px 15px #818181;
      transition-duration: 0.2s;
      transform: translateY(-5px);
    }
  }

  ul li section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 20px;
  }
`;

export const Observacoes = styled.section`
  width: 400px;
  height: 300px;
  grid-column: 2/3;
  margin-right: 10px;
  color: #ffffff;
  background: #7D7D7D;
  display:flex;
  flex-direction: column;
  font-family:"Raleway",sans-serif;
  border-radius: 10px;
  margin-left: 30px;

  
  header{
    height: 60px;
    background: #22333B;
    border-radius: 10px / 10px 10px 0px 0px ;;
    padding-left: 30px;
  }

  header h1 {
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
  }
  
  textarea{
    height: 100%;
    background: #ffffff;
    border: 0;
    border-radius: 3px;
    margin: 10px;
    font-family:"Raleway",sans-serif;
    resize: none;
  }

  textarea:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const AreaButton = styled.footer`
  grid-column: 1/3;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ModalButton = styled.div`
  width: 250px;
  height: 60px;
  border-radius: 8px;
  border-right: 20px;
  border-left: 20px;
  border: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  font-family: "Raleway",sans-serif;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 15px #A9A9A9;
    transition-duration: 0.2s;
    transform: translateY(-7px);
  }

  ${(props) => props.confirmation && css`
      background: #0B7A75;

      &:hover{
        background: #178D88;
      }
    `}
  ${
  (props) => props.denny && css`
      background: #A40E4C;

      &:hover{
        background: #B41959;
      }
    `}
`;
