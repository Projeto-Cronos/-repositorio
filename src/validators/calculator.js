import * as yup from "yup";
const formSchema = yup.object().shape({
  language: yup.string().required("Campo obrigatório"),
  region: yup.string().required("Campo obrigatório"),
  level: yup.string().required("Campo obrigatório"),
});

export default formSchema;
