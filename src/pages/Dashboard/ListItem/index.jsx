import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem, BoxTimer } from "./style";

import { useContext, useState } from "react";
import { Context } from "../../../providers/userContext";
import TimerToCount from "../../../components/Timer";
import { ProjectsContext } from "../../../providers/projectsContext";
import { useEffect } from "react";

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

  const [newTitle, setNewTitle] = useState(projectName);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);
  const [newPricePerHour, setNewPricePerHour] = useState(pricePerHour);
  const [newAccumulatedValue, setNewAccumulatedValue] = useState(0);
  const [counter,setCounter] = useState(0);

  const sumPriceTotal = () => {
    let price = 0;
    price = (pricePerHour * counter) / 3600;
    const result = Math.round(price * 100) / 100;
    //return 
  };

  const result = sumPriceTotal();

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
          defaultValue={pricePerHour}
          onChange={(event) => setNewPricePerHour(event.target.value)}
        />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input
          className="priceTotal"
          type="text"
          value={
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(((counter * pricePerHour) / 3600).toFixed(2))
           }
          defaultValue="calcular preço..."
          onChange={(event) => setNewAccumulatedValue(event.target.value)}
        />
      </ListColumn>
      {/* input que vai aparecer o negócio */}

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
