import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "A senha deve ter pelo menos 3 caracteres")
    .matches(
      "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\\s]+$",
      "O nome deve conter apenas letras."
    ),

  image: yup.string().required("Campo obrigatório"),
});
