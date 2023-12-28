import React from "react";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";
import Footer from "../componentes/Footer";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";



const AppContainer = styled.div`
  width: 100vw;
  background-color: #383a59;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Perfil() {
  return (
    <AppContainer>
      <Titulo>Perfil</Titulo>
      <TrabalhandoNisso></TrabalhandoNisso>
      <Footer />
    </AppContainer>
  );
}

export default Perfil;
