// componetens/categoria/index.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import LivrosCategoria from "./livrosCategoria";
import { Categorias } from "./dadosCategoria";

const CategoriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--color-background);

  h2 {
    color: var(--color-foreground);
  }
`;

const CategoriaItem = styled.div`
  flex-basis: calc(20% - 20px);
  margin: 10px;
  border: 1px solid var(--color-foreground);
  padding: 15px;
  border-radius: 5px;
  background-color: var(--color-background);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-comment);
  }
`;

const NomeCategoria = styled.h3`
  color: var(--color-foreground);
  margin-bottom: 10px;
`;

function Categoria() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const livrosRef = useRef(null);

  const handleClickCategoria = (categoria) => {
    if (categoria !== categoriaSelecionada) {
      setCategoriaSelecionada(categoria);
    }
  };

  useEffect(() => {
    if (livrosRef.current) {
      setTimeout(() => {
        livrosRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 800);
    }
  }, [categoriaSelecionada]);

  return (
    <div>
      <CategoriaContainer>
        {Categorias().map((categoria, index) => (
          <CategoriaItem
            key={index}
            onClick={() => handleClickCategoria(categoria)}
          >
            <NomeCategoria>{categoria}</NomeCategoria>
          </CategoriaItem>
        ))}
      </CategoriaContainer>
      <CategoriaContainer>
        {categoriaSelecionada && (
          <div ref={livrosRef}>
            <h2>{`Livros ${categoriaSelecionada}`}</h2>
            <LivrosCategoria categoria={categoriaSelecionada} />
          </div>
        )}
      </CategoriaContainer>
    </div>
  );
}

export default Categoria;
