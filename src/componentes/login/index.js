import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const FormBox = styled.div`
  max-width: 80%;
  width: 300px;
  height: 450px;
  background: transparent;
  border: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    /* Ajustes para dispositivos menores */
    max-width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  color: #fff;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  margin: 30px 0;
  width: 100%; /* Alterado para ocupar a largura total */
  border-bottom: 2px solid #fff;

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }

  input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #fff;
  }
`;

const Remember = styled.div`
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;
  display: flex;
  justify-content: center;

  label input {
    margin-right: 3px;
  }

  label a {
    color: #fff;
    text-decoration: none;
  }

  label a:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
`;

const Register = styled.div`
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;

  p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }

  p a:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  return (
    <Container>
      <FormBox>
        <Title>Login</Title>
        <form action="">
          <InputBox>
            <input type="email" required />
            <label>Email</label>
          </InputBox>
          <InputBox>
            <input type="password" required />
            <label>Senha</label>
          </InputBox>
          <Remember>
            <label>
              <input type="checkbox" />
              Lembre-se
              <a href="#">Esqueci a senha</a>
            </label>
          </Remember>
          <Button>Entrar</Button>
          <Register>
            <p>
              Não tem uma conta?! <a href="#">Registrar</a>
            </p>
          </Register>
        </form>
      </FormBox>
    </Container>
  );
}

export default LoginPage;
