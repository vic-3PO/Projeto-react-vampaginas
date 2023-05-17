import styled from "styled-components";

export const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #282a36;
  color: ${(props) => props.cor || "#f8f8f2"};
  font-size: ${(props) => props.tamanhoFonte || "18px;"};
  text-align: ${(props) => props.alinhamento || "center"};
  margin: 0;
`;
