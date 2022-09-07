import { Container, SideBarButton } from "./style";
import {
  BsClock,
  BsCalculator,
  BsFolder,
  BsGear,
  BsMoon,
  BsBoxArrowRight,
} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../../providers/userContext";

const SideBar = ({ isSideBarVisible }) => {
  const { navigate,userProfile, getOpositeTheme, setCurrentTheme, currentTheme, showDropdownEdit } = useContext(Context);

  const toggleTheme = () => {
    setCurrentTheme(getOpositeTheme())
    window.localStorage.setItem("authTheme",currentTheme);
  }

  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <div className="profile">
        <div className="img">
          <img src={userProfile.image} alt="" />
        </div>
        <h3 className="userName">{userProfile.name}</h3>
        <p className="userEmail">{userProfile.email}</p>
      </div>
      <div className="menu">
        <SideBarButton
          onClick={() => navigate("/dashboard")}
        >
          <BsClock />
          Gerenciador de projetos
        </SideBarButton>

        <SideBarButton 
          onClick={() => navigate("/calculator")}
        >
          <BsCalculator />
          Calculadora
        </SideBarButton>

        <SideBarButton>
          <BsFolder />
          Projetos
        </SideBarButton>

        <SideBarButton onClick={showDropdownEdit}>
          <BsGear />
          Configurações
        </SideBarButton>

        <SideBarButton onClick={toggleTheme}>
          <BsMoon />
          Tema {getOpositeTheme()}
        </SideBarButton>

        <SideBarButton
          onClick={() => {
            window.localStorage.removeItem("authUser");
            window.localStorage.removeItem("authId");
            window.localStorage.removeItem("authToken");
            navigate("/login");
          }}
        >
          <BsBoxArrowRight />
          Sair
        </SideBarButton>
      </div>
    </Container>
  );
};

export default SideBar;
