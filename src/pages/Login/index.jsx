import { Section } from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";

import imgPerson from "../../img/imgPerson.svg";
import errorYup from "../../img/errorYup.svg";

import { Form, Main } from "./style";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/userLogin";

import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    loginRequest(data);
  };

  //Requisição Login
  const url = "http://localhost:3001/";
  const loginRequest = (options) => {
    axios
      .post(url + "login/users", options)
      .then((res) => {
        console.log(res);
        localStorage.setItem("@Cronos:token", res.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Section>
          <Header />
          <Main>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h3>Login</h3>
              <fieldset>
                <label>
                  <p>Usuários</p>
                  <div className="groupInput">
                    <input
                      placeholder="Digite seu usuário"
                      {...register("email")}
                    />

                    {errors.email?.message && (
                      <div className="mensagemError">
                        <img className="imgError" src={errorYup} alt="" />
                        <span>{errors.email?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className="line"></div>
                </label>
                <label>
                  <p>Senha</p>
                  <div className="groupInput">
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      {...register("password")}
                    />

                    {errors.password?.message && (
                      <div className="mensagemError">
                        <img className="imgError" src={errorYup} alt="" />
                        <span>{errors.password?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className="line"></div>
                </label>
              </fieldset>
              <button>Entrar</button>
              <p>
                Não tem uma conta? <Link to={"/"}>Cadastre-se</Link>
              </p>
            </Form>
            <img className="img-responsive" src={imgPerson} alt="" />
          </Main>
        </Section>
      </>
    </motion.div>
  );
}

export default Login;
