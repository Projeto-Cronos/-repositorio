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
  
  function ModalDelete() {
    const { closeDropdownDelete, dropDownDelete, deleteProject } = useContext(Context);

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
              <ButtonRed type="submit" onClick={deleteProject}>
                Excluir
              </ButtonRed>
            </DivButton>
          </Form>
        </Div>
      </Section>
    );
  }
  
  export default ModalDelete;
  