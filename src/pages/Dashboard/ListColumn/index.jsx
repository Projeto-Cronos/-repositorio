import { StyledListColumn } from "./style";

const ListColumn = ({ children, borderColor }) => {
  return (
    <StyledListColumn borderColor={borderColor}>{children}</StyledListColumn>
  );
};

export default ListColumn;
