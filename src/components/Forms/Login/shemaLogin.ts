import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().required("Por favor, insira seu nome!"),
    password: Yup.string().required("Por favor, insira a senha!")
});