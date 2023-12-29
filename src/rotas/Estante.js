import React from "react";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";
import Footer from "../componentes/Footer";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Estante() {
  return (
    <AppContainer>
      <Titulo>MInha Estante</Titulo>
      <TrabalhandoNisso></TrabalhandoNisso>
    </AppContainer>
  );
}

export default Estante;
