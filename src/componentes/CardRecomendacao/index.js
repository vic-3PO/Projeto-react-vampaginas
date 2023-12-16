import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
  align-items: center;
  background-color: #282a36;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 70%;
  margin-top: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
  text-align: center;
  margin-top: 10px;
`;

const Subtitulo = styled.h4`
  color: #ff5555;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: center;
`;

const ImgLivro = styled.img`
  width: 150px;
  margin-top: 10px;
`;

function CardRecomendacao({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <Titulo tamanhFonte="16px" alinhamento="left">
          {titulo}
        </Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt={titulo} />
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomendacao;
