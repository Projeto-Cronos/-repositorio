import {
    Form,
    Title,
    Input,
    Label,
    ButtonOrange,
    ParagraphQuestion,
  } from "./style";
  import "react-toastify/dist/ReactToastify.css";
  import { formSchema } from "../../validators/userLogin";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import {
    BsFillEyeFill,
    BsFillEyeSlashFill,
    BsExclamationCircle,
    BsFillPersonFill,
  } from "react-icons/bs";
  import { useContext } from "react";
  import { Context } from "../../providers/userContext";
  import { Link } from "react-router-dom";
  
  function FormLogin() {
    const { eyeClickLogin, LoginUser, handleClickLogin } = useContext(Context);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
    });

    return (
        <Form onSubmit={handleSubmit(LoginUser)}>
        <Title>Login</Title>
        <div className="containerInput">
          <Label htmlFor="email">Email</Label>
          <div className="contentInput">
            <Input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email?.message ? (
              <button type="button" className="alert dropdown">
                {errors.email?.message ? (
                  <>
                    <BsExclamationCircle />
                    <div class="dropdown-content">
                      <p>{errors.email?.message}</p>
                    </div>
                  </>
                ) : null}
              </button>
            ) : (
              <button type="button" className="fixed">
                <BsFillPersonFill />
              </button>
            )}
          </div>
        </div>
        <div className="containerInput">
          <Label htmlFor="password">Senha</Label>
          {!eyeClickLogin ? (
            <div className="contentInput">
              <Input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password?.message ? (
                <button type="button" className="alert dropdown">
                  {errors.password?.message ? (
                    <>
                      <BsExclamationCircle />
                      <div class="dropdown-content">
                        <p>{errors.password?.message}</p>
                      </div>
                    </>
                  ) : null}
                </button>
              ) : (
                <button type="button" className="fixed">
                  <BsFillEyeFill
                    onClick={(e) => handleClickLogin(e.preventDefault())}
                  />
                </button>
              )}
            </div>
          ) : (
            <div className="contentInput">
              <Input
                type="text"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password?.message ? (
                <button type="button" className="alert dropdown">
                  {errors.password?.message ? (
                    <BsExclamationCircle />
                  ) : (
                    "eaghrh"
                  )}
                </button>
              ) : (
                <button type="button" className="fixed">
                  <BsFillEyeSlashFill
                    onClick={(e) => handleClickLogin(e.preventDefault())}
                  />
                </button>
              )}
            </div>
          )}
        </div>
        <ButtonOrange type="submit">Entrar</ButtonOrange>
        <ParagraphQuestion>
          Não tem uma conta?{" "}
          <span>
            <Link className="link" to="/register">
              Cadastre-se
            </Link>
          </span>
        </ParagraphQuestion>
      </Form>
    )
}

export default FormLogin