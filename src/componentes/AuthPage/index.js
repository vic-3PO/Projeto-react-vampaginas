// authPage.js
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useAute } from "../AuthPage/autenticar";
import { useNavigate  } from "react-router-dom";

const AuthPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-background-2);
`;

const AuthContainer = styled.div`
  display: flex;
  width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const AuthForm = styled.form`
  flex: 1;
  max-width: 300px;
  margin: 0 auto;
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

function AuthPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAute();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Altere esta linha

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // Redireciona para a página de perfil após o login bem-sucedido
      navigate("/perfil"); // Altere esta linha
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Falha ao fazer login");
    }

    setLoading(false);
  }

  return (
    <AuthPageContainer>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputBox>
            <input type="email" required ref={emailRef} />
            <label>Endereço de email</label>
          </InputBox>
          <InputBox>
            <input type="password" required ref={passwordRef} />
            <label>Senha</label>
          </InputBox>
          <Button disabled={loading} type="submit">
            Login
          </Button>
          <Register>
            <p>
              Não tem uma conta?{" "}
              <a href="/registrar">Registrar</a>
            </p>
            {error && <p className="error">{error}</p>}
          </Register>
        </AuthForm>
      </AuthContainer>
    </AuthPageContainer>
  );
}

export default AuthPage;
