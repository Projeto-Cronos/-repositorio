import { useState } from "react";
import menuIcon from "../../assets/InfoDetails.svg";
import logo1 from "../../assets/logo1.svg";
import { HeaderContainer } from "./HeaderContainer";
import SideBar from "./SideBar";

const HeaderDashboard = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  return (
    <HeaderContainer>
      <img
        className="menuIcon"
        src={menuIcon}
        alt="Ícone do menu"
        onClick={showSideBar}
      />
      <div className="logo">
        <img src={logo1} alt="Logo da Cronos" />
      </div>
      {isSideBarVisible && (
        <SideBar
          showSideBar={showSideBar}
          isSideBarVisible={isSideBarVisible}
        />
      )}
    </HeaderContainer>
  );
};

export default HeaderDashboard;
