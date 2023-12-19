import React from "react";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-background-2);
`;

const FormBox = styled.form`
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
  padding: 0 10px;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #fff;
  box-sizing: border-box;

  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -15px;
  }

  input {
    width: calc(100% - 20px);
    height: 100%;
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

  label {
    display: flex;
    align-items: center;

    input {
      margin-right: 5px;
    }

    a {
      margin-left: 40px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
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

  &:hover {
    background-color: var(--color-green);
  }
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
  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <LoginPageContainer>
      <FormBox onSubmit={handleLogin}>
        <Title>Login</Title>
        <InputBox>
          <input type="text" required />
          <label>Nome de usuário</label>
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
        <Button type="submit">Entrar</Button>
        <Register>
          <p>
            Não tem uma conta?! <a href="#">Registrar</a>
          </p>
        </Register>
      </FormBox>
    </LoginPageContainer>
  );
}

export default LoginPage;
