import Api from "../services/api";
import ApiNews from "../services/apiNews"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingAnimated from "../assets/animation/VAPGxWYypp.json";
import loadingAnimatedOne from "../assets/animation/DHYuRhgDuA.json";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Context = createContext();

const ProviderUser = ({ children }) => {
  const [eyeClickLogin, setEyeClickLogin] = useState(false);
  const [eyeClickRegister, setEyeClickRegister] = useState(false);
  const [dropDownBlog, setDropdownBlog] = useState("none");
  const [eyeClickRegisterConfirmed, setEyeClickRegisterConfirmed] =useState(false);
  const [listNews, setListNews] = useState([]);
  const [newsMain, setNewsMain] = useState([]);
  const [news, setNews] = useState({});
  const navigate = useNavigate();

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
  
  //Blog
  
  useEffect(() => {
    ApiNews.get("", {
      headers: {
        'X-RapidAPI-Key': '06fbf8b391msh0fdd5694e7e7537p1c07e4jsn8a06ccfbe48d',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      }
    })
    .then((res) =>{
      setListNews(res.data.articles)
      setNewsMain(res.data.articles.splice(0,1))

    })
    .catch((err) => console.log(err))
},[setListNews, setNewsMain])

/* const newsBlog = () => {
  ApiNews.get("", {
    headers: {
      'X-RapidAPI-Key': '06fbf8b391msh0fdd5694e7e7537p1c07e4jsn8a06ccfbe48d',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  })
  .then((res) =>{
    setListNews(res.data.articles)
    setNewsMain(res.data.articles.splice(0,1))

  })
  .catch((err) => console.log(err))
}; */

  const showDropDownBlog = (elem) => {
    setDropdownBlog("flex");
    setNews(elem)
  };

  const closeDropDownBlog = () => {
    setDropdownBlog("none");
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
        showDropDownBlog,
        closeDropDownBlog,
        dropDownBlog,
        setListNews,
        listNews,
        newsMain,
        /* newsBlog, */
        news
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderUser;
