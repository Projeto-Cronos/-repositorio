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

  email: yup
    .string()
    .required("Campo obrigatório")
    .email("E-mail inválido")
    .matches("^[a-z0-9\\_.]+@[a-z]+.([a-z]+)$", "Verifique seu e-mail"),

  password: yup
    .string()
    .required("Campo obrigatório")
    .max(30, "Deve conter no máximo 10 dígitos")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),

  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),

  image: yup.string().required("Campo obrigatório"),
});
