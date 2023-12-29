import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

const TrabalhandoContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: var(--color-current-line);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitulo = styled.h3`
  color: var(--color-foreground);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function TrabalhandoNisso() {
  return (
    <div>
      <TrabalhandoContainer>
        <SubTitulo>Estamos trabalhando para construir esta página! </SubTitulo>
      </TrabalhandoContainer>
      <Footer />
    </div>
  );
}

export default TrabalhandoNisso;
