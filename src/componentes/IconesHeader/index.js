import perfil from "../../imagens/perfil.svg";
import styled from "styled-components";

const icones = [perfil];

const Icone = styled.li`
  margin-right: 10px;
  width: 25px;

  @media (min-width: 768px) {
    margin-right: 40px;
  }
`;

const IconeImg = styled.img`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <IconeImg src={icone} alt="."></IconeImg>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
