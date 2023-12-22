//categoria.js
import "./App.css";
import Categoria from "../componentes/Categoria";
import styled from "styled-components";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Categorias() {
  return (
    <AppContainer>
      <Categoria />
      <Footer />
    </AppContainer>
  );
}

export default Categorias;
