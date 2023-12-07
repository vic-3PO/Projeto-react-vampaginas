import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  color: #f8f8f2;
  background-color: #383a59;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    margin-left: 20px;
  }
`;

const LivroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px; /* Adicionando a limitação de largura */

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`;

export { NovosLivrosContainer, UltimosLancamentosContainer, LivroContainer };
