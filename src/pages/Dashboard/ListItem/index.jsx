import { BsTrash } from "react-icons/bs";
import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { StyledListItem } from "./style";

const ListItem = ({
  projectName,
  startDate,
  endDate,
  tags,
  pricePerHour,
  stopwatch,
}) => {
  return (
    <StyledListItem>
      <ListColumn>
        <input type="text" value={projectName} />
      </ListColumn>

      <ListColumn>
        <input type="date" value={startDate} />
      </ListColumn>

      <ListColumn>
        <input type="date" value={endDate} />
      </ListColumn>

      <ListColumn>
        <input type="text" value={tags} />
      </ListColumn>

      <ListColumn>
        <input type="text" value={pricePerHour} />
      </ListColumn>

      <ListColumn>
        <input type="text" value={stopwatch} />
      </ListColumn>

      <ListSmallColumn>
        <BsTrash />
      </ListSmallColumn>
    </StyledListItem>
  );
};

export default ListItem;
