import React from "react";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-letter.svg";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="contentHeader">
          <nav>
            <Link className="link start" to="/">
              Sobre
            </Link>
            <Link className="link end" to="/register">
              Cadastre-se
            </Link>
            <img className="logo" src={logo} alt="" />
            <Link className="link start" to="/login">
              Login
            </Link>
            <Link className="link end" to="/blog">
              Blog
            </Link>
          </nav>
        </div>
      </StyledHeader>
    </>
  );
};
export default Header;
