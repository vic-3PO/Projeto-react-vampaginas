import "./App.css";
import Pesquisa from "../componentes/Pesquisa";
import styled from "styled-components";
import Footer from "../componentes/Footer";

const AppContainer = styled.div`
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <Footer />
    </AppContainer>
  );
}

export default Home;
