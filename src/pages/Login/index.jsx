import imgPerson from "../../img/imgPerson.svg";

import { Form, Main } from "./style";

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Main>
      <Form>
        <h3>Loguin</h3>
        <fieldset>
          <label>
            <p>Usuários</p>
            <input type="email" placeholder="Digite seu usuário" />
            <div></div>
          </label>
          <label>
            <p>Senha</p>
            <input type="password" placeholder="Digite seu usuário" />
            <div></div>
          </label>
        </fieldset>
        <button>Entrar</button>
        <p>
          Não tem uma conta? <Link to={"/"}>Cadastre-se</Link>
        </p>
      </Form>
      <img className="img-responsive" src={imgPerson} alt="" />
    </Main>
  );
};
