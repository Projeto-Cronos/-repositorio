import {
  Section,
  Div,
  DivTop,
  Form,
  Title,
  ButtonRed,
  ButtonGrey,
  DivButton,
} from "./style";
import { useContext } from "react";
import { Context } from "../../../../providers/userContext";
import { ProjectsContext } from "../../../../providers/projectsContext";
import 'animate.css';

function ModalDelete() {
  const { closeDropdownDelete, dropDownDelete } = useContext(Context);
  const { deleteProject } = useContext(ProjectsContext);

  return (
    <Section dropdown={dropDownDelete}>
      <Div>
        <DivTop>
          <Title>Excluir Projeto</Title>
        </DivTop>
        <Form>
          <h1>Tem certeza de que deseja excluir seu projeto?</h1>
          <DivButton>
            <ButtonGrey type="button" onClick={closeDropdownDelete}>
              Cancelar
            </ButtonGrey>
            <ButtonRed type="button" onClick={() => deleteProject()}>
              Excluir
            </ButtonRed>
          </DivButton>
        </Form>
      </Div>
    </Section>
  );
}

export default ModalDelete;
