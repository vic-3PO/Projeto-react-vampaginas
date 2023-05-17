import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "MIINHA ESTANTE", "FAVORITOS"];

const OpcoesTexto = styled.ul`
  display: flex;
`;

const OpcoesLista = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

function OpcoesHeader() {
  return (
    <OpcoesTexto>
      {textoOpcoes.map((texto) => (
        <OpcoesLista>
          <p>{texto}</p>
        </OpcoesLista>
      ))}
    </OpcoesTexto>
  );
}

export default OpcoesHeader;
