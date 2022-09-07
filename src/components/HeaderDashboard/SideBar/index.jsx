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

const SideBar = ({ isSideBarVisible, username, email }) => {
  const { navigate, user, getOpositeTheme, setCurrentTheme } = useContext(Context);

  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <div className="profile">
        <div className="img">
          <img src={user.image} alt="" />
        </div>
        <h3 className="userName">{user.name}</h3>
        <p className="userEmail">{user.email}</p>
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

        <SideBarButton>
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
