import Input from "../Input";
import { useState } from "react";
import UltimosLancamentos from "../UltimosLancamentos";
import { realizarPesquisaLivros } from "./dadosPesquisa";
import {
  PesquisaContainer,
  Titulo,
  SubTitulo,
  Resultado,
  ResultadoContainer,
} from "./estilo";

function InputPesquisa({ onPesquisaChange }) {
  return (
    <Input
      placeholder="Escreva sua próxima leitura"
      onChange={(evento) => onPesquisaChange(evento.target.value)}
    />
  );
}

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  const handlePesquisaChange = async (textoDigitado) => {
    const resultadoPesquisa = await realizarPesquisaLivros(textoDigitado);
    setLivrosPesquisados(resultadoPesquisa);
  };

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
      <InputPesquisa onPesquisaChange={handlePesquisaChange} />
      <ResultadoContainer>
        {livrosPesquisados.map((livro) => (
          <Resultado key={livro.key}>
            <p>{livro.nome}</p>
            <img src={livro.src} alt={livro.nome} />
            <h5>{livro.autor}</h5>
          </Resultado>
        ))}
      </ResultadoContainer>
      <UltimosLancamentos />
    </PesquisaContainer>
  );
}

export default Pesquisa;
