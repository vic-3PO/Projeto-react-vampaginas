import React, { useState } from "react";
import styled from "styled-components";

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

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      if (isRegistering) {
        // Lógica para registrar um novo usuário
      } else {
        // Lógica para autenticar o usuário
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthPageContainer>
      <AuthContainer>
        <AuthForm onSubmit={handleAuth}>
          <Title>{isRegistering ? "Registrar" : "Login"}</Title>
          <InputBox>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Endereço de email</label>
          </InputBox>
          <InputBox>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha</label>
          </InputBox>
          {!isRegistering && (
            <Remember>
              <label>
                <input type="checkbox" />
                Lembre-se
                <a href="#">Esqueci a senha</a>
              </label>
            </Remember>
          )}
          <Button type="submit">
            {isRegistering ? "Registrar" : "Entrar"}
          </Button>
          <Register>
            <p>
              {isRegistering
                ? "Já tem uma conta?"
                : "Ainda não tem uma conta?"}{" "}
              <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Login" : "Registrar"}
              </a>
            </p>
          </Register>
        </AuthForm>

        {/* Outros componentes, como imagem, mensagem, etc. podem ser adicionados aqui */}

      </AuthContainer>
    </AuthPageContainer>
  );
}

export default AuthPage;
