import React from "react";
import { StyledFooter } from "./style";
import logo from "../../assets/image/logo-letter.svg";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="FooterHome">
          <img className="Logo" src={logo} alt="" />
          <p className="Copyright">Copyright © Cronos LTDA</p>
        </div>
      </StyledFooter>
    </>
  );
};
export default Footer;
