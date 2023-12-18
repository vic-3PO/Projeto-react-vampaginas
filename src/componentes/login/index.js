import React from "react";
import { Input } from "../Input";
import { Titulo } from "../Titulo";
import styled from "styled-components";

const Div1 = styled.div`
  color: var(--color-foreground);
`;

function loginPage() {
  return (
    <Div1>
      <Titulo></Titulo>
      <Input></Input>
    </Div1>
  );
}

export default loginPage;
