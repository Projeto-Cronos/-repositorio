import { createContext } from "react";

export const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  return <CalculatorContext.Provider>{children}</CalculatorContext.Provider>;
};

export default CalculatorProvider;
