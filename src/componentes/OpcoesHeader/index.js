import styled from "styled-components";
import { Link } from "react-router-dom";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

const OpcoesTexto = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
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

const OpcoesLink = styled(Link)`
  text-decoration: none; /* Remover linha abaixo do link */
`;

function OpcoesHeader() {
  return (
    <OpcoesTexto>
      {textoOpcoes.map((texto) => (
        <OpcoesLink to={`/${texto.toLowerCase()}`}>
          <OpcoesLista>
            <p>{texto}</p>
          </OpcoesLista>
        </OpcoesLink>
      ))}
    </OpcoesTexto>
  );
}

export default OpcoesHeader;
