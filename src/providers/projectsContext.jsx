import { createContext } from "react";

export const ProjectsContext = createContext({});

const ProjectsProvider = ({ children }) => {
  return <ProjectsContext.Provider>{children}</ProjectsContext.Provider>;
};

export default ProjectsProvider;
