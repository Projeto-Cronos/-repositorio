import HeaderDashboard from "../../components/HeaderDashboard";
import { DashboardMain } from "./style";
import NewProjectContainer from "./NewProjectContainer";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListBody from "./ListBody";
import ProjectList from "./ProjectList";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../providers/projectsContext";
import { Context } from "../../providers/userContext";
import ModalEdit from "./Modal/ModalEdit";
import ModalDelete from "./Modal/ModalDelete";
import Lottie from "react-lottie";

function Dashboard() {
  const { navigate, token, animateState, defaultOptionsTwo } =
    useContext(Context);
  const { allProjects, getAllProjects,totalTime } = useContext(ProjectsContext);
  
  useEffect(() => {
    getAllProjects();
  }, []);
  if (!token) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  } else {
    return (
      <>
        <HeaderDashboard username="Cronoszinho" email="cronoszinho@gmail.com" />
        <DashboardMain>
          <NewProjectContainer />

          <ProjectList>
            <ListHeader />

            <ListBody>
              {allProjects.length ? (
                allProjects.map(
                  ({
                    id,
                    title,
                    start_date,
                    end_date,
                    price_per_hour, // preço por hora
                    timer,
                  }) => (
                    <ListItem
                      key={id}
                      projectId={id}
                      projectName={title}
                      startDate={start_date}
                      endDate={end_date}
                      pricePerHour={price_per_hour}
                      stopwatch={timer}
                      /* accumulatedValue={accumulatedValue} */
                    />
                  )
                )
              ) : (
                <>
                <div className="containerImg">
                <div className="img">
        <Lottie
          options={defaultOptionsTwo}
          isStopped={animateState.isStopped}
          isPaused={animateState.isPaused}
        />
      </div>
                </div>

                </>
              )}
            </ListBody>
          </ProjectList>
          <ModalEdit />
          <ModalDelete />
        </DashboardMain>
      </>
    );
  }
}

export default Dashboard;
