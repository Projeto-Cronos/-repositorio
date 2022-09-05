import { Link } from "react-router-dom";
import { Container, SideBarButton } from "./style";
import {
  BsClock,
  BsCalculator,
  BsFolder,
  BsGear,
  BsMoon,
  BsBoxArrowRight,
} from "react-icons/bs";

const SideBar = ({ isSideBarVisible }) => {
  return (
    <Container isSideBarVisible={isSideBarVisible}>
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
    </Container>
  );
};

export default SideBar;
