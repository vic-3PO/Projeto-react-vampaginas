import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomendacao from "../CardRecomendacao";
import imagemLivro from "../../imagens/livro3.png";

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

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo tamanhoFonte={"36px"}>Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt={livro.nome} />
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
