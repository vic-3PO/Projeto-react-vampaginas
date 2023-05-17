import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";
import UltimosLancamentos from "../UltimosLancamentos";

const PesquisaContainer = styled.section`
  background-color: #383a59;
  color: #f8f8f2;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  justify-content: center;
  position: relative;

  html {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #383a59;
    overflow: hidden;
    cursor: grab;
  }

  .mouth {
    width: 250px;
    height: 100px;
    position: relative;
    transform-origin: 50% 0%;
    transition: 0.5s;
    border-radius: 5% / 30%;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.35);
    font-family: system-ui;
    display: grid;
    place-items: center;
    background: #383a59;
    position: flex;
    left: 50%;
    transform: translateX(-50%);
  }

  .mouth:after {
    content: "";
    width: 100%;
    height: 75px;
    background: linear-gradient(to top, red 30%, white 30%);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      90% 15%,
      80% 100%,
      75% 5%,
      74% 25%,
      65% 25%,
      64% 5%,
      63% 25%,
      51% 25%,
      50% 5%,
      49% 25%,
      37% 25%,
      36% 5%,
      35% 25%,
      26% 25%,
      25% 5%,
      20% 100%,
      10% 15%
    );
    position: absolute;
    left: 0%;
    top: -5%;
    border-radius: 50% / 15%;
    transition: 0.5s;
  }
  .mouth:before {
    content: "";
    width: 100%;
    height: 75px;
    background: white;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      85% 10%,
      80% 25%,
      75% 5%,
      74% 25%,
      65% 25%,
      64% 5%,
      63% 25%,
      51% 25%,
      50% 5%,
      49% 25%,
      37% 25%,
      36% 5%,
      35% 25%,
      26% 25%,
      25% 5%,
      20% 25%,
      15% 10%
    );
    position: absolute;
    left: 0%;
    bottom: -5%;
    transform: scaleY(-1);
    border-radius: 50% / 15%;
    transition: 0.5s;
  }

  .drop {
    width: 50px;
    aspect-ratio: 1/1;
    background: red;
    border-radius: 0 50% 50% 50%;
    transform-origin: 50% 0%;
    transform: rotate(45deg) scale(0.25);
    position: absolute;
    left: 28px;
    top: 55px;
    opacity: 0;
  }
  .drop:nth-child(2) {
    left: 178px;
  }
  @keyframes drop {
    25% {
      opacity: 1;
      top: 75px;
    }
    100% {
      opacity: 0;
      top: 125px;
    }
  }

  .ahh {
    position: flex;
    top: 200px;
    left: 0;
    width: 100%;
    color: rgba(255, 255, 255, 0);
    text-align: center;
    font-size: 1.5rem;
    pointer-events: none;
  }

  .mouth:hover {
    background: none;
    border-color: rgba(255, 255, 255, 0);
    color: rgba(255, 255, 255, 0);
    cursor: none;
  }

  .mouth:hover:before {
    animation: bite 0.5s linear infinite;
  }
  @keyframes bite {
    50% {
      bottom: 25px;
    }
  }
  .mouth:hover:after {
    animation: bite_top 0.5s linear infinite;
  }
  @keyframes bite_top {
    50% {
      top: 25px;
    }
  }

  .mouth:hover .drop {
    animation: drop 0.5s linear infinite;
  }
  .mouth:hover .drop:nth-child(2) {
    animation: drop 0.5s ease-in 0.25s infinite;
  }

  .mouth:hover + .ahh {
    color: rgba(255, 255, 255, 1);
    animation: shake 0.15s linear forwards;
    animation-iteration-count: 5;
  }
  @keyframes shake {
    25% {
      transform: translateX(3px);
    }
    75% {
      transform: translateX(-3px);
    }
  }
`;

const Titulo = styled.h2`
  color: #f8f8f2;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  color: #f8f8f2;
  background-color: #383a59;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  console.log(livrosPesquisados);

  return (
    <PesquisaContainer>
      <div class="mouth">
        Coloque a mão se tem coragem
        <div class="drop"></div>
        <div class="drop"></div>
      </div>
      <div class="ahh">Ahhh! Minha mão!</div>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Econtre seu livro em nossa estante.</SubTitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src} alt="." />
        </Resultado>
      ))}
      <UltimosLancamentos />
    </PesquisaContainer>
  );
}

export default Pesquisa;
