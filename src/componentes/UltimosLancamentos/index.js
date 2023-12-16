import React, { useState, useEffect } from "react";
import { obterUltimosLancamentos } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomendacao from "../CardRecomendacao";
import imagemLivro from "../../imagens/livro3.png";
import {
  NovosLivrosContainer,
  UltimosLancamentosContainer,
  LivroContainer,
} from "./estilo";

function UltimosLancamentos() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const livrosData = await obterUltimosLancamentos();
      setLivros(livrosData);
    }

    fetchLivros();
  }, []);

  return (
    <UltimosLancamentosContainer>
      <Titulo tamanhoFonte={"36px"}>Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <LivroContainer key={livro.key}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </LivroContainer>
        ))}
      </NovosLivrosContainer>
      <CardRecomendacao
        titulo="Talvez você se interesse por:"
        subtitulo="Nosferatu"
        descricao="O corretor de imóveis Hutter precisa vender um castelo cujo proprietário é o excêntrico 
        conde Graf Orlock. O conde, na verdade, é um vampiro milenar que espalha o terror na região de Bremen, 
        na Alemanha e se interessa por Ellen, a mulher de Hutter."
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
