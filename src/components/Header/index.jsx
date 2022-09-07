import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
  Logo,
  RightContainer
} from "../Header/style"
import logo from "../../assets/image/logo-letter.svg";

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>

        <LeftContainer>
          <Logo to="/" src={logo}></Logo>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Sobre</NavbarLink>
            <NavbarLink to="/blog"> Blog</NavbarLink>
            <NavbarLink to="/register"> Cadastre-se</NavbarLink>
            <NavbarLink className="login" to="/login"> Login</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Sobre</NavbarLinkExtended>
          <NavbarLinkExtended to="/blog"> Blog</NavbarLinkExtended>
          <NavbarLinkExtended to="/register"> Cadastre-se</NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;


