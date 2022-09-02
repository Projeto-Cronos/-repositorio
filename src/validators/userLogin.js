import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().required("Email obrigatória"),
  password: yup.string().required("Senha obrigatória"),
});
