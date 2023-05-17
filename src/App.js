import "./App.css";
import Header from "./componentes/Header";
import Pesquisa from "./componentes/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #383a59;
  position: relative;
`;

const StyledPesquisa = styled(Pesquisa)`
  position: relative;
  z-index: 2;
`;

/* const StyledUltimosLancamentos = styled(UltimosLancamentos)`
  position: block;
  z-index: 1;
`; */

function App() {
  return (
    <AppContainer>
      <Header />
      <StyledPesquisa />
    </AppContainer>
  );
}

export default App;
