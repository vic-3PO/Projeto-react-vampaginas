import React from "react";
import styled from "styled-components";
import AuthPage from "../componentes/AuthPage";
import Footer from "../componentes/Footer";


const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Login() {
  return (
    <AppContainer>
      <AuthPage></AuthPage>
      <Footer />
    </AppContainer>
  );
}

export default Login;
