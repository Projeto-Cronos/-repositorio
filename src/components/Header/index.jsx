import React from "react";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-letter.svg";
import { BsListUl } from "react-icons/bs";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  return (
    <>
      <StyledHeader>
        <div className="contentHeader">
          <div className="menuIcon" onClick={showSideBar}>
            <BsListUl />
          </div>
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
          <div className="menuIconInvsible">
            <BsListUl />
          </div>
          {isSideBarVisible && <SideBar isSideBarVisible={isSideBarVisible} />}
        </div>
      </StyledHeader>
    </>
  );
};
export default Header;
