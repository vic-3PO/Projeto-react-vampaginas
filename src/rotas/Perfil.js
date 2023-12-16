import React from "react";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";

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
      <Titulo>Perfil</Titulo>
      <TrabalhandoNisso></TrabalhandoNisso>
    </AppContainer>
  );
}

export default Estante;
