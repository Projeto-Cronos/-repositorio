import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../validators/calculator";
import HeaderDashboard from "../../components/HeaderDashboard";
import { MainCalculator, ContainerMain, FormCalculator, ContainerCalculator, calculation, Result } from "./style";
import dataBase from "../../assets/dataBase/media-salarial-programadores-2022";
import { Context } from "../../providers/userContext";
import { useContext } from "react";
import { VscRefresh } from "react-icons/vsc";
import CauculaPorra from "./calculate";

const Calculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { salary_by_brazil_uf, salary_by_languages, salary_by_level } = dataBase;

  const {
    setValuePerMinute,
    calculation,
    setCalculation,
    result,
    setResult,
  } = useContext(Context);

  const ufValues = salary_by_brazil_uf.ufValues.map((uf) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = useId();
    return <option id={id} key={id} value={uf.value}>{uf.uf}</option>;
  });

  const languages = salary_by_languages.languages_values.map((language) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = useId();
    return <option key={id} id={id} value={language.value}>{language.language}</option>;
  });

  const level = salary_by_level.level_values.map((level) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const id = useId();
      return <option key={ id }value={level.value}>{level.level}</option>;
  })

  const calculate = (data, workedDays, hoursWorkedInDay) => {
    const { language, region, level} = data;

    const averageMonthlyValue = (Number(language) + Number(region) + Number(level)) / 2;

    workedDays = 22;

    hoursWorkedInDay = 8;

    const valuePerHour = (
      averageMonthlyValue/
      workedDays/
      hoursWorkedInDay).toFixed(2);

    setValuePerMinute(valuePerHour/60);
    setCalculation(valuePerHour);
    setResult(true);
  };

  const { navigate, token } = useContext(Context);

  if (!token) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  } else {
    // calculate
    // const calculate = (data, workedDays, hoursWorkedInDay) => {
    //     const { language, region } = data

    //     const averageMonthlyValue = ((Number(language) + Number(region))/2);

    //     workedDays = 22;

    //     hoursWorkedInDay = 8;

    //     const valuePerHour = ((averageMonthlyValue/workedDays)/hoursWorkedInDay).toFixed(2)

    //     setValuePerMinute(valuePerHour/60);
    //     setCalculation(valuePerHour);
    //     setResult(true);
    // }

    return (
      <ContainerCalculator>
        <HeaderDashboard />
        <ContainerMain>
          <MainCalculator>
            <h1>Calcule quanto vale sua hora</h1>

            <FormCalculator onSubmit={handleSubmit(calculate)}>
              <div className="box__select">
                <label htmlFor="selecionar-Linguagem">
                  Linguagem / Tecnologia utilizada
                </label>
                <select {...register("language")} id="selecionar-Linguagem">
                  <option value="">Selecione a linhguagem / tecnologia</option>
                  {languages}
                </select>
                <span>{errors.language?.message}</span>
              </div>

              <div className="box__select">
                <label htmlFor="uf">Região do país</label>
                <select {...register("region")} id="uf">
                  <option value="">Selecione o estado</option>
                  {ufValues}
                </select>
                <span>{errors.region?.message}</span>
              </div>

              <div className="box__select">
                <label htmlFor="level">Nível de senioridade</label>
                <select {...register("level")} id="level">
                  <option value="">Selecione seu nível de senioridade</option>
                  {level}
                </select>
                <span>{errors.level?.message}</span>
              </div>

              <div className="box__btn">
                {
                  !result ? (
                    <button type="submit">Calcular</button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        reset();
                        setResult(!result);
                      }}
                    >
                      Calcule novamente
                      {/* <VscRefresh/>y== */}
                    </button>
                  )
                }
              </div>
            </FormCalculator>
            {result && (
              <Result>
                <div>
                  <h2>Resultado:</h2>
                  <p>Pessoas como você cobram </p>
                  <span>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(calculation)}
                  </span>
                  <p>por hora, em média.</p>
                </div>
              </Result>
            )}
          </MainCalculator>
        </ContainerMain>
      </ContainerCalculator>
    );
  }
};
export default Calculator;
