import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";
import { useContext } from "react";
import { Context } from "./userContext";

export const ProjectsContext = createContext({});

const ProjectsProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState([]);
  const [projecToDelete, setProjectToDelete] = useState(0);
  const [valuePriceTotal, setValuePriceTotal] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const {closeDropdownDelete} = useContext(Context);

  const getAllProjects = async () => {
    const userId = window.localStorage.getItem("authId");
    
    const token = JSON.parse(window.localStorage.getItem("authToken"));
    if (token) Api.defaults.headers.authorization = `Bearer ${token}`;
    
    const data = await Api.get(`users/${userId}/projects`)
    .then((res) => setAllProjects(res.data))
    .catch((err) => console.error(err));
    
    console.log(data);
    return data;
  };

  const getProject = async (projectId) => {
    const token = window.localStorage.getItem("authToken");
    if (token) Api.defaults.headers.common.Authorization = token;

    const data = await Api.get(`/projects/${projectId}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  };

  const createProject = async (newProject) => {
    const token = JSON.parse(window.localStorage.getItem("authToken"));
    const userId = window.localStorage.getItem("authId");
    newProject.userId = Number(userId);
    if (token) Api.defaults.headers.authorization = `Bearer ${token}`;
    console.log(Api.defaults.headers);
    const data = await Api.post(`/projects`, newProject)
    .then((res) => {
        getAllProjects();
        return res.data;
      })
      .catch((err) => console.error(err));
    };

  const editProject = async (projectId, editedProject) => {
    const token = window.localStorage.getItem("authToken");
    if (token) Api.defaults.headers.common.Authorization = token;

    const data = await Api.patch(`/projects/${projectId}`, editedProject)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  };

  const deleteProject = async () => {
    const token = JSON.parse(window.localStorage.getItem("authToken"));
    if (token) Api.defaults.headers.authorization = `Bearer ${token}`;

    const data = await Api.delete(`/projects/${projecToDelete}`)
      .then((res) => {
        toast.success("Projeto deletado com sucesso!", {
          autoClose: 2000,
        });
        closeDropdownDelete()
        getAllProjects();
      })
      .catch((err) => {
        toast.error("Falha ao deletar projeto!", {
          autoClose: 3000,
        });
      });

    return data;
  };

  const sumPriceTotal = (valueInput) => {
    let price = 0;
    price = (valueInput * totalTime) / 3600;
    const result = Math.round(price * 100) / 100;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  };
  //console.log(valuePriceTotal);

  return (
    <ProjectsContext.Provider
      value={{
        allProjects,
        getAllProjects,
        getProject,
        createProject,
        editProject,
        deleteProject,
        setProjectToDelete,
        totalTime, 
        setTotalTime,
        valuePriceTotal,
        setValuePriceTotal,
        sumPriceTotal,

      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
