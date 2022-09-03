import {
  Section,
  Div,
  Form,
  Title,
  Input,
  Label,
  ButtonOrange,
  ParagraphQuestion,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { formSchema } from "../../validators/useRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillImageFill,
  BsExclamationCircle,
  BsFillPersonFill,
  BsEnvelopeFill,
} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../providers/userContext";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

function Register() {
  const {
    eyeClickRegisterConfirmed,
    eyeClickRegister,
    handleClickRegisterConfirmed,
    handleClickRegister,
    registerUser,
    animateState,
    defaultOptionsOne,
  } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Section>
          <Header />
          <Div>
            <Form onSubmit={handleSubmit(registerUser)}>
              <Title>Cadastre-se</Title>
              <div className="containerInput">
                <Label htmlFor="text">Nome</Label>
                <div className="contentInput">
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    {...register("name")}
                  />
                  {errors.name?.message ? (
                    <button className="alert dropdown">
                      {errors.name?.message ? (
                        <>
                          <BsExclamationCircle />
                          <div class="dropdown-content">
                            <p>{errors.name?.message}</p>
                          </div>
                        </>
                      ) : null}
                    </button>
                  ) : (
                    <button className="fixed">
                      <BsFillPersonFill />
                    </button>
                  )}
                </div>
              </div>
              <div className="containerInput">
                <Label htmlFor="email">Email</Label>
                <div className="contentInput">
                  <Input
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                  />
                  {errors.email?.message ? (
                    <button className="alert dropdown">
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
                    <button className="fixed">
                      <BsEnvelopeFill />
                    </button>
                  )}
                </div>
              </div>
              <div className="containerInput">
                <Label htmlFor="password">Senha</Label>
                {!eyeClickRegister ? (
                  <div className="contentInput">
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...register("password")}
                    />
                    {errors.password?.message ? (
                      <button className="alert dropdown">
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
                          onClick={(e) =>
                            handleClickRegister(e.preventDefault())
                          }
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
                      <button className="alert dropdown">
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
                        <BsFillEyeSlashFill
                          onClick={(e) =>
                            handleClickRegister(e.preventDefault())
                          }
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="containerInput">
                <Label htmlFor="password">Confirmação de Senha</Label>
                {!eyeClickRegisterConfirmed ? (
                  <div className="contentInput">
                    <Input
                      type="password"
                      placeholder="Confirme sua senha"
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword?.message ? (
                      <button className="alert dropdown">
                        {errors.confirmPassword?.message ? (
                          <>
                            <BsExclamationCircle />
                            <div class="dropdown-content">
                              <p>{errors.confirmPassword?.message}</p>
                            </div>
                          </>
                        ) : null}
                      </button>
                    ) : (
                      <button type="button" className="fixed">
                        <BsFillEyeFill
                          onClick={(e) =>
                            handleClickRegisterConfirmed(e.preventDefault())
                          }
                        />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="contentInput">
                    <Input
                      type="text"
                      placeholder="Digite sua senha"
                      {...register("confirmPassword")}
                    />
                    {errors.password?.message ? (
                      <button className="alert dropdown">
                        {errors.confirmPassword?.message ? (
                          <>
                            <BsExclamationCircle />
                            <div class="dropdown-content">
                              <p>{errors.confirmPassword?.message}</p>
                            </div>
                          </>
                        ) : null}
                      </button>
                    ) : (
                      <button type="button" className="fixed">
                        <BsFillEyeSlashFill
                          onClick={(e) =>
                            handleClickRegisterConfirmed(e.preventDefault())
                          }
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="containerInput">
                <Label htmlFor="url">Foto de perfil</Label>
                <div className="contentInput">
                  <Input
                    type="url"
                    placeholder="Digite sua url"
                    {...register("image")}
                  />
                  {errors.image?.message ? (
                    <>
                      <button className="alert dropdown">
                        {errors.image?.message ? (
                          <>
                            <BsExclamationCircle />
                            <div class="dropdown-content">
                              <p>{errors.image?.message}</p>
                            </div>
                          </>
                        ) : null}
                      </button>
                    </>
                  ) : (
                    <button className="fixed">
                      <BsFillImageFill />
                    </button>
                  )}
                </div>
              </div>
              <ButtonOrange type="submit">Entrar</ButtonOrange>
              <ParagraphQuestion>
                Tem uma conta?
                <Link className="link" to="/login">
                  Conecte-se
                </Link>
              </ParagraphQuestion>
            </Form>
            <div className="img">
              <Lottie
                options={defaultOptionsOne}
                isStopped={animateState.isStopped}
                isPaused={animateState.isPaused}
              />
            </div>
          </Div>
        </Section>
      </>
    </motion.div>
  );
}

export default Register;
