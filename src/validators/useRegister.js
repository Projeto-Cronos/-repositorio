import *  as  yup from "yup"

export const formSchema = yup.object().shape({
    name: yup.string()
    .required("Campo obrigatório")
    .min(3, "A senha deve ter pelo menos 3 caracteres")
    .matches(("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\\s]+$"),"O nome deve conter apenas letras."),

    email: yup.string()
    .required("Campo obrigatório")
    .email("E-mail inválido")
    .matches(("^[a-z0-9\\_.]+@[a-z]+.([a-z]+)$"),"Verifique seu e-mail"),

    password: yup.string()
    .required("Campo obrigatório")
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .max(30, "A senha deve conter no máximo 30 caracteres")
    .matches(("^(?=.*[A-Z])(?=.*[!#@$%&\\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$"),"A senha deve conter deve conter letras minúsculas e maiúsculas, números e carácteres especais(!#@$%&.)"),

    confirmPassword: yup.string()
    .required("Campo obrigatório")
    .oneOf([yup.ref('password'), null],"As senhas não correspondem"),

    image: yup.string()
    .required("Campo obrigatório"),

  });