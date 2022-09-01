import { useState } from "react";
import menuIcon from "../../assets/InfoDetails.svg";
import logo1 from "../../assets/logo1.svg";
import { HeaderContainer } from "./HeaderContainer";

const Header = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const showSiderbar = () => setIsSideBarVisible(!isSideBarVisible);

  return (
    <HeaderContainer>
      <img
        className="menuIcon"
        src={menuIcon}
        alt="Ícone do menu"
        onClick={showSiderbar}
      />
      <div className="logo">
        <img src={logo1} alt="Logo da Cronos" />
      </div>
      {isSideBarVisible && (
        <SideBar setIsSideBarVisible={setIsSideBarVisible} />
      )}
    </HeaderContainer>
  );
};

export default Header;
