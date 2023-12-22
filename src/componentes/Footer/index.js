import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #282a36;
  color: #6272a4;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin-top: 20px;

  a {
    color: #6272a4;
    text-decoration: none;
    margin: 0 15px;
    &:hover {
      color: #bd93f9;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        {/* Informações básicas */}
        <p>Contatos: Trabalhando nisso</p>

        {/* Copyright */}
        <Copyright>
          © {currentYear} Vampáginas. Todos os direitos reservados.
        </Copyright>

        {/* Links institucionais */}
        {/* <FooterLinks>
          <Link to="/politica-privacidade">Política de Privacidade</Link>
          <Link to="/termos-condicoes">Termos e Condições</Link>
          <Link to="/faqs">FAQs</Link>
        </FooterLinks> */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
