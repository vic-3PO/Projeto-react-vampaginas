// componentes/livrosCategoria.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LivrosCategoriaContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const LivrosTable = styled.table`
  width: 100%;
  border-spacing: 8px;
  margin-bottom: 20px;
`;

const LivroItem = styled.tr`
  display: flex;
  justify-content: center;
  background-color: var(--color-background);
  transition: background-color 0.3s;
  border: 1px solid #fff;

  &:hover {
    background-color: var(--color-comment);
  }
`;

const LivroCapa = styled.div`
  width: 100px;
  height: 150px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const LivroInfo = styled.div`
  text-align: left;
  padding: 8px;
  flex-grow: 1;
`;

const TituloLivro = styled.h3`
  color: var(--color-foreground);
  margin-bottom: 5px;
`;

const AutorLivro = styled.p`
  color: var(--color-comment);
  margin: 0;
`;

function LivrosCategoria({ categoria }) {
  const [livros, setLivros] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${categoria}&key=${apiKey}&filter=free-ebooks&maxResults=40`
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Dados brutos da API:", data);
          const livrosEncontrados = data.items.map((livro) => ({
            id: livro.id,
            titulo: livro.volumeInfo.title,
            autor: livro.volumeInfo.authors
              ? livro.volumeInfo.authors.join(", ")
              : "Autor não disponível",
            capa:
              livro.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/100x150",
          }));

          console.log("Livros encontrados:", livrosEncontrados);
          setLivros(livrosEncontrados);
        } else {
          console.error("Erro ao buscar livros:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar livros:", error.message);
      }
    };

    console.log("Categoria selecionada:", categoria);
    buscarLivros();
  }, [apiKey, categoria]);

  return (
    <LivrosCategoriaContainer>
      {livros.length > 0 && (
        <LivrosTable>
          <tbody>
            {livros.map((livro) => (
              <LivroItem key={livro.id}>
                <LivroCapa>
                  <img src={livro.capa} alt={livro.titulo} />
                </LivroCapa>
                <LivroInfo>
                  <TituloLivro>{livro.titulo}</TituloLivro>
                  <AutorLivro>Autor: {livro.autor}</AutorLivro>
                </LivroInfo>
              </LivroItem>
            ))}
          </tbody>
        </LivrosTable>
      )}
    </LivrosCategoriaContainer>
  );
}

export default LivrosCategoria;
