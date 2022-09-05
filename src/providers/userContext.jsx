
import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingAnimated from "../assets/animation/VAPGxWYypp.json";
import loadingAnimatedOne from "../assets/animation/DHYuRhgDuA.json";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ProviderUser = ({ children }) => {
  const [eyeClickLogin, setEyeClickLogin] = useState(false);
  const [eyeClickRegister, setEyeClickRegister] = useState(false);
  const [eyeClickRegisterConfirmed, setEyeClickRegisterConfirmed] =
    useState(false);
  const navigate = useNavigate();

    const [valuePerMinute, setValuePerMinute] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [result, setResult]           = useState(false);


  const handleClickLogin = () => {
    setEyeClickLogin(!eyeClickLogin);
  };
  const handleClickRegister = () => {
    setEyeClickRegister(!eyeClickRegister);
  };
  const handleClickRegisterConfirmed = () => {
    setEyeClickRegisterConfirmed(!eyeClickRegisterConfirmed);
  };

  const notifyLoginSuccess = (test) => toast.success(test);
  const notifyLoginError = (test) => toast.error(test);

  //Login
  const LoginUser = (data) => {
    Api.post("/login", data)
      .then((res) => {
        if (res.status === 200) {
          notifyLoginSuccess("Conta logada com sucesso!");
          window.localStorage.clear();
          window.localStorage.setItem(
            "authUser",
            JSON.stringify(res.data.user)
          );
          window.localStorage.setItem(
            "authId",
            JSON.stringify(res.data.user.id)
          );
          window.localStorage.setItem(
            "authToken",
            JSON.stringify(res.data.accessToken)
          );
          navigate("/dashboard");
        } else {
          return null;
        }
      })
      .catch(() => notifyLoginError("Ops!Algo deu errado"));
  };

  //Register
  const registerUser = (data) => {
    Api.post("/users", data)
      .then((res) =>
        res.status === 201
          ? notifyLoginSuccess("Conta criada com sucesso!") &&
            navigate("/login", { replace: true })
          : null
      )
      .catch(() => notifyLoginError("E-mail já existente"));
  };

  //Lottie
  const [animateState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimatedOne,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Context.Provider
      value={{
        animateState,
        defaultOptions,
        defaultOptionsOne,
        LoginUser,
        registerUser,
        handleClickLogin,
        eyeClickRegisterConfirmed,
        handleClickRegister,
        eyeClickRegister,
        handleClickRegisterConfirmed,
        eyeClickLogin,
        navigate,
        valuePerMinute,
        setValuePerMinute,
        calculation,
        setCalculation,
        result,
        setResult
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderUser;
