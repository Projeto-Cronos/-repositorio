import { Container, SideBarButton } from "./style";
import {
  BsClock,
  BsCalculator,
  BsFolder,
  BsGear,
  BsMoon,
  BsBoxArrowRight,
  BsPerson,
} from "react-icons/bs";

const SideBar = ({ isSideBarVisible, username, email }) => {
  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <div className="profile">
        <BsPerson />
        <h3 className="userName">{username}</h3>
        <p className="userEmail">{email}</p>
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

        <SideBarButton>
          <BsGear />
          Configurações
        </SideBarButton>

        <SideBarButton>
          <BsMoon />
          Tema escuro
        </SideBarButton>

        <SideBarButton>
          <BsBoxArrowRight />
          Sair
        </SideBarButton>
      </div>
    </Container>
  );
};

export default SideBar;
