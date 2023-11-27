import React from "react";
import styled from "styled-components";
import { livros } from "../Pesquisa/dadosPesquisa";
import { Titulo } from "../Titulo";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #383a59;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListaLivros = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LivroItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  color: #f8f8f2;
  position: relative;
  width: 150px;
`;

const LivroImagem = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const LivroNome = styled.span`
  margin-top: 8px;
  text-align: center;
  color: #f8f8f2;
  font-size: 14px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const FavoritosLista = () => {
  return (
    <AppContainer>
      <Titulo>Meus Favoritos</Titulo>
      <ListaLivros>
        {livros.map((livro) => (
          <LivroItem key={livro.id}>
            <LivroImagem src={livro.src} alt={livro.nome} />
            <LivroNome>{livro.nome}</LivroNome>
          </LivroItem>
        ))}
      </ListaLivros>
    </AppContainer>
  );
};

export default FavoritosLista;
