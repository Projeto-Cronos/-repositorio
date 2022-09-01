import * as yup from "yup"

export const formSchema = yup.object().shape({
    
    language: yup.string()
    .required("Campo obrigatório"),

    region: yup.string()
    .required("Campo obrigatório"),

    experience: yup.string()
    .required("Campo obrigatório"),
});