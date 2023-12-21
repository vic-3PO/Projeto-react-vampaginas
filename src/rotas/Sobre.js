import React from "react";
import styled from "styled-components";
import SobreNos from "../componentes/SobreNos";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Sobre() {
  return (
    <AppContainer>
      <SobreNos />
    </AppContainer>
  );
}

export default Sobre;
