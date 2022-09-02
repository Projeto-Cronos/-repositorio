import { Link } from "react-router-dom";
import { Container } from "./style";
import calculadora from "../../../assets/icons/calculadora.svg";
import projetos from "../../../assets/icons/projetos.svg";
import rastreador from "../../../assets/icons/rastreador.svg";
import temaEscuro from "../../../assets/icons/temaEscuro.svg";
import configuracoes from "../../../assets/icons/configuracoes.svg";
import sair from "../../../assets/icons/sair.svg";

const SideBar = ({ isSideBarVisible }) => {
  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <Link to="/">
        <img src={rastreador} alt="Rastreador de tempo" />
        Rastreador de tempo
      </Link>
      <Link to="/register">
        <img src={calculadora} alt="Calculadora" />
        Calculadora
      </Link>
      <Link to="/login">
        <img src={projetos} alt="Projetos" />
        Projetos
      </Link>
      <Link to="/blog">
        <img src={configuracoes} alt="Configurações" />
        Configurações
      </Link>
      <Link to="/blog">
        <img src={temaEscuro} alt="Tema escuro" />
        Tema escuro
      </Link>
      <Link to="/blog">
        <img src={sair} alt="Sair" />
        Sair
      </Link>
    </Container>
  );
};

export default SideBar;
