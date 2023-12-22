import React from "react";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  width: 100vw;
  background-color: #383a59;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Estante() {
  return (
    <AppContainer>
      <Titulo>MInha Estante</Titulo>
      <TrabalhandoNisso></TrabalhandoNisso>
      <Footer />
    </AppContainer>
  );
}

export default Estante;
