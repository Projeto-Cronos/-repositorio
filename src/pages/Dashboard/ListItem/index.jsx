import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem, BoxTimer } from "./style";
import { useContext, useState } from "react";
import { Context } from "../../../providers/userContext";
import TimerToCount from "../../../components/Timer";
import { ProjectsContext } from "../../../providers/projectsContext";

const ListItem = ({
  projectId,
  projectName,
  startDate,
  endDate,
  pricePerHour,
  stopwatch,
}) => {
  const { setProjectToDelete } = useContext(ProjectsContext);
  const { showDropdownDelete } = useContext(Context);

  const [newTitle, setNewTitle] = useState(projectName);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);
  const [newPricePerHour, setNewPricePerHour] = useState(pricePerHour);
  const [newAccumulatedValue, setNewAccumulatedValue] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <StyledListItem>
      <ListColumn borderColor="blue">
        <input
          type="text"
          defaultValue={projectName}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input
          type="date"
          defaultValue={startDate}
          onChange={(event) => {
            setNewStartDate(event.target.value);
          }}
        />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input
          type="date"
          defaultValue={endDate}
          onChange={(event) => setNewEndDate(event.target.value)}
        />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input
          type="text"
          defaultValue={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(pricePerHour)}
          onChange={(event) => setNewPricePerHour(event.target.value)}
        />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input
          className="priceTotal"
          type="text"
          value={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(((counter * pricePerHour) / 3600).toFixed(2))}
          onChange={(event) => setNewAccumulatedValue(event.target.value)}
        />
      </ListColumn>

      <ListColumn borderColor="red">
        <BoxTimer className="boxTimer">
          <TimerToCount
            setCounter={setCounter}
            projectId={projectId}
            recordedTime={stopwatch}
            newTitle={newTitle}
            newStartDate={newStartDate}
            newEndDate={newEndDate}
            newPricePerHour={newPricePerHour}
            newAccumulatedValue={newAccumulatedValue}
          />
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
