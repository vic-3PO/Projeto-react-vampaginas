import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282a36;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
