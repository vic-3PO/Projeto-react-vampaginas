import React from "react";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";
import LoginPage from "../componentes/login";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Perfil() {
  return (
    <AppContainer>
      <Titulo>Perfil</Titulo>
      <LoginPage></LoginPage>
    </AppContainer>
  );
}

export default Perfil;
