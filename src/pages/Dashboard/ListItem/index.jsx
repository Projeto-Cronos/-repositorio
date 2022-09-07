import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem, BoxTimer } from "./style";
import TimerToCount from "../../../components/Timer";
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/projectsContext";

const ListItem = ({
  projectId,
  projectName,
  startDate,
  endDate,
  tags,
  pricePerHour,
  stopwatch,
}) => {
  const { deleteProject } = useContext(ProjectsContext);

  return (
    <StyledListItem>
      <ListColumn borderColor="blue">
        <input type="text" defaultValue={projectName} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="date" defaultValue={startDate} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="date" defaultValue={endDate} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="text" defaultValue={pricePerHour} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="text" defaultValue="calcular preço..." />
      </ListColumn>

      <ListColumn borderColor="red">
        <BoxTimer className="boxTimer">
          <TimerToCount recordedTime={stopwatch} />
        </BoxTimer>
      </ListColumn>

      <ListSmallColumn>
        <BsTrash />
      </ListSmallColumn>
    </StyledListItem>
  );
};

export default ListItem;
