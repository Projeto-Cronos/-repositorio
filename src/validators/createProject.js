import * as yup from "yup";
export const formSchema = yup.object().shape({
  title: yup.string().required("Dê um nome ao seu projeto"),
  start_date: yup.string().required("Selecione uma data de inicio"),
  price_per_hour: yup.number().required("Qual o valor que será cobrado?"),
});
