import { useState } from "react";

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
