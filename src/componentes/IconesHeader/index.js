import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import perfil from "../../imagens/perfil.svg";

const icones = [perfil];

const Icone = styled.li`
  margin-right: 10px;
  width: 25px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 40px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.8;
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
      {icones.map((icone, index) => (
        <Icone key={index}>
          <Link to="/login">
            <IconeImg src={icone} alt="."></IconeImg>
          </Link>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;