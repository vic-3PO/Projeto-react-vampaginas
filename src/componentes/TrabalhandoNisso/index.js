import React from "react";
import styled from "styled-components";

const TrabalhandoContainer = styled.div`
  position: fixed;
  width: 100vw;
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
    <TrabalhandoContainer>
      <SubTitulo>Estamos trabalhando para construir esta página! </SubTitulo>
    </TrabalhandoContainer>
  );
}

export default TrabalhandoNisso;
