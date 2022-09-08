import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem, BoxTimer } from "./style";

import { useContext } from "react";
import { Context } from "../../../providers/userContext";
import TimerToCount from "../../../components/Timer";
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
  const { setProjectToDelete, valuePriceTotal } = useContext(ProjectsContext);

  const { showDropdownDelete } = useContext(Context);
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
        <input className="priceTotal" type="text" value={valuePriceTotal} defaultValue="calcular preço..." />
      </ListColumn>
      {/* input que vai aparecer o negócio */}

      <ListColumn borderColor="red">
        <BoxTimer className="boxTimer">
          <TimerToCount projectId={projectId} recordedTime={stopwatch} />
        </BoxTimer>
      </ListColumn>

      <ListSmallColumn>
        <button
          onClick={() => {
            setProjectToDelete(projectId);
            showDropdownDelete();
          }}
        >
          <BsTrash />
        </button>
      </ListSmallColumn>
    </StyledListItem>
  );
};

export default ListItem;
