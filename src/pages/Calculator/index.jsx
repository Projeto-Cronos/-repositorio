import { useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../validators/calculator";
import HeaderDashboard from "../../components/HeaderDashboard";
import { MainCalculator, ContainerMain, FormCalculator, ContainerCalculator,  Result } from "./style";
import dataBase from "../../assets/dataBase/media-salarial-programadores-2022";
import { Context } from "../../providers/userContext";
import { CalculatorContext } from "../../providers/calculatorContext";
import { useContext } from "react";

const Calculator = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { calculation, result, setResult } = useContext(Context);

  const { calculate } = useContext(CalculatorContext)

  const { salary_by_brazil_uf, salary_by_languages, salary_by_level } = dataBase;

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

  const { navigate, token } = useContext(Context);

  if (!token) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  } else {
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