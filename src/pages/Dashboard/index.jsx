import HeaderDashboard from "../../components/HeaderDashboard";
import { DashboardMain, NewProjectContainer } from "./style";
import { BsCalendarDate, BsTag, BsCurrencyDollar } from "react-icons/bs";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <DashboardMain>
        <NewProjectContainer>
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
                <input type="text" placeholder="Insira o preço/hora" />
              </div>
            </div>

            <button type="submit">Start</button>
          </form>
        </NewProjectContainer>
        <div className="projectsList">
          <div className="listHeader">listHeader</div>
          <div className="listBody">projectsList</div>
        </div>
      </DashboardMain>
    </>
  );
}

export default Dashboard;
