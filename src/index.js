import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./rotas/Home";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Categorias from "./rotas/Categorias";
import Estante from "./rotas/Estante";
import Login from "./rotas/Login";
import Sobre from "./rotas/Sobre";
import Perfil from "./rotas/Perfil";
import RegisterPage from "./componentes/Registrar";
import { Autenticar } from "./componentes/AuthPage/autenticar";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  li {
    list-style: none;
    color: #f8f8f2;
  }
  
`;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Autenticar>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/minha estante" element={<Estante />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Autenticar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
