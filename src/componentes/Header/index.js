import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #282a36;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const OpcoesLink = styled(Link)`
  text-decoration: none; /* Remover linha abaixo do link */
`;

function Header() {
  return (
    <HeaderContainer>
      <OpcoesLink to="/">
        <Logo />
      </OpcoesLink>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
