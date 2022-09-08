import { useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../validators/calculator";
import HeaderDashboard from "../../components/HeaderDashboard";
import {
  MainCalculator,
  ContainerMain,
  FormCalculator,
  ContainerCalculator,
  Result,
} from "./style";
import dataBase from "../../assets/dataBase/media-salarial-programadores-2022";
import { Context } from "../../providers/userContext";
import { CalculatorContext } from "../../providers/calculatorContext";
import { useContext } from "react";
import ModalEdit from "../../pages/Dashboard/Modal/ModalEdit";
import { BsExclamationCircle } from "react-icons/bs";

const Calculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { calculation, result, setResult, navigate, token } =
    useContext(Context);

  const { calculate } = useContext(CalculatorContext);

  const { salary_by_brazil_uf, salary_by_languages, salary_by_level } =
    dataBase;

  const ufValues = salary_by_brazil_uf.ufValues.map((uf) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = useId();
    return (
      <option id={id} key={id} value={uf.value}>
        {uf.uf}
      </option>
    );
  });

  const languages = salary_by_languages.languages_values.map((language) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = useId();
    return (
      <option key={id} id={id} value={language.value}>
        {language.language}
      </option>
    );
  });

  const level = salary_by_level.level_values.map((level) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = useId();
    return (
      <option key={id} value={level.value}>
        {level.level}
      </option>
    );
  });

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
                <div className="select">
                  <select {...register("language")} id="selecionar-Linguagem">
                    <option value="">
                      Selecione a linhguagem / tecnologia
                    </option>
                    {languages}
                  </select>
                  <span className="dropdown">
                    {errors.language?.message ? (
                      <>
                        <BsExclamationCircle />
                        <div class="dropdown-content">
                          <p>{errors.language?.message}</p>
                        </div>
                      </>
                    ) : null}
                  </span>
                </div>
              </div>

              <div className="box__select">
                <label htmlFor="uf">Região do país</label>
                <div className="select">
                  <select {...register("region")} id="uf">
                    <option value="">Selecione o estado</option>
                    {ufValues}
                  </select>
                  <span className="dropdown">
                    {errors.region?.message ? (
                      <>
                        <BsExclamationCircle />
                        <div class="dropdown-content">
                          <p>{errors.region?.message}</p>
                        </div>
                      </>
                    ) : null}
                  </span>
                </div>
              </div>
              <div className="box__select">
                <label htmlFor="level">Nível de senioridade</label>
                <div className="select">
                  <select {...register("level")} id="level">
                    <option value="">Selecione seu nível de senioridade</option>
                    {level}
                  </select>
                  <span className="dropdown">
                    {errors.level?.message ? (
                      <>
                        <BsExclamationCircle />
                        <div class="dropdown-content">
                          <p>{errors.level?.message}</p>
                        </div>
                      </>
                    ) : null}
                  </span>
                </div>
              </div>
              <div className="box__btn">
                {!result ? (
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
                )}
              </div>
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
                    <p className="textSecond">por hora, em média.</p>
                  </div>
                </Result>
              )}
            </FormCalculator>
          </MainCalculator>
        </ContainerMain>
        <ModalEdit />
      </ContainerCalculator>
    );
  }
};
export default Calculator;
