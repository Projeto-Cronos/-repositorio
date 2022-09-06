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
import { useContext } from "react";
import { Context } from "../../../providers/userContext";

const SideBar = ({ isSideBarVisible, username, email }) => {

  const {navigate} = useContext(Context);

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

        <SideBarButton onClick={() => {
                        window.localStorage.clear()
                        navigate("/login")
                    }}>
          <BsBoxArrowRight />
          Sair
        </SideBarButton>
      </div>
    </Container>
  );
};

export default SideBar;
