import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem, BoxTimer } from "./style";
import TimerToCount from "./timer";
import { useContext } from "react";
import { Context } from "../../../providers/userContext";

const ListItem = ({
  projectName,
  startDate,
  endDate,
  tags,
  pricePerHour,
  stopwatch,
}) => {
  const { showDropdownDelete } = useContext(Context);
  return (
    <StyledListItem>
      <ListColumn borderColor="blue">
        <input type="text" value={projectName} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="date" value={startDate} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="date" value={endDate} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="text" value={tags} />
      </ListColumn>

      <ListColumn borderColor="blue">
        <input type="text" value={pricePerHour} />
      </ListColumn>

      {/* <ListColumn borderColor="red"> */}
      <BoxTimer className="boxTimer">
          <TimerToCount/>
        </BoxTimer>
        {/* <input type="text" value={stopwatch} /> */}
      {/* </ListColumn> */}

      <ListSmallColumn>
        <button onClick={showDropdownDelete}>
          <BsTrash />
        </button>
      </ListSmallColumn>
    </StyledListItem>
  );
};

export default ListItem;
