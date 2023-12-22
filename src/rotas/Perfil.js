import React from "react";
import styled from "styled-components";
import LoginPage from "../componentes/login";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Perfil() {
  return (
    <AppContainer>
      <LoginPage></LoginPage>
      <Footer />
    </AppContainer>
  );
}

export default Perfil;
