import { Container, SideBarButton } from "./style";
import { useContext } from "react";
import { Context } from "../../../providers/userContext";

const SideBar = ({ isSideBarVisible }) => {
  const { navigate } = useContext(Context);

  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <div className="menu">
        <SideBarButton onClick={() => navigate("/")}>Sobre</SideBarButton>
        <SideBarButton onClick={() => navigate("/register")}>
          Cadastre-se
        </SideBarButton>
        <SideBarButton onClick={() => navigate("/login")}>Login</SideBarButton>
        <SideBarButton onClick={() => navigate("/blog")}>Blog</SideBarButton>
      </div>
    </Container>
  );
};

export default SideBar;
