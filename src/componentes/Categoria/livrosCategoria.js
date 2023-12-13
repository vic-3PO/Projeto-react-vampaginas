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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: var(--color-background);
  color: #fff;
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-comment);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Ellipsis = styled.span`
  margin: 0 5px;
`;

function LivrosCategoria({ categoria }) {
  const [livros, setLivros] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${categoria}&key=${apiKey}&filter=free-ebooks&maxResults=${itemsPerPage}&startIndex=${
            (currentPage - 1) * itemsPerPage
          }`
        );

        if (response.ok) {
          const data = await response.json();
          const newTotalItems = data.totalItems || 0;

          if (newTotalItems !== totalItems) {
            setTotalItems(newTotalItems);
          }

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

          setLivros(livrosEncontrados);
        } else {
          console.error("Erro ao buscar livros:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar livros:", error.message);
      }
    };

    buscarLivros();
  }, [apiKey, categoria, itemsPerPage, currentPage, totalItems]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxVisibleButtons = 5; // Adjust the number of visible buttons
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= maxVisibleButtons) {
      // If total pages are less than or equal to the max visible buttons, display all buttons
      for (let page = 1; page <= totalPages; page++) {
        pageButtons.push(
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </PageButton>
        );
      }
    } else {
      // If total pages are more than the max visible buttons, display ellipsis and adjust visible buttons
      const firstVisible = Math.max(
        1,
        currentPage - Math.floor(maxVisibleButtons / 2)
      );
      const lastVisible = Math.min(
        totalPages,
        firstVisible + maxVisibleButtons - 1
      );

      if (firstVisible > 1) {
        pageButtons.push(
          <PageButton key={1} onClick={() => handlePageChange(1)}>
            1
          </PageButton>
        );
        if (firstVisible > 2) {
          pageButtons.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
        }
      }

      for (let page = firstVisible; page <= lastVisible; page++) {
        pageButtons.push(
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </PageButton>
        );
      }

      if (lastVisible < totalPages) {
        if (lastVisible < totalPages - 1) {
          pageButtons.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
        }
        pageButtons.push(
          <PageButton
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PageButton>
        );
      }
    }

    return pageButtons;
  };

  return (
    <LivrosCategoriaContainer>
      {livros.length > 0 && (
        <>
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
          <PaginationContainer>{renderPageButtons()}</PaginationContainer>
        </>
      )}
    </LivrosCategoriaContainer>
  );
}

export default LivrosCategoria;
