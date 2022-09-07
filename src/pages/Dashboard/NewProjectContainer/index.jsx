import { BsCalendarDate, BsTag, BsCurrencyDollar } from "react-icons/bs";
import { StyledContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../../validators/createProject";
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/projectsContext";
const NewProjectContainer = () => {
  const { createProject } = useContext(ProjectsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(createProject)}>
        <input
          {...register("title")}
          type="text"
          placeholder="Nome do projeto"
        />
        <div className="dropdown">
          <span>
            Início: <BsCalendarDate />
          </span>
          <div className="dropdownContent">
            <input {...register("start_date")} type="date" />
          </div>
        </div>
        <div className="dropdown">
          <span>
            Término: <BsCalendarDate />
          </span>
          <div className="dropdownContent">
            <input type="date" />
          </div>
        </div>
        <div className="dropdown">
          <BsTag />
          <div className="dropdownContent">
            <input type="text" placeholder="Insira uma tag" />
          </div>
        </div>
        <div className="dropdown">
          <BsCurrencyDollar />
          <div className="dropdownContent">
            <input
              {...register("price_per_hour")}
              type="text"
              placeholder="Insira o valor cobrado"
            />
          </div>
        </div>
        {/* <BoxTimer className="boxTimer">
          <TimerToCount/>
        </BoxTimer> */}
        <button type="submit">Add</button>
      </form>
    </StyledContainer>
  );
};
export default NewProjectContainer;
