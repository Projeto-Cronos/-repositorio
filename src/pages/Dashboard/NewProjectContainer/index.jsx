import { BsCalendarDate, BsTag, BsCurrencyDollar } from "react-icons/bs";
import { StyledContainer } from "./style";

const NewProjectContainer = () => {
  return (
    <StyledContainer>
      <form>
        <input type="text" placeholder="Nome do projeto" />

        <div className="dropdown">
          <span>
            Início: <BsCalendarDate />
          </span>
          <div className="dropdownContent">
            <input type="date" />
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
            <input type="text" placeholder="Insira o valor por hora" />
          </div>
        </div>

        <button type="submit">Start</button>
      </form>
    </StyledContainer>
  );
};

export default NewProjectContainer;
