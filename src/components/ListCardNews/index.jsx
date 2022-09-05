import { List, ListMain } from "./style";
import CardNews from "../CardNews";
import CardNewsMain from "../CardNewsMain";

function ListCardNews() {

  return (
    <>
      <ListMain>
        <CardNewsMain />
        <List>
            <CardNews  />
        </List>
      </ListMain>
    </>
  );
}

export default ListCardNews;
