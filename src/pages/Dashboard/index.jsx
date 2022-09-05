import HeaderDashboard from "../../components/HeaderDashboard";
import { DashboardMain } from "./style";
import NewProjectContainer from "./NewProjectContainer";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListBody from "./ListBody";
import ProjectList from "./ProjectList";
import { useContext } from "react"
import { Context } from "../../providers/userContext"

function Dashboard() {
  const { navigate, token } =useContext(Context)

  if(!token) {
    setTimeout(() => {navigate("/login")}, 100)
}else {
  return (
    <>
      <HeaderDashboard username="Cronoszinho" email="cronoszinho@gmail.com" />
      <DashboardMain>
        <NewProjectContainer />

        <ProjectList>
          <ListHeader />

          <ListBody>
            <ListItem
              projectName={"Joguinho maroto"}
              startDate={"2022-03-26"}
              endDate={"2022-03-28"}
              tags={"jogo, nintendo"}
              pricePerHour={"R$ 280,00"}
              stopwatch={"02:58:07"}
            />
            <ListItem
              projectName={"Joguinho maroto"}
              startDate={"2022-03-26"}
              endDate={"2022-03-28"}
              tags={"jogo, nintendo"}
              pricePerHour={"R$ 280,00"}
              stopwatch={"02:58:07"}
            />
            <ListItem
              projectName={"Joguinho maroto"}
              startDate={"2022-03-26"}
              endDate={"2022-03-28"}
              tags={"jogo, nintendo"}
              pricePerHour={"R$ 280,00"}
              stopwatch={"02:58:07"}
            />
            <ListItem
              projectName={"Joguinho maroto"}
              startDate={"2022-03-26"}
              endDate={"2022-03-28"}
              tags={"jogo, nintendo"}
              pricePerHour={"R$ 280,00"}
              stopwatch={"02:58:07"}
            />
          </ListBody>
        </ProjectList>
      </DashboardMain>
    </>
  );
}
}

export default Dashboard;
