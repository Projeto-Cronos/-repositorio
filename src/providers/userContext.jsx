import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingAnimated from "../assets/animation/VAPGxWYypp.json";
import loadingAnimatedOne from "../assets/animation/DHYuRhgDuA.json";
import { createContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiNews from "../services/apiNews";

export const Context = createContext();

const ProviderUser = ({ children }) => {
  const token = JSON.parse(window.localStorage.getItem("authToken"));
  const user = JSON.parse(window.localStorage.getItem("authUser"));
  const [eyeClickLogin, setEyeClickLogin] = useState(false);
  const [eyeClickRegister, setEyeClickRegister] = useState(false);

  const [dropDownDelete, setDropdownDelete] = useState("none");
  const [dropDownEdit, setDropdownEdit] = useState("none");
  const [eyeClickRegisterConfirmed, setEyeClickRegisterConfirmed] =
    useState(false);
  const navigate = useNavigate();
  const [valuePerMinute, setValuePerMinute] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [totalTime, setTotalTime] = useState(0)
  const [result, setResult] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("claro");
  const [userProfile, setUserProfile] = useState(user);

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
          window.localStorage.removeItem("authUser");
          window.localStorage.removeItem("authId");
          window.localStorage.removeItem("authToken");
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
          setUserProfile(res.data.user)
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

  //Dashboard
  const editProfile = (data) => {
    Api.patch(`/users/${user.id}`,data, {
        headers: {Authorization: `Bearer ${token}`}
        })
        .then((res) => {
            setDropdownEdit("none")
            notifyLoginSuccess("Perfil editado com sucesso!")
           localStorage.removeItem("authUser")
           localStorage.setItem("authUser",JSON.stringify(res.data));
            setUserProfile(res.data)
        })
        .catch(() => {
            notifyLoginError("Ops! Algo deu errado")
        })
}

const deleteProject = (id) => {
  Api.delete(`/projects/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
      })
      .then(() => {
          setDropdownDelete("none")
          notifyLoginSuccess("Projeto deletado com sucesso!")
      })
      .catch(() => {
          notifyLoginError("Ops! Algo deu errado")
      })
}

    const showDropdownDelete = () => {
      setDropdownDelete("flex");
    }

    const closeDropdownDelete = () => {
      setDropdownDelete("none");
    };

    const showDropdownEdit = () => {
    setDropdownEdit("flex");
    }

    const closeDropdownEdit = () => {
    setDropdownEdit("none");
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

  //DarkTheme

  const getOpositeTheme = useCallback(
    () => (currentTheme === "claro" ? "escuro" : "claro"),
    [currentTheme]
  );

  useEffect(() => {
    const themeMain = window.localStorage.getItem("authTheme");
    if (themeMain) {
      setCurrentTheme(themeMain === "claro" ? "escuro" : "claro");
    }
  }, []);

  //Blog
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    ApiNews.get("", {
      headers: {
        "X-RapidAPI-Key": "640a561322mshf0c98926cbaf968p111e5ejsn08e0e943de10",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    }).then((res) => {
      setListNews(res.data.articles);
    });
  }, []);

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
        setResult,
        token,
        user,
        currentTheme, 
        setCurrentTheme,
        getOpositeTheme,
        showDropdownDelete,
        closeDropdownDelete,
        showDropdownEdit,
        closeDropdownEdit,
        dropDownDelete,
        dropDownEdit,
        editProfile,
        userProfile,
        deleteProject,
        totalTime,
        setTotalTime,
        listNews,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderUser;
