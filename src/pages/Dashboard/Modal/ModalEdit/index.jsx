import {
  Section,
  Div,
  DivTop,
  Form,
  Title,
  Input,
  Label,
  ButtonBlue,
  ButtonGrey,
  DivButton,
} from "./style";
import { formSchema } from "../../../../validators/editProfile";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BsFillImageFill,
  BsExclamationCircle,
  BsFillPersonFill,
} from "react-icons/bs";
import "animate.css";

import { useContext } from "react";
import { Context } from "../../../../providers/userContext";

function ModalEdit() {
  const { closeDropdownEdit, dropDownEdit, editProfile } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <Section dropdown={dropDownEdit}>
      <Div>
        <DivTop>
          <Title>Editar Perfil</Title>
        </DivTop>
        <Form>
          <div className="containerInput">
            <Label htmlFor="text">Nome</Label>
            <div className="contentInput">
              <Input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name?.message ? (
                <button type="button" className="alert dropdown" disabled>
                  {errors.name?.message ? (
                    <>
                      <BsExclamationCircle />
                      <div class="dropdown-content">
                        <p>{errors.name?.message}</p>
                      </div>
                    </>
                  ) : null}
                </button>
              ) : (
                <button type="button" className="fixed" disabled>
                  <BsFillPersonFill />
                </button>
              )}
            </div>
          </div>
          <div className="containerInput">
            <Label htmlFor="url">Foto de perfil</Label>
            <div className="contentInput">
              <Input
                type="url"
                placeholder="Digite sua url"
                {...register("image")}
              />
              {errors.image?.message ? (
                <>
                  <button type="button" className="alert dropdown" disabled>
                    {errors.image?.message ? (
                      <>
                        <BsExclamationCircle />
                        <div class="dropdown-content">
                          <p>{errors.image?.message}</p>
                        </div>
                      </>
                    ) : null}
                  </button>
                </>
              ) : (
                <button type="button" className="fixed" disabled>
                  <BsFillImageFill />
                </button>
              )}
            </div>
          </div>
          <DivButton>
            <ButtonGrey type="button" onClick={closeDropdownEdit}>
              Cancelar
            </ButtonGrey>
            <ButtonBlue type="submit" onClick={handleSubmit(editProfile)}>
              Salvar
            </ButtonBlue>
          </DivButton>
        </Form>
      </Div>
    </Section>
  );
}

export default ModalEdit;
