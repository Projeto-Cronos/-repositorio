import CalculatorProvider from "./calculatorContext";
import ProjectsProvider from "./projectsContext";
import ProviderUser from "./userContext";

const Providers = ({ children }) => {
  return (
    <ProviderUser>
      <ProjectsProvider>
        <CalculatorProvider>{children}</CalculatorProvider>
      </ProjectsProvider>
    </ProviderUser>
  );
};

export default Providers;
