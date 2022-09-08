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
        <div className="boxNameProject">
          <input
            {...register("title")}
            type="text"
            placeholder="Nome do projeto"
          />
        </div>

        <div className="dropdown labelDate">
          <div className="boxLabelDate">
            <label htmlFor="date">
              <BsCalendarDate />
            </label>
            
          </div>
          <div className="dropdownContent">
            <input id="date" className="date" {...register("start_date")} type="date" />
          </div>
        </div>
 
        <div className="dropdown valuePerHour">
          <BsCurrencyDollar />
          <div className="dropdownContent ">
            <input
              {...register("price_per_hour")}
              type="text"
              placeholder="Insira o valor cobrado"
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </StyledContainer>
  );
};
export default NewProjectContainer;
