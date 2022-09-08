import { useState } from "react";
import logo1 from "../../assets/image/logo.svg";
import { HeaderContainer } from "./HeaderContainer";
import SideBar from "./SideBar";
import {BsListUl} from "react-icons/bs";

const HeaderDashboard = ({ username, email }) => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  return (
    <HeaderContainer>
      <div
        className="menuIcon"
        onClick={showSideBar}
      >
      <BsListUl />
      </div>
      <div className="logo">
        <img src={logo1} alt="Logo da Cronos" />
      </div>
      {isSideBarVisible && (
        <SideBar
          isSideBarVisible={isSideBarVisible}
          username={username}
          email={email}
        />
      )}
    </HeaderContainer>
  );
};

export default HeaderDashboard;
