import { Link } from "react-router-dom";
import { Container } from "./style";

const SideBar = ({ isSideBarVisible }) => {
  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <Link to="/">Sobre</Link>
      <Link to="/register">Cadastro</Link>
      <Link to="/login">Login</Link>
      <Link to="/blog">Blog</Link>
    </Container>
  );
};

export default SideBar;
