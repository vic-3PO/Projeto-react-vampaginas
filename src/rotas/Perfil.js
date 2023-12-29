import React from "react";
import styled from "styled-components";
import { Titulo } from "../componentes/Titulo";
import TrabalhandoNisso from "../componentes/TrabalhandoNisso";
import { useAute } from "../componentes/AuthPage/autenticar";
import { useNavigate } from "react-router-dom";
import { auth } from "../servicos/firebase";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Perfil() {
  const { logout } = useAute();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      if (auth.currentUser == null) {
        navigate("/login");
      }
      console.log("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AppContainer>
      <Titulo>Perfil</Titulo>
      <button onClick={handleLogout}>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </button>
      <TrabalhandoNisso />
    </AppContainer>
  );
}

export default Perfil;
