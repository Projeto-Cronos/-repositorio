import ListColumn from "../ListColumn";
import ListSmallColumn from "../ListSmallColumn";
import { ListHeaderTitle, StyledListHeader } from "./style";

const ListHeader = () => {
  return (
    <StyledListHeader>
      <ListColumn>
        <ListHeaderTitle titleColor="blue">Nome do projeto</ListHeaderTitle>
      </ListColumn>

      <ListColumn>
        <ListHeaderTitle titleColor="blue">Data de criação</ListHeaderTitle>
      </ListColumn>

      <ListColumn>
        <ListHeaderTitle titleColor="blue">Data de entrega</ListHeaderTitle>
      </ListColumn>

      <ListColumn>
        <ListHeaderTitle titleColor="blue">Valor por hora</ListHeaderTitle>
      </ListColumn>

      <ListColumn>
        <ListHeaderTitle titleColor="blue">Valor acumulado</ListHeaderTitle>
      </ListColumn>

      <ListColumn>
        <ListHeaderTitle titleColor="red">Cronômetro</ListHeaderTitle>
      </ListColumn>

      <ListSmallColumn></ListSmallColumn>
    </StyledListHeader>
  );
};

export default ListHeader;
