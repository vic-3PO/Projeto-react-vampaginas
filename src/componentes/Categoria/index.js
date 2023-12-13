// componetens/categoria/index.js
import React, { useState } from "react";
import styled from "styled-components";
import LivrosCategoria from "./livrosCategoria";
import { Categorias } from "./dadosCategoria";
import Modal from "react-modal";
import "./styleModal.css";

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
/*==================================================== */
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

const ModalTitle = styled.h2`
  color: var(--color-foreground);
  font-family: sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  color: var(--color-foreground);
  font-family: sans-serif;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background-color: var(--color-red);
  color: white;
  font-family: sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function Categoria() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickCategoria = (categoria) => {
    setSelectedCategory(categoria);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={(ModalWrapper, ModalBody)}
      >
        <ModalContent>
          <ModalTitle>{`Livros ${selectedCategory}`}</ModalTitle>
          <LivrosCategoria categoria={selectedCategory} />
          <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Categoria;
