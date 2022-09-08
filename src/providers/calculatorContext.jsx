import { createContext, useContext } from "react";
import { Context } from "./userContext";

export const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  const { setValuePerMinute, setCalculation, setResult } = useContext(Context);

  const calculate = (data, workedDays, hoursWorkedInDay) => {
    const { language, region, level } = data;

    const averageMonthlyValue =
      (Number(language) + Number(region) + Number(level)) / 2;

    workedDays = 22;

    hoursWorkedInDay = 8;

    const valuePerHour = (
      averageMonthlyValue /
      workedDays /
      hoursWorkedInDay
    ).toFixed(2);

    setValuePerMinute(valuePerHour / 60);
    setCalculation(valuePerHour);
    setResult(true);
  };

  return (
    <CalculatorContext.Provider value={{ calculate }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
