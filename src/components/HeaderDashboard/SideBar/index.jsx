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
  const { navigate,userProfile, getOpositeTheme, setCurrentTheme, showDropdownEdit } = useContext(Context);

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
        <SideBarButton>
          <BsClock />
          Rastreador de tempo
        </SideBarButton>

        <SideBarButton>
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

        <SideBarButton onClick={() => setCurrentTheme(getOpositeTheme())}>
          <BsMoon />
          Tema {getOpositeTheme()}
        </SideBarButton>

        <SideBarButton
          onClick={() => {
            window.localStorage.clear();
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
