import React from "react";
import  {StyledHeader} from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-letter.svg"

const Header = () => {

  return (
    <>
        <StyledHeader>
                <div className="contentHeader"> 
                    <nav>
                        <Link className="link" to="/">Sobre</Link>
                        <Link className="link" to="/register">Cadastro</Link>
                        <img className="logo" src={logo} alt=""/>
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/blog">Blog</Link>
                    </nav>
                </div>
    </StyledHeader>
    </>
  )
}
export default Header