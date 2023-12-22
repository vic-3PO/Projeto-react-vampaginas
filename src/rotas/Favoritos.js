import "./App.css";
import styled from "styled-components";
/* import { useState, useEffect } from "react";
import { getFavoritos } from "../servicos/favoritos";
import { deleteFavorito } from "../servicos/favoritos"; */
import { Titulo } from "../componentes/Titulo";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  width: 100vw;
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

/* const LivroItem = styled.li`
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
`; */
function Favoritos() {
  return (
    <AppContainer>
      <Titulo>Meus Favoritos</Titulo>
      <TrabalhandoNisso></TrabalhandoNisso>
      <ListaLivros></ListaLivros>
      <Footer />
    </AppContainer>
  );
}

export default Favoritos;
