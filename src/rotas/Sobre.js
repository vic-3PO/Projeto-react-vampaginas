import React from "react";
import styled from "styled-components";
import SobreNos from "../componentes/SobreNos";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Sobre() {
  return (
    <AppContainer>
      <SobreNos />
      <Footer />
    </AppContainer>
  );
}

export default Sobre;
